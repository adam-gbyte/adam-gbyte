<script>
  import { ChevronLeft, ChevronRight, ExternalLink, Github, Layers, Code, Zap } from 'lucide-svelte';
  import { tabs } from '$lib/data/dataProjects';
  import { fade, fly } from 'svelte/transition';

  let active = 0;
  let tabButtons = [];

  const select = (i) => {
    active = i;
    tabButtons[i]?.focus();
  };

  function onTabKeydown(e, i) {
    const len = tabs.length;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (i + 1) % len;
      select(next);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (i - 1 + len) % len;
      select(prev);
    } else if (e.key === 'Home') {
      e.preventDefault();
      select(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      select(len - 1);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      select(i);
    }
  }

  let current = 0;

  function next(images) {
    current = (current + 1) % images.length;
  }

  function prev(images) {
    current = (current - 1 + images.length) % images.length;
  }

  function goTo(i) {
    current = i;
  }
</script>

<section id="projects" class="relative mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-24 sm:px-6 lg:py-32 overflow-hidden">
  
  <!-- Background Glow -->
  <div class="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px]"></div>

  <div class="text-center">
    <div
      class="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400"
    >
      <Layers class="size-3.5" />
      <span>Portfolio</span>
    </div>
    <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
      Featured <span class="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Projects</span>
    </h2>
    <p class="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
      A selection of things I've built, ranging from web applications to open-source tools.
    </p>
  </div>

  <div class="flex w-full flex-col gap-8 lg:flex-row">
    <!-- Tabs (mobile: horizontal scroll, desktop: vertical column) -->
    <div
      class="order-1 flex w-full gap-3 overflow-x-auto pb-4 lg:order-none lg:w-80 lg:flex-col lg:overflow-visible lg:pb-0"
      role="tablist"
      aria-orientation="vertical"
    >
      {#each tabs as tab, i}
        <button
          role="tab"
          aria-selected={i === active}
          aria-controls={`panel-${i}`}
          id={`tab-${i}`}
          bind:this={tabButtons[i]}
          on:click={() => select(i)}
          on:keydown={(e) => onTabKeydown(e, i)}
          class="group relative shrink-0 rounded-2xl px-5 py-4 text-left transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-emerald-500/50
            {i === active
              ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20 scale-[1.02]'
              : 'border border-slate-200/60 bg-white/50 text-slate-600 hover:border-emerald-500/30 hover:bg-white/80 dark:border-white/5 dark:bg-slate-900/40 dark:text-slate-400 dark:hover:bg-slate-800/60'}"
          style="min-width: 200px;"
        >
          <div class="flex items-center gap-4">
            <div 
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-bold transition-colors
              {i === active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}"
            >
              {tab.title.charAt(0)}
            </div>
            
            <div class="flex flex-col">
              <span class="font-semibold tracking-tight">{tab.title}</span>
              {#if tab.badge}
                <span class="text-xs font-medium opacity-80">{tab.badge}</span>
              {/if}
            </div>
            
            {#if i === active}
              <div class="ml-auto" in:fade={{ duration: 200 }}>
                <ChevronRight class="size-5 opacity-75" />
              </div>
            {/if}
          </div>
        </button>
      {/each}
    </div>

    <!-- Panels -->
    <div class="order-2 flex-1">
      {#each tabs as tab, i}
        {#if i === active}
          <div
            id={`panel-${i}`}
            role="tabpanel"
            aria-labelledby={`tab-${i}`}
            in:fly={{ y: 20, duration: 400, delay: 100 }}
            class="group relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/60 p-6 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/60 sm:p-10"
          >
            <!-- Decorative gradient behind panel -->
            <div class="absolute -right-20 -top-20 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[80px]"></div>

            <div class="flex flex-col gap-10 xl:flex-row">
              <!-- Left: Content -->
              <div class="flex flex-col gap-6 xl:w-5/12">
                <div>
                  <h3 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{tab.title}</h3>
                  {#if tab.subtitle}
                    <div class="mt-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                       <Zap class="size-4" />
                       {tab.subtitle}
                    </div>
                  {/if}
                </div>

                <p class="leading-relaxed text-slate-600 dark:text-slate-300">
                  {tab.description}
                </p>

                {#if tab.tags}
                  <div class="flex flex-wrap gap-2">
                    {#each tab.tags as t}
                      <span class="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-slate-800/50 dark:text-slate-300">
                        {t}
                      </span>
                    {/each}
                  </div>
                {/if}

                <div class="mt-auto flex flex-wrap gap-4 pt-4">
                  <a
                    href={tab.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group/btn inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-emerald-500/30 dark:bg-white dark:text-slate-900 dark:hover:bg-emerald-400"
                  >
                    View Project
                    <ExternalLink class="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>

                  {#if tab.github}
                    <a
                      href={tab.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="group/btn inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                    >
                      <Github class="size-4" />
                      Source Code
                    </a>
                  {/if}
                </div>
              </div>

              <!-- Right: Image Slider -->
              <div class="relative xl:w-7/12">
                <div class="aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-white/10 bg-slate-100 dark:bg-slate-800 relative group/slider">
                  <div
                    class="flex h-full transition-transform duration-500 ease-out"
                    style="transform: translateX(-{current * 100}%);"
                  >
                    {#each tab.images as image, idx}
                      <div class="h-full w-full flex-shrink-0 relative">
                        <img
                          src={image}
                          alt={`${tab.title} ${idx + 1}`}
                          class="h-full w-full object-cover transition-transform duration-700 group-hover/slider:scale-105"
                          loading="lazy"
                        />
                         <!-- Image overlay gradient -->
                        <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                      </div>
                    {/each}
                  </div>

                  <!-- Navigation -->
                  <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-10">
                     {#each tab.images as _, i}
                      <button
                        on:click={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        class="h-1.5 rounded-full transition-all duration-300
                          {i === current
                            ? 'w-6 bg-white'
                            : 'w-1.5 bg-white/50 hover:bg-white/80'}"
                      ></button>
                    {/each}
                  </div>

                  <button
                    on:click={() => prev(tab.images)}
                    class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/90 backdrop-blur-md transition hover:bg-white/20 hover:scale-110 opacity-0 group-hover/slider:opacity-100 dark:bg-black/30"
                  >
                    <ChevronLeft class="size-5" />
                  </button>

                  <button
                    on:click={() => next(tab.images)}
                    class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/90 backdrop-blur-md transition hover:bg-white/20 hover:scale-110 opacity-0 group-hover/slider:opacity-100 dark:bg-black/30"
                  >
                    <ChevronRight class="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>
