<script setup>
import { ref, watch } from "vue";
import useClipboard from "vue-clipboard3";
import { useMessage } from "naive-ui";
import { pinyin, html } from "pinyin-pro";
import tool_layout from "../tool_layout.vue";

const source = ref(""); // 输入文本
const target = ref(""); // 结果文本

const options = ref({
  toneType: "symbol",
  surname: "off",
  v: false,
  separator: " ",
  nonZh: "spaced",
});

const toneTypes = [
  {
    label: "有声调",
    value: "symbol",
  },
  {
    label: "无声调",
    value: "none",
  },
  {
    label: "声调数字",
    value: "num",
  },
];
const nonZhOptions = [
  {
    label: "空格分割",
    value: "spaced",
  },
  {
    label: "移除非汉字字符串",
    value: "removed",
  },
  {
    label: "非汉字字符串之间紧凑输出",
    value: "consecutive",
  },
];

const convert = () => {
  target.value = pinyin(source.value, options.value);
};

const convertHtml = () => {
  target.value = html(source.value, options.value);
};

watch(source, (newVal) => {
  if (newVal === "") {
    target.value = "";
  }
});

const handleUpdateValue = (value) => {
  options.value.surname = value;
};

// ü 转换为 v
const u2v = (value) => {
  options.value.v = value;
};

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
    <n-form
      label-placement="left"
      label-width="auto"
      :style="{
        maxWidth: '640px',
      }"
    >
      <n-form-item label="声调类型">
        <n-select v-model:value="options.toneType" :options="toneTypes" />
      </n-form-item>
      <n-form-item label="非汉字字符处理">
        <n-select v-model:value="options.nonZh" :options="nonZhOptions" />
      </n-form-item>
      <n-form-item label="分隔符">
        <n-input
          v-model:value="options.separator"
          type="text"
          placeholder="分隔符,默认是空格"
        />
      </n-form-item>
    </n-form>
    <n-form label-placement="left" inline :label-width="100">
      <n-form-item label="开启姓氏模式">
        <n-switch
          :round="false"
          checked-value="head"
          unchecked-value="off"
          @update:value="handleUpdateValue"
        />
      </n-form-item>
      <n-form-item label="ü 转换为 v">
        <n-switch :round="false" @update:value="u2v" />
      </n-form-item>
    </n-form>

    <n-flex>
      <n-button type="success" @click="convert"> 转换成文字 </n-button>
      <n-button type="warning" @click="convertHtml"> 转换成html </n-button>
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
      <p>
        汉字转拼音工具，支持在线将输入的中文字符转换为拼音。转换的拼音支持多音字智能检测。
      </p>
      <p>
        项目地址：
        <a href="https://pinyin-pro.cn/use/pinyin.html" target="_blank">
          <n-text type="info"> pin-yin pro </n-text>
        </a>
      </p>
    </div>
  </tool_layout>
</template>

<style scoped></style>
