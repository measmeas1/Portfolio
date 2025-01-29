<template>
  <header class="sticky shadow-lg p-1 top-0 z-50 bg-back-ground h-full">
    <div class="flex justify-around mt-5 ">
      <a href="">
        <h1 class="text-4xl md:text-6xl font-semibold text-left">Meas<span class="text-green-500 ">.</span></h1>
      </a>
      <Mobile v-if="isMobile"/>
      <nav class="hidden md:flex items-center text-2xl">
        <ul class="flex space-x-7 lg:space-x-11 justify-between">
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
    <div class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:justify-around py-10 md:py-20 gap-10 md:gap-10 h-screen">
      <!-- Text on the left -->
      <div class="flex flex-col items-center text-center md:items-start md:text-left gap-2 md:gap-1">
        <h1 class="text-4xl font-bold flex flex-col mb-1 items-center md:items-start lg:text-6xl xl:text-7xl">Hello, I'm <span class="text-green-400 text-7xl lg:text-8xl xl:text-9xl">Mab Meas</span></h1>
        <h6 class="text-2xl font-medium lg:text-4xl xl-text-5xl mb-4">Software Developer</h6>
        <br>
        <p class="text-xl font-light max-w-2xl md:text-1xl lg:text-2xl xl:text-3xl">Welcome to my personal portfolio. I'm a software developer passionate about building interactive, eager to learn, grow, and contribute to real-world projects.</p>
        <button class="mt-5 py-2 px-4 rounded-md text-white bg-green-500 hover:bg-green-400">Get In Touch</button>
      </div>
      <!-- Image on the right -->
      <div>
        <img src="./assets/image2.png" alt="Meas" class="w-56 h-57 md:w-auto md:h-auto rounded-full border-2 border-green-400 shadow-[0px_5px_20px_rgba(0,255,0,0.5),inset_0px_3px_10px_rgba(255,255,255,0.7)]">
      </div>
    </div>
  </section>

  <section id="about" class="py-20 border-b-2 h-screen">
    <div class="text-center">
      <h2 class="text-4xl text-center">About <span class="text-green-400">Me</span></h2>
      <p class="text-xl py-10 p-20">I’m <span class="text-green-400">Mab Meas</span>, a dedicated software development student at Norton University. I have a solid grasp of core programming languages like Java, JavaScript, and Python, along with experience in web development using HTML, CSS, and frameworks such as Vue and Tailwind. I’m also gaining experience with mobile development in Flutter and working with databases using MySQL.    
        
        I’m always eager to learn more and improve my skills, and I’m looking for an internship to further expand my knowledge while contributing to meaningful projects.   
      </p>
    </div>
  </section>

  <section id="skills">

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
