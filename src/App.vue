<script setup>
import {
  NLoadingBarProvider,
  NNotificationProvider,
  NMessageProvider,
} from "naive-ui";
import { dateZhCN, zhCN } from "naive-ui";
</script>

<template>
  <div id="app">
    <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
      <n-loading-bar-provider>
        <n-notification-provider>
          <n-message-provider>
            <router-view></router-view>
          </n-message-provider>
        </n-notification-provider>
      </n-loading-bar-provider>
    </n-config-provider>
  </div>
</template>

<style scoped></style>
