<template>
<div class="container">
  <Header />
  <h1>Great Dogs Deserve Great Homes</h1>
  <Carousel />
  <br />
  <div class="counter">
    <div class="vue">
      <vue-hello-world />
      <h3>Vue component Counter</h3>
      <vue-counter :parent-count="counter" ref="vuecounter" />
      <br>
      <button @click.prevent="$refs.vuecounter.incrementReset">Reset vue Counter form Home</button>
      <br><br />
      <button @click.prevent="$refs.vuecounter.setCounterValue(5)">Set vue Counter form Home = 5</button>
    </div>
    <div class="react">
      <div id="react-hello-world" />
      <h3>React component Counter</h3>
      <div id="react-counter" />
      <br>
      <button @click.prevent="setReactCounterValue(0)">Reset React Counter form Home</button>
      <br><br>
      <button @click.prevent="setReactCounterValue(7)">Set React Counter form Home = 7</button>
    </div>
  </div>
</div>
</template>

<script>
import React from "react";
import ReactDOM from "react-dom";
import Header from './Header.vue';
import Carousel from 'Detail/Carousel';
import VueHelloWorld from 'VueComponents/HelloWorld';
import VueCounter from 'VueComponents/Counter';
import ReactHelloWorld from 'ReactComponents/HelloWorld';
import ReactCounter from 'ReactComponents/Counter';

export default {
  components: {
    Header,
    Carousel,
    VueHelloWorld,
    VueCounter
  },
  data() {
    return {
      counter: 0,
      reactCount: 0
    }
  },
  methods:{
    init(){
      const loadedStates = ['complete', 'loaded', 'interactive'];
      if (loadedStates.includes(document.readyState) && document.body) {
        ReactDOM.render(<ReactCounter 
          counter={this.counter} />, 
          document.getElementById("react-counter"));

        ReactDOM.render(<ReactHelloWorld />, 
          document.getElementById("react-hello-world"));
      } else {
        window.addEventListener('DOMContentLoaded', run, false);
      }
    },
    setReactCounterValue(val) {
      this.counter = val;
      ReactDOM.unmountComponentAtNode(document.getElementById('react-counter'));
      this.init();
    }
  },
  mounted(){
    this.init();
  }
}
</script>