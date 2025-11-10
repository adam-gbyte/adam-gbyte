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

<div
  class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6"
>
  <h1 class="text-2xl font-bold mb-4">React Functional Component:</h1>
  <CodeCard title="React" code={exampleCode} />
</div>
