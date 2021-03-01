<template>
  <img
    class="Logo"
    alt="Logo"
    src="/svg/laravel-logo.svg"
  >
</template>

<style>
.Logo {
  height: 180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>