import { createRouter } from "vue-router"
import { createWebHistory, createWebHashHistory } from "vue-router"
import { FileText, Ad2, AlignJustified, AspectRatio, BrandSublimeText, Alarm } from "@vicons/tabler";

export const constantRoutes = [
  {
    path: "/403",
    component: () => import("@/components/error-page/403.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/404",
    component: () => import("@/components/error-page/404.vue"),
    meta: {
      hidden: true
    },
    alias: "/:pathMatch(.*)*"
  },
  {
    path: "/",
    component: () => import("@/components/index.vue"),
    name: "index",
    meta: {
      hidden: true
    },
  },
  {
    path: "/Simplified2Traditional",
    component: () => import("@/components/tools/Simplified2Traditional.vue"),
    name: "简体转繁体",
    icon: Ad2,
    meta: {
      hidden: false,
      description: "简体繁体互转工具",
      group: "编辑工具"
    },
  },
  {
    path: "/pin-yin",
    component: () => import("@/components/tools/pin-yin.vue"),
    name: "中文转拼音",
    icon: AlignJustified,
    meta: {
      hidden: false,
      description: "将汉字转换为中文拼音，支持显示声调，常见多音字智能转换",
      group: "编辑工具"
    },
  },
  {
    path: "/text-statistics",
    component: () => import("@/components/tools/text-statistics.vue"),
    name: "字数统计",
    icon: FileText,
    meta: {
      hidden: false,
      description: "统计字数，中文，英文，数字，标点符号，Emoji等数量",
      group: "编辑工具"
    },
  },
  {
    path: "/regex",
    component: () => import("@/components/tools/regex-test.vue"),
    name: "正则表达式测试工具",
    icon: AspectRatio,
    meta: {
      hidden: false,
      description: "正则表达式测试工具，可快速测试正则表达式是否正确，还包含常用正则表达式示例",
      group: "编程工具"
    },
  },
  {
    path: "/text-diff",
    component: () => import("@/components/tools/text-diff.vue"),
    name: "文本比对工具",
    icon: BrandSublimeText,
    meta: {
      hidden: false,
      description: "文本比对工具，支持文本差异对比，支持多种格式文本对比",
      group: "编程工具"
    },
  }
];

/** 路由模式 */
const history =
  import.meta.env.VITE_ROUTER_HISTORY === "hash"
    ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH)
    : createWebHistory(import.meta.env.VITE_PUBLIC_PATH)

const router = createRouter({
  history,
  routes: constantRoutes
});

export default router
