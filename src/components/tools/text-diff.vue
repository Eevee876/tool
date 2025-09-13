<script setup>
import { ref } from "vue";
import tool_layout from "../tool_layout.vue";

const old_text = ref("hello world"); // 旧文本
const new_text = ref("hello"); // 新文本

const mode = ref("split"); // split || unified
const theme = ref("light"); // light || dark || custom

const select_mode = ref([
  { label: "split", value: "split" },
  { label: "unified", value: "unified" },
]);

const select_theme = ref([
  { label: "light", value: "light" },
  { label: "dark", value: "dark" },
  { label: "custom", value: "custom" },
]);
</script>

<template>
  <tool_layout>
    <n-flex>
      <n-input
        type="textarea"
        v-model:value="old_text"
        placeholder="旧文本"
        style="max-width: 48%"
        :autosize="{
          minRows: 6,
        }"
      />
      <n-input
        type="textarea"
        v-model:value="new_text"
        placeholder="新文本"
        style="max-width: 48%"
        :autosize="{
          minRows: 6,
        }"
      />
      <n-input-group>
        <n-input-group-label>模式：</n-input-group-label>
        <n-select
          :style="{ width: '25%' }"
          :options="select_mode"
          v-model:value="mode"
        />
        <n-input-group-label>主题：</n-input-group-label>
        <n-select
          :style="{ width: '25%' }"
          :options="select_theme"
          v-model:value="theme"
        />
      </n-input-group>
    </n-flex>
    <h2>对比结果</h2>
    <Diff
      :mode="mode"
      :theme="theme"
      :language="language"
      :prev="old_text"
      :current="new_text"
    />
  </tool_layout>
</template>

<style scoped></style>
