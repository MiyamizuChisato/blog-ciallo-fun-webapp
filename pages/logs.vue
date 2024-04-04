<script lang="ts" setup>
import EventCard from "~/unique/logs/components/EventCard.vue";

const events = [
  {
    version: 'Bocchi The Rock',
    date: '2024-03-01',
    content: [
      '网站多语言预留',
      '更新留言页面布局，新增详情展示为底部滑窗，将留言更改为一言',
    ],
  },
  {
    version: 'Kon',
    date: '2024-01-13',
    content: [
      '首页更新，移除轮播图',
      'UI视觉更新，更换边框为阴影，采用高斯模糊',
    ],
  },
  {
    version: 'I Scream',
    date: '2023-12-29',
    content: [
      '新增友邻、圈子功能',
      '优化文章详情页体验，为非移动端添加滚动入场动画',
      '优化文章列表体验，现在文章列表页在离开时，将保存滚动条位置',
    ],
  },
  {
    version: 'Date A Live',
    date: '2023-11-18',
    content: [
      '完成中国大陆域名备案',
      '开发站点完成，首次上线Beta测试',
      '上线主页、文章、留言、用户功能',
    ],
  },
  {
    version: 'Yuzu',
    date: '2023-10-10',
    content: [
      '在域名空间注册ciallo.fun',
      '提交资料到中国大陆备案管理ciallo.fun',
      '构思站点功能，前端UI设计，技术选型',
    ],
  },
]
</script>
<template>
  <div class="md:w-720px flex flex-col justify-center p-2 mx-auto">
    <div class="mx-8 log-container p-4 pb-2">
      <div class="my-10" v-for="event in events" :key="event.version">
        <EventCard :content="event.content"
                   :date="event.date" :version="event.version"/>
      </div>
    </div>
  </div>
</template>