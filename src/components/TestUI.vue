<template>
  <div class="w-full  text-gray-800 bg-black font-mono">

    <!-- Header Section -->
    <header class="sticky top-0 bg-black text-white p-4 z-50 shadow-lg w-full">
      <div class="flex justify-between items-center w-full">
        <h1 class="text-2xl font-semibold">Mab Meas</h1>
        <nav>
          <ul class="flex space-x-6">
            <li><a href="#intro" class="hover:underline text-green-500 hover:text-green-400">Home</a></li>
            <li><a href="#about" class="hover:underline text-green-500 hover:text-green-400">About</a></li>
            <li><a href="#skills" class="hover:underline text-green-500 hover:text-green-400">Skills</a></li>
            <li><a href="#projects" class="hover:underline text-green-500 hover:text-green-400">Projects</a></li>
            <li><a href="#contact" class="hover:underline text-green-500 hover:text-green-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Introduction Section -->
    <section id="intro" class="w-full bg-black text-center py-16 border-b-2 border-white">
      <div class="max-w-screen-xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4 text-white">Hi, I'm John Doe</h2>
        <p class="text-lg text-white">Welcome to my personal portfolio. I'm a web developer passionate about building interactive and dynamic web applications.</p>
      </div>
    </section>

    <!-- About Me Section -->
    <section id="about" class="w-full py-16 px-4 bg-black border-b-2 border-white">
      <div class="max-w-screen-xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4 text-green-500 hover:text-green-400">About Me</h2>
        <p class="text-lg text-white max-w-2xl mx-auto">I am a passionate software engineer with a strong background in full-stack web development. I enjoy solving problems and creating applications that make a difference.</p>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="w-full bg-black py-16 px-4 border-b-2 border-white">
      <div class="max-w-screen-xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6 text-green-500 hover:text-green-400">Skills</h2>
        <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-lg">
          <li class="bg-black p-4 shadow-md rounded-lg text-white border-2 border-white hover:bg-green-500 hover:text-white hover:border-green-400">HTML & CSS</li>
          <li class="bg-black p-4 shadow-md rounded-lg text-white border-2 border-white hover:bg-green-500 hover:text-white hover:border-green-400">JavaScript (Vue.js, React)</li>
          <li class="bg-black p-4 shadow-md rounded-lg text-white border-2 border-white hover:bg-green-500 hover:text-white hover:border-green-400">Node.js</li>
          <li class="bg-black p-4 shadow-md rounded-lg text-white border-2 border-white hover:bg-green-500 hover:text-white hover:border-green-400">MongoDB</li>
          <li class="bg-black p-4 shadow-md rounded-lg text-white border-2 border-white hover:bg-green-500 hover:text-white hover:border-green-400">Git & GitHub</li>
          <li class="bg-black p-4 shadow-md rounded-lg text-white border-2 border-white hover:bg-green-500 hover:text-white hover:border-green-400">API Integration</li>
        </ul>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="w-full py-16 px-4 bg-black border-b-2 border-white">
      <div class="max-w-screen-xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6 text-green-500 hover:text-green-400">Projects</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-black p-6 rounded-lg shadow-lg border-2 border-white hover:bg-green-500 hover:text-white hover:border-green-400">
            <h3 class="text-2xl font-semibold mb-4 text-white">Project 1</h3>
            <p class="text-white">Description of the first project.</p>
          </div>
          <div class="bg-black p-6 rounded-lg shadow-lg border-2 border-white hover:bg-green-500 hover:text-white hover:border-green-400">
            <h3 class="text-2xl font-semibold mb-4 text-white">Project 2</h3>
            <p class="text-white">Description of the second project.</p>
          </div>
          <div class="bg-black p-6 rounded-lg shadow-lg border-2 border-white hover:bg-green-500 hover:text-white hover:border-green-400">
            <h3 class="text-2xl font-semibold mb-4 text-white">Project 3</h3>
            <p class="text-white">Description of the third project.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="w-full bg-black py-16 px-4 border-b-2 border-white">
      <div class="max-w-screen-xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6 text-green-500 hover:text-green-400">Contact Me</h2>
        <form class="max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" class="w-full p-3 mb-4 border-2 border-white rounded-lg text-white" required />
          <input type="email" placeholder="Your Email" class="w-full p-3 mb-4 border-2 border-white rounded-lg text-white" required />
          <textarea placeholder="Your Message" class="w-full p-3 mb-4 border-2 border-white rounded-lg text-white" rows="4" required></textarea>
          <button type="submit" class="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-400 border-2 border-white hover:border-green-400">Send</button>
        </form>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="w-full bg-black text-white py-6 text-center">
      <p>&copy; 2025 John Doe. All Rights Reserved.</p>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* Custom Styles - optional for further styling */
html {
  scroll-behavior: smooth;
}

body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>

