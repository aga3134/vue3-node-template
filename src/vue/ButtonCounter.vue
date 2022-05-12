
<template>
<button class="button-counter" @click="count++">You clicked me {{ count }} times.</button>
</template>

<script>

export default {
  data() {
    return {
      count:0
    }
  }
}
</script>

<style scoped lang="scss">
.button-counter{
  margin: 5px;
  padding: 10px 5px;
  border-radius: 5px;
  background-color: #333333;
  color: #ffffff;
}
</style>
