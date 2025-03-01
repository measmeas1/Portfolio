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
