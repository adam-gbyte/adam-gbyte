<script>
  import { Mail, MessageSquare, ArrowRight, Copy, Check, Send } from "lucide-svelte";
  import { fade, fly } from "svelte/transition";

  let copied = false;
  const email = "adamgumilang2103@gmail.com";

  function copyEmail() {
    navigator.clipboard.writeText(email);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }
</script>

<section
  id="contacts"
  class="relative isolate mx-auto flex w-full max-w-6xl justify-center overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
>
  <!-- Main Card -->
  <div
    class="relative flex w-full max-w-2xl flex-col items-center gap-8 rounded-[2.5rem] border border-white/40 bg-white/60 p-8 text-center shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:shadow-emerald-500/10 dark:border-white/10 dark:bg-slate-900/60 sm:p-14"
  >
    <!-- Grid Pattern Overlay (Optional Texture) -->
    <div class="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50"></div>

    <!-- Badge -->
    <div
      class="group flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-medium text-emerald-600 transition-colors hover:bg-emerald-500/10 dark:text-emerald-400"
    >
      <MessageSquare class="size-3.5" />
      <span>Contact</span>
    </div>

    <!-- Content -->
    <div class="flex flex-col items-center gap-4">
      <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
        Get in <span class="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Touch</span>
      </h2>
      
      <p class="max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
        Have a project in mind, a question, or just want to collaborate?  
        I’m always open to discussing new ideas and opportunities.
      </p>
    </div>

    <!-- Email Action Area -->
    <div class="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
      <a
        href="mailto:{email}"
        class="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/40 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        <Send class="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        <span>Say Hello</span>
      </a>

      <button
        onclick={copyEmail}
        class="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white/50 px-8 py-4 text-base font-medium text-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/80 hover:text-emerald-600 dark:border-white/10 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-emerald-400"
        aria-label="Copy email address"
      >
        {#if copied}
          <div class="flex items-center gap-2" in:fade>
            <Check class="size-5 text-emerald-500" />
            <span class="text-emerald-600 dark:text-emerald-400">Copied!</span>
          </div>
        {:else}
          <div class="flex items-center gap-2" in:fade>
            <Copy class="size-5 transition-transform group-hover:scale-110" />
            <span>Copy Email</span>
          </div>
        {/if}
      </button>
    </div>

    <!-- Note -->
    <div class="mt-2 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 sm:text-sm">
      <div class="relative flex h-2.5 w-2.5">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
      </div>
      I usually respond within 24 hours.
    </div>
  </div>

  <!-- Background Decorative Orbs -->
  <div
    class="pointer-events-none absolute bottom-0 left-1/4 -z-10 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-500/10 blur-[90px]"
  ></div>
  <div
    class="pointer-events-none absolute right-1/4 top-0 -z-10 h-[300px] w-[300px] -translate-y-1/2 translate-x-1/2 rounded-full bg-teal-500/10 blur-[80px]"
  ></div>
</section>
