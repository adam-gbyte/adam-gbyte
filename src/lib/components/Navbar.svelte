<script>
	import { onMount } from 'svelte';
	import { Moon, Sun, Menu, X, Home, User, Layers, Mail, Code, Languages } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';
	import { selectedLang, isLangChanging, setLang, initLang, t } from '$lib/i18n';

	let theme = 'light';
	let isMenuOpen = false;
	let activeSection = '#home';
	let scrollY = 0;

	onMount(() => {
		initLang();

		const isDark = document.documentElement.classList.contains('dark');
		theme = isDark ? 'dark' : 'light';

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
		{ href: '#home', key: 'home', icon: Home },
		{ href: '#about', key: 'about', icon: User },
		{ href: '#skills', key: 'skills', icon: Code },
		{ href: '#projects', key: 'projects', icon: Layers },
		{ href: '#contacts', key: 'contact', icon: Mail }
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
			{
				rootMargin: '-20% 0px -75% 0px',
				threshold: 0
			}
		);

		document.querySelectorAll('section[id]').forEach((section) => {
			observer.observe(section);
		});
	}

	function scrollToSection(href) {
		closeMenu();
		activeSection = href;
		if (typeof window !== 'undefined') {
			if (window.location.pathname !== '/') {
				window.location.href = `/${href}`;
				return;
			}
			const element = document.querySelector(href);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}
</script>

<svelte:window bind:scrollY />

<nav
	class="fixed top-0 z-50 w-full px-4 transition-all duration-300 {scrollY > 50 ? 'py-4' : 'py-6'}"
>
	<div
		class="mx-auto flex w-full max-w-5xl items-center justify-between rounded-xl border border-slate-200/80 bg-white/80 px-6 py-3 shadow-lg shadow-black/5 backdrop-blur-md transition-all duration-300 dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:shadow-black/40"
	>
		<!-- Brand -->
		<a
			href="#home"
			onclick={(e) => {
				e.preventDefault();
				scrollToSection('#home');
			}}
			class="relative z-10 text-lg font-bold tracking-tight text-slate-900 transition hover:opacity-80 dark:text-white"
		>
			<span class="text-indigo-600 dark:text-indigo-400">Adam</span><span class="text-cyan-500"
				>.</span
			>
		</a>

		<!-- Desktop Menu -->
		<div class="hidden items-center gap-1 md:flex">
			{#each links as link}
				<a
					href={link.href}
					onclick={(e) => {
						e.preventDefault();
						scrollToSection(link.href);
					}}
					class="relative rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 {activeSection ===
					link.href
						? 'text-indigo-600 dark:text-indigo-400'
						: 'text-slate-600 hover:bg-slate-100/70 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-200'}"
				>
					{#if activeSection === link.href}
						<!-- Active Indicator -->
						<div
							class="absolute inset-0 -z-10 rounded-lg bg-indigo-500/10 ring-1 ring-indigo-500/20 dark:bg-indigo-500/15 dark:ring-indigo-400/30"
							in:fade={{ duration: 200 }}
						></div>
					{/if}
					<span
						class="inline-block transition-opacity duration-150 {$isLangChanging
							? 'opacity-20'
							: 'opacity-100'}"
					>
						{$t.nav[link.key]}
					</span>
				</a>
			{/each}

			<div class="mx-2 h-6 w-px bg-slate-200 dark:bg-zinc-800"></div>

			<!-- Language Switcher (Desktop) -->
			<div
				class="relative flex items-center rounded-lg border border-slate-200/80 bg-slate-100/80 p-0.5 dark:border-zinc-800 dark:bg-zinc-950/80"
			>
				<!-- Sliding Pill Indicator -->
				<span
					class="pointer-events-none absolute top-0.5 bottom-0.5 left-0.5 w-8 rounded-md bg-white shadow-xs transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-800 dark:shadow-black/40 {$selectedLang ===
					'en'
						? 'translate-x-8'
						: 'translate-x-0'}"
					aria-hidden="true"
				></span>

				<button
					type="button"
					onclick={() => setLang('id')}
					class="relative z-10 w-8 py-1 text-center text-xs font-bold transition-colors duration-200 active:scale-95 {$selectedLang ===
					'id'
						? 'text-indigo-600 dark:text-indigo-400'
						: 'text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-white'}"
					aria-label="Bahasa Indonesia"
				>
					ID
				</button>
				<button
					type="button"
					onclick={() => setLang('en')}
					class="relative z-10 w-8 py-1 text-center text-xs font-bold transition-colors duration-200 active:scale-95 {$selectedLang ===
					'en'
						? 'text-indigo-600 dark:text-indigo-400'
						: 'text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-white'}"
					aria-label="English"
				>
					EN
				</button>
			</div>

			<!-- Theme Toggle Button -->
			<button
				onclick={toggleTheme}
				aria-label="Toggle theme"
				class="group relative ml-1 flex size-8 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 active:scale-95 dark:text-zinc-400 dark:hover:bg-zinc-800"
			>
				<div
					class="transition-transform duration-300 {theme === 'dark'
						? 'scale-0 rotate-90 opacity-0'
						: 'scale-100 rotate-0 opacity-100'}"
				>
					<Sun class="size-4.5" />
				</div>
				<div
					class="absolute inset-0 flex items-center justify-center transition-transform duration-300 {theme ===
					'dark'
						? 'scale-100 rotate-0 opacity-100'
						: 'scale-0 -rotate-90 opacity-0'}"
				>
					<Moon class="size-4.5" />
				</div>
			</button>
		</div>

		<!-- Mobile Toggle -->
		<button
			onclick={toggleMenu}
			class="relative z-50 rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800"
			aria-label="Toggle menu"
		>
			{#if isMenuOpen}
				<X class="size-6 text-indigo-600 dark:text-indigo-400" />
			{:else}
				<Menu class="size-6" />
			{/if}
		</button>
	</div>
</nav>

<!-- Mobile Overlay & Menu -->
{#if isMenuOpen}
	<!-- Backdrop -->
	<button
		type="button"
		class="fixed inset-0 z-40 h-full w-full cursor-default border-none bg-black/40 backdrop-blur-sm md:hidden"
		aria-label="Close menu"
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
		onclick={closeMenu}
	></button>

	<!-- Menu -->
	<div
		class="fixed inset-x-4 top-24 z-50 flex flex-col gap-2 rounded-xl border border-slate-200/80 bg-white/95 p-4 shadow-2xl backdrop-blur-xl md:hidden dark:border-zinc-800 dark:bg-zinc-900/95"
		in:fly={{ y: -20, duration: 300 }}
		out:fly={{ y: -20, duration: 200 }}
	>
		{#each links as link}
			{@const Icon = link.icon}
			<a
				href={link.href}
				onclick={(e) => {
					e.preventDefault();
					scrollToSection(link.href);
				}}
				class="flex items-center gap-4 rounded-xl p-3.5 text-base font-medium transition-all active:scale-[0.98] {activeSection ===
				link.href
					? 'bg-indigo-500/10 text-indigo-600 ring-1 ring-indigo-500/20 dark:bg-indigo-500/20 dark:text-indigo-400'
					: 'text-slate-600 hover:bg-slate-100 dark:text-zinc-400 dark:hover:bg-zinc-800'}"
			>
				<div class={activeSection === link.href ? 'text-indigo-500' : 'text-slate-400'}>
					<Icon class="size-5" />
				</div>
				<span
					class="transition-opacity duration-150 {$isLangChanging ? 'opacity-20' : 'opacity-100'}"
				>
					{$t.nav[link.key]}
				</span>
			</a>
		{/each}

		<hr class="my-2 border-slate-200 dark:border-zinc-800" />

		<!-- Language Switcher in Mobile Menu -->
		<div class="flex items-center justify-between px-3.5 py-2">
			<div class="flex items-center gap-3 text-slate-600 dark:text-zinc-400">
				<Languages class="size-5 text-indigo-500" />
				<span class="text-sm font-medium">Bahasa / Language</span>
			</div>
			<div
				class="relative flex items-center rounded-lg border border-slate-200/80 bg-slate-100/80 p-0.5 dark:border-zinc-800 dark:bg-zinc-950/80"
			>
				<!-- Sliding Pill Indicator -->
				<span
					class="pointer-events-none absolute top-0.5 bottom-0.5 left-0.5 w-10 rounded-md bg-white shadow-xs transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-zinc-800 dark:shadow-black/40 {$selectedLang ===
					'en'
						? 'translate-x-10'
						: 'translate-x-0'}"
					aria-hidden="true"
				></span>

				<button
					type="button"
					onclick={() => setLang('id')}
					class="relative z-10 w-10 py-1.5 text-center text-xs font-bold transition-colors duration-200 active:scale-95 {$selectedLang ===
					'id'
						? 'text-indigo-600 dark:text-indigo-400'
						: 'text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-white'}"
				>
					ID
				</button>
				<button
					type="button"
					onclick={() => setLang('en')}
					class="relative z-10 w-10 py-1.5 text-center text-xs font-bold transition-colors duration-200 active:scale-95 {$selectedLang ===
					'en'
						? 'text-indigo-600 dark:text-indigo-400'
						: 'text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-white'}"
				>
					EN
				</button>
			</div>
		</div>

		<hr class="my-1 border-slate-200 dark:border-zinc-800" />

		<!-- Theme Toggle in Mobile Menu -->
		<button
			onclick={toggleTheme}
			class="flex items-center gap-4 rounded-xl p-3.5 text-base font-medium text-slate-600 transition-all hover:bg-slate-100 active:scale-[0.98] dark:text-zinc-400 dark:hover:bg-zinc-800"
		>
			<div class="text-slate-400">
				{#if theme === 'dark'}
					<Moon class="size-5 text-indigo-400" />
				{:else}
					<Sun class="size-5 text-amber-500" />
				{/if}
			</div>
			<span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
		</button>
	</div>
{/if}
