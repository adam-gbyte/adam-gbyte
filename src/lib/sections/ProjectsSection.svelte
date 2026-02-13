<script>
  import {ChevronLeft, ChevronRight} from 'lucide-svelte';
  import { tabs } from '$lib/data/dataProjects';

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

<section id="projects" class="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 lg:py-28">
  <h2 class="text-center text-3xl font-semibold tracking-tight">Projects</h2>

  <div class="flex w-full flex-col gap-8 md:flex-row">
    <!-- Tabs (mobile: horizontal scroll, desktop: vertical column) -->
    <div
      class="order-1 flex w-full gap-3 overflow-x-auto md:order-none md:w-72 md:flex-col md:overflow-visible"
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
          class="group relative shrink-0 rounded-xl px-4 py-2 text-left text-sm font-medium transition
            focus:outline-none focus:ring-2 focus:ring-emerald-300/60
            {i === active
              ? 'bg-gradient-to-r from-emerald-500 to-emerald-400 text-white shadow-lg'
              : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-400 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300'}"
          style="min-width: 160px;"
        >
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="h-8 w-8 flex-shrink-0 rounded-md bg-white/30 text-sm font-semibold text-emerald-500 flex items-center justify-center">
                {tab.title.charAt(0)}
              </div>
              <div class="flex flex-col">
                <span class="leading-tight">{tab.title}</span>
                {#if tab.badge}
                  <span class="mt-0.5 text-xs font-normal text-emerald-100/80 opacity-90">{tab.badge}</span>
                {/if}
              </div>
            </div>

          </div>
        </button>
      {/each}
    </div>

    <!-- Panels -->
    <div class="order-2 flex-1">
      {#each tabs as tab, i}
        <div
          id={`panel-${i}`}
          role="tabpanel"
          aria-labelledby={`tab-${i}`}
          hidden={i !== active}
          class="rounded-3xl border bg-white/80 p-6 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/60"
        >
          <div class="flex flex-col gap-6 md:flex-row">
            <!-- Left: description -->
            <div class="md:w-1/2">
              <h3 class="text-2xl font-semibold tracking-tight">{tab.title}</h3>
              {#if tab.subtitle}
                <p class="mt-1 text-sm text-emerald-500">{tab.subtitle}</p>
              {/if}

              <p class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {tab.description}
              </p>

              <div class="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={tab.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-emerald-600"
                >
                  View project
                  <span aria-hidden="true">→</span>
                </a>

                {#if tab.github}
                  <a
                    href={tab.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200"
                  >
                    Code
                  </a>
                {/if}
              </div>

              {#if tab.tags}
                <div class="mt-4 flex flex-wrap gap-2">
                  {#each tab.tags as t}
                    <span class="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300">{t}</span>
                  {/each}
                </div>
              {/if}
            </div>

            <!-- Right: image slider -->
            <div class="md:w-1/2 relative">
              <!-- Slider viewport -->
              <div class="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
                <div
                  class="flex transition-transform duration-500 ease-out"
                  style="transform: translateX(-{current * 100}%);"
                >
                  {#each tab.images as image, idx}
                    <div class="w-full flex-shrink-0 group relative">
                      <img
                        src={image}
                        alt={`${tab.title} preview ${idx + 1}`}
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition group-hover:opacity-100"></div>
                    </div>
                  {/each}
                </div>
              </div>

              <!-- Navigation buttons -->
              <button
                on:click={() => prev(tab.images)}
                class="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur hover:bg-black/70"
              >
                <ChevronLeft />
              </button>

              <button
                on:click={() => next(tab.images)}
                class="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur hover:bg-black/70"
              >
                <ChevronRight />
              </button>

              <!-- Dots indicator -->
              <div class="mt-4 flex justify-center gap-2">
                {#each tab.images as _, i}
                  <button
                    on:click={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    class="h-2 w-2 rounded-full transition
                      {i === current
                        ? 'bg-slate-900 dark:bg-white'
                        : 'bg-slate-300 dark:bg-white/30'}"
                  ></button>
                {/each}
              </div>
            </div>

          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
