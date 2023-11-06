<template>
  <q-page>
    <div>

      <div class="split left">
  <div class="centered">
    <h2> Hello! I am Chinmayee </h2>
    <p>Exploring so called life journey.</p>

  </div>

</div>
<div class="split right">
  <div class="centered">
    <h2>About Me</h2>
    <p>I am a enthusiastic person and a self-motivated individual.
      All I like to do is to learn and explore.Its a big world 
      with intresting facts and my quest towards
       Bussiness,technology and pschology is never ending.
      
    </p>
    <table>
  <tr>
    <th>Company</th>
    <th>Education</th>
    <th>Address</th>
    <th>Mobile no:</th>
    
  </tr>
  <tr>
    <td>LTIMINDTREE</td>
    <td>IARE</td>
    <td>Hyderabad</td>
    <td>7569972604</td>
    
  </tr>
  
</table>
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
  height: 80%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

/* Control the left side */
.left {
  left: 0;
  background-color: rgba(37, 147, 169, 0.991)
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

/* Style the image inside the centered container, if needed */
.centered img {
  width: 150px;
  border-radius: 50%;
}
</style>
