<template>
  <div class="box">
    <div class="rail">
      <div style="display: flex;">
        <div>
          <i class="el-icon-arrow-left" />
          工作台
        </div>
        <div class="save">
          <i class="el-icon-cloudy" />
          保存中</div>
      </div>
      <div style="display: flex;">
        <div class="field">创意模式</div>
        <el-button round>交互视频</el-button>
        <el-button round class="violet">微视频</el-button>
      </div>
      <div style="margin-right: 24px;">
        <el-button type="text">帮助</el-button>
        <el-button type="text">浏览</el-button>
        <el-button type="text" @click="dialog">生成</el-button>
      </div>
    </div>
    <div class="content">
      <div>
        <div class="leftActionBar">
          <div v-if="leftActionBar" class="details">
            <div class="ResolutionSelector">
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  16:9<i class="el-icon-arrow-down el-icon--right" />
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">16:9</el-dropdown-item>
                  <el-dropdown-item command="b">9:16</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div style="display: flex; justify-content: center;">
              <div>
                <div v-for="(item, index) in 11" :key="index" class="wicket">
                  12
                </div>
                <div class="news">
                  <svg-icon
                    class="svgs"
                    icon-class="aaa"
                  />
                  新建空白场景
                </div>
              </div>
            </div>
            <div class="below">
              <div class="a voluntarily">自动生成</div>
              <div class="a toLead">导入PPT</div>
            </div>
          </div>
          <div class="unfold" :style="{ left: (leftActionBar ? 257 : 0) + 'px' }" @click="spread(1)">
            <i class="el-icon-arrow-left" />
          </div>
        </div>
      </div>
      <div style="width: 100%; margin-right: 80px;">
        <div class="grape" :style="{ width: (resolutionRatio ? 100 : 30) + '%' }">
          <grapesjs />
        </div>
        <editor />
      </div>
      <div>
        <div style="margin-left: 30px;">
          <el-tooltip
            effect="dark"
            content="Left Center 提示文字"
            placement="left"
          >
            <div class="uploading" :style="{ width: (spreadIdentification ? 382 : 82) + 'px' }">
              <div class="base">
                <img :src="require('@/assets/img/uploading.png')" alt="">
              </div>
              <div v-if="spreadIdentification" style="margin-left: 20px; color: #0f40f5;">长传图片/视频</div>
            </div>
          </el-tooltip>
        </div>
        <div class="actionBar">
          <div style="display: flex; ">
            <div class="unfold" @click="spread">
              <i class="el-icon-arrow-left" />
            </div>
            <div style="width: 30px;" />
            <!-- <div :style="{ fontSize: 88 + 'px' }"> -->
            <div :style="{ width: (spreadIdentification ? 300 : 0) + 'px' }" class="DevelopingLayer">
              米好
            </div>
          </div>
          <div class="operatingButton">
            <div style="display: flex; justify-content: center; ">
              <div>
                <el-tooltip
                  v-for="(item, index) in offside"
                  :key="index"
                  class="item"
                  effect="dark"
                  content="Left Top 提示文字"
                  placement="left-start"
                >
                  <div class="highlight">
                    <svg-icon
                      class="svgs"
                      :icon-class="item.img"
                    />
                    <div>{{ item.name }}</div>
                  </div>
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <generate :dialog-visible="dialogVisible" @doneDialogVisible="doneDialogVisible" />
  </div>
</template>

<script>
import editor from './editor.vue'
import generate from './generate.vue'
import grapesjs from './grapesjs.vue'
import { getList, updateList, getdraftList, deletedraftList, getMediaList, finalize } from '@/api/table'
export default {
  components: {
    editor,
    generate,
    grapesjs
  },
  data() {
    return {
      isCollapse: true,
      dialogVisible: false,
      offside: [
        {
          img: 'digitalHuman',
          name: '数字人'
        },
        {
          img: 'background',
          name: '背景'
        },
        {
          img: 'text',
          name: '文本 '
        },
        {
          img: 'e-commerce',
          name: '电商'
        },
        {
          img: 'matchAreaController',
          name: '场控'
        },
        {
          img: 'compile',
          name: '编辑'
        }
      ],
      spreadIdentification: true,
      leftActionBar: true,
      text: '',
      value1: '',
      manipulationValue: [
        {
          imgs: 'polyphonicWords',
          operationSheet: '多音字'
        },
        {
          imgs: 'stress',
          operationSheet: '重音'
        },
        {
          imgs: 'NumberPharacterPronunciation',
          operationSheet: '数符读音'
        },
        {
          imgs: 'readThrough',
          operationSheet: '连读'
        },
        {
          imgs: 'alias',
          operationSheet: '别名'
        },
        {
          imgs: 'phoneticSymbol',
          operationSheet: '音标'
        },
        {
          imgs: 'LocalSpeedChange',
          operationSheet: '局部变速'
        },
        {
          imgs: 'MultiplayerDubbing',
          operationSheet: '多人配音'
        },
        {
          imgs: '', // LocalUmlaut
          operationSheet: '局部变音'
        },
        {
          imgs: 'StandstillRegulation',
          operationSheet: '停顿调节'
        },
        {
          imgs: 'InsertMute',
          operationSheet: '插入静音'
        },
        {
          imgs: '', // SymbolMute
          operationSheet: '符号静音'
        },
        {
          imgs: '', // ParagraphMute
          operationSheet: '段落静音'
        },
        {
          imgs: '', // InterpretationModel
          operationSheet: '解说模式'
        },
        {
          imgs: 'soundEffect',
          operationSheet: '音效'
        },
        {
          imgs: '', // background
          operationSheet: '配乐'
        },
        {
          imgs: 'Look', //
          operationSheet: '显示拼音'
        },
        {
          imgs: '', // BatchReplacement
          operationSheet: '批量替换'
        },
        {
          imgs: '', // sensitiveWord
          operationSheet: '敏感词'
        }
      ],
      resolutionRatio: true,
      auth: {
        'userId': 12354,
        'token': '',
        'timestamp': '1234342524545', // 当前毫秒值
        'rand': '', // 随机字符串
        'sign': '' // 签名串
      },
      draftId: 5,
      content: '45741adasd阿迪王'
    }
  },
  mounted() {
    getList(this.auth)
    const list = {
      ...this.auth,
      draftId: 5,
      content: encodeURIComponent(this.content)
    }
    updateList(list)
    const getdraf = {
      ...this.auth,
      draftId: 5
    }
    getdraftList(getdraf)
    deletedraftList(getdraf)
    finalize(getdraf)
    const media = {
      ...this.auth,
      tags: []
    }
    getMediaList(media)
    console.log()
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    // 展开
    spread(val) {
      if (val === 1) {
        this.leftActionBar = !this.leftActionBar
      } else {
        this.spreadIdentification = !this.spreadIdentification
      }
    },
    handleCommand(command) {
      switch (command) {
        case 'a':
          this.resolutionRatio = true
          break
        case 'b':
          this.resolutionRatio = false
          break

        default:
          break
      }
    },
    dialog() {
      this.dialogVisible = true
    },
    doneDialogVisible() {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>

::v-deep.el-icon-close:before{
    content: "";
}
 .el-dropdown-link {
    cursor: pointer;
    color: #9a9a9a;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
.box {
  background-color: #e4e9fd;
  height: 100%;
  overflow: hidden;
.rail{
  height: 41px;
  font-size: 14px;
  background-color: #c9dbfb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  .save{
    margin-left: 20px;
    color: #bebfc0;
  }
  .field{
    font-size: 20px;
    font-weight: 700;
    font-style: italic;
    color: #0f40f5;
    margin-right: 20px;
  }
  .el-button.is-round{
    height: 30px;
    line-height: 2;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    font-size: 14px;
    color: #6b6b6b;
  }
  .violet{
    background-color: #0f40f5;
    color: #fff !important;
  }
  .el-button--text{
    color: #4f4f4f;
  }
}
.content{
  display: flex;
  height: 94%;
  .leftActionBar{
    display: flex;
    height: 100%;
    background-color: #fff;
    .details::-webkit-scrollbar {
      width: 0px; /* 设置滚动条宽度 */
    }
    .details{
      overflow: auto; /* 当内容溢出容器时显示滚动条 */
      width: 257px;
      background-color: #fff;
      .ResolutionSelector{
        margin-bottom: 30px;
        height: 60px;
        background-color: rgb(229, 234, 254);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .wicket{
        width: 200px;
        height: 150px;
        margin-bottom: 35px;
        background-color: pink;
      }
      .news{
        margin-bottom: 65px;
        cursor: pointer;
        width: 200px;
        margin-top: 40px;
        height: 60px;
        background-color: #cecece;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #0f40f5;
        .svgs{
          width: 24px;
          height: 24px;
          margin-right: 5px;
        }
      }
      .below{
        width: 257px;
        position: absolute;
        bottom: 0;
        display: flex;
        border-top: 1px solid #c3c2b5;
        .voluntarily{
          background-color: #b4fdff;
          border-right: 1px solid #c3c2b5;
        }
        .toLead{
          background-color: #fefa83;
        }
        .a{
          flex: 1;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .unfold{
      transform: rotate(180deg);
      cursor: pointer;
      // margin-top: 900%;
      position: absolute;
      bottom: 50%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 29px;
      height: 84px;
      // border-right: solid ;
      border-top: 11px solid transparent;
      border-bottom: 11px solid transparent;
      border-top-left-radius: 21px;
      border-bottom-left-radius: 21px;
      background: linear-gradient(to right, #f6f6f6, #cfd9fd) !important;
    }
  }
  .grape{
    position: relative; /* 将元素定位为绝对定位 */
    left: 50%;
    transform: translate(-50%, 0%);
    height: 45%;
    margin-top: 30px;
    width: 100%;
    // background-color: #ccf783;
    background-color: #fff;
      // background-image: url('~@/assets/img/bb.jpg');
      // background-image: url(../../assets//img//bb.jpg);
    margin-left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .human{
    height: 30px;
    // background-color: #fff;
    margin-top: 10px;
    width: 100%;
    margin-bottom: 10px;
    margin-left: 50px;
    display: flex;
    justify-content: space-between;
    .name{
      background-color: #0f40f5;
      color: #fff;
    }
    .switch{
    }
  }
  .operate{
    height: 50px;
    width: 108%;
    background-color: #e0e4f5;
    margin-left: 30px;
    display: flex;
    justify-content: space-evenly;
    .manipulation{
      display: flex;
      flex-direction: column;
      justify-content: center; /* 在垂直方向上居中对齐 */
      align-items: center; /* 在水平方向上居中对齐 */
      .svgs{
        width: 24px;
        height: 27px;
      }
    }
  }
  ::v-deep.el-textarea__inner{
    height: 190px!important;
    border-right: 0px solid #000 !important;
  }
  ::v-deep.el-textarea__inner::-webkit-scrollbar {
      width: 0px; /* 设置滚动条宽度 */
    }
  .uploading{
    // width: 382px;
    margin-bottom: 5px;
    border-radius: 10px;
    .base{
      width: 40px;
      height: 40px;
      background-image: url('~@/assets/img/image.png');
      background-size: cover; /* 控制背景图片的尺寸 */
      display: flex;
      justify-content: center;
      align-items: center;
    }
    background-color: #fff;
    height: 77px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .actionBar{
    display: flex;
    height: 100%;
    .unfold{
      cursor: pointer;
      // margin-top: 900%;
      position: absolute;
      bottom: 50%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 29px;
      height: 84px;
      // border-right: solid ;
      border-top: 11px solid transparent;
      border-bottom: 11px solid transparent;
      border-top-left-radius: 21px;
      border-bottom-left-radius: 21px;
      background: linear-gradient(to right, #f6f6f6, #cfd9fd) !important;
    }
    .DevelopingLayer{
      background-color: #fff;
    }
    .operatingButton{
      width: 82px;
      background-color: #cdd7fc;
      height: 100%;
      .svgs {
          width: 24px;
          height: 24px;
          margin-bottom: 7px;
          fill: #8df;
        }
      .item{
        margin-top: 24px;
      }
      .highlight{
        display: flex;
        font-size: 12px;
        color: #4F4F4F;
        flex-direction: column;
        justify-content: center; /* 在垂直方向上居中对齐 */
      align-items: center; /* 在水平方向上居中对齐 */
      }
    }
  }
}
}
</style>
<style>
.el-textarea__inner{
  border: 0 solid #000;
}
.el-radio-button__inner {
  padding: 5px 20px ;
    border-radius: 50px ;
    margin-left: 20px;
}
.el-radio-button:first-child .el-radio-button__inner{
  border-radius: 50px ;
}
.el-radio-button:last-child .el-radio-button__inner{
  border-radius: 50px ;
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }
</style>

