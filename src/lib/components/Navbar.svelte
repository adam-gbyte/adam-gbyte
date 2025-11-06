<script>
  const links = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
</script>

<nav
  class="flex items-center justify-between py-6 px-8 bg-[#0d1117] text-white rounded-2xl shadow-lg"
>
  <div class="text-2xl font-bold text-green-400">Adam Gumilang</div>
  <div class="flex gap-8">
    {#each links as link}
      <a href={link.href} class="hover:text-green-400 transition">{link.name}</a
      >
    {/each}
    <a
      href="/contact"
      class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md font-semibold"
      >Let’s Connect</a
    >
  </div>
</nav>
