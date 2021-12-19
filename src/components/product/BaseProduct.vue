<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="18">
        <div :style="{background: 'url('+ exa +')'}" class="exc">
          <dv-loading v-if="loading">Loading...</dv-loading>
          <div v-else>
            <dv-decoration-8 :reverse="true" style="width:300px;height:50px; display: inline-block" />
            <dv-decoration-11 style="width:200px;height:60px; display: inline-block">数据可视化</dv-decoration-11>
            <dv-decoration-8 style="width:300px;height:50px; display: inline-block" />
            <div class="action-item">
              <dv-border-box-1 />
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="action-item">
          <dv-border-box-1 />
        </div>
        <div class="action-item">
          <dv-border-box-2 />
        </div>
        <div class="action-item">
          <dv-border-box-3 />
        </div>
        <div class="action-item">
          <dv-border-box-4 />
        </div>
        <div class="action-item">
          <dv-border-box-5 />
        </div>
        <div class="action-item">
          <dv-border-box-6 />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {Row, Col} from 'element-ui';
import { Exc } from '@/utils/sys';

@Component({
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
  },
})
export default class BaseProduct extends Vue {
  public exa: string = Exc;
  public loading: boolean = true;

  public created(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}

</script>
<style lang="scss" scoped>
.exc {
  height: 100vh;
}
.action-item {
  height: 200px;
}
</style>
