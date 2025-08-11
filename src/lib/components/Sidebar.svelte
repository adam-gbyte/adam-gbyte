<script>
	import { Home, User, Settings, LogOut, Menu, X, Sun, Moon } from 'lucide-svelte';
	import { theme } from '$lib/theme';

	let isOpen = false;
	let isTheme = true;

	const menuItems = [
		{ name: 'Home', icon: Home, href: '/' },
		{ name: 'Profile', icon: User, href: '/profile' },
		{ name: 'Project', icon: Settings, href: '/settings' }
	];

	let currentTheme;
	$: theme.subscribe((val) => (currentTheme = val));

	function toggleTheme() {
		theme.set(currentTheme === 'light' ? 'dark' : 'light');
		isTheme = !isTheme;
	}
</script>

<!-- Desktop Sidebar -->
<aside
	class={`hidden h-dvh flex-col shadow-xl transition-all duration-300 md:flex 
		${isOpen ? 'w-64' : 'w-20 items-center'}`}
>
	<!-- Header -->
	<div class="flex items-center justify-between border-b border-blue-500">
		{#if isOpen}
			<p class="p-4 text-lg font-bold">Adam Gumilang</p>
		{/if}
		<button
			class="m-4 cursor-pointer rounded p-2 hover:bg-blue-500"
			on:click={() => (isOpen = !isOpen)}
		>
			{#if isOpen}
				<X size={24} />
			{:else}
				<Menu size={24} />
			{/if}
		</button>
	</div>

	<!-- Theme Button (desktop di atas menu) -->
	<button
		on:click={toggleTheme}
		class="m-2 flex cursor-pointer items-center gap-3 rounded-lg bg-indigo-500 p-3 text-white transition-colors hover:bg-indigo-600"
	>
		{#if isTheme}
			<Moon size={24} />
		{:else}
			<Sun size={24} />
		{/if}
		{#if isOpen}
			<span>Theme</span>
		{/if}
	</button>

	<!-- Menu -->
	<nav class="flex-1 p-2">
		{#each menuItems as item}
			<a
				href={item.href}
				class="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-blue-500"
			>
				<item.icon size={24} />
				{#if isOpen}
					<span>{item.name}</span>
				{/if}
			</a>
		{/each}
	</nav>
</aside>

<!-- Mobile Bottom Nav -->
<nav
	class="fixed right-0 bottom-0 left-0 z-40 flex items-center justify-around border-t border-gray-300 bg-white p-2 md:hidden dark:bg-gray-900"
>
	{#each menuItems as item}
		<a
			href={item.href}
			class="flex flex-col items-center gap-1 text-sm text-gray-600 hover:text-indigo-500 dark:text-gray-300"
		>
			<item.icon size={24} />
			<span>{item.name}</span>
		</a>
	{/each}
</nav>

<!-- Mobile Floating Theme Button -->
<button
	on:click={toggleTheme}
	class="fixed right-4 bottom-20 z-50 rounded-full bg-indigo-500 p-3 text-white shadow-lg hover:bg-indigo-600 md:hidden"
>
	{#if isTheme}
		<Moon size={24} />
	{:else}
		<Sun size={24} />
	{/if}
</button>
