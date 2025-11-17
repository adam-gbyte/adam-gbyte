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
      <li><a href="#skills" class="hover:text-[#ff48c4]">SKILLS</a></li>
      <li><a href="#projects" class="hover:text-[#ff48c4]">PROJECTS</a></li>
      <li><a href="#contact" class="hover:text-[#ff48c4]">CONTACT</a></li>
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
  class="md:hidden z-70 cursor-pointer fixed top-4 right-4 p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
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
  class={`top-0 right-0 h-full fixed w-64 dark:bg-gray-700 dark:text-white bg-gray-300 md:hidden shadow-lg z-60 transform transition-transform duration-500 ease-in-out p-4 ${
    isMenuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <h2 class="text-lg font-bold">Adam</h2>
  <ul class="flex flex-col w-full text-sm font-semibold pt-8 pb-4">
    <li>
      <a
        href="#home"
        class="hover:text-[#ff48c4] rounded-t-xl flex bg-gray-100 px-4 py-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900"
        >HOME</a
      >
    </li>
    <li>
      <a
        href="#about"
        class="hover:text-[#ff48c4] flex bg-gray-100 px-4 py-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900"
        >ABOUT</a
      >
    </li>
    <li>
      <a
        href="#skills"
        class="hover:text-[#ff48c4] flex bg-gray-100 px-4 py-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900"
        >SKILLS</a
      >
    </li>
    <li>
      <a
        href="#projects"
        class="hover:text-[#ff48c4] flex bg-gray-100 px-4 py-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900"
        >PROJECTS</a
      >
    </li>
    <li>
      <a
        href="#contact"
        class="hover:text-[#ff48c4] rounded-b-xl flex bg-gray-100 px-4 py-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900"
        >CONTACT</a
      >
    </li>
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
</aside>
