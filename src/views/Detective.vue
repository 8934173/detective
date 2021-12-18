<template>
  <div class="home">
    <el-container>
      <el-header style="padding: 10px 0; height: 75px" >
        <header-d></header-d>
      </el-header>
      <el-main>
        <el-carousel height="600px">
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="">
              <div class="item-wrapper">
                <h1>大屏大数据可视化解决方案</h1>
                <h3>免费定制属于自己的专属频道 (是的，我们免费)</h3>
                <el-button round @click="handleTemplate">样板查看</el-button>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Container, Header, Main, Menu, MenuItem, Row, Col, Carousel, CarouselItem, Button} from 'element-ui';
import HeaderD from '@/components/Layout/Header.vue';
import screenfull from 'screenfull';

@Component({
  components: {
    [Container.name]: Container,
    [Header.name]: Header,
    [Main.name]: Main,
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [Row.name]: Row,
    [Col.name]: Col,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Button.name]: Button,
    HeaderD,
  },
})
export default class Detective extends Vue {
  public msg: string = '你好';

  public handleTemplate(): void {
    document.documentElement.requestFullscreen();
  }
}
</script>
<style lang="scss">
.el-main {
  padding: 0 !important;
}
.el-carousel__container {
  // width: 600px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.item-wrapper {
  text-align: left;
  padding: 50px 200px;
  // display: inline-block;
  margin-top: 120px;
}
.item-wrapper > h1 {
  font-size: 32px;
}
.item-wrapper > h3 {
  font-size: 24px;
  margin: 30px 0 30px 0;
}
</style>
