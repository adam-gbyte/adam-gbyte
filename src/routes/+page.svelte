<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { tabs } from '$lib/data/dataProjects';

  let active = 0;
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

<section id="home"
  class="relative mx-auto mt-32 flex min-h-[80vh] w-full max-w-6xl flex-col items-center justify-center gap-12 px-6 md:flex-row">

  <!-- Text -->
  <div class="flex flex-col gap-5 text-center md:text-left">
    <h1 class="text-5xl font-bold tracking-tight md:text-6xl">
      Adam <span class="text-emerald-500">Gumilang</span>
    </h1>

    <h2 class="text-xl font-medium text-slate-600 dark:text-slate-400 md:text-2xl">
      Back-end & Front-end Developer
    </h2>

    <p class="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
      I design and build clean, performant, and scalable web applications with modern technologies and best practices.
    </p>

    <div class="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
      <a href="#projects"
        class="rounded-xl bg-emerald-500 px-6 py-3 font-medium text-white shadow-lg transition hover:bg-emerald-600">
        View Projects
      </a>

      <a href="#contacts"
        class="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-slate-500 hover:text-slate-900 dark:border-white/20 dark:text-slate-300 dark:hover:border-white/40 dark:hover:text-white">
        Contact Me
      </a>
    </div>
  </div>

  <!-- Visual Accent -->
  <div class="relative h-64 w-64 md:h-80 md:w-80">
    <div class="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 opacity-70 blur-2xl"></div>
    <div class="relative flex h-full w-full items-center justify-center rounded-full bg-slate-100 text-4xl font-bold text-slate-400 shadow-xl dark:bg-slate-800">
      AG
    </div>
  </div>

</section>

<section id="about" class="relative mx-auto flex w-full max-w-6xl justify-center px-6 py-32">
  <div
    class="grid w-full grid-cols-1 items-center gap-12 rounded-3xl border border-slate-200 bg-white p-12 shadow-sm dark:border-white/10 dark:bg-slate-900 md:grid-cols-2">

    <!-- Image -->
    <div class="relative">
      <div
        class="absolute -inset-3 rounded-3xl bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 opacity-30 blur-xl">
      </div>
      <img
        class="relative w-full rounded-3xl object-cover shadow-lg"
        src="https://ik.imagekit.io/ginvitations/assets/BrideAndGroom.png"
        alt="Profile" />
    </div>

    <!-- Text -->
    <div class="flex flex-col gap-5">
      <h2 class="text-3xl font-bold tracking-tight">
        About <span class="text-emerald-500">Me</span>
      </h2>

      <p class="leading-relaxed text-slate-600 dark:text-slate-400">
        I am a full-stack developer with over two years of experience building modern, maintainable, and scalable web
        applications. I focus on clean user interfaces, robust back-end systems, and continuous improvement through new
        technologies.
      </p>

      <div class="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div class="rounded-xl border border-slate-200 p-4 dark:border-white/10">
          <p class="font-medium">Experience</p>
          <p class="text-slate-500 dark:text-slate-400">2+ Years</p>
        </div>
        <div class="rounded-xl border border-slate-200 p-4 dark:border-white/10">
          <p class="font-medium">Focus</p>
          <p class="text-slate-500 dark:text-slate-400">Full-Stack Web</p>
        </div>
      </div>
    </div>

  </div>
</section>

<section id="skills" class="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-32">
  <h2 class="text-3xl font-bold tracking-tight">
    Skills <span class="text-emerald-500">& Tools</span>
  </h2>

  <p class="mt-3 max-w-xl text-center text-slate-600 dark:text-slate-400">
    Technologies and tools I use to build modern, scalable, and maintainable web applications.
  </p>

  <div class="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
    {#each ['HTML','CSS','JavaScript','Svelte','React','Node.js','Tailwind CSS','PostgreSQL'] as skill}
      <div
        class="group flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-md dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
        {skill}
      </div>
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

<section id="contacts" class="relative mx-auto flex w-full max-w-6xl justify-center px-6 py-32">
  <div
    class="flex w-full max-w-xl flex-col items-center gap-6 rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm dark:border-white/10 dark:bg-slate-900">

    <h2 class="text-3xl font-bold tracking-tight">
      Get in <span class="text-emerald-500">Touch</span>
    </h2>

    <p class="max-w-md text-slate-600 dark:text-slate-400">
      Have a project, a question, or want to collaborate? Feel free to reach out — I’m always open to new ideas.
    </p>

    <a
      href="mailto:adamgumilang2103@gmail.com"
      class="mt-4 rounded-xl bg-emerald-500 px-6 py-3 font-medium text-white shadow transition hover:bg-emerald-600">
      adamgumilang2103@gmail.com
    </a>

    <p class="text-sm text-slate-500 dark:text-slate-500">
      I usually respond within 24 hours.
    </p>

  </div>
</section>

</main>

<Footer />
