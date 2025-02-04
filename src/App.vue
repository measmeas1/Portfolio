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
        <h6 class="text-2xl font-medium lg:text-4xl xl-text-5xl mb-8">Software Developer</h6>
        
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
      <h2 class="text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-center underline pt-5 font-bold">About <span class="text-green-400">Me</span></h2>
      <p class="text-xl px-5 py-10 md:py-20 md:px-40 md:text-justify md:text-1xl lg:text-2xl xl:text-3xl">I’m <span class="text-green-400">Mab Meas</span>, a dedicated software development student at Norton University. I have a solid grasp of core programming languages like Java, JavaScript, Node.js and Python, along with experience in web development using HTML, CSS, and frameworks such as Vue and Tailwind. I’m also gaining experience with mobile development in Flutter and working with databases using MySQL.    
        
        I’m always eager to learn more and improve my skills, and I’m looking for an internship to further expand my knowledge while contributing to meaningful projects.   
      </p>
    </div>
  </section>

  <section id="skills" class="py-10 lg:py-40">
  <div class="text-center">
    <h2 class="text-5xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-b from-green-400 to-white text-transparent bg-clip-text font-bold">Skills</h2>
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

<section id="projects" class="py-40">
    <div class="text-center mb-16">
      <h2 class="text-5xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-b from-white to-green-400 text-transparent bg-clip-text font-bold">Projects</h2>
    </div>
    <!-- Project Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
      <!-- Project 1 -->

      <div class="bg-slate-800 border-2 border-green-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-green-700">
      <img src="./assets/logo_2.jpg" alt="Project 3" class="w-full h-56 object-cover rounded-t-lg" />
      <div class="p-6">
        <h3 class="text-2xl font-semibold text-gray mb-2">Project 1</h3>
        <p class="text-sm text-gray-300 mb-4">An e-commerce platform for buying and selling products online.</p>
        <p class="text-xs text-green-500 font-medium">Vue.js | Tailwind CSS | Stripe API</p>
        <div class="flex justify-between mt-6">
          <a href="https://github.com/yourusername/project3" target="_blank" class="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-colors duration-300">
            <i class="fab fa-github mr-2"></i> GitHub
          </a>
          <a href="https://yourdemo.com/project3" target="_blank" class="bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700 transition-colors duration-300">
            <i class="fas fa-external-link-alt mr-2"></i> Demo
          </a>
        </div>
      </div>
      </div>

      <div class="bg-slate-800 border-2 border-green-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-green-700">
      <img src="./assets/logo_2.jpg" alt="Project 3" class="w-full h-56 object-cover rounded-t-lg" />
      <div class="p-6">
        <h3 class="text-2xl font-semibold text-gray mb-2">Project 1</h3>
        <p class="text-sm text-gray-300 mb-4">An e-commerce platform for buying and selling products online.</p>
        <p class="text-xs text-green-500 font-medium">Vue.js | Tailwind CSS | Stripe API</p>
        <div class="flex justify-between mt-6">
          <a href="https://github.com/yourusername/project3" target="_blank" class="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-colors duration-300">
            <i class="fab fa-github mr-2"></i> GitHub
          </a>
          <a href="https://yourdemo.com/project3" target="_blank" class="bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700 transition-colors duration-300">
            <i class="fas fa-external-link-alt mr-2"></i> Demo
          </a>
        </div>
      </div>
      </div>
    </div>
  </section>

  <section id="contact" class="py-40 ">
    <div class="text-center mb-16">
      <h2 class="text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-b from-green-500 via-slate-300 to-green-500 text-transparent bg-clip-text font-bold">Contact</h2>
      <p class="px-5 text-xl md:text-1xl lg:text-2xl xl:text-3xl mt-5 md:mt-10 font-light">I would love to hear from you! Please leave a message below.</p>
    </div>

    <!-- Contact Form -->
  <div class="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-xl">
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="redirect" value="https://measmeasportfolio.netlify.app/thank-you" />

      <!-- Name Field -->
      <div class="mb-6">
        <label for="name" class="block text-xl md:text-1xl lg:text-2xl xl:text-3xl font-medium text-white">Your Name</label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          name="name"
          class="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          required
        />
      </div>

      <!-- Email Field -->
      <div class="mb-6">
        <label for="email" class="block text-xl md:text-1xl lg:text-2xl xl:text-3xl font-medium text-white">Your Email</label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          name="email"
          class="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          required
        />
      </div>

      <!-- Message Field -->
      <div class="mb-6">
        <label for="message" class="block text-xl md:text-1xl lg:text-2xl xl:text-3xl font-medium text-white">Your Message</label>
        <textarea
          v-model="formData.message"
          id="message"
          name="message"
          rows="6"
          class="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          required
        ></textarea>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-center mt-6">
        <button
          type="submit"
          class="py-3 px-8 bg-green-500 text-white font-semibold rounded-md hover:bg-green-400 transition-all"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>

     <!-- Social Media Links -->
  <div class="mt-16 text-center border-t-2 pt-10">
    <h3 class="text-3xl md:text-4xl xl:text-5xl font-semibold text-white mb-6 underline">Connect <span class="text-green-400">with</span> Me</h3>
    <div class="flex justify-center gap-10 md:gap-24 flex-wrap mt-10">
      <!-- Email -->
      <div class="transform transition-transform duration-300 hover:scale-125 text-center">
        <a href="mailto:mabmeas12@gmail.com" target="_blank" class="text-3xl md:text-4xl xl:text-5xl text-green-500 hover:text-green-400">
          <i class="fas fa-envelope"></i>
        </a>
        <p class="text-lg md:text-xl xl:text-2xl text-white mt-2">Mail</p>
      </div>

      <!-- LinkedIn -->
      <div class="transform transition-transform duration-300 hover:scale-125 text-center">
        <a href="https://www.linkedin.com/in/mab-meas-89a8a3335/" target="_blank" class="text-3xl md:text-4xl xl:text-5xl text-green-500 hover:text-green-400">
          <i class="fab fa-linkedin"></i>
        </a>
        <p class="text-lg md:text-xl xl:text-2xl text-white mt-2">LinkedIn</p>
      </div>

      <!-- Instagram -->
      <div class="transform transition-transform duration-300 hover:scale-125 text-center">
        <a href="https://www.instagram.com/meas_dudu/" target="_blank" class="text-3xl md:text-4xl xl:text-5xl text-green-500 hover:text-green-400">
          <i class="fab fa-instagram"></i>
        </a>
        <p class="text-lg md:text-xl xl:text-2xl text-white mt-2">Instagram</p>
      </div>

      <!-- GitHub -->
      <div class="transform transition-transform duration-300 hover:scale-125 text-center">
        <a href="https://github.com/measmeas1" target="_blank" class="text-3xl md:text-4xl xl:text-5xl text-green-500 hover:text-green-400">
          <i class="fab fa-github"></i>
        </a>
        <p class="text-lg md:text-xl xl:text-2xl text-white mt-2">GitHub</p>
      </div>
    </div>
  </div>

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
