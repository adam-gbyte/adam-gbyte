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
</script>

<svelte:head>
  <title>Adam Gumilang</title>
  <meta name="description" content="Profil Adam Gumilang, Pengembang Web" />
</svelte:head>

<Navbar />

<main
  class="flex flex-col scroll-mt-22 min-h-screen items-center justify-center dark:bg-blue-950 text-gray-900 dark:text-white"
>
  <section
    id="home"
    class="flex md:flex-row max-w-6xl min-h-screen scroll-mt-16 flex-col items-center gap-4 p-6"
  >
    <div class="flex flex-col md:max-w-1/2">
      <h1 class="text-2xl md:text-4xl font-bold dark:text-yellow-400 mb-6">
        Adam Gumilang
      </h1>
      <p class="mb-4 dark:text-gray-300">
        Hi, I'm Adam Gumilang, a passionate web developer with expertise in
        building modern and responsive web applications. Welcome to my
        portfolio!
      </p>
    </div>
    <CodeCard title="Svelte" code={exampleCode} />
  </section>

  <section
    id="about"
    class="w-6xl min-h-screen items-center scroll-mt-22 justify-center p-6"
  >
    <h1 class="text-3xl text-center font-bold">ABOUT</h1>
  </section>

  <section
    id="experience"
    class="w-6xl min-h-screen items-center scroll-mt-22 justify-center p-6"
  >
    <h1 class="text-3xl text-center font-bold">EXPPERIENCE</h1>
  </section>

  <section
    id="skills"
    class="w-6xl min-h-screen items-center scroll-mt-22 justify-center p-6"
  >
    <h1 class="text-3xl text-center font-bold">SKILLS</h1>
  </section>

  <section
    id="education"
    class="w-6xl min-h-screen items-center scroll-mt-22 justify-center p-6"
  >
    <h1 class="text-3xl text-center font-bold">EDUCATION</h1>
  </section>

  <section
    id="projects"
    class="w-6xl min-h-screen items-center scroll-mt-22 justify-center p-6"
  >
    <h1 class="text-3xl text-center font-bold">PROJECTS</h1>
  </section>
</main>

<footer class="p-6 text-center bg-gray-100 dark:bg-gray-900 dark:text-gray-400">
  &copy; {new Date().getFullYear()} Adam Gumilang. All rights reserved.
</footer>
