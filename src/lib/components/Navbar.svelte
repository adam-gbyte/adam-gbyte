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

<nav class="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/70">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

		<!-- Brand -->
		<a href="#home" class="text-lg font-bold tracking-tight">
			<span class="text-emerald-500">Adam</span> Gumilang
		</a>

		<!-- Desktop -->
		<div class="hidden items-center gap-8 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="text-sm font-medium text-slate-600 transition hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400"
				>
					{link.label}
				</a>
			{/each}

			<button
				on:click={toggleTheme}
				aria-label="Toggle theme"
				class="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/10"
			>
				{#if theme === 'dark'}
					<Sun size={18} />
				{:else}
					<Moon size={18} />
				{/if}
			</button>
		</div>

		<!-- Mobile button -->
		<button
			on:click={toggleMenu}
			class="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 md:hidden dark:text-slate-400 dark:hover:bg-white/10"
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

{#if isMenuOpen}
	<button
		class="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
		on:click={toggleMenu}
		aria-label="Close menu"
	></button>
{/if}

<aside
	class="fixed right-0 top-0 z-50 h-full w-72 transform bg-white p-8 shadow-xl transition-transform duration-300 dark:bg-slate-950 md:hidden
	       {isMenuOpen ? 'translate-x-0' : 'translate-x-full'}"
>
	<nav class="mt-10 flex flex-col gap-6">
		{#each links as link}
			<a
				href={link.href}
				on:click={toggleMenu}
				class="text-lg font-medium text-slate-700 transition hover:text-emerald-500 dark:text-slate-300 dark:hover:text-emerald-400"
			>
				{link.label}
			</a>
		{/each}

		<hr class="my-4 border-slate-200 dark:border-white/10" />

		<button
			on:click={toggleTheme}
			class="flex items-center gap-3 text-slate-600 transition hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400"
		>
			{#if theme === 'dark'}
				<Sun size={18} /> Light mode
			{:else}
				<Moon size={18} /> Dark mode
			{/if}
		</button>
	</nav>
</aside>
