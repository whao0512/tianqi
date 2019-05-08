<template>
  <div class="footer-bottom">
    <div class="container">
      <el-row>
        <el-col :span="24" class="copyrights-center cell-12">

          Copyright © 2014-2019 FBI Pet Incorporated Limited(HK)
          <ul class="footer-menu-center">
            <li><a href="">首页</a></li>
            <li><a href="">关于我们</a></li>
            <li><a href="">联络我们</a></li>
            <li><a href="">防伪查询</a></li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "button-nav",
    }
</script>

<style type="text/css" lang="scss" scoped>
  .copyrights-center {
    text-align: center;
  }
  .footer-bottom {
    overflow: auto;
    padding: 15px 0;
    border-top: 1px #363636 solid;
    background: #1D1D1D;
  }
  .footer-menu-center {
    padding-top: 10px;
    padding-bottom: 10px;
    white-space: nowrap;
    font-size: 11px;
    li {
      display: inline-block;
      margin: 0 5px;
      a {
        color: #777;
        transition: all linear 300ms;
      }
    }
  }
</style>
