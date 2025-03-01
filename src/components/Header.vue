<template>
  <header class="sticky shadow-lg p-1 top-0 z-50 bg-back-ground h-full">
    <div class="flex justify-around mt-5">
      <a href="">
        <h1 class="text-4xl md:text-6xl font-semibold text-left">
          Meas<span class="text-green-500">.</span>
        </h1>
      </a>
      <Mobile v-if="isMobile" />
      <nav class="hidden md:flex items-center text-2xl">
        <ul class="flex space-x-7 lg:space-x-11 justify-between">
          <li>
            <a href="#home" :class="{ 'text-green-500': activeSection === 'home' }" class="nav">Home</a>
          </li>
          <li>
            <a href="#about" :class="{ 'text-green-500': activeSection === 'about' }" class="nav">About</a>
          </li>
          <li>
            <a href="#skills" :class="{ 'text-green-500': activeSection === 'skills' }" class="nav">Skills</a>
          </li>
          <li>
            <a href="#projects" :class="{ 'text-green-500': activeSection === 'projects' }" class="nav">Projects</a>
          </li>
          <li>
            <a href="#contact" :class="{ 'text-green-500': activeSection === 'contact' }" class="nav" @click="scrollToContact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Mobile from "./Mobile.vue";

export default {
  name: "Header",
  components: { Mobile },
  props: {
    isMobile: Boolean,
    activeSection: String,
  },
  methods: {
    scrollToContact() {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
.nav {
  text-decoration: none;
  color: inherit; /* Ensure it inherits the green color */
  position: relative;
  padding-bottom: 2px; 
}

.nav:hover{
  color: #48bb78;
}
.nav:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #48bb78; /* green-400 underline color */
  animation: underline 0.1s ease-in-out;
}

.nav.text-green-500 {
  color: #48bb78; /* Green color when active */
}

@keyframes underline {
  0% { width: 0; }
  100% { width: 100%; }
}
</style>
