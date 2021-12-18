<template>
  <el-row :gutter="22">
    <el-col :span="6">
      <div class="d-both-side">
        <el-image style="width: 130px; height: 40px; margin: 10px 0" :src="image" fit="fill"/>
      </div>
    </el-col>
    <el-col :span="12">
      <el-menu :default-active="'1'" mode="horizontal">
        <el-menu-item index="1">产品</el-menu-item>
        <el-menu-item index="2">可视化产品</el-menu-item>
        <el-menu-item index="3">定制</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="6">
      <div class="d-both-side">
        <el-button type="text">登 录</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {Row, Col, Menu, MenuItem, Button, Image} from 'element-ui';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Image.name]: Image,
  },
})

export default class HeaderD extends Vue {
  public image: string = require('../../assets/detective.png');
}

</script>
<style scoped lang="scss">
$menu-height: 60px;

.d-both-side {
  height: $menu-height;
  line-height: $menu-height;
  width: 100%;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>
