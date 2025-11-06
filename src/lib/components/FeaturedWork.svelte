<script>
  const works = [
    { title: "Personal CLI Tool" },
    { title: "E-commerce Backend" },
    { title: "AI Chatbot Prototype" },
    { title: "API Gateway Project" },
  ];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {#each works as work}
    <div
      class="bg-[#1e2635] p-6 rounded-xl shadow-md hover:-translate-y-1 transition"
    >
      <p class="text-lg font-semibold">{work.title}</p>
    </div>
  {/each}
</div>
