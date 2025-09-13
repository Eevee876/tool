<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const toolName = ref(route.name);
</script>

<template>
  <div id="content">
    <n-flex vertical>
      <h2>{{ toolName }}</h2>
      <n-breadcrumb>
        <n-breadcrumb-item>
          <router-link to="/">首页</router-link>
        </n-breadcrumb-item>
        <n-breadcrumb-item> {{ toolName }} </n-breadcrumb-item>
      </n-breadcrumb>
      <slot />
    </n-flex>
    <n-back-top  />
  </div>
</template>

<style scoped>
#content {
  width: 70%;
  margin: 0 auto;
  margin-bottom: 20px;
}
@media screen and (max-width: 768px) {
  #content {
    width: 95%;
  }
}
</style>
