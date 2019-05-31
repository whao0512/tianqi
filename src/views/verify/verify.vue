<template>
  <div>
    <div class="sectionWrapper img-patter" style="margin-bottom: 100px">
      <div class="container">
        <div class="row">
          <div class="cell-6 fx animated fadeInLeft" data-animate="fadeInLeft">
            <h3 class="block-head">查询说明</h3>
            <p>
              ①
              <span>刮开覆盖层，</span>扫描二维码，<span>即可验证真伪</span>
            </p>
            <p></p>
          </div>
          <div class="cell-6 fx animated fadeInLeft" data-animate="fadeInRight">
            <h3 class="block-head">防伪查询</h3>
            <div class="contact-form padd-bottom-20">
              <form action="" id="hire-form">
                <div class="form-input">
                  <input v-model="fwCode" id="securityCodeField" type="text" placeholder="正确输入防伪码即可查询！" required="">
                </div>
                <div>
                  <input @click="search()" type="button" id="securityCodeSubmitButton" class="btn btn-small main-bg" value="查询">
                </div>
              </form>
            </div>
            <div id="securityCodeLengthFieldError" class="box error-box fx animated fadeInLeft"
                 data-animate="fadeInLeft" style="display: none;">
              <p id="securityCodeReturnError">* 正确输入防伪码即可查询！</p>
            </div>
            <div id="securityCodeReturn" class="box success-box fx animated fadeInRight" data-animate="fadeInRight"
                 style="display: none;">
              <p id="securityCodeReturnInfo"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "verify",
    data: function () {
      return {
        fwCode: '',
      }
    },
    methods: {
      search: function() {
        if (!this.fwCode) {
          $('#securityCodeReturn').css('display', 'none');
          $('#securityCodeLengthFieldError').css('display', 'block');
          return;
        } else {
          if (this.fwCode.length < 10) {
            this.$message('请正确输入防伪码');
            return;
          }

          $('#securityCodeLengthFieldError').css('display', 'none');
          $.ajax({
            type:"GET",
            url:'http://qm.qmt315.com/fwqueryjson.ashx',
            dataType:"jsonp",
            async:false,
            data:{fwcode: this.fwCode},  //防伪码
            jsonp:"callback",
            success:function(data){
              $('#securityCodeReturn').css('display', 'block');
              // console.log(this.queryResult)
              //    alert(data.CodeState);  //CodeState 为查询状况：1 正确; 2 过期 ; 3 重复 ;   4 作废; 5 错误 ;6 过期
              //     alert(data.QueryResult) ;   //QueryResult 查询结果

              console.log(data);
              document.getElementById('securityCodeReturnInfo').innerHTML = data.QueryResult;
              // setTimeout(btnEnabled, 2000);//防止重复点击
            }
          });
        }

      }
    }
  }
</script>

<style scoped>

</style>
