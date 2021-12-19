<template>
  <div>
    <el-carousel height="600px">
      <el-carousel-item v-for="item in CarouselD" :key="item.carId">
        <div :style="{backgroundImage: 'url(' + item.background + ')', backgroundSize: 'contain', color: item.fontColor, width: '100%', height: '600px'}">
          <div class="item-wrapper">
            <h1>{{item.primaryTitle}}</h1>
            <h3>{{item.secondaryTitle}}</h3>
            <el-button round @click="handleTemplate">样板查看</el-button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
<!--    <el-image style="width: 80%;" src="https://kivens.oss-cn-hangzhou.aliyuncs.com/detective/exc.png" />-->
  </div>
</template>
<script lang="ts">
import {Carousel, CarouselItem, Button, Image} from 'element-ui';
import {Vue, Component} from 'vue-property-decorator';
import {CarouselData} from '@/utils/sys';
@Component({
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Button.name]: Button,
    [Image.name]: Image,
  },
})
export default class ContentMain extends Vue {
  public CarouselD = CarouselData;

  public handleTemplate(): void {
    document.documentElement.requestFullscreen();
  }
}
</script>
<style lang="scss">
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.item-wrapper {
  text-align: left;
  padding: 150px 0 0 200px;
}
.item-wrapper > h1 {
  font-size: 32px;
}
.item-wrapper > h3 {
  font-size: 24px;
  margin: 30px 0 30px 0;
}
</style>
