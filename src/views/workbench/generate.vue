<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div class="head">
        <div>
          <el-switch
            v-model="value2"
            style="display: block"
            active-color="#13ce66"
            inactive-color="#ff4949"
            inactive-text="自动模式"
          />
        </div>
      </div>
      <div class="content">
        <div style="font-weight: 700; color: #000;">生成要求和工作规范</div>
        <div>为了能够输出更加精准、专业、逻辑严密的内容，请对文稿内容进行提炼和规范AI的工作边界。</div>
        <div style="border: 1px solid #dcdfe6;border-radius: 20px; display: flex;justify-content: center;align-items: center;">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="人设:">
              <el-radio-group v-model="form.resource">
                <el-radio v-for="(item, index) in 10" :key="index" style="margin-top: 10px;" label="线上品牌商赞助" />
                <el-radio label="线下场地免费" />
                <div
                  style="margin-top: 10px;
                     display: flex;
                    align-items: center;"
                >
                  <el-radio label="其他" />
                  <el-input
                    v-model="input"
                    class="inpt"
                    placeholder="请输入人设"
                  />
                </div>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="这篇文稿:">
              <el-input v-model="form.name" class="iiipit" placeholder="单行输入" />
              <el-input v-model="form.desc" class="textarea" placeholder="多行输入" type="textarea" />
            </el-form-item>
          </el-form>
        </div>
        <div>
          <el-button size="medium" round @click="handleClose">返回</el-button>
          <el-button size="medium" class="nextStep" round>下一步</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value2: false,
      form: {
        resource: '',
        name: '',
        desc: ''
      },
      input: ''

    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.$emit('doneDialogVisible', '')
          // done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-dialog__body{
    padding: 10px 30px;
}
.head{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.content{
    display: flex;
    flex-direction: column;
    justify-content: center; /* 在垂直方向上居中对齐 */
    align-items: center; /* 在水平方向上居中对齐 */
    justify-content: center;
    align-items: center;
    color: #000;
    margin-top: 20px;
    div{
        margin-bottom: 15px;
    }
    .nextStep{
        background-color: #fcca00;
    }
   ::v-deep .inpt .el-input__inner{
        height: 30px!important;
        width: 120px;
    }
    ::v-deep .iiipit .el-input__inner{
        height: 30px;
        width: 250px;
    }
    ::v-deep .textarea{
        width: 250px;
    }
    ::v-deep .el-textarea__inner{
        border: 1px solid #dcdfe6;
        min-height: 150px !important;
    }
}
::v-deep .el-dialog__close{
    color: #fff !important;
}
::v-deep .el-dialog__header{
    display: none;
}
::v-deep .el-dialog{
    width: 50% !important;
    border-radius: 15px;
    margin-top: 2% !important;
}
</style>
