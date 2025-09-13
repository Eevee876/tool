<script setup>
import { ref, watch } from "vue";
import useClipboard from "vue-clipboard3";
import { useMessage } from "naive-ui";
import * as OpenCC from "opencc-js";
import tool_layout from "../tool_layout.vue";

const source = ref(""); // 输入文本
const target = ref(""); // 结果文本
// 简体转繁体
const s2t_converter = OpenCC.Converter({ from: "cn", to: "t" });

const s2t = () => {
  target.value = s2t_converter(source.value);
};

// 繁体转简体
const t2s_converter = OpenCC.Converter({ from: "t", to: "cn" });

const t2s = () => {
  target.value = t2s_converter(source.value);
};

watch(source, (newVal) => {
  if (newVal === "") {
    target.value = "";
  }
});

/** 剪贴板复制 */
const { toClipboard } = useClipboard();
const message = useMessage();
const copy = async () => {
  try {
    await toClipboard(target.value);
    message.success("复制成功");
  } catch (e) {
    message.error("复制失败");
  }
};
</script>

<template>
  <tool_layout>
    <n-input
      type="textarea"
      v-model:value="source"
      placeholder="请输入文本"
      :autosize="{
        minRows: 6,
      }"
    />
    <n-flex>
      <n-button type="success" @click="s2t"> 简体转繁体 </n-button>
      <n-button type="error" @click="t2s"> 繁体转简体 </n-button>
      <n-button type="info" @click="copy"> 复制 </n-button>
    </n-flex>
    <n-input
      type="textarea"
      v-model:value="target"
      placeholder="结果显示区"
      :autosize="{
        minRows: 6,
      }"
    />
    <n-divider />
    <div class="detail">
      <p>支持简体到繁体的转换，繁体到简体的转换。</p>
      <p>使用了开源的 OpenCC 项目，支持多种语言的转换。</p>
      <p>
        项目地址：
        <a href="https://github.com/BYVoid/OpenCC" target="_blank">
          <n-text type="info"> OpenCC </n-text>
        </a>
      </p>
      <p>适配 Vue3 版本的 Opencc 项目：</p>
      <p>
        项目地址：
        <a href="https://github.com/nk2028/opencc-js" target="_blank">
          <n-text type="info"> OpenCC-JS </n-text>
        </a>
      </p>
    </div>
  </tool_layout>
</template>

<style scoped>
</style>
