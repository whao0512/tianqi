<template>
  <el-container>
    <el-header class="container">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple-dark" style="height: 61px;">
            <router-link to="/">
              <img :src="imgSrc" alt="">
            </router-link>
          </div>
        </el-col>
        <el-col :span="15" :offset="3">
          <el-menu
            :router="true"
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#fff"
            text-color="#e7512f"
            active-text-color="#ffd04b">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/about">关于我们</el-menu-item>
            <!--<el-submenu index="3">-->
              <!--<template slot="title">新闻公告</template>-->
              <!--<el-menu-item index="3-1"><router-link to="/">企业公告</router-link></el-menu-item>-->
              <!--<el-menu-item index="3-2"><router-link to="/">公司动态</router-link></el-menu-item>-->
            <!--</el-submenu>-->
            <el-submenu index="brand">
              <template slot="title">我们的品牌</template>
              <el-menu-item index="/brand/bozita">BOZITA</el-menu-item>
              <el-menu-item index="/brand/fromm">Fromm</el-menu-item>
              <el-menu-item index="/brand/solid-gold">SOLID GOLD</el-menu-item>
              <el-menu-item index="/brand/nutrience">哈根纽翠斯</el-menu-item>
            </el-submenu>
            <!--<el-submenu index="5">-->
              <!--<template slot="title">授权商家</template>-->
              <!--<el-menu-item index="5-1"><router-link to="/">1</router-link></el-menu-item>-->
              <!--<el-menu-item index="5-2"><router-link to="/">2</router-link></el-menu-item>-->
            <!--</el-submenu>-->
            <el-menu-item index="/verify">防伪查询</el-menu-item>
            <el-submenu index="join">
              <template slot="title">加入我们</template>
              <el-menu-item index="/join/cooperation">商务加盟</el-menu-item>
              <el-menu-item index="/join/recruit">人事招聘</el-menu-item>
              <el-menu-item index="/join/contact">联系我们</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script>
  export default {
    name: "top-nav",
    data() {
      return {
        activeIndex: '/',
        imgSrc: '../../static/images/logo.png'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-menu--horizontal>.el-menu-item a {
    display: inline-block;
    width: 100%;
  }

  .el-menu-item {
    /*padding: 0 15px;*/
  }
</style>
