<section id="skills" class="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-32">
  <h2 class="text-3xl font-bold tracking-tight">
    Skills <span class="text-emerald-500">& Tools</span>
  </h2>

  <p class="mt-3 max-w-xl text-center text-slate-600 dark:text-slate-400">
    Technologies and tools I use to build modern, scalable, and maintainable web applications.
  </p>

  <div class="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
    {#each ['Python', 'Java', 'HTML','CSS','JavaScript','Svelte','React','Node.js','Tailwind CSS','PostgreSQL'] as skill}
      <div
        class="group flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-md dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
        {skill}
      </div>
    {/each}
  </div>
</section>
