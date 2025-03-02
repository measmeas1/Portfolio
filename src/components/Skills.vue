<template>
  <section id="skills" class="py-10 lg:py-40">
    <div class="text-center mb-12">
      <h2 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900">
        <span class="bg-gradient-to-r from-green-400 to-white text-transparent bg-clip-text">Skills</span>
      </h2>
    </div>

    <div class="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-center">
      <div class="flex flex-col items-center" v-for="skill in skills" :key="skill.name">
        <div class="skill-box p-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-125">
          <img :src="`/assets/${skill.icon}`" :alt="skill.name" class="w-16 h-16 mb-4">
          <div class="absolute inset-0 bg-green-400 opacity-10 rounded-full blur-lg"></div>
        </div>
        <span class="text-xl font-semibold ">{{ skill.name }}</span>
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        { name: "HTML", icon: "html5.svg" },
        { name: "CSS", icon: "css3.svg" },
        { name: "JavaScript", icon: "javascript.svg" },
        { name: "Vue.js", icon: "vue.svg" },
        { name: "Tailwind CSS", icon: "tailwind.svg" },
        { name: "Java", icon: "java.svg" },
        { name: "Node.js", icon: "node.svg" },
        { name: "MySQL", icon: "mysql.svg" },
        { name: "PostgreSQL", icon: "postgresql.svg" },
        { name: "GitHub", icon: "github.svg" },
      ],
    };
  },
};
</script>

