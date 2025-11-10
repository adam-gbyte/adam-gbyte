<script>
  import CodeCard from "./CodeCard.svelte";
</script>

<section
  class="flex flex-col md:flex-row justify-between items-center px-10 py-20 md:py-32"
>
  <div class="max-w-lg">
    <h2 class="text-4xl font-bold mb-4">Hello,</h2>
    <p class="text-4xl font-bold leading-snug">
      This is <span class="text-[#ff48c4]">Agus Heryanto.</span><br />
      I am an informatics student with experience in <br />
      <span class="text-[#00ff9f]">Backend Development.</span>
    </p>

    <div class="flex gap-4 mt-6 text-2xl">
      <a href="#"><i class="fab fa-github"></i></a>
      <a href="#"><i class="fab fa-linkedin"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
    </div>

    <div class="flex gap-4 mt-8">
      <button
        class="px-6 py-3 rounded-full bg-[#1f1f2e] border border-[#ff48c4] hover:bg-[#ff48c4] hover:text-black transition"
      >
        CONTACT ME
      </button>
      <button
        class="px-6 py-3 rounded-full bg-[#ff48c4] hover:bg-[#00ff9f] hover:text-black transition"
      >
        GET RESUME ⬇️
      </button>
    </div>
  </div>

  <div class="mt-10 md:mt-0">
    <CodeCard />
  </div>
</section>
