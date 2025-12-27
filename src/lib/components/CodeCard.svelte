<script>
	export let title = 'Code';
	export let code = '';
</script>

<div
	class="mx-auto w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-slate-950"
>
	<!-- Header -->
	<div class="flex items-center justify-between border-b border-slate-200 px-4 py-2 dark:border-white/10">
		<span class="truncate text-sm font-medium text-slate-700 dark:text-slate-300">
			{title}
		</span>
		<div class="flex gap-1">
			<span class="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
			<span class="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
			<span class="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
		</div>
	</div>

	<!-- Code -->
	<div class="overflow-x-auto bg-slate-50 dark:bg-slate-900">
		<pre class="min-w-full p-4 text-xs leading-relaxed text-slate-800 dark:text-slate-100">
<code>{code}</code>
		</pre>
	</div>
</div>

<style>
	pre {
		font-family: 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
	}

	pre::-webkit-scrollbar {
		height: 6px;
	}
	pre::-webkit-scrollbar-thumb {
		background: rgba(100, 116, 139, 0.5);
		border-radius: 4px;
	}
</style>
