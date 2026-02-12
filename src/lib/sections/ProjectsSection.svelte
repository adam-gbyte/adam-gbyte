<script>
  import { tabs } from '$lib/data/dataProjects';

  // active tab index
  let active = 0;

  // references to tab buttons for focus management
  let tabButtons = [];

  const select = (i) => {
    active = i;
    // focus the newly selected tab button for better keyboard UX
    tabButtons[i]?.focus();
  };

  // keyboard navigation for the tablist (Left/Right or Up/Down)
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
              <!-- optional small icon placeholder -->
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

            <div class="ml-2 hidden md:block">
              {#if i === active}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clip-rule="evenodd" /></svg>
              {/if}
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

            <!-- Right: image gallery -->
            <div class="md:w-1/2">
              <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {#each tab.images as image, idx}
                  <div class="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
                    <img
                      src={image}
                      alt={`${tab.title} preview ${idx + 1}`}
                      class="h-36 w-full object-cover transition-transform duration-400 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition group-hover:opacity-100"></div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
