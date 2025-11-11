<script>
  import { onMount } from "svelte";
  import { Moon, Sun } from "lucide-svelte";

  let theme = "light";
  onMount(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      theme = saved;
    } else {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    document.documentElement.classList.toggle("dark", theme === "dark");
  });

  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }
</script>

<nav
  class="flex justify-between items-center px-10 py-6 bg-gray-100 dark:bg-gray-900 dark:text-white"
>
  <h1 class="text-2xl font-bold dark:text-gray-200 text-gray-900">
    Adam Gumilang
  </h1>

  <ul class="flex space-x-8 text-sm font-semibold">
    <li><a href="#about" class="hover:text-[#ff48c4]">ABOUT</a></li>
    <li><a href="#experience" class="hover:text-[#ff48c4]">EXPERIENCE</a></li>
    <li><a href="#skills" class="hover:text-[#ff48c4]">SKILLS</a></li>
    <li><a href="#education" class="hover:text-[#ff48c4]">EDUCATION</a></li>
    <li><a href="#projects" class="hover:text-[#ff48c4]">PROJECTS</a></li>
    <button
      on:click={toggleTheme}
      class="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors"
    >
      {#if theme === "dark"}
        <Sun />
      {:else}
        <Moon />
      {/if}
    </button>
  </ul>
</nav>
