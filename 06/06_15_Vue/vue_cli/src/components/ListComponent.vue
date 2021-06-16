<template>
  <div class="wrap">
      <ul>
        <li v-for="item in propsdata" v-bind:key="item">
          <div>{{item}}</div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  // 프롭스 설정
  props:['propsdata']
}
</script>

<style>
  ul {padding: 10px 0;text-align: left;display: flex;flex-direction: column;}
  ul li {padding: 10px 0;}
</style>