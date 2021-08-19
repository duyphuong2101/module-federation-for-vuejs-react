
<template>
<div class="container">
  <Header />
  
  <div class="detail">
    <img src="http://localhost:888/src/images/Cindy.jpg" />
    <div>
      <h1>Cindy</h1>
      <p>Cindy is a fabulous dog with a great personality...</p>
    </div>
  </div>

  <hr />

  <h1>More Adoptable Dogs</h1>
  <Carousel />
</div>
</template>

<script>
import Header from 'Home/Header';
import Carousel from 'Detail/Carousel';

export default {
  components: {
    Header,
    Carousel
  }
}
</script>