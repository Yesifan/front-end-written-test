<template>
  <div class="banner">
    <ul class="card" :style="'left:0px'">
      <li v-for="(item, index) in list" :key="index">
        <div :style="'background-color:' + item.color">{{ item.name }}</div>
      </li>
    </ul>
    <ul class="hd">
      <li v-for="(item, index) in list" :key="index"/>
    </ul>
    <a href="" class="left">◀️</a>
    <a href="" class="right">▶️</a>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data: function () {
    return {
      list: [
        { name: "苹果", color: "red" },
        { name: "香蕉", color: "yellow" },
        { name: "哈密瓜", color: "lime" },
        { name: "葡萄", color: "purple" },
      ],
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  width: 600px;
  height: 350px;
  margin: 20px auto;
}
</style>