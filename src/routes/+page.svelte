<script>
  import { onMount } from "svelte";
  import { Moon, Sun } from "lucide-svelte";
  import CodeCard from "$lib/components/CodeCard.svelte";
  import Navbar from "$lib/components/Navbar.svelte";

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

<svelte:head>
  <title>Adam Gumilang</title>
  <meta name="description" content="Profil Adam Gumilang, Pengembang Web" />
</svelte:head>

<Navbar />

<!-- <nav>
  <div class="bg-gray-800 p-4 text-white text-center font-semibold">
    Adam Gumilang
  </div>
</nav> -->

<main class="min-h-screen dark:bg-blue-950 text-gray-900 dark:text-white">
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
  <section class="min-h-screen transition-colors">
    <h1 class="text-3xl font-bold">Halo Dunia</h1>
    <p>SSECTION KILLS</p>
  </section>
</main>
