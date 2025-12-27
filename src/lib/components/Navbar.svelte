<script>
	import { onMount } from 'svelte';
	import { Moon, Sun, Menu, X } from 'lucide-svelte';

	let theme = 'light';
	let isMenuOpen = false;

	onMount(() => {
		const saved = localStorage.getItem('theme');
		theme =
			saved ??
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
		document.documentElement.classList.toggle('dark', theme === 'dark');
	});

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		localStorage.setItem('theme', theme);
		document.documentElement.classList.toggle('dark', theme === 'dark');
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	const links = [
		{ href: '#home', label: 'Home' },
		{ href: '#about', label: 'About' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#contacts', label: 'Contact' }
	];
</script>

<nav
	class="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur 
	       dark:border-white/10 dark:bg-slate-950/70"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<!-- Brand -->
		<a href="#home" class="text-lg font-semibold tracking-tight">
			Adam Gumilang
		</a>

		<!-- Desktop Menu -->
		<div class="hidden items-center gap-8 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="text-sm text-slate-600 transition hover:text-slate-900 
					       dark:text-slate-400 dark:hover:text-white"
				>
					{link.label}
				</a>
			{/each}

			<button
				on:click={toggleTheme}
				aria-label="Toggle theme"
				class="rounded-lg p-2 text-slate-600 hover:bg-slate-100 
				       dark:text-slate-400 dark:hover:bg-white/10"
			>
				{#if theme === 'dark'}
					<Sun size={18} />
				{:else}
					<Moon size={18} />
				{/if}
			</button>
		</div>

		<!-- Mobile Button -->
		<button
			on:click={toggleMenu}
			class="rounded-lg p-2 text-slate-600 hover:bg-slate-100 
			       md:hidden dark:text-slate-400 dark:hover:bg-white/10"
			aria-label="Toggle menu"
		>
			{#if isMenuOpen}
				<X size={20} />
			{:else}
				<Menu size={20} />
			{/if}
		</button>
	</div>
</nav>

<!-- Mobile Backdrop -->
{#if isMenuOpen}
	<button
		aria-label="button"
		class="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
		on:click={toggleMenu}
		type="button"
	></button>
{/if}

<!-- Mobile Menu -->
<aside
	class="fixed right-0 top-0 z-50 h-full w-64 transform bg-white p-6 transition-transform duration-300
	       dark:bg-slate-950 md:hidden
	       {isMenuOpen ? 'translate-x-0' : 'translate-x-full'}"
>
	<nav class="mt-10 flex flex-col gap-6">
		{#each links as link}
			<a
				href={link.href}
				on:click={toggleMenu}
				class="text-slate-700 transition hover:text-slate-900 
				       dark:text-slate-300 dark:hover:text-white"
			>
				{link.label}
			</a>
		{/each}

		<button
			on:click={toggleTheme}
			class="mt-4 flex items-center gap-2 text-slate-600 
			       dark:text-slate-400"
		>
			{#if theme === 'dark'}
				<Sun size={18} /> Light mode
			{:else}
				<Moon size={18} /> Dark mode
			{/if}
		</button>
	</nav>
</aside>
