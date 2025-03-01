<template>
  <Header :isMobile="isMobile" :activeSection="activeSection" />

  <Home />

  <About />

  <Skills />

  <Projects />

  <Contact /> 

  <Footer />
  
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";



export default {
  name: "App",
  components: { Header, Home, About, Skills, Projects, Contact, Footer },
  data() {
    return {
      isMobile: window.innerWidth < 768,
      activeSection: "home",  
    };
  },

  methods: {
    updateMobileView() {
      this.isMobile = window.innerWidth < 768;
    },
    observeSections() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id;
            }
          });
        },
        { rootMargin: "-50% 0px" }
      );

      document.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
      });
    },
  },

  mounted() {
    window.addEventListener("resize", this.updateMobileView);
    this.observeSections();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateMobileView);
  },
};
</script>

<style scoped>


</style>


<!-- <template>
    <template>
    <section id="about" class="py-20 px-5">
      <div class="text-center max-w-8xl mx-auto">
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-extrabold underline decoration-green-400 mb-10">
          About <span class="text-green-400">Me</span>
        </h2>
        
        <div class="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
          <div class="relative group flex justify-center lg:flex-none">
            <img src="../assets/program.png" alt="photo"
            class="rounded-full h-56 w-56 md:h-72 md:w-72 lg:h-96 lg:w-96 xl:h-[28rem] xl:w-[28rem] object-cover shadow-2xl transition-transform transform group-hover:scale-110">
            <div class="absolute inset-0 bg-black bg-opacity-20 rounded-full group-hover:bg-opacity-50 transition-all"></div>
          </div>
          
          <div class="max-w-3xl text-center lg:text-left bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <p class="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed">
              I’m <span class="text-green-400 font-semibold">Mab Meas</span>, a dedicated software development student at Norton University.
              I have a solid grasp of core programming languages like <span class="font-semibold text-green-300">Java, JavaScript, Node.js,</span> and <span class="font-semibold text-green-300">Python</span>, along with experience in web development using <span class="font-semibold text-green-300">HTML, CSS,</span> and frameworks such as <span class="font-semibold text-green-300">Vue</span> and <span class="font-semibold text-green-300">Tailwind</span>.
              I’m also gaining experience with mobile development in <span class="font-semibold text-green-300">Flutter</span> and working with databases using <span class="font-semibold text-green-300">MySQL</span>.
            </p>
            
            <p class="mt-5 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed">
              I’m always eager to learn more and improve my skills, and I’m currently looking for an <span class="font-semibold text-green-400">internship</span>
              to further expand my knowledge while contributing to meaningful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>

<script>
export default {
  name: "About",
};
</script> -->
