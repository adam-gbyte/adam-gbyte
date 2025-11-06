<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import FeaturedWork from "$lib/components/FeaturedWork.svelte";
  import Skills from "$lib/components/Skills.svelte";
</script>

<div class="min-h-screen bg-[#0a0f1c] text-white font-sans">
  <Navbar />

  <main class="max-w-5xl mx-auto px-8 py-16">
    <h1 class="text-4xl font-extrabold mb-4">
      Building Digital Solutions,<br />One Line of Code at a Time
    </h1>

    <div
      class="bg-[#111827] p-4 rounded-md font-mono text-green-400 text-sm shadow-md w-fit mb-12"
    >
      <p>$ npm run dev</p>
      <p>🚀 Starting server at http://localhost:5173</p>
      <p>✅ Ready to code!</p>
    </div>

    <section>
      <h2 class="text-2xl font-bold mb-4">Featured Work</h2>
      <FeaturedWork />
    </section>

    <section class="mt-12">
      <h2 class="text-2xl font-bold mb-4">Skills</h2>
      <Skills />
    </section>
  </main>
</div>
