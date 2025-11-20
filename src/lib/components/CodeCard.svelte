<script>
	export let title = 'Kode';
	export let code = '';
</script>

<div
	class="mx-auto w-full overflow-hidden rounded-xl border shadow-lg hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
>
	<!-- Header bar -->
	<div class="flex items-center justify-between bg-gray-200 px-3 py-2 sm:px-4 dark:bg-gray-800">
		<span class="truncate text-xs font-semibold sm:text-sm dark:text-white">{title}</span>
		<div class="flex flex-shrink-0 gap-1">
			<span class="h-2.5 w-2.5 rounded-full bg-red-500 sm:h-3 sm:w-3"></span>
			<span class="h-2.5 w-2.5 rounded-full bg-yellow-500 sm:h-3 sm:w-3"></span>
			<span class="h-2.5 w-2.5 rounded-full bg-green-500 sm:h-3 sm:w-3"></span>
		</div>
	</div>

	<!-- Code content -->
	<div class="overflow-x-auto dark:bg-gray-900">
		<pre
			class="min-w-full p-3 text-xs leading-relaxed whitespace-pre text-black sm:p-4 sm:text-sm dark:text-gray-100">
<code>{code}</code>
    </pre>
	</div>
</div>

<style>
	pre {
		font-family: 'Fira Code', monospace;
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
