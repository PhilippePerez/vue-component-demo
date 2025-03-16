<template>
  <div class="expansion">
    <div class="arrow">
      <IconArrowDown v-if="expanded!=='auto'" @click="expand"/>
      <IconArrowUp v-if="expanded==='auto'" @click="collapse"/>
    </div>
    <pre class="comp-code-fragment root code"
         :style="{padding: '16px',height:expanded, 'min-height':height      }">
      <code ref="codeBlock" class="vue code" v-html="code"/>
    </pre>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // Use any preferred theme
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  height: {
    type: String,
    default: '208px',
    required: false
  },
});

function highlightCode(sourceCode) {
  return hljs.highlight(sourceCode, {language: 'javascript'}).value;
}

import {ref, onMounted} from 'vue';
import IconArrowDown from "../../../widgets/vue-widgets/src/components/icons/IconArrowDown.vue";
import IconArrowUp from "../../../widgets/vue-widgets/src/components/icons/IconArrowUp.vue";


const code = ref("");
const expanded = ref(props.height);

const expand = () => {
  expanded.value = 'auto';
};
const collapse = () => {
  expanded.value = props.height;
};

const loadCode = async () => {
  try {
    const response = await fetch(props.src);
    if (response.ok) {
      let text = await response.text();
      code.value = highlightCode(text);
    } else {
      console.error('Failed to fetch the template');
    }
  } catch (error) {
    console.error('Error fetching the code:', error);
  }
};

onMounted(() => {
  loadCode();
});
</script>

<style scoped>
.arrow {
  position: absolute;
  margin-right: 8px;
  margin-top: 8px;
  background: #e0e0e0;
  color: gray;
  opacity: 0;
  transition: opacity 1s;
  pointer-events: none;
}

.expansion:hover .arrow {
  opacity: 1;
  transition: opacity 1s;
  pointer-events: initial;
}

.code {
  background: #e0e0e0;
  flex-grow: 1;
}

.expansion {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-self: stretch;
}

.root {
  display: flex;
  border-radius: 8px;
  border: 1px solid lightgray;
  overflow: auto;
  padding: 16px;
  align-self: stretch;
}

.vue {
  flex-grow: 1;
  overflow-x: hidden;
}
</style>

