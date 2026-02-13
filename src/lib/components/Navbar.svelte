<script>
	import { onMount, tick } from 'svelte';
	import { Moon, Sun, Menu, X, Home, User, Briefcase, Layers, Mail, Code } from 'lucide-svelte';
	import { fade, slide, fly } from 'svelte/transition';

	let theme = 'light';
	let isMenuOpen = false;
	let activeSection = '#home';
	let scrollY = 0;

	onMount(() => {
		const saved = localStorage.getItem('theme');
		theme =
			saved ??
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
		document.documentElement.classList.toggle('dark', theme === 'dark');
		
		// Set initial active section
		observeSections();
	});

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		localStorage.setItem('theme', theme);
		document.documentElement.classList.toggle('dark', theme === 'dark');
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	const links = [
		{ href: '#home', label: 'Home', icon: Home },
		{ href: '#about', label: 'About', icon: User },
		{ href: '#skills', label: 'Skills', icon: Code },
		{ href: '#projects', label: 'Projects', icon: Layers },
		{ href: '#contacts', label: 'Contact', icon: Mail }
	];

	function observeSections() {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = `#${entry.target.id}`;
					}
				});
			},
			{ threshold: 0.5 }
		);

		document.querySelectorAll('section[id]').forEach((section) => {
			observer.observe(section);
		});
	}
	
	function scrollToSection(href) {
		closeMenu();
		activeSection = href;
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<svelte:window bind:scrollY />

<nav
	class="fixed top-0 z-50 w-full px-4 transition-all duration-300 {scrollY > 50 ? 'py-4' : 'py-6'}"
>
	<div
		class="mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-white/40 bg-white/60 px-6 py-3 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/20"
	>
		<!-- Brand -->
		<a
			href="#home"
			on:click|preventDefault={() => scrollToSection('#home')}
			class="relative z-10 text-lg font-bold tracking-tight text-slate-900 transition hover:opacity-80 dark:text-white"
		>
			<span class="text-emerald-500">Adam</span>.
		</a>

		<!-- Desktop Menu -->
		<div class="hidden items-center gap-1 md:flex">
			{#each links as link}
				<a
					href={link.href}
					on:click|preventDefault={() => scrollToSection(link.href)}
					class="relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 {activeSection === link.href ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400'}"
				>
					{#if activeSection === link.href}
						<!-- Active Indicator -->
						<div
							class="absolute inset-0 -z-10 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20"
							in:fade={{ duration: 200 }}
						></div>
					{/if}
					{link.label}
				</a>
			{/each}

			<div class="mx-2 h-6 w-px bg-slate-200 dark:bg-slate-800"></div>

			<button
				on:click={toggleTheme}
				aria-label="Toggle theme"
				class="group relative rounded-full p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
			>
				<div class="transition-transform duration-300 {theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}">
					<Sun class="size-5" />
				</div>
				<div class="absolute left-2 top-2 transition-transform duration-300 {theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}">
					<Moon class="size-5" />
				</div>
			</button>
		</div>

		<!-- Mobile Toggle -->
		<button
			on:click={toggleMenu}
			class="relative z-50 rounded-full p-2 text-slate-600 transition hover:bg-slate-100 md:hidden dark:text-slate-400 dark:hover:bg-slate-800"
			aria-label="Toggle menu"
		>
			{#if isMenuOpen}
				<X class="size-6" />
			{:else}
				<Menu class="size-6" />
			{/if}
		</button>
	</div>
</nav>

<!-- Mobile Overlay & Menu -->
{#if isMenuOpen}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
		on:click={closeMenu}
	></div>

	<!-- Menu -->
	<div
		class="fixed inset-x-4 top-24 z-50 flex flex-col gap-2 rounded-3xl border border-white/40 bg-white/90 p-4 shadow-2xl backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-slate-900/90"
		in:fly={{ y: -20, duration: 300 }}
		out:fly={{ y: -20, duration: 200 }}
	>
		{#each links as link}
			<a
				href={link.href}
				on:click|preventDefault={() => scrollToSection(link.href)}
				class="flex items-center gap-4 rounded-2xl p-4 text-base font-medium transition-all {activeSection === link.href ? 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'}"
			>
				<div class="{activeSection === link.href ? 'text-emerald-500' : 'text-slate-400'}">
					<svelte:component this={link.icon} class="size-5" />
				</div>
				{link.label}
			</a>
		{/each}

		<hr class="my-2 border-slate-200 dark:border-white/10" />

		<button
			on:click={toggleTheme}
			class="flex items-center gap-4 rounded-2xl p-4 text-base font-medium text-slate-600 transition-all hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
		>
			<div class="text-slate-400">
				{#if theme === 'dark'}
					<Moon class="size-5" />
				{:else}
					<Sun class="size-5" />
				{/if}
			</div>
			<span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
		</button>
	</div>
{/if}
