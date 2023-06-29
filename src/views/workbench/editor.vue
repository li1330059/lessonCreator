<template>
  <div class="box">
    <div class="toprap">
      <div>
        自动模式
        <el-switch
          v-model="value1"
          class="switch"
        />
      </div>
      <div>
        <el-radio-group v-model="radio1">
          <el-radio-button label="画面" />
          <el-radio-button label="配音" />
          <el-radio-button label="气氛" />
        </el-radio-group>
      </div>
      <div>
        <svg-icon icon-class="aaa" />
        <svg-icon icon-class="aaa" />
        <svg-icon icon-class="aaa" />
      </div>
    </div>
    <div class="functionlos">
      <div>

        <div
          v-if="radio1==='画面'"
          class="functionlos"
        >
          <div
            v-for="(item, index) in manipulationValue"
            :key="index"
            class="buttonSwitch"
          >
            <img :src="require(`@/assets/img/${item.imgs}.png`)" alt="">
            <!-- <img :src="`@/assets/img/${item.imgs}.png`" alt=""> -->
            <div style="margin-top: 5px;">{{ item.operationSheet }}</div>
          </div>
        </div>

        <div
          v-if="radio1==='配音'"
          class="a"
        >
          <div class="functionlos">
            <div
              v-for="(item, index) in pronunciation"
              :key="index"
              class="buttonSwitch"
            >
              <img :src="require(`@/assets/img/${item.imgs}.png`)" alt="">
              <div style="margin-top: 5px;">{{ item.operationSheet }}</div>
            </div>
          </div>
        </div>
        <div
          v-if="radio1==='气氛'"
          class="a"
        >
          <div class="functionlos">
            <div
              v-for="(item, index) in tone"
              :key="index"
              class="buttonSwitch"
            >
              <img :src="require(`@/assets/img/${item.imgs}.png`)" alt="">
              <div style="margin-top: 5px;">{{ item.operationSheet }}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="inputBox">
      <el-input
        v-model="text"
        class="inputwal"
        type="textarea"
        placeholder="<数字人"
        show-word-limit
      />
    </div>
    <div class="Ai">
      <div>
        <el-button size="small" round>Ai写稿</el-button>
        <el-checkbox v-model="checked" style="margin-left: 10px;">显示字幕</el-checkbox>
      </div>
      <div>
        <el-button class="trapezoid" size="small" type="info">{{ `<\/>` }}查看脚本</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      radio1: '画面',
      manipulationValue: [
        {
          imgs: 'NewScene',
          operationSheet: '新场景'
        },
        {
          imgs: 'soundscape',
          operationSheet: '音景'
        },
        {
          imgs: 'voiceOver',
          operationSheet: '画外音'
        },
        {
          imgs: 'DigitalMan',
          operationSheet: '数字人'
        },
        {
          imgs: 'WritingBlackboard',
          operationSheet: '板书'
        },
        {
          imgs: 'material',
          operationSheet: '素材'
        },
        {
          imgs: 'AskQuestion',
          operationSheet: '提问'
        },
        {
          imgs: 'MultiplayerDubbing',
          operationSheet: '多人配音'
        },
        {
          imgs: 'ListenRespond',
          operationSheet: '聆听回应'
        },
        {
          imgs: 'product',
          operationSheet: '产品'
        }
      ],
      pronunciation: [
        {
          imgs: 'polyphone',
          operationSheet: '多音字'
        },
        {
          imgs: 'stress',
          operationSheet: '重音'
        },
        {
          imgs: 'continuous',
          operationSheet: '连续'
        },
        {
          imgs: 'NumberCharacterPronunciation',
          operationSheet: '数符读音'
        },
        {
          imgs: 'AnotherName',
          operationSheet: '别名'
        },
        {
          imgs: 'InsertMute',
          operationSheet: '插入静音'
        },
        {
          imgs: 'PhoneticMark',
          operationSheet: '音标'
        },
        {
          imgs: 'StandstillRegulation',
          operationSheet: '停顿调节'
        },
        {
          imgs: 'LocalSpeedChange',
          operationSheet: '局部变速'
        }
      ],
      tone: [
        {
          imgs: 'DynamicEffect',
          operationSheet: '动效'
        },
        {
          imgs: 'AUDIO',
          operationSheet: '音效'
        },
        {
          imgs: 'BackgroundMusic',
          operationSheet: '配乐'
        }
      ],
      text: '',
      checked: false
    }
  }
}
</script>

<style scoped lang="scss">

.box{
    margin-left: 30px;
    width: 105%;
    background-color: #fff !important;
    margin-top: 5px;
    border-radius: 15px;
    font-size: 14px;
    .toprap{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px;
    }
    .functionlos{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .buttonSwitch{
            display: flex;
            flex-direction: column;
            justify-content: center; /* 在垂直方向上居中对齐 */
            align-items: center; /* 在水平方向上居中对齐 */
            border-right: 1px solid #b7b3b3;
            padding-right: 10px;
            padding-left: 10px;
            font-size: 12px;
            cursor: pointer;
            img{
                width: 24px;
                height: 24px;
            }
        }
        .buttonSwitch:last-child {
            border-right: 0px solid #b7b3b3;
        }
    }
    .a{
        margin-top: 10px;
    }
    .inputBox{
        border: 1px solid #b7b3b3;
        border-radius: 5px;
        width: 100%;
        height: 30%;
        margin: 0 12px;
    }
    .Ai{
        margin: 0 12px;
        display: flex;
        justify-content: space-between;
        // .trapezoid {

        //     width: 200px;

        //     height: 100px;
        //     color: #fff;
        //     background-color: #f5f5f5;

        //     border-top: 20px solid #333;

        //     border-bottom: 20px solid #fffdfd00;

        //     border-left: 20px solid transparent;

        //     border-right: 20px solid transparent;

        //     }
    }
}
</style>
