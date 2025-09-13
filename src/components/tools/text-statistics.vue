<script setup>
import { ref, watch } from "vue";
import tool_layout from "../tool_layout.vue";

const source = ref(""); // 输入文本

const total = ref(0); // 总字数
const chinese = ref(0); // 中文字数
const punctuations = ref(0); // 标点(全角)
const letters = ref(0); // 字母
const numbers = ref(0); // 数字
const spaces = ref(0); // 空格
const emojis = ref(0); // Emoji表情

const emojiRegex =
  /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F780}-\u{1F7FF}]|[\u{1F800}-\u{1F8FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA6F}]|[\u{1FA70}-\u{1FAFF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{2300}-\u{23FF}]|[\u{2B50}]|[\u{2B55}]|[\u{2934}-\u{2935}]|[\u{2B05}-\u{2B07}]|[\u{2B1B}-\u{2B1C}]|[\u{2B50}]|[\u{2B55}]|[\u{1F004}]|[\u{1F0CF}]|[\u{1F18E}]|[\u{1F191}-\u{1F19A}]|[\u{1F1E6}-\u{1F1FF}]|[\u{1F201}]|[\u{1F21A}]|[\u{1F22F}]|[\u{1F232}-\u{1F23A}]|[\u{1F236}-\u{1F237}]|[\u{1F238}-\u{1F23A}]|[\u{1F250}-\u{1F251}]|[\u{1F300}-\u{1F320}]|[\u{1F32D}-\u{1F335}]|[\u{1F337}-\u{1F37C}]|[\u{1F37E}-\u{1F393}]|[\u{1F3A0}-\u{1F3CA}]|[\u{1F3CF}-\u{1F3D3}]|[\u{1F3E0}-\u{1F3F0}]|[\u{1F3F4}]|[\u{1F3F8}-\u{1F427}]|[\u{1F429}-\u{1F43E}]|[\u{1F440}]|[\u{1F442}-\u{1F4FC}]|[\u{1F4FF}-\u{1F53D}]|[\u{1F54B}-\u{1F54E}]|[\u{1F550}-\u{1F567}]|[\u{1F57A}]|[\u{1F595}-\u{1F596}]|[\u{1F5A4}]|[\u{1F5FB}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F910}-\u{1F9FF}]|[\u{1FA60}-\u{1FA6D}]|[\u{1FA70}-\u{1FAFF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{2B50}]|[\u{2B55}]|[\u{2934}-\u{2935}]|[\u{2B05}-\u{2B07}]|[\u{2B1B}-\u{2B1C}]|[\u{2B50}]|[\u{2B55}]|[\u{1F004}]|[\u{1F0CF}]|[\u{1F18E}]|[\u{1F191}-\u{1F19A}]|[\u{1F1E6}-\u{1F1FF}]|[\u{1F201}]|[\u{1F21A}]|[\u{1F22F}]|[\u{1F232}-\u{1F23A}]|[\u{1F236}-\u{1F237}]|[\u{1F238}-\u{1F23A}]|[\u{1F250}-\u{1F251}]|[\u{1F300}-\u{1F320}]|[\u{1F32D}-\u{1F335}]|[\u{1F337}-\u{1F37C}]|[\u{1F37E}-\u{1F393}]|[\u{1F3A0}-\u{1F3CA}]|[\u{1F3CF}-\u{1F3D3}]|[\u{1F3E0}-\u{1F3F0}]|[\u{1F3F4}]|[\u{1F3F8}-\u{1F427}]|[\u{1F429}-\u{1F43E}]|[\u{1F440}]|[\u{1F442}-\u{1F4FC}]|[\u{1F4FF}-\u{1F53D}]|[\u{1F54B}-\u{1F54E}]|[\u{1F550}-\u{1F567}]|[\u{1F57A}]|[\u{1F595}-\u{1F596}]|[\u{1F5A4}]|[\u{1F5FB}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F910}-\u{1F9FF}]|[\u{1FA60}-\u{1FA6D}]|[\u{1FA70}-\u{1FAFF}]/u;

watch(
  () => source.value,
  (value) => {
    if (value) {
      spaces.value = value.match(/\s/g)?.length || 0;
      total.value = value.length - spaces.value;
      chinese.value = value.match(/[\u4e00-\u9fa5]/g)?.length || 0;
      punctuations.value =
        value.match(/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f]/g)
          ?.length || 0;
      letters.value = value.match(/[a-zA-Z]/g)?.length || 0;
      numbers.value = value.match(/[0-9]/g)?.length || 0;
      emojis.value = value.match(emojiRegex)?.length || 0;
    } else {
      total.value = 0;
      chinese.value = 0;
      punctuations.value = 0;
      letters.value = 0;
      numbers.value = 0;
      emojis.value = 0;
      spaces.value = 0;
    }
  },
  {
    immediate: true,
  }
);
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
    <n-flex justify="space-between">
      <n-statistic label="总字数"> {{ total }}</n-statistic>
      <n-statistic label="中文字数"> {{ chinese }} </n-statistic>
      <n-statistic label="标点(全角)"> {{ punctuations }} </n-statistic>
      <n-statistic label="字母"> {{ letters }} </n-statistic>
      <n-statistic label="数字"> {{ numbers }} </n-statistic>
      <n-statistic label="Emoji表情"> {{ emojis }} </n-statistic>
    </n-flex>
    <n-divider />
    <div class="detail">
      <p>统计字符时，中文、标点、Emoji表情等符号也会统计在内，但是总字数不包括空格。</p>
      <p>
        emoji表情统计使用正则表达式，可能存在误判，请谅解。并且emoji
        表情字符长度不等。
      </p>
    </div>
  </tool_layout>
</template>

<style scoped></style>
