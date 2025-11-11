<script>
  export let title = "Kode";
  export let code = "";
</script>

<div
  class="w-full max-w-4xl mx-auto rounded-xl overflow-hidden border dark:border-gray-800 dark:bg-gray-900 shadow-lg hover:shadow-xl"
>
  <!-- Header bar -->
  <div
    class="dark:bg-gray-800 bg-gray-200 px-3 sm:px-4 py-2 flex items-center justify-between"
  >
    <span class="text-xs sm:text-sm font-semibold dark:text-white truncate"
      >{title}</span
    >
    <div class="flex gap-1 flex-shrink-0">
      <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></span>
      <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></span>
      <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></span>
    </div>
  </div>

  <!-- Code content -->
  <div class="dark:bg-gray-900 overflow-x-auto">
    <pre
      class="p-3 sm:p-4 text-xs sm:text-sm text-black dark:text-gray-100 whitespace-pre leading-relaxed min-w-full">
<code>{code}</code>
    </pre>
  </div>
</div>

<style>
  pre {
    font-family: "Fira Code", monospace;
  }

  /* Scrollbar halus untuk mobile */
  pre::-webkit-scrollbar {
    height: 6px;
  }
  pre::-webkit-scrollbar-thumb {
    background: #4b5563;
    border-radius: 4px;
  }
</style>
