<template>
  <el-container>
    <el-header class="container">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple-dark">天奇logo</div>
        </el-col>
        <el-col :span="18">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#fff"
            text-color="#e7512f"
            active-text-color="#ffd04b">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">关于我们</el-menu-item>
            <el-submenu index="3">
              <template slot="title">新闻公告</template>
              <el-menu-item index="3-1">企业公告</el-menu-item>
              <el-menu-item index="3-2">公司动态</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">我们的品牌</template>
              <el-menu-item index="4-1">1</el-menu-item>
              <el-menu-item index="4-2">2</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">授权商家</template>
              <el-menu-item index="5-1">1</el-menu-item>
              <el-menu-item index="5-2">2</el-menu-item>
            </el-submenu>
            <el-menu-item index="6">防伪查询</el-menu-item>
            <el-submenu index="7">
              <template slot="title">加入我们</template>
              <el-menu-item index="7-1">商务加盟</el-menu-item>
              <el-menu-item index="7-2">人事招聘</el-menu-item>
              <el-menu-item index="7-2">加入我们</el-menu-item>
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
        activeIndex: '1',
        activeIndex2: '1'
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

</style>
