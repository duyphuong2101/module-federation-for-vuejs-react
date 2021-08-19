<template>
<div class="container">
  <Header />
  <h1>Great Dogs Deserve Great Homes</h1>
  <p>We are an adoption agency committed to putting wonderful adoptable dogs
  into great permanent homes...</p>

  <h1>Adoptable Dogs</h1>
  <Carousel />
  <Item :src="'http://localhost:888/src/images/Cindy.jpg'" :alt="'Cindy'" />
  <vue-button :parent-count="counter" />
</div>
</template>

<script>
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
    ReactButton
  },
  data() {
      return {
        counter: 0
      }
    }
}
</script>