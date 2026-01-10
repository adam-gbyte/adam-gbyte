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
<section id="projects" class="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-28">
  <h2 class="text-center text-3xl font-semibold tracking-tight">Projects</h2>

  <div class="flex flex-col gap-10 md:flex-row">

    <!-- Tabs -->
    <div class="flex w-full gap-3 overflow-x-auto md:w-1/4 md:flex-col md:overflow-visible">
      {#each tabs as tab, i}
        <button
          class="group rounded-xl border px-4 py-2 text-sm font-medium transition
          {i === active 
            ? 'border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900' 
            : 'border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:border-white/10 dark:text-slate-400 dark:hover:text-white'}"
          on:click={() => select(i)}>
          {tab.title}
        </button>
      {/each}
    </div>

    <!-- Content -->
    {#each tabs as tab, i}
      <div hidden={i !== active} class="flex-1 rounded-3xl border bg-white/70 p-10 backdrop-blur dark:border-white/10 dark:bg-slate-950/50">

        <!-- Text -->
        <div class="flex flex-col gap-6">
          <div>
            <h3 class="text-2xl font-semibold tracking-tight">{tab.title}</h3>
            <p class="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              {tab.description}
            </p>
          </div>

          <a
            href={tab.link}
            class="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/20 dark:text-slate-300 dark:hover:border-white dark:hover:text-white"
          >
            View project
            <span class="transition group-hover:translate-x-1">→</span>
          </a>

          <!-- Images (below text) -->
          <div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {#each tab.images as image}
              <div class="group relative overflow-hidden rounded-2xl border dark:border-white/10">
                <img 
                  src={image}
                  alt={tab.title}
                  class="h-40 w-full object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-black/0 transition group-hover:bg-black/10"></div>
              </div>
            {/each}
          </div>

        </div>
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
