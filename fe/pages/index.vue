<template>
    <div class="imgcn flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <!-- <h1 class="text-4xl md:text-6xl font-bold mb-4">Coming Soon</h1>
      <p class="text-lg md:text-xl text-gray-600 mb-6">We're working on something amazing. Stay tuned!</p> -->
      <img src="/comingsoon.png" alt="Coming Soon" class="imgsoon w-64 md:w-80 lg:w-96 rounded-lg shadow-lg" />
      <a class="email" href="mailto:email@example.com">email@example.com</a>
    </div>
  </template>
  
  <script setup>
  // No additional logic needed for a simple coming soon page
  </script>
  
  <style scoped>

  .imgcn{
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    overflow: hidden;
    position: absolute;
  }

  .email{
    display: flex;
    width: 100vw;
    height: 132vh;
    font-size: 2vw;
    z-index: 2;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    color: black;
    text-decoration: none;
  }


  .imgsoon{
    width: 100%;
    height: 100%;
    object-fit: cover;
z-index: 1;
  }
  /* Add any custom styles here if needed */
  </style>