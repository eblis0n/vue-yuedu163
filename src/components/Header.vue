<template>
  <header>
    <a href="javascript:void(0)" class="icon-user" @click="onChangeSidebar"><i class="fa fa-user-o"></i></a>
    <div class="radio-group">
      <a href="javascript:void(0)" :class="{ active: category === 1 }" @click="setCategory(1)">男生</a>
      <a href="javascript:void(0)" :class="{ active: category === 2 }" @click="setCategory(2)">女生</a>
      <a href="javascript:void(0)" :class="{ active: category === 3 }" @click="setCategory(3)">出版</a>
      <i :class="[ 'active' + category ]"></i>
    </div>
    <a href="javascript:void(0)" class="icon-search"><i class="fa fa-search"></i></a>
  </header>
</template>

<script>
export default {
  data () {
    return {
      category: 1
    }
  },
  methods: {
    setCategory (category) {
      this.category = category
    },
    onChangeSidebar () {
      this.$emit('onChangeSidebar')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 5%;
  .icon-user,
  .icon-search{
    display: block;
    height: 24px;
    width: 24px;
    background: #f5f5f5;
    color: #666;
    text-align: center;
    line-height: 24px;
    border-radius: 24px;
  }
  .icon-search{
    background: transparent;
  }
}
.radio-group{
  position: relative;
  height: 30px;
  line-height: 30px;
  background: #f2f2f2;
  border-radius: 20px;
  a{
    position: relative;
    display: inline-block;
    padding:0 14px;
    color: #666;
    z-index: 99;
    &.active{
      color: #333;
    }
  }
  i{
    position: absolute;
    left: 2px;
    top: 2px;
    display: block;
    width: 4em;
    height: 26px;
    background: #fff;
    border-radius: 20px;
    z-index: 98;
    transition: transform .2s ease-in-out;
    &.active2{
      transform: translate(120%, 0);
    }
    &.active3{
      transform: translate(240%, 0);
    }
  }
}
</style>
