<template>
  <div id="nav">
    <TabBar>
      <TabBarItem path="/home">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/home.svg" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/home_active.svg" alt />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/category">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/category.svg" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/category_active.svg" alt />
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/cart">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/category.svg" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/cart_active.svg" alt />
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/profile">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/category.svg" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt />
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/Tabbar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";

export default {
  name: "APP",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import "~assets/css/base.css";
</style>
