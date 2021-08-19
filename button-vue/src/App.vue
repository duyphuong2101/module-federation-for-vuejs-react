
<template>
    <my-counter :value="counter"></my-counter>
    <my-button :callback="incrementCounter" :reset="incrementReset"></my-button>
</template>

<script>
  import myCounter from './my-counter.vue';
  import myButton from './my-button.vue';

  export default {
    components: {
      myCounter,
      myButton
    },
    data() {
      return {
        counter: 0,
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