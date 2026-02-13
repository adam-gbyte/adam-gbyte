<script>
  import {
    Code2,
    Database,
    Layout,
    Server,
    Terminal,
    Wrench,
    Cpu,
    Globe,
    Zap,
  } from "lucide-svelte";

  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: ["Svelte", "React", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500/30",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Python", "Java", "PostgreSQL", "REST APIs"],
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "hover:border-emerald-500/30",
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      skills: ["Git", "Docker", "VS Code", "Figma", "Vercel"],
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "hover:border-purple-500/30",
    },
  ];
</script>

<section
  id="skills"
  class="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-24 sm:px-6 lg:py-32 overflow-hidden"
>
  <!-- Background Elements -->
  <div class="pointer-events-none absolute right-0 top-1/4 -z-10 h-[400px] w-[400px] translate-x-1/3 rounded-full bg-blue-500/10 blur-[100px]"></div>
  <div class="pointer-events-none absolute left-0 bottom-0 -z-10 h-[300px] w-[300px] -translate-x-1/3 rounded-full bg-purple-500/10 blur-[80px]"></div>

  <!-- Header -->
  <div class="text-center">
    <div
      class="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400"
    >
      <Cpu class="size-3.5" />
      <span>Expertise</span>
    </div>
    
    <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
      Skills & <span class="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Technologies</span>
    </h2>
    
    <p class="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
      The tools and technologies I use to build modern, scalable, and maintainable web applications.
    </p>
  </div>

  <!-- Skills Grid -->
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {#each skillCategories as category}
      <div
        class="group relative flex flex-col gap-6 rounded-[2rem] border border-white/40 bg-white/60 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900/60 {category.border}"
      >
        <!-- Category Header -->
        <div class="flex items-center gap-4">
          <div class="rounded-2xl {category.bg} p-3 {category.color}">
            <svelte:component this={category.icon} class="size-6" />
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white">
            {category.title}
          </h3>
        </div>

        <!-- Skills List -->
        <div class="flex flex-wrap gap-2">
          {#each category.skills as skill}
            <div
              class="flex items-center gap-1.5 rounded-lg border border-slate-200/60 bg-white/50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-white hover:text-slate-900 dark:border-white/5 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <Zap class="size-3.5 text-slate-400/70" />
              {skill}
            </div>
          {/each}
        </div>
        
        <!-- Subtle Glow -->
        <div class="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-transparent via-transparent to-{category.color.split('-')[1]}-500/5 rounded-[2rem]"></div>
      </div>
    {/each}
  </div>

  <!-- Bottom CTA (Optional) -->
  <div class="mx-auto mt-8 flex flex-col items-center gap-4 text-center">
      <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
         <Globe class="size-4" />
         <span>Always learning and adapting to new technologies.</span>
      </div>
  </div>
</section>
