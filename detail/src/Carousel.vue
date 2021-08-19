<style>
  .carousel {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }
  .carousel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .carousel h1 {
    text-align: center;
    margin-top: 0;
  }
</style>
<template>
  <div class="carousel">
    <div>
      <img src="http://localhost:888/src/images/Cutie.jpg" />
      <h1>Cutie</h1>
    </div>
    <div>
      <img src="http://localhost:888/src/images/Ace.jpg" />
      <h1>Ace</h1>
    </div>
    <div>
      <img src="http://localhost:888/src/images/Spot.jpg" />
      <h1>Spot</h1>
    </div>
  </div>
</template>