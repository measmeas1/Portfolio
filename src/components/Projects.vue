<template>
  <section id="projects" class="py-40">
    <div class="text-center mb-16">
      <h2 class="text-5xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-b from-white to-green-400 text-transparent bg-clip-text font-bold">Projects</h2>
    </div>
    <!-- Project Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
      <div v-for="project in projects" :key="project.name" class="bg-slate-800 border-2 border-green-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-green-700">
        <img :src="`/${project.image}`" :alt="project.name" class="w-full h-56 object-cover rounded-t-lg" />
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-gray mb-2">{{ project.name }}</h3>
          <p class="text-sm text-gray-300 mb-4">{{ project.description }}</p>
          <p class="text-xs text-green-400 font-medium">{{ project.technologies }}</p>
          <div class="flex justify-between mt-6">
            <a :href="project.github" target="_blank" class="bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-800 transition-colors duration-300">
              <i class="fab fa-github mr-2"></i> GitHub
            </a>
            <a :href="project.demo" target="_blank" class="bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-800 transition-colors duration-300">
              <i class="fas fa-external-link-alt mr-2"></i> Demo
            </a>
          </div>
        </div>
          <!-- Glow Effect -->
          <div class="absolute inset-0 bg-green-700 opacity-10 rounded-2xl blur-2xl"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          name: "Project 1",
          image: "logo_2.jpg",
          description: "An e-commerce platform for buying and selling products online.",
          technologies: "Vue.js | Tailwind CSS | Stripe API",
          github: "https://github.com/yourusername/project1",
          demo: "https://yourdemo.com/project1"
        },
        {
          name: "Project 2",
          image: "logo_2.jpg",
          description: "A modern blogging platform with rich text editing and media uploads.",
          technologies: "Vue.js | Firebase | Tailwind CSS",
          github: "https://github.com/yourusername/project2",
          demo: "https://yourdemo.com/project2"
        }
      ],
    };
  },
};
</script>
