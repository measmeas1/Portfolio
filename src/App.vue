<template>
  <header class="sticky shadow-lg p-1 top-0 z-50 bg-back-ground h-full">
    <div class="flex justify-around mt-5 ">
      <a href="">
        <h1 class="text-4xl md:text-6xl font-semibold text-left">Meas<span class="text-green-500 ">.</span></h1>
      </a>
      <Mobile v-if="isMobile"/>
      <nav class="hidden md:flex items-center text-2xl">
        <ul class="flex space-x-7 lg:space-x-11 justify-between">
          <li>
            <a href="#home" :class="{ 'text-green-500': activeSection === 'home' }">Home</a>
          </li>
          <li>
            <a href="#about" :class="{ 'text-green-500': activeSection === 'about' }">About</a>
          </li>
          <li>
            <a href="#skills" :class="{ 'text-green-500': activeSection === 'skills' }" >Skills</a>
          </li>
          <li>
            <a href="#projects" :class="{ 'text-green-500': activeSection === 'projects' }" >Projects</a>
          </li>
          <li>
            <a href="#contact" :class="{ 'text-green-500': activeSection === 'contact' }">Contact</a>
          </li>
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

  <section id="about" class="py-20">
    <div class="text-center">
      <h2 class="text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-center underline pt-5">About <span class="text-green-400">Me</span></h2>
      <p class="text-xl px-20 py-10 md:py-20 md:px-40 md:text-justify md:text-1xl lg:text-2xl xl:text-3xl">I’m <span class="text-green-400">Mab Meas</span>, a dedicated software development student at Norton University. I have a solid grasp of core programming languages like Java, JavaScript, Node.js and Python, along with experience in web development using HTML, CSS, and frameworks such as Vue and Tailwind. I’m also gaining experience with mobile development in Flutter and working with databases using MySQL.    
        
        I’m always eager to learn more and improve my skills, and I’m looking for an internship to further expand my knowledge while contributing to meaningful projects.   
      </p>
    </div>
  </section>

  <section id="skills" class="py-10 lg:py-40">
  <div class="text-center">
    <h2 class="text-5xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-b from-green-400 to-white text-transparent bg-clip-text">Skills</h2>
  </div>

  <!-- Skill Icons Grid -->
  <div class="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-center">
    <!-- Skill 1: HTML -->
    <div class="flex flex-col items-center">
      <div class="skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125">
        <img src="./assets/html5.svg" alt="HTML" class="w-16 h-16 mb-4">
      </div>
      <span class="text-xl font-semibold">HTML</span>
    </div>

    <!-- Skill 2: CSS -->
    <div class="flex flex-col items-center">
      <div class="skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125">
        <img src="./assets/css3.svg" alt="CSS" class="w-16 h-16 mb-4">
      </div>
      <span class="text-xl font-semibold">CSS</span>
    </div>

    <!-- Skill 3: JavaScript -->
    <div class="flex flex-col items-center">
      <div class="skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-110">
        <img src="./assets/javascript.svg" alt="JavaScript" class="w-16 h-16 mb-4">
      </div>
      <span class="text-xl font-semibold">JavaScript</span>
    </div>

    <!-- Skill 4: Vue -->
    <div class="flex flex-col items-center">
      <div class="skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125">
        <img src="./assets/vue.svg" alt="Vue.js" class="w-16 h-16 mb-4">
      </div>
      <span class="text-xl font-semibold">Vue.js</span>
    </div>

    <!-- Skill 5: Tailwind CSS -->
    <div class="flex flex-col items-center">
      <div class="skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125">
        <img src="./assets/tailwind.svg" alt="Tailwind CSS" class="w-16 h-16 mb-4">
      </div>
      <span class="text-xl font-semibold">Tailwind CSS</span>
    </div>

    <!-- Skill 6: Java -->
    <div class="flex flex-col items-center">
      <div class="skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125">
        <img src="./assets/java.svg" alt="Java" class="w-16 h-16 mb-4">
      </div>
      <span class="text-xl font-semibold">Java</span>
    </div>

    <!-- Skill 7: Node.js -->
    <div class="flex flex-col items-center">
      <div class="skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125">
        <img src="./assets/node.svg" alt="Node.js" class="w-16 h-16 mb-4">
      </div>
      <span class="text-xl font-semibold">Node.js</span>
    </div>

    <!-- Skill 8: MySQL -->
    <div class="flex flex-col items-center">
      <div class="skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125">
        <img src="./assets/mysql.svg" alt="MySQL" class="w-16 h-16 mb-4">
      </div>
      <span class="text-xl font-semibold">MySQL</span>
    </div>

    <!-- Skill 9: PostgreSQL -->
    <div class="flex flex-col items-center">
      <div class="skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125">
        <img src="./assets/postgresql.svg" alt="PostgreSQL" class="w-16 h-16 mb-4">
      </div>
      <span class="text-xl font-semibold">PostgreSQL</span>
    </div>

    <!-- Skill 10: GitHub -->
    <div class="flex flex-col items-center">
      <div class="skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-110">
        <img src="./assets/github.svg" alt="GitHub" class="w-16 h-16 mb-4">
      </div>
      <span class="text-xl font-semibold">GitHub</span>
    </div>
  </div>
</section>

<section>
  
</section>


</template>

<script>
import Mobile from "./components/Mobile.vue";

export default {
  name: "App",
  components: { Mobile },
  data() {
    return {
      isMobile: window.innerWidth < 768,
      activeSection: "home",  
    };
  },
  mounted() {
    // Watch for window resize
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth < 768;
    });

    // Use Intersection Observer to watch sections as they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;  // Set the active section to the current section
          }
        });
      },
      {
        rootMargin: "-50% 0px", // This makes it trigger when the section is at the center of the screen
      }
    );

    // Observe the sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", () => {
      this.isMobile = window.innerWidth < 768;
    });
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

a.text-green-500 {
  color: #48bb78; /* Green color when active */
}

@keyframes underline {
  0% { width: 0; }
  100% { width: 100%; }
}

</style>
