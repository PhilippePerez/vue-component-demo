<template>
  <DemoTemplate align-y="start">
    <CodeFragment src="/code/GridDemo.txt"/>
    <DataGrid :content='listUsers' :pagination='30' :render-cell="renderCell"/>
    <DataGrid :content='listUsers' :pagination='30' :render-cell="renderCell" zebra/>
  </DemoTemplate>
</template>

<script setup>
import {Button, DataGrid, IconDelete, IconEdit} from "vue-component-toolkit/dist/vue-component-toolkit.js";
import {listUsers} from "../components/grid/mock_grid_service.js";
import {h} from "vue";
import CodeFragment from "../components/CodeFragment.vue";
import DemoTemplate from "../DemoTemplate.vue";

const renderCell = (column, value) => {
  if (column.path === '@') {
    const deleteButton = h(Button, {
      icon: IconDelete, style: {'align-self': 'end'}, onClick: () => {
      }
    });
    const editButton = h(Button, {
      icon: IconEdit, style: {'align-self': 'end'}, onClick: () => {
      }
    });
    return h('div', {class: 'flex gap-2', style: {'justify-content': 'end'}}, [editButton, deleteButton]);
  }
  return null;
}

</script>
