
<template>
    <my-counter :value="counter"></my-counter>
    <my-button :callback="incrementCounter" :reset="incrementReset"></my-button>
</template>

<script>
  import myCounter from './my-counter.vue';
  import myButton from './my-button.vue';

  export default {
    props: {
      parentCount: null
    },
    components: {
      myCounter,
      myButton
    },
    data() {
      let pCount = this.parentCount == null ? 0 : this.parentCount;
      return {
        counter: pCount,
        callback: null,
        reset: null
      }
    },
    methods: {
      incrementCounter() {
        this.counter++;
      },
      incrementReset() {
        this.counter = 0;
      }
    }
  };
</script>