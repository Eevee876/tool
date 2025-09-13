<script setup>
import { computed, ref } from "vue";
import tool_layout from "../tool_layout.vue";
import { BrandTelegram } from "@vicons/tabler";

const pattern = ref("");
const test_case = ref(`下面是一些用例：
demo@qq.com
kanglanlan@vip.qq.com
test@gmail.com
127.0.0.1
http://tool.kanglanlan.fun
https://tool.kanglanlan.fun
123456789012345
16:09:22
结尾`);

// 常用正则表达式
const common_patterns = [
  {
    name: "邮箱",
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
  },
  {
    name: "手机号",
    pattern: "1[3-9]\\d{9}",
  },
  {
    name: "IP地址",
    pattern:
      "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
  },
  {
    name: "网址",
    pattern: "(?:http(s)?:\\/\\/)?([\\w-]+\\.)+[\\w-]+[\\w-./?%&=]*",
  },
  {
    name: "数字",
    pattern: "\\d+",
  },
  {
    name: "字母",
    pattern: "[a-zA-Z]+",
  },
  {
    name: "中文",
    pattern: "[\\u4e00-\\u9fa5]+",
  },
  {
    name: "日期时间-时分秒",
    pattern: "([01]?\\d|2[0-3]):[0-5]?\\d:[0-5]?\\d",
  },
];

// 模式
const global = ref(true);
const case_insensitive = ref(false);
const multi_line = ref(false);
const dot_all = ref(true);

// 计算结果
const results = computed(() => {
  let flags = "d";
  if (global.value) {
    flags += "g";
  }
  if (case_insensitive.value) {
    flags += "i";
  }
  if (multi_line.value) {
    flags += "m";
  }
  if (dot_all.value) {
    flags += "s";
  }
  try {
    return match_regex(pattern.value, test_case.value, flags);
  } catch (e) {
    return [];
  }
});

// 设置模式
const setPattern = (p) => {
  
  pattern.value = p.trim();
};

// 匹配正则表达式
const match_regex = (regex, text, flags) => {
  let lastIndex = -1;
  const re = new RegExp(regex, flags);
  const results = [];
  let match = re.exec(text);
  while (match !== null) {
    if (re.lastIndex === lastIndex || match[0] === "") {
      break;
    }
    results.push({
      index: match.index,
      value: match[0],
    });
    lastIndex = re.lastIndex;
    match = re.exec(text);
  }
  return results;
};
</script>

<template>
  <tool_layout>
    <div class="options">
      <n-space>
        <n-checkbox v-model:checked="global"> 全局搜索(g) </n-checkbox>
        <n-checkbox v-model:checked="case_insensitive">
          忽略大小写(i)
        </n-checkbox>
        <n-checkbox v-model:checked="multi_line"> 多行模式(m) </n-checkbox>
        <n-checkbox v-model:checked="dot_all"> 允许点匹配换行符(s) </n-checkbox>
      </n-space>
    </div>
    <n-input
      type="textarea"
      v-model:value="pattern"
      placeholder="正则表达式"
      :autosize="{
        minRows: 2,
      }"
    />
    <p>测试用例</p>
    <n-input
      type="textarea"
      v-model:value="test_case"
      placeholder="测试用例"
      :autosize="{
        minRows: 6,
        maxRows: 10,
      }"
    />
    <p>共找到 {{ results.length }} 个匹配项</p>
    <n-table v-if="results?.length > 0">
      <thead>
        <tr>
          <th scope="col">索引</th>
          <th scope="col">值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="match of results" :key="match.index">
          <td>{{ match.index }}</td>
          <td>{{ match.value }}</td>
        </tr>
      </tbody>
    </n-table>
    <n-alert title="未匹配到任何结果" type="default" v-else>
      <template #icon>
        <n-icon>
          <BrandTelegram />
        </n-icon>
      </template>
    </n-alert>
    <n-divider />
    <div class="detail">
      <p>常用正则表达式：</p>
      <n-space>
        <n-button
          v-for="p of common_patterns"
          :key="p.name"
          @click="setPattern(p.pattern)"
          type="primary"
          ghost
        >
          {{ p.name }}
        </n-button>
      </n-space>
      <p>
        正则表达式语法参考：
        <n-button
          text
          tag="a"
          href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions"
          target="_blank"
          type="primary"
        >
          MDN文档
        </n-button>
      </p>
    </div>
  </tool_layout>
</template>

<style scoped>
.options {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
