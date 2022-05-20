<template>
  <div class="all-sort-list">
    <div class="item" @mouseover="mouseOverFun" @mouseleave="mouseLeaveFun">
      <h3><span>·</span><a href="##">家电 数码 手机</a></h3>
      <div
        class="item-list clearfix"
        :style="{ top: '0px', display: displayOrNot }"
      >
        <div class="subitem">
          <dl class="fore1">
            <dt>
              <!-- <a href="#" th:href="@{'/searchSecondLevelCategory?goodsCategoryId='+${secondLevelCategory.categoryId}}"> -->
              家电
              <!-- </a> -->
            </dt>
            <dd>
              <em>
                <a href="/search?goodsCategoryId=30"> 卷发器 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=31"> 空气净化器 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=20"> 生活电器 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=21"> 厨房电器 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=22"> 扫地机器人 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=23"> 吸尘器 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=24"> 取暖器 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=25"> 豆浆机 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=26"> 暖风机 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=27"> 加湿器 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=28"> 蓝牙音箱 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=29"> 烤箱 </a>
              </em>
            </dd>
          </dl>

          <dl class="fore1">
            <dt>
              <!-- <a href="#" th:href="@{'/searchSecondLevelCategory?goodsCategoryId='+${secondLevelCategory.categoryId}}"> -->
              数码
              <!-- </a> -->
            </dt>
            <dd>
              <em>
                <a href="/search?goodsCategoryId=32"> 游戏主机 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=33"> 数码精选 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=34"> 平板电脑 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=35"> 苹果 Apple </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=36"> 电脑主机 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=37"> 数码相机 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=38"> 电玩动漫 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=39"> 单反相机 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=40"> 键盘鼠标 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=42"> 二手电脑 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=43"> 二手手机 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=41"> 无人机 </a>
              </em>
            </dd>
          </dl>

          <dl class="fore1">
            <dt>
              <!-- <a href="#" th:href="@{'/searchSecondLevelCategory?goodsCategoryId='+${secondLevelCategory.categoryId}}"> -->
              手机
              <!-- </a> -->
            </dt>
            <dd>
              <em>
                <a href="/search?goodsCategoryId=45"> 荣耀手机 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=46"> 华为手机 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=49"> 华为 P30 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=44"> iPhone 11 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=47"> iPhone </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=48"> 华为 Mate 20 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=51"> 小米手机 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=52"> 红米 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=53"> OPPO </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=54"> 一加 </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=55"> 小米 MIX </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=56"> Reno </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=57"> vivo </a>
              </em>

              <em>
                <a href="/search?goodsCategoryId=58"> 手机以旧换新 </a>
              </em>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script  setup>
import { reactive, toRefs } from "vue";

const state = reactive({
  // controll item list show or not
  displayOrNot: "none",
});

let { displayOrNot } = toRefs(state);

const mouseOverFun = () => {
  // return (displayOrNot = "block"); is wrong ,have to .value
  return (displayOrNot.value = "block");
};

const mouseLeaveFun = () => {
  return (displayOrNot.value = "none");
};
</script>

<style>

.all-sort-list {
    position: relative;
    float: left;
    width: 228px;
    border-top: none;
    background: #000;
    height: 100%;
}

.all-sort-list .item {
    height: 49px;
    border-top: 1px solid #FFFFFF;
    padding-left: 10px;
}

.all-sort-list .item.bo {
    border-top: none;
}

.all-sort-list .item h3 {
    /* height: 30px;
    line-height: 45px; */
    font-size: 15px;
    font-weight: normal;
    width: 199px;
    overflow: hidden;
    text-align: left;
}

.all-sort-list .item span {
    padding: 0px 5px;
    color: #1baeae;
    font-family: "\5B8B\4F53";
}

.all-sort-list .item a {
    color: #fff;
    text-decoration: none;
}

.all-sort-list .item a:hover {
    font-weight: bold;
    color: #1baeae;
}

.all-sort-list .item-list {
    display: none;
    position: absolute;
    width: 495px;
    min-height: 200px;
    _height: 200px;
    background: #FFF;
    left: 210px;
    box-shadow: 0px 0px 10px #DDDDDD;
    border: 1px solid #DDD;
    top: 3px;
    z-index: 10;
}

.item-list .subitem {
    float: left;
    width: 477px;
    padding: 0px 4px 0px 8px;
}

.item-list .subitem dl {
    border-top: 1px solid #EEE;
    padding: 6px 0px;
    overflow: hidden;
    zoom: 1;
}

.item-list .subitem .fore1 {
    border-top: none;
}

.item-list .subitem dt {
    float: left;
    width: 84px;
    line-height: 20px;
    text-align: left;
    padding: 3px 6px 0px 0px;
    font-weight: 700;
    color: #1baeae;
}

.item-list .subitem dt a {
    color: #1baeae;
    text-decoration: underline;
}

.item-list .subitem dd {
    float: left;
    width: 415px;
    padding: 3px 0px 0px;
    overflow: hidden;
}

.item-list .subitem dd em {
    float: left;
    height: 14px;
    line-height: 14px;
    padding: 0px 8px;
    margin-top: 5px;
    border-left: 1px solid #CCC;
}

.item-list .subitem dd em a, .item-list .cat-right dd a {
    color: #666;
    text-decoration: none;
}

.item-list .subitem dd em a:hover, .item-list .cat-right dd a:hover {
    font-weight: normal;
    text-decoration: underline;
}
</style>