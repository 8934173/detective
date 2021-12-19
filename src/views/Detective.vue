<template>
  <div class="home">
    <el-container>
      <el-header style="padding-top: 10px; height: 75px" >
        <header-d></header-d>
      </el-header>
      <el-main>
        <div class="content-bg">
          <router-view/>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Container, Header, Main, Menu, MenuItem, Row, Col} from 'element-ui';
import HeaderD from '@/components/Layout/Header.vue';

@Component({
  components: {
    [Container.name]: Container,
    [Header.name]: Header,
    [Main.name]: Main,
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [Row.name]: Row,
    [Col.name]: Col,
    HeaderD,
  },
})
export default class Detective extends Vue {}
</script>
<style lang="scss">
.el-main {
  padding: 0 !important;
}
.content-bg {
  background-color: #d3dce6;
  padding: 20px;
}
</style>
