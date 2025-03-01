<template>
  <footer class="bg-gray-900 text-white py-10 mt-20 text-center">
    <h3 class="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 underline">Connect <span class="text-green-400">with</span> Me</h3>
    <div class="flex justify-center gap-10 mt-10">
      <div v-for="social in socials" :key="social.name" class="text-center transform transition-transform duration-300 hover:scale-110">
        <a :href="social.link" target="_blank" class="text-2xl md:text-3xl xl:text-4xl text-green-500 hover:text-green-400">
          <i :class="social.icon"></i>
        </a>
        <p class="text-md md:text-lg xl:text-xl text-white mt-2">{{ social.name }}</p>
      </div>
    </div>
    <p class="mt-10 text-lg md:text-xl xl:text-2xl font-light">Made with 
      <img src="../assets/vue.svg" class="inline-block w-8 h-8 text-green-500 animate-pulse"> and 
      <img src="../assets/tailwind.svg" class="inline-block w-8 h-8 text-blue-500 animate-bounce">. © 2025
    </p>
  </footer>
</template>

<script>  
export default {
  name: 'Footer',
  data() {
    return {
      socials: [
        { name: 'Email', icon: 'fas fa-envelope', link: 'mailto:mabmeas12@gmail.com' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/mab-meas-89a8a3335/' },
        { name: 'Instagram', icon: 'fab fa-instagram', link: 'https://www.instagram.com/meas_dudu/' },
        { name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/measmeas1' }
      ]
    };
  }
};
</script>

<style>
footer {
  background-color: #1a202c;
  color: #fff;
  padding-top: 20px;
}

footer .text-green-500 {
  color: #48bb78; /* Green color for hover */
}

footer .transform:hover {
  transform: scale(1.15);
}

footer i {
  transition: transform 0.3s ease;
}

footer i:hover {
  transform: translateY(-5px);
}
</style>