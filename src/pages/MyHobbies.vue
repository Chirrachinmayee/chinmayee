<template>
  <q-page>
    <div>

      <div class="split left">
  <div class="centered">
    <h2> My Consious Acts </h2>
    <p>je ne sais quoi</p>

  </div>

</div>
<div class="split right">
  <div class="centered">
    <h2>Intrests</h2>
    <p>Travelling to Explore</p>
    <p>Singing & Music </p>
    <p>podcasts</p>
    <p>Best out of waste</p>
    <p>SelfHelp Books</p>
    
    
    
  

  </div>
</div>
      <q-btn round color="brown-5" icon="directions" />
  </div>
  </q-page>
</template>

<script setup>


</script>
<style>
/* Split the screen in half */
.split {
  height: 100%;
  width: 50%;
  position: fixed; 
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 50px;
}

/* Control the left side */
.left {
  left: 0;
  background-color: rgba(37, 147, 169, 0.991);
}

/* Control the right side */
.right {
  right: 0;
  background-color: rgb(225, 202, 46);
}

/* If you want the content centered horizontally and vertically */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}


</style>
