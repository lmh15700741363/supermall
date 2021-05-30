<template>
  <div id="home">
    <NavBar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "network/home"; // 用于获取接口数据

export default {
  components: {
    NavBar,
  },

  data() {
    return {
      banners: [],
      recommends: [],
    };
  },

  created() {
    // 1. 请求多个数据
    getHomeMultidata().then((res) => {
      // console.log(res);
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>