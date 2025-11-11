<script>
  import { onMount } from "svelte";
  import CodeCard from "$lib/components/CodeCard.svelte";

  const exampleCode = `
// MyComponent.jsx
import React from 'react';

const MyComponent = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a functional React component.</p>
    </div>
  );
};

export default MyComponent;`;

  let theme = "light";
  onMount(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      theme = saved;
    } else {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    document.documentElement.classList.toggle("dark", theme === "dark");
  });

  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }
</script>

<nav>
  <div class="bg-gray-800 p-4 text-white text-center font-semibold">
    Adam Gumilang
  </div>
</nav>

<main class="min-h-screen dark:bg-blue-950">
  <section
    class="min-h-screen flex md:flex-row flex-col items-center justify-center p-6"
  >
    <div class="flex flex-col md:max-w-1/2">
      <h1 class="text-2xl md:text-3xl font-bold dark:text-yellow-400 mb-6">
        Adam Gumilang
      </h1>
      <p class="mb-4 dark:text-gray-300">
        Halo! Saya Adam Gumilang, seorang pengembang web dengan minat besar
        dalam menciptakan pengalaman digital yang menarik dan fungsional. Dengan
        keahlian dalam berbagai teknologi web, saya berkomitmen untuk
        menghadirkan solusi inovatif yang memenuhi kebutuhan pengguna.
      </p>
    </div>
    <CodeCard title="Svelte" code={exampleCode} />
  </section>
  <div class=" text-gray-900 dark:text-white min-h-screen transition-colors">
    <button
      on:click={toggleTheme}
      class="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors"
    >
      {theme === "dark" ? "🌞 Mode Terang" : "🌙 Mode Gelap"}
    </button>
    <h1 class="text-3xl font-bold">Halo Dunia</h1>
    <p>Contoh tema terang & gelap dengan SvelteKit + Tailwindv4</p>
  </div>
</main>
