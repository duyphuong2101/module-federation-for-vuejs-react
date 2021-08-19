
<template>
    <button @click="callback">Click</button>
    &nbsp;
    <button @click="reset">Reset</button>
</template>

<script>
  export default {
    props: {
      callback: null,
      reset: null
    }
  };
</script>