
<template>
  <div>
      <my-counter :value="counter"></my-counter>
      <my-button :counter="counter" :callback="incrementCounter" :reset="incrementReset"></my-button>
  </div>
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
      return {
        counter: 0,
        callback: null,
        reset: null
      }
    },
    mounted() {
      this.counter = this.parentCount == null ? 0 : this.parentCount;
    },
    methods: {
      incrementCounter() {
        this.counter++;
      },
      incrementReset() {
        this.counter = 0;
      },
      setCounterValue(val) {
        this.counter = val ? val : this.counter;
      }
    }
  };
</script>