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

	const logout = () => {
		alert('Logout clicked');
	};

	// Function to toggle the theme
	let currentTheme;
	$: theme.subscribe((val) => (currentTheme = val));

	function toggleTheme() {
		theme.set(currentTheme === 'light' ? 'dark' : 'light');
		isTheme = !isTheme;
	}
</script>

<aside
	class={`flex h-dvh flex-col shadow-xl transition-all duration-300 ${isOpen ? 'w-64' : 'w-20 items-center'}`}
>
	<!-- Header -->
	<div class="flex items-center justify-between border-blue-500">
		{#if isOpen}
			<p class="p-4 text-lg font-bold">Adam Gumilang</p>
		{/if}
		<button
			class="m-4 cursor-pointer items-center rounded p-2 hover:bg-blue-500"
			on:click={() => (isOpen = !isOpen)}
		>
			{#if isOpen}
				<X size={24} />
			{:else}
				<Menu size={24} />
			{/if}
		</button>
	</div>

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

	<button
		on:click={toggleTheme}
		class="m-2 flex cursor-pointer items-center gap-3 rounded-lg bg-blue-500 p-3 text-white transition-colors hover:bg-blue-600"
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
</aside>
