<template>
  <div class="wrap">
    <div class="input-box">
      <input type="text" v-model="newinputItem" placeholder="스케줄을 입력하시오!">
      <button v-on:click="addItem">ADD</button>
    </div>
      
  </div>
</template>

<script>
export default {
  data () {
    return {
      newinputItem:''
    }
  },
  methods:{
    addItem () {
      var value = this.newinputItem;
      this.cnt++;
      localStorage.setItem(this.cnt, value);
      this.$emit('addItem', value);

      // 입력이 완료되면, 입력상자내용을 지움
      this.inputText();

    },
    inputText () {
      this.newinputItem = '';
    }
  }
}
</script>

<style>
.wrap {width:100%;}
.wrap .input-box {width:80%;margin:0 auto;padding-top:15px;}
.wrap .input-box input[type='text'] {width:auto;height:50px;border:1px solid #ccc;box-sizing: border-box;border-radius:5px 0 0 5px;}
.wrap .input-box button {width:auto;height:50px;border:0;background:#369;color:#fff;width:60px;border-radius:0px 5px 5px 0px;margin-left: -5px;}
</style>