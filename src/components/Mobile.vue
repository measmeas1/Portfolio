<template>
  <div>
    <button @click="toggleMenu">&#9776;</button>
    <div v-if="menuOpen" class="absolute top-0 right-0 w-full bg-back-ground shadow-lg mt-12">
      <ul class="flex flex-col items-center space-y-4">
        <li><a href="#home" @click="closeMenu">Home</a></li>
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#skills" @click="closeMenu">Skills</a></li>
        <li><a href="#projects" @click="closeMenu">Projects</a></li>
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() { return { menuOpen: false }; },
  methods: {
    toggleMenu() { this.menuOpen = !this.menuOpen; },
    closeMenu() { this.menuOpen = false; },
  },
};
</script>

<style scoped>
button { 
  font-size: 2rem; 
}
li { 
  padding: 10px 0; 
}

a:focus, a:active {
  color: #48bb78; /* green-400 text color on click */
}

a.active {
  color: #48bb78; /* green-400 text color when active */
  font-weight: bold; /* Optional: make active link bold */
}

a.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #48bb78; /* green-400 underline color */
  animation: underline 0.3s ease-in-out;
}

@keyframes underline {
  0% { width: 0; }
  100% { width: 100%; }
}
</style>