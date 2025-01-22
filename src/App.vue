<template>
  <header class="sticky shadow-lg p-1 top-0 z-50 bg-back-ground">
    <div class="flex justify-around mt-5">
      <h1 class="text-3xl font-semibold text-left">Meas<span class="text-green-500 ">.</span></h1>
      <Mobile v-if="isMobile"/>
      <nav class="hidden md:flex items-center">
        <ul class="flex space-x-5">
          <li><a href="#home" @click="closeMenu">Home</a></li>
          <li><a href="#about" @click="closeMenu">About</a></li>
          <li><a href="#skills" @click="closeMenu">Skills</a></li>
          <li><a href="#projects" @click="closeMenu">Projects</a></li>
          <li><a href="#contact" @click="closeMenu">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section id="home">
    <div class="container mx-auto flex items-center justify-evenly py-20">
      <!-- Text on the left -->
      <div class="flex flex-col items-start">
        <h1 class="text-4xl font-bold flex flex-col">Hello, I'm <span class="text-green-400 text-6xl">Mab Meas</span></h1>
        <h6 class="text-xl font-medium">Software Developer</h6>
        <br>
        <p class="text-sm font-medium max-w-md ">Currently in my 3rd year at Norton University. Eager to learn, grow, and contribute to real-world projects as an intern.</p>
        <button class="mt-5 py-2 px-4 rounded-md text-white bg-green-500 hover:bg-green-400">Get In Touch</button>
      </div>
      <!-- Image on the right -->
      <div>
        <img src="./assets/Profile.png" alt="Meas" class="w-60 h-61 rounded-full object-cover">
      </div>
    </div>
  </section>

  <section>
    <p>I’m Mab Meas, a dedicated software development student at Norton University. I have a solid grasp of core programming languages like Java, JavaScript, and Python, along with experience in web development using HTML, CSS, and frameworks such as Vue and Tailwind. I’m also gaining experience with mobile development in Flutter and working with databases using MySQL.

I’m always eager to learn more and improve my skills, and I’m looking for an internship to further expand my knowledge while contributing to meaningful projects.

</p>
  </section>

</template>

<script>
import Mobile from "./components/Mobile.vue";

export default {
  name: "App",
  components: { Mobile },
  data() {
    return { isMobile: window.innerWidth < 768 };
  },
  mounted() {
    window.addEventListener('resize', () => this.isMobile = window.innerWidth < 768);
  },
  beforeDestroy() {
    window.removeEventListener('resize', () => this.isMobile = window.innerWidth < 768);
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit; /* Ensure it inherits the green color */
  position: relative;
  padding-bottom: 2px; 
}

a:hover{
  color: #48bb78;
}
a:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #48bb78; /* green-400 underline color */
  animation: underline 0.1s ease-in-out;
}

@keyframes underline {
  0% { width: 0; }
  100% { width: 100%; }
}
</style>
