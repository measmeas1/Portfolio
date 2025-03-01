<template>
  <section id="contact" class="py-40">
    <!-- Title -->
    <div class="text-center mb-10">
      <h2 class="text-5xl md:text-6xl lg:text-7xl font-extrabold">
        <span class="bg-gradient-to-r from-white to-green-500 text-transparent bg-clip-text">Contact</span>
      </h2>
      <p class="px-6 text-lg md:text-xl lg:text-2xl mt-5 font-light">
        I would love to hear from you! Please leave a message below.
      </p>
    </div>

    <!-- Contact Form -->
    <div class="max-w-3xl mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-lg">
      <form name="contact" data-netlify="true" method="POST">
        <input type="hidden" name="form-name" value="contact" />

        <!-- Name Field -->
        <div class="mb-6">
          <label for="name" class="block text-lg font-medium text-white">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full p-4 mt-2 border border-gray-600 bg-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            required
          />
        </div>

        <!-- Email Field -->
        <div class="mb-6">
          <label for="email" class="block text-lg font-medium text-white">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full p-4 mt-2 border border-gray-600 bg-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            required
          />
        </div>

        <!-- Message Field -->
        <div class="mb-6">
          <label for="message" class="block text-lg font-medium text-white">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            class="w-full p-4 mt-2 border border-gray-600 bg-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-center">
          <button
            type="submit"
            class="py-3 px-8 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition-all"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>

    <!-- Success Message -->
    <div v-if="formStatus" class="mt-6 text-center">
      <p class="text-xl text-green-400">Thank you for your message!</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      formStatus: false
    };
  }
};
</script>
