<script>
	import { Home, User, Settings, LogOut, Menu, X, Sun, Moon, Mail } from 'lucide-svelte';
	import { theme } from '$lib/theme';

	let isOpen = false;
	let isTheme = true;

	const menuItems = [
		{ name: 'Home', icon: Home, href: '#home' },
		{ name: 'Profile', icon: User, href: '#profile' },
		{ name: 'Project', icon: Settings, href: '#project' },
		{ name: 'Contact', icon: Mail, href: '#kontak' }
	];

	let currentTheme;
	$: theme.subscribe((val) => (currentTheme = val));

	function toggleTheme() {
		theme.set(currentTheme === 'light' ? 'dark' : 'light');
		isTheme = !isTheme;
	}

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<!-- Overlay -->
{#if isOpen}
	<button class="fixed inset-0 z-40 bg-black/50 md:hidden" on:click={toggleMenu}></button>
{/if}

<!-- Mobile Sidebar (Slide-in) -->
<aside
	class={`fixed top-0 left-0 z-50 h-full w-64 transform bg-white shadow-xl transition-transform duration-300 md:hidden dark:bg-gray-900
	${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
>
	<div class="flex items-center justify-between border-b border-gray-300 p-4 dark:border-gray-700">
		<p class="text-lg font-bold">Adam Gumilang</p>
		<button on:click={toggleMenu} class="rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-800">
			<X size={24} />
		</button>
	</div>

	<!-- Theme Button di dalam menu -->
	<button
		on:click={toggleTheme}
		class="m-4 flex items-center gap-3 rounded-lg bg-indigo-500 p-3 text-white transition-colors hover:bg-indigo-600"
	>
		{#if isTheme}
			<Moon size={24} />
		{:else}
			<Sun size={24} />
		{/if}
		<span>Theme</span>
	</button>

	<nav class="flex-1 p-2">
		{#each menuItems as item}
			<a
				href={item.href}
				class="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-blue-500"
			>
				<item.icon size={24} />
				<span>{item.name}</span>
			</a>
		{/each}
	</nav>
</aside>

<!-- Floating Action Button kiri bawah -->
<button
	on:click={toggleMenu}
	class="fixed bottom-4 left-4 z-50 rounded-full bg-indigo-500 p-4 text-white shadow-lg hover:bg-indigo-600 md:hidden"
>
	<Menu size={28} />
</button>

<!-- Desktop Sidebar (tetap) -->
<aside class="z-50 hidden h-screen w-64 flex-col bg-white shadow-xl md:flex dark:bg-gray-900">
	<div class="flex items-center justify-between border-b border-gray-300 p-4 dark:border-gray-700">
		<p class="text-lg font-bold">Adam Gumilang</p>
	</div>

	<!-- Theme Button di desktop -->
	<button
		on:click={toggleTheme}
		class="m-4 flex items-center gap-3 rounded-lg bg-indigo-500 p-3 text-white transition-colors hover:bg-indigo-600"
	>
		{#if isTheme}
			<Moon size={24} />
		{:else}
			<Sun size={24} />
		{/if}
		<span>Theme</span>
	</button>

	<nav class="flex-1 p-2">
		{#each menuItems as item}
			<a
				href={item.href}
				class="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-blue-500"
			>
				<item.icon size={24} />
				<span>{item.name}</span>
			</a>
		{/each}
	</nav>
</aside>
