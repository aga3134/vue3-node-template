
<template>
<div class="main-app">
  <button-counter></button-counter>
</div>
</template>

<script>
import ButtonCounter from "./ButtonCounter.vue";

export default {
  components: {
    "button-counter": ButtonCounter,
  },
  data() {
    return {

    }
  },
  created: function(){
    this.ShowLog();
  },
  methods:{
    ShowLog: function(){
      console.log("main app start");
    }
  }
}
</script>

<style scoped lang="scss">
.main-app{
  background-color: #888888;
}
</style>
