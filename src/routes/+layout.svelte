<script>
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="flex bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
	<Sidebar />
	<div class="p-4"><slot /></div>
</div>
