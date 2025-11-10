<script>
  export let title = "Kode";
  export let code = "";
</script>

<div
  class="max-w-2xl mx-auto rounded-xl overflow-hidden border border-gray-800 bg-gray-900 shadow-lg"
>
  <!-- Header bar -->
  <div class="bg-gray-800 px-4 py-2 flex items-center justify-between">
    <span class="text-sm font-semibold text-white">{title}</span>
    <div class="flex gap-1">
      <span class="w-3 h-3 bg-red-500 rounded-full"></span>
      <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
      <span class="w-3 h-3 bg-green-500 rounded-full"></span>
    </div>
  </div>

  <!-- Code content -->
  <pre class="p-4 text-sm text-gray-100 overflow-x-auto whitespace-pre">
		<code>{code}</code>
    </pre>
</div>

<style>
  pre {
    font-family: "Fira Code", monospace;
  }
</style>
