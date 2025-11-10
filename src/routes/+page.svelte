<script>
  import CodeCard from "$lib/components/CodeCard.svelte";

  const exampleCode = `
// MyComponent.jsx
import React from 'react';

const MyComponent = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a functional React component.</p>
    </div>
  );
};

export default MyComponent;`;
</script>

<nav>
  <div class="bg-gray-800 p-4 text-white text-center font-semibold">
    Adam Gumilang
  </div>
</nav>

<main class="min-h-screen bg-blue-950">
  <section
    class="min-h-screen flex md:flex-row flex-col items-center justify-center p-6"
  >
    <div class="flex flex-col md:max-w-1/2">
      <h1 class="text-2xl md:text-3xl font-bold mb-6">Adam Gumilang</h1>
      <p class="mb-4">
        Halo! Saya Adam Gumilang, seorang pengembang web dengan minat besar
        dalam menciptakan pengalaman digital yang menarik dan fungsional. Dengan
        keahlian dalam berbagai teknologi web, saya berkomitmen untuk
        menghadirkan solusi inovatif yang memenuhi kebutuhan pengguna.
      </p>
    </div>
    <CodeCard title="Svelte" code={exampleCode} />
  </section>
</main>
