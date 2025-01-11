export const sort_rows = (array, sort) => {
    const map = new Map(Object.entries(sort));
    let criteria = [];
    for (let k of map.keys()) {
        if (map.get(k).asc === undefined || map.get(k) === null) {
            continue;
        }
        criteria.push({path: k, ...map.get(k)});
    }
    criteria = criteria.sort((a, b) => {
        return a['rank'] - b['rank'];
    });

    return array.sort((a, b) => {
        for (const criterion of criteria) {
            const cmp = (toString(a[criterion.path]).localeCompare(toString(b[criterion.path]))) * (criterion.asc === null ? 0 : (criterion.asc ? 1 : -1));
            if (cmp !== 0) {
                return cmp;
            }
        }
        return 0;
    });
}

const toString = (value) => {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return '' + value;
}

const filter_rows = (array, filter) => {
    const map = new Map(Object.entries(filter));
    return array.filter((row) => {
        for (const key of map.keys()) {
            let userInput = map.get(key);
            if (userInput === '') {
                continue;
            }
            if (toString(row[key]).indexOf(userInput) === -1) {
                return false;
            }
        }
        return true;
    });
}

export const listUsers = (query) => {
    const columns = [
        {'label': 'Id', 'path': 'id', 'width': '100px'}
        , {'label': 'Full Name', 'path': 'full_name', 'width': '100px'}
        , {'label': 'E-Mail', 'path': 'email', 'width': '100px'}
        , {'label': '', 'path': '@', 'width': '25px'}
    ]
    const rows = [
        {id: 1, full_name: 'John Doe', email: 'john.doe@acme.com'},
        {id: 2, full_name: 'Mark Doe', email: 'mark.doe@acme.com'},
        {id: 3, full_name: 'Elon White', email: 'elon.white@acme.com'},
        {id: 4, full_name: 'Donald Evan', email: 'donald.evan@acme.com'},
        {id: 5, full_name: 'Suzy Smith', email: 'suzy.smith@acme.com'},
    ];

    if (query.initialize) {
        query = {
            columns: columns,
            filter: {id: '', full_name: '', email: ''},
            sort: {id: {}, full_name: {asc: false, rank: 0}},
            page: null
        };
    } else {
        query.sort = query.sort ? query.sort : {};
        query.filter = query.filter ? query.filter : {};
    }

    return {
        'query': {...query, columns: columns},
        'rows': sort_rows(filter_rows([...rows], query.filter), query.sort)
    };
}