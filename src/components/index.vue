<script setup>
import { onMounted, ref } from "vue";
import { constantRoutes } from "../router";
import { useRouter } from "vue-router";

const list = ref(new Map());
const router = useRouter();

const getRouterList = () => {
  // 不隐藏的路由，按照分类分组
  for (let i = 0; i < constantRoutes.length; i++) {
    const item = constantRoutes[i];
    if (item.meta?.hidden === false) {
      const group = item.meta.group || "其他";
      if (!list.value.has(group)) {
        let arr = [];
        arr.push(item);
        list.value.set(group, arr);
      } else {
        let arr = list.value.get(group);
        arr.push(item);
        list.value.set(group, arr);
      }
    }
  }
};

const goToTool = (item) => {
  router.push(item.path);
};

onMounted(() => {
  getRouterList();
});
</script>

<template>
  <div id="list">
    <div id="group" v-for="[k, v] in list" :key="k">
      <n-gradient-text
        :gradient="{
          deg: 180,
          from: 'rgb(85, 85, 85)',
          to: 'rgb(47, 170, 170)',
        }"
      >
        <h2>{{ k }}</h2>
      </n-gradient-text>
      <n-flex>
        <n-card
          v-for="item in v"
          :key="item.path"
          :title="item.name"
          hoverable
          @click="goToTool(item)"
        >
          <template #header-extra>
            <n-icon :component="item.icon" :size="30" />
          </template>
          {{ item.meta.description }}
        </n-card>
      </n-flex>
    </div>
  </div>
</template>

<style scoped>
.n-card {
  max-width: 250px;
  max-height: 150px;
  border-radius: 10px;
}
#list {
  width: 70%;
  margin: 0 auto;
  margin-top: 20px;
}

footer {
  text-align: center;
}

@media screen and (max-width: 768px) {
  #list,
  footer {
    width: 100%;
  }

  .n-card {
    max-width: 100%;
    max-height: 150px;
    margin-bottom: 10px;
  }
}
@media screen and (max-width: 1440px) {
  #list,
  footer {
    width: 90%;
  }

  .n-card {
    margin-bottom: 10px;
  }
}
</style>
