<script>
  import { tabs } from '$lib/data/dataProjects';

  let active = 0;
  function select(i){
    active = i;
  }
</script>

<section id="projects" class="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-28">
  <h2 class="text-center text-3xl font-semibold tracking-tight">Projects</h2>

  <div class="flex flex-col gap-10 md:flex-row">

    <div class="flex w-full gap-3 overflow-x-auto md:w-1/4 md:flex-col md:overflow-visible">
      {#each tabs as tab, i}
        <button
          target="__blank"
          class="group rounded-xl border cursor-pointer px-4 py-2 text-sm font-medium transition
          {i === active 
            ? 'border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900' 
            : 'border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:border-white/10 dark:text-slate-400 dark:hover:text-white'}"
          on:click={() => select(i)}>
          {tab.title}
        </button>
      {/each}
    </div>

    {#each tabs as tab, i}
      <div hidden={i !== active} class="flex-1 rounded-3xl border bg-white/70 p-10 backdrop-blur dark:border-white/10 dark:bg-slate-950/50">

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
