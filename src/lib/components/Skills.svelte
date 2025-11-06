<script>
  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "🟨" },
    { name: "React", icon: "⚛️" },
    { name: "Docker", icon: "🐳" },
  ];
</script>

<div class="flex gap-6 items-center">
  {#each skills as skill}
    <div class="flex flex-col items-center">
      <div class="text-3xl mb-1">{skill.icon}</div>
      <p class="text-sm">{skill.name}</p>
    </div>
  {/each}
</div>
