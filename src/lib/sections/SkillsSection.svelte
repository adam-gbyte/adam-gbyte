<script>
  const skills = [
    { name: "Python" },
    { name: "Java" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "Svelte" },
    { name: "React" },
    { name: "Node.js" },
    { name: "Tailwind CSS" },
    { name: "PostgreSQL" }
  ];
</script>

<section
  id="skills"
  class="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-28"
>
  <!-- Title -->
  <h2 class="text-3xl font-bold tracking-tight">
    Skills <span class="text-emerald-500">& Tools</span>
  </h2>

  <p
    class="mt-3 max-w-xl text-center text-slate-600 dark:text-slate-400"
  >
    Technologies and tools I use to build modern, scalable, and maintainable
    web applications.
  </p>

  <!-- Grid -->
  <div
    class="mt-14 grid w-full gap-6 [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))]"
  >
    {#each skills as skill}
      <div
        class="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/70 p-6 text-center backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/60"
      >
        <!-- Icon placeholder -->
        <div
          class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 transition group-hover:bg-emerald-500/20"
        >
          <!-- Kamu bisa ganti jadi SVG/icon nanti -->
          <span class="text-xs font-bold">
            {skill.name.charAt(0)}
          </span>
        </div>

        <!-- Skill Name -->
        <span
          class="text-sm font-semibold text-slate-700 dark:text-slate-300"
        >
          {skill.name}
        </span>

        <!-- Glow effect -->
        <div
          class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100"
          style="box-shadow:0 0 40px rgba(16,185,129,0.15);"
        />
      </div>
    {/each}
  </div>
</section>
