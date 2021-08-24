
<template>
    <button @click="callback">Counter</button>
    &nbsp;
    <button @click="reset" v-if="counter > 0">Reset</button>
</template>

<script>
  export default {
    props: {
      callback: null,
      reset: null,
      counter: 0
    }
  };
</script>