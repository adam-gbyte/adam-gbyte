<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import CodeCard from '$lib/components/CodeCard.svelte';
  import { tabs } from '$lib/data/dataProjects';

  let active = 0;
  const exampleCode = `// MyComponent.jsx
import React from 'react';

const MyComponent = ({ name }) => {
  return (
    <div>
      <h1>Hello, i am {name}!</h1>
      <p>And i'm a Fullstack</p>
    </div>
  );
};

export default MyComponent;`;

  function select(i) {
    active = i;
  }
</script>

<svelte:head>
  <title>Adam Gumilang</title>
  <meta name="description" content="Profil Adam Gumilang, Web Developer" />
</svelte:head>

<Navbar />

<main class="flex flex-col items-center bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">

<section id="home" class="mt-24 flex min-h-screen w-full max-w-5xl flex-col items-center justify-center gap-12 px-6 md:flex-row">
  <div class="flex flex-col gap-4 text-center md:text-left">
    <h1 class="text-4xl font-semibold tracking-tight md:text-5xl">Adam Gumilang</h1>
    <h2 class="text-lg text-slate-500 dark:text-slate-400 md:text-xl">Back-end & Front-end Developer</h2>
    <p class="max-w-xl text-slate-600 dark:text-slate-400">
      I build clean, performant, and maintainable web applications.
    </p>
  </div>
  <CodeCard title="React" code={exampleCode} />
</section>

<section id="about" class="flex w-full justify-center px-6 py-32">
  <div class="flex max-w-4xl flex-col gap-10 rounded-2xl border border-slate-200 bg-white p-10 dark:border-white/10 dark:bg-slate-900 sm:flex-row">
    <img class="w-full rounded-xl sm:w-1/3" src="https://ik.imagekit.io/ginvitations/assets/BrideAndGroom.png" alt="Profile" />
    <div class="flex flex-col justify-center gap-4">
      <h2 class="text-2xl font-semibold">About</h2>
      <p class="text-slate-600 dark:text-slate-400">
        I'm a front-end & back-end developer with 2 years of experience building modern web applications.
        I enjoy crafting clean UI, scalable systems, and continuously learning new technologies.
      </p>
    </div>
  </div>
</section>

<section id="skills" class="flex w-full flex-col items-center px-6 py-24">
  <h2 class="text-2xl font-semibold">Skills</h2>
  <div class="mt-10 flex flex-wrap justify-center gap-3">
    {#each ['HTML','CSS','JavaScript','Svelte','React','Node','Tailwind','PostgreSQL'] as skill}
      <span class="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600 dark:border-white/20 dark:text-slate-300">
        {skill}
      </span>
    {/each}
  </div>
</section>

<!-- PROJECTS -->
<section id="projects" class="flex w-full max-w-6xl flex-col gap-10 px-6 py-24">
  <h2 class="text-center text-2xl font-semibold">Projects</h2>

  <div class="flex flex-col gap-8 md:flex-row">
    <div class="flex w-full gap-3 overflow-auto md:w-1/4 md:flex-col">
      {#each tabs as tab, i}
        <button
          class="rounded-xl border px-3 py-2 text-sm transition
          {i === active 
            ? 'border-slate-900 text-slate-900 dark:border-white dark:text-white' 
            : 'border-transparent text-slate-500 hover:border-slate-300 dark:text-slate-400'}"
          on:click={() => select(i)}>
          {tab.title}
        </button>
      {/each}
    </div>

    {#each tabs as tab, i}
      <div hidden={i !== active} class="flex-1 rounded-2xl border p-8 dark:border-white/10">
        <h3 class="text-xl font-semibold">{tab.title}</h3>
        <p class="mt-2 text-slate-600 dark:text-slate-400">{tab.description}</p>
        <a href={tab.link} class="mt-4 inline-block text-sm text-blue-600 hover:underline dark:text-blue-400">
          View project →
        </a>
      </div>
    {/each}
  </div>
</section>

<!-- CONTACT -->
<section id="contacts" class="flex w-full justify-center px-6 py-32">
  <div class="flex max-w-md flex-col items-center gap-6 rounded-2xl border border-slate-200 p-10 dark:border-white/10">
    <h2 class="text-2xl font-semibold">Get in touch</h2>
    <p class="text-center text-slate-600 dark:text-slate-400">
      Have a project or want to collaborate? Let’s talk.
    </p>
    <a href="mailto:adamgumilang2103@gmail.com" class="text-blue-600 hover:underline dark:text-blue-400">
      adamgumilang2103@gmail.com
    </a>
  </div>
</section>

</main>

<Footer />
