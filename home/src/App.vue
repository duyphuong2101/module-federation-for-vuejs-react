<template>
<div class="container">
  <Header />
  <h1>Great Dogs Deserve Great Homes</h1>
  <Carousel />
  <br />
  <div class="counter">
    <div class="vue">
      <h3>Vue Counter</h3>
      <vue-button :parent-count="counter" ref="vuecounter" />
      <br><br />
      <button @click.prevent="$refs.vuecounter.incrementReset">Reset vue Counter form Home</button>
      <br><br />
      <button @click.prevent="$refs.vuecounter.setCounterValue(5)">Set vue Counter form Home = 5</button>
    </div>
    <div class="react">
      <h3>React Counter</h3>
      <div id="button-react" />
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
import Item from 'Item/Item';
import VueButton from 'VueButton/Button';
import ReactButtom from 'ReactButton/Button';

export default {
  components: {
    Header,
    Carousel,
    Item,
    VueButton
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
        ReactDOM.render(<ReactButtom 
          counter={this.counter} />, 
          document.getElementById("button-react"));
      } else {
        window.addEventListener('DOMContentLoaded', run, false);
      }
    },
    setReactCounterValue(val) {
      let self = this;
      self.counter = val;
      ReactDOM.unmountComponentAtNode(document.getElementById('button-react'));
      self.init();
    }
  },
  mounted(){
    this.init();
  }
}
</script>