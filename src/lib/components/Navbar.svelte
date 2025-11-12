<script>
  import { onMount } from "svelte";
  import { Moon, Sun, Menu, X } from "lucide-svelte";

  // THEME TOGGLER
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

  // MOBILE MENU TOGGLER
  let isMenuOpen = false;
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav
  class={`flex md:flex-row justify-between z-50 top-0 left-0 items-center fixed w-full px-10 py-6 bg-gray-100 dark:bg-gray-900 dark:text-white`}
>
  <h1 class="text-xl md:text-2xl font-bold dark:text-gray-200 text-gray-900">
    Adam Gumilang
  </h1>

  <div class={`hidden md:flex items-center space-x-6`}>
    <ul class="flex space-x-8 items-center text-sm font-semibold">
      <li><a href="#home" class="hover:text-[#ff48c4]">HOME</a></li>
      <li><a href="#about" class="hover:text-[#ff48c4]">ABOUT</a></li>
      <li><a href="#experience" class="hover:text-[#ff48c4]">EXPERIENCE</a></li>
      <li><a href="#skills" class="hover:text-[#ff48c4]">SKILLS</a></li>
      <li><a href="#education" class="hover:text-[#ff48c4]">EDUCATION</a></li>
      <li><a href="#projects" class="hover:text-[#ff48c4]">PROJECTS</a></li>
    </ul>
    <button
      on:click={toggleTheme}
      class="p-2 cursor-pointer rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
    >
      {#if theme === "dark"}
        <Sun />
      {:else}
        <Moon />
      {/if}
    </button>
  </div>
</nav>

<!-- Mobile Menu Button -->
<button
  class="md:hidden z-70 fixed top-4 right-4 p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
  on:click={toggleMenu}
  aria-label="Toggle Menu"
>
  {#if isMenuOpen}
    <X />
  {:else}
    <Menu />
  {/if}
</button>

<aside
  class={`absolute top-0 right-0 h-full w-64 bg-gray-200 md:hidden shadow-lg z-60 border-l border-gray-300 transform transition-transform duration-500 ease-in-out p-6 ${
    isMenuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <h2 class="text-lg font-bold mb-4">Sidebar</h2>
  <p class="text-gray-700">
    Ini adalah sidebar dengan animasi muncul dari kanan menggunakan TailwindCSS.
  </p>
</aside>
