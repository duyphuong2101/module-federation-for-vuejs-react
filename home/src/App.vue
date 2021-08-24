<template>
<div class="container">
  <Header />
  <h1>Great Dogs Deserve Great Homes</h1>
  <p>We are an adoption agency committed to putting wonderful adoptable dogs
  into great permanent homes...</p>

  <h1>Adoptable Dogs</h1>
  <Carousel />
  <br />
  <div class="counter">
    <div class="vue">
      <h3>Vue js Counter</h3>
      <vue-button :parent-count="counter" />
    </div>
    <div class="react">
      <h3>React js Counter</h3>
      <div id="button-react">
        <react-button />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { ReactInVue  } from 'vuera';
import Header from './Header.vue';
import Carousel from 'Detail/Carousel';
import Item from 'Item/Item';
import VueButton from 'VueButton/Button';
import ReactButton from 'ReactButton/Button';

export default {
  components: {
    Header,
    Carousel,
    Item,
    VueButton,
    'react-button': ReactInVue(ReactButton)
  },
  data() {
    return {
      counter: 0
    }
  }
}
</script>