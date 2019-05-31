<template>
  <el-container>
    <el-header class="container">
      <el-row>
        <el-col :md="6" :sm="24">
          <div class="grid-content bg-purple-dark" style="height: 61px;">
            <router-link to="/">
              <img :src="imgSrc" alt="">
            </router-link>
          </div>
        </el-col>
        <el-col :md="15" :offset="3" class="nav-menu hidden-sm-and-down">
          <el-menu
            :router="true"
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            menu-trigger="hover"
            @select="handleSelect"
            background-color="#fff"
            text-color="#e7512f"
            active-text-color="#ffd04b">
            <el-menu-item index="/home">首页</el-menu-item>
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
            <el-menu-item index="/authorize">授权商家</el-menu-item>
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
      <div class="hidden-md-and-up" style="position: absolute;top:25px;left: 10px;z-index: 1001;">
        <div class="icon-bar" @click="menuDisplay()"></div>
        <el-menu
          style="margin-top: 15px;"
          v-show="isMenuDisplay"
          :unique-opened="true"
          :router="true"
          :default-active="$route.path"
          @select="menuSelect"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="/home">
            <i class="el-icon-news"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/about">
            <i class="el-icon-info"></i>
            <span slot="title">关于我们</span>
          </el-menu-item>
          <el-submenu index="brand">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span slot="title">我们的品牌</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/brand/bozita">BOZITA</el-menu-item>
              <el-menu-item index="/brand/fromm">Fromm</el-menu-item>
              <el-menu-item index="/brand/solid-gold">SOLID GOLD</el-menu-item>
              <el-menu-item index="/brand/nutrience">哈根纽翠斯</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/authorize">
            <i class="el-icon-s-shop"></i>
            <span slot="title">授权商家</span>
          </el-menu-item>
          <el-menu-item index="/verify">
            <i class="el-icon-warning"></i>
            <span slot="title">防伪查询</span>
          </el-menu-item>
          <el-submenu index="join">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span slot="title">加入我们</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/join/cooperation">商务加盟</el-menu-item>
              <el-menu-item index="/join/recruit">人事招聘</el-menu-item>
              <el-menu-item index="/join/contact">联系我们</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
    </el-header>
  </el-container>
</template>

<script>
  export default {
    name: "top-nav",
    data() {
      return {
        imgSrc: '../../static/images/logo.png',
        isCollapse: true,
        isMenuDisplay: false,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(this.$router.currentRoute)
        // console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      menuDisplay() {
        console.log(1);
        this.isMenuDisplay = !this.isMenuDisplay
      },
      menuSelect() {
        console.log(2);
        this.isMenuDisplay = false;
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

  .el-menu-vertical-demo {
    width: 200px;
    min-height: 400px;
  }

  .icon-bar {
    width: 25px;
    height: 20px;
    border-top: 2px solid #DD575C;
    border-bottom: 2px solid #DD575C;
    background-color: #DD575C;
    padding: 7px 0;
    background-clip:content-box;
  }

</style>
