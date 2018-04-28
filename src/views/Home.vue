<template>
  <div class="container">
    <app-header @onChangeSidebar="changeSidebar" ></app-header>
    <div>
      <div class="mask" :class="{ show: isShowSidebar }" @click="isShowSidebar = !isShowSidebar"></div>
      <div class="sidebar" :class="{ show: isShowSidebar }">
        <div class="user-info">
          <img src="@/assets/images/book2.png" class="avatar">
          username
        </div>
      </div>
    </div>
    <nav class="navbar">
      <ul class="nav-menu">
        <li v-for="(item, index) in 6" :key="index" :class="{ active : type === index+1 }">
          <a href="javascript:void(0)" @click="setType(index + 1)">推荐</a>
        </li>
      </ul>
      <i :class="[ 'active' + type]"></i>
    </nav>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in 3" :key="index"  :style="{ background: 'url(' + backgroundImg + ') no-repeat', backgroundSize: 'cover' }">Slide {{index}}</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="cate" :style="{ '-webkit-filter: blur(5px)' : isShowSidebar }" v-for="(item, index) in 3" :key="index">
      <div class="cate-title">
        <h1>| 本周强推荐</h1>
        <router-link to="/">查看更多 ></router-link>
      </div>
      <div class="cate-list-box">
        <ul class="cate-list clearfix">
          <li v-for="(item, index) in 6" :key="index">
            <router-link to="/">
              <img src="@/assets/images/book2.png">
              <h2>如何有效阅读一本书</h2>
              <span>【日】奥野宣之，的经典之作</span>
            </router-link>
          </li>
        </ul>
        <a class="refresh" href="javascript:0;">
          换一换 <i class="fa fa-refresh"></i>
        </a>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data () {
    return {
      local: '1',
      type: 1,
      isShowSidebar: false,
      backgroundImg: require('@/assets/images/book2.png')
    }
  },
  components: {
    'app-header': Header
  },
  methods: {
    setType (type) {
      this.type = type
    },
    changeSidebar () {
      console.log('changeSidebar')
      this.isShowSidebar = !this.isShowSidebar
    }
  },
  computed: {
    localComputed () {
      return this.local
    },
    ...mapState({
    })
  },
  mounted () {
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: 1000, // 可选选项，自动滑动
      // 如果需要分页器
      pagination: '.swiper-pagination'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.mask,.sidebar{
  position: fixed;
  top:0;
  left: 0;
}
.mask{
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity .2s ease-in-out;
  &.show{
    background: #000;
    opacity: .5;
    pointer-events: auto;
    z-index: 9999;
    filter: blur(5px)
  }
}
.sidebar{
  bottom: 0;
  width: 85%;
  background: #fff;
  z-index: 10000;
  pointer-events: none;
  transform: translate(-100%);
  transition: transform .2s ease-in-out;
  &.show{
    pointer-events: auto;
    transform: translate(0);
  }
  .user-info{
    height: 80px;
    box-shadow: 0px 0px 10px rgba(195, 195, 195, 0.6);
    .avatar{
      width:50px;
      height: 50px;
    }
  }
}
.navbar{
  position: relative;
  height: 30px;
  line-height: 30px;
  text-align: center;
  .nav-menu{
    display: flex;
    li{
      flex:1;
      a{
        display: block;
      }
      &.active a{
        color: #E04157;
      }
    }
  }
  i{
    position: absolute;
    bottom: 0;
    left: 8.3333%;
    width: 1em;
    height: 2px;
    background: #E04157;
    transform: translate(-50%, 0);
    transition: left .2s ease-in-out;
    /* 100/6/2+100/6*n (ˇˍˇ） 每项宽度一半加n个的宽度*/
    &.active2{
      left: 25%;
    }
    &.active3{
      left: 41.6666%;
    }
    &.active4{
      left: 58.3333%;
    }
    &.active5{
      left: 75%;
    }
    &.active6{
      left: 91.6666%;
    }
  }
}
.swiper-container {
    width: 100%;
    height: 3.2rem;
}
.swiper-pagination-bullet{
  width: 10px;
  height: 4px;
  border-radius: 0;
}
.swiper-pagination-bullet-active{
  background: #fff;
}
.cate{
  margin: 0 4%;
  .cate-title{
    h1{
      display: inline-block;
      margin: 0;
      padding-bottom: 20px;
      background-image: -webkit-linear-gradient(0deg, #d82a2a, #E29304);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    a{
      float: right;
    }
  }
}
.cate-list-box{
  .cate-list{
    margin:0 0 0 -3%;
    li{
      width:30.3333%;
      float: left;
      margin: 0 0 14px 3%;
    }
  }
  .refresh{
    display: block;
    padding: 10px;
    color: #999;
    text-align: center;
    border-top: 1px solid #f5f5f5;
    .fa{
      color: #bbb;
    }
  }
}
hr{
  margin-left: -25/6%;
  margin-right: -25/6%;
  border-width: 0;
  height: 10px;
  background-color: #f5f5f5;
}
</style>
