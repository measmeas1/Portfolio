<template>
  <section id="home" class="relative">
    <div class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:justify-around py-10 md:py-20 gap-10 md:gap-10 h-screen">
      <!-- Text on the left with animation -->
      <Motion v-bind="fadeInLeft" 
        class="flex flex-col items-center text-center md:items-start md:text-left gap-2 md:gap-1">
        <h1 class="text-4xl font-bold flex flex-col mb-1 items-center md:items-start lg:text-6xl xl:text-7xl">
          Hello, I'm <span class="text-green-400 text-7xl lg:text-8xl xl:text-9xl font-lilita">Mab Meas</span>
        </h1>
        <h6 class="text-2xl font-medium lg:text-4xl xl-text-5xl mb-8">Software Developer</h6>
        
        <p class="text-xl p-3 font-light max-w-2xl md:text-1xl lg:text-2xl xl:text-3xl">
          Welcome to my personal portfolio. I'm a software developer passionate about building interactive applications, eager to learn, grow, and contribute to real-world projects.
        </p>

        <div class="flex flex-row sm:flex-row gap-4 mt-6 cursor-pointer">
          <Motion 
            v-bind="{ whileHover: { scale: 1.1 } }"
            @click="scrollToContact"
            class="py-4 px-6 text-lg font-semibold rounded-lg text-white bg-green-500 hover:bg-green-700 transition duration-300">
            Get In Touch
          </Motion>
          
          <a 
            v-bind="{ whileHover: { scale: 1.1 } }"
            :href="'/meas.pdf'"
            download 
            class="py-4 px-6 text-lg font-semibold rounded-lg text-white bg-blue-800 hover:bg-blue-600 transition duration-300 ">
            Download CV
          </a>
        </div>
      </Motion>
      
      <!-- Image on the right with animation -->
      <Motion v-bind="fadeInRight">
        <img src="../assets/image2.png" alt="Meas" 
          class="w-56 h-57 md:w-auto md:h-auto rounded-full border-4 border-green-400 shadow-[0px_5px_60px_rgba(0,255,0,0.4),inset_0px_4px_20px_rgba(255,255,255,0.7)]">
      </Motion>
    </div>
  </section>
</template>


<script>
import { Motion } from '@motionone/vue';

export default {
  name: "Home",
  components: { Motion },
  methods: {
    scrollToContact() {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }
  },
  data() {
    return {
      fadeInLeft: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0, transition: { duration: 1 } }
      },
      fadeInRight: {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0, transition: { duration: 1 } }
      }
    };
  }
};
</script>

