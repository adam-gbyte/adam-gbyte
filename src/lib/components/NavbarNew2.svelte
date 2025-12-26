<script>
  export let progress = 0;
</script>

<nav
  style="--p:{progress}; height: calc(100vh - (100vh - 4rem) * var(--p));"
  class="fixed top-0 left-0 w-full z-50 overflow-hidden transition-[height] duration-0"
>
  <div
    style="transform: translateY(calc(var(--p) * -20px));"
    class="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"
  ></div>

  <div class="relative max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
    <div
      style="
        transform:
          translateY(calc(var(--p) * -12px))
          scale(calc(1 - var(--p) * 0.4));
      "
      class="origin-left text-white font-bold text-5xl"
    >
      My Brand
    </div>
  </div>
</nav>
