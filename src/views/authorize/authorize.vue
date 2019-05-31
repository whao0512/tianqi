<template>
  <div class="sectionWrapper">
    <div class="padd-bottom-40">
      <div class="container">
        <div class="row">
          <div class="cell-4" style="margin-top: 51px;">
            <div class="left fx animated fadeInLeft" data-animate="fadeInLeft" data-animation-delay="700"
                 style="animation-delay: 700ms;">
              <img style="max-width: 100%;" :src="imgUrl">
            </div>
          </div>
          <div class="cell-8">
            <h3 class="block-head"><span>天奇贸易官方授權如下商家經銷BOZITA優質產品</span></h3>
            <div class="padd-bottom-20">
              <div v-for="item in authorizeList" id="step5" class="cell-4 fx padd-bottom-10 animated fadeInLeft" data-animate="fadeInLeft">
                <a target="_blank" :href="item.url" class="wholesalers-list">
                  {{item.name}} </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "authorize",
    data() {
      return {
        imgUrl: '../../static/images/BOZITA/BOZITA-authorize.jpg',
        authorizeList: [
          {
            name: '木木宠物',
            url: 'https://shop104378659.taobao.com'
          },
          {
            name: '猫肉肉 NEKORURU',
            url: 'http://shop101656880.taobao.com'
          },
          {
            name: '亚当猫咪宠物乐园',
            url: 'https://ydcat.taobao.com'
          },
          {
            name: 'Toto宠物馆 ',
            url: 'https://shop462115827.taobao.com'
          },
          {
            name: '糖罐罐的猫',
            url: 'https://shop113748444.taobao.com'
          },
          {
            name: '答案宠物',
            url: 'https://answer03.taobao.com'
          },
          {
            name: '大兴宠物',
            url: 'http://new-pet.taobao.com'
          },
          {
            name: '猫咪老友',
            url: 'https://Cjcat.taobao.com'
          },
          {
            name: '好多猫生活馆 ',
            url: 'https://haoduocat.taobao.com'
          },
          {
            name: '猫头宠物用品配送中心',
            url: 'www.maotouchongwu.taobao.com'
          },
          {
            name: '毛猴子宠物店',
            url: 'https://shop108361393.taobao.com'
          },
          {
            name: '呼噜猫猫咪主题宠物店 ',
            url: 'https://hulumao.taobao.com'
          },
          {
            name: '胖团子Petshop',
            url: 'https://shop110416955.taobao.com'
          },
          {
            name: '包子铺猫舍',
            url: 'https://shop150131251.taobao.com'
          },
          {
            name: '大胖商店',
            url: 'https://shop314678917.taobao.com'
          },
          {
            name: '萌宠儿世界观',
            url: 'https://mcepet.taobao.com'
          },
          {
            name: '四海宠物',
            url: 'https://shop406526259.taobao.com'
          },
          {
            name: '兴宠宠物 ',
            url: 'https://shop121904753.taobao.com'
          },
          {
            name: '妙宠PETS ',
            url: 'https://shop200997750.taobao.com'
          },
          {
            name: 'box猫宠 仰望星空  ',
            url: 'https://shop110858526.taobao.com'
          },{
            name: '波弟猫  ',
            url: 'https://shop123708127.taobao.com'
          },{
            name: '贝尔宠物之家 ',
            url: 'https://petsv1phome.taobao.com'
          },
          {
            name: '怪梦宠物商店',
            url: 'https://shop67813361.taobao.com'
          },
          {
            name: '小芝麻宠物用品店 ',
            url: 'https://shop210981490.taobao.com'
          },

          {
            name: '鱼酱的猫馆',
            url: 'https://shop109853115.taobao.com'
          },
          {
            name: '猴子的猫咪小镇',
            url: 'https://shop63277278.taobao.com'
          },
          {
            name: '喵星球宠物',
            url: 'https://shop206325879.taobao.com'
          },
          {
            name: 'Sunny宠物小馆',
            url: 'https://shop116117742.taobao.com'
          },
          {
            name: '爱猫天下',
            url: 'https://shop392296666.taobao.com'
          },
          {
            name: '安猪小粮仓',
            url: 'https://shop168178096.taobao.com'
          },{
            name: '关于猫的一切',
            url: 'https://spain-ahe.taobao.com'
          },
          {
            name: '肥宅猫',
            url: 'https://shop587345061.taobao.com'
          },
          {
            name: '养猫联盟',
            url: 'https://shop104979551.taobao.com'
          },
          {
            name: '心跳宠物王国',
            url: 'https://shop173779394.taobao.com'
          },
          {
            name: 'TA的猫',
            url: 'https://shop34765181.taobao.com'
          },
          {
            name: '喵范儿宠物',
            url: 'https://shop103483929.taobao.com'
          },
          {
            name: '家友爱宠petfood',
            url: 'https://tangqiao.taobao.com'
          },
          {
            name: '萌爪医生',
            url: 'https://shop156946624.taobao.com'
          },
          {
            name: '奶酪萌宠 ',
            url: 'https://shop120796654.taobao.com'
          },
          {
            name: '寿司猫工作室',
            url: 'http://sushicat.taobao.com'
          },
          {
            name: '小Q萌猫Cat',
            url: 'https://q-cats.taobao.com'
          },
          {
            name: '九命猫宠物',
            url: 'https://shop360667732.taobao.com'
          },
          {
            name: 'Queen喵的王国',
            url: 'https://shop117984615.taobao.com'
          },
          {
            name: '肥波酱FayeCat 宅猫家',
            url: 'https://shop59992350.taobao.com'
          },
          {
            name: '火山萌猫',
            url: 'https://huoshanpet.taobao.com'
          },
          {
            name: '皮皮猫杂货铺',
            url: 'https://shop469082159.taobao.com'
          },
          {
            name: 'VK猫屋',
            url: 'https://shop141724783.taobao.com'
          },
          {
            name: '小可爱星球',
            url: 'https://shop116421479.taobao.com'
          },
          {
            name: '路加宠物',
            url: 'https://shop33495332.taobao.com'
          },
          {
            name: 'Emryspet',
            url: 'https://emryspet.taobao.com'
          },
          {
            name: '猫外婆の精选',
            url: 'https://shop33675222.taobao.com'
          },
          {
            name: '猫咪菜市场',
            url: 'https://catmarket.taobao.com'
          },
          {
            name: '宠优时代',
            url: 'https://yoyo20.taobao.com'
          },
          {
            name: '鞠大妈猫粮店',
            url: 'https://shop480614515.taobao.com'
          },
          {
            name: '贝耳家宠物生活馆',
            url: 'https://bearhome2014.taobao.com '
          },
          {
            name: '正月宠物',
            url: 'https://shop205993055.taobao.com'
          },
          {
            name: '寰球萌宠',
            url: 'https://shop113725694.taobao.com'
          },
          {
            name: '抱紧我的小鱼干',
            url: 'https://shop107130299.taobao.com'
          },
          {
            name: '优宠生活馆',
            url: 'https://shop227638496.taobao.com'
          },{
            name: '脸比月亮大',
            url: 'https://shop203786385.taobao.com'
          },
          {
            name: '肥猫严胖胖',
            url: 'https://shop63332541.taobao.com'
          },
          {
            name: 'MoneyCat萌你猫',
            url: 'https://moneypet.taobao.com'
          },{
            name: '二妞的零食小铺',
            url: 'https://shop106763755.taobao.com'
          },
          {
            name: '敲萌宠物',
            url: 'https://shop213399305.taobao.com'
          },
          {
            name: '康宠动物医院',
            url: ''
          },
          {
            name: '鹿宝喵阁·撸猫客栈',
            url: ''
          },
          {
            name: '喵事屋宠物',
            url: 'https://shop468262391.taobao.com'
          },
          {
            name: 'C派宠物用品店',
            url: 'https://shop239010321.taobao.com'
          },
          {
            name: '双子猫杂货铺',
            url: 'https://shop104709542.taobao.com'
          },
          {
            name: 'Cola的尾巴',
            url: 'https://shop107260535.taobao.com'
          },
          {
            name: '辛巴杂货铺',
            url: 'https://shop593126406.taobao.com'
          },
          {
            name: 'CONNIEPET康派特',
            url: 'https://shop108567617.taobao.com'
          },
          {
            name: '泰克宠物超市',
            url: ''
          },
          {
            name: '雪顶宠物粮仓',
            url: 'https://shop304783754.taobao.com'
          },
          {
            name: '淘打猫',
            url: 'https://shop159363578.taobao.com'
          },
          {
            name: '蛋堡宠物乐园',
            url: 'https://shop218673789.taobao.com'
          },
          {
            name: '枫叶宠物',
            url: ''
          },
          {
            name: '捡捡猫咪top馆',
            url: 'https://shop191379766.taobao.com'
          },
          {
            name: 'Stone爱猫',
            url: 'https://shop108327131.taobao.com'
          },






        ]
      }
    }
  }
</script>

<style scoped>

</style>
