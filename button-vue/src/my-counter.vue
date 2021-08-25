
<template>
    <h2 class="vue-lbl"><span  v-html="value"></span></h2>
</template>

<script>
  export default {
    props: {
      value: 0
    }
  };
</script>