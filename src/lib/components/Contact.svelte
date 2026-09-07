<script>
	import {
		Send,
		FileDown,
		FileText,
		Copy,
		Check,
		ArrowRight,
		Linkedin,
		Github,
		Mail
	} from 'lucide-svelte';
	import { scale } from 'svelte/transition';
	import { t } from '$lib/i18n';

	let copied = $state(false);
	const email = 'adamgumilang2103@gmail.com';
	const cvUrl = '/cv/cv_adam_gumilang.pdf';

	function copyEmail() {
		navigator.clipboard.writeText(email);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}

	const socials = [
		{
			name: 'LinkedIn',
			handle: '/in/adam-gumilang',
			icon: Linkedin,
			href: 'https://www.linkedin.com/in/adam-gumilang/',
			color: 'hover:text-blue-600 dark:hover:text-blue-400'
		},
		{
			name: 'GitHub',
			handle: '@adam-gbyte',
			icon: Github,
			href: 'https://github.com/adam-gbyte',
			color: 'hover:text-slate-900 dark:hover:text-white'
		},
		{
			name: 'Email',
			handle: 'adamgumilang2103@gmail.com',
			icon: Mail,
			href: 'mailto:adamgumilang2103@gmail.com',
			color: 'hover:text-indigo-600 dark:hover:text-indigo-400'
		}
	];
</script>

<section id="contacts" class="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:py-32">
	<!-- Ambient Background Glow -->
	<div
		class="pointer-events-none absolute bottom-10 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[150px] dark:bg-indigo-500/15"
	></div>

	<!-- Section Header -->
	<div class="mb-14 flex flex-col items-center text-center">
		<h2
			class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white"
		>
			{$t.contact.headingPart1} <br class="hidden sm:inline" />
			<span
				class="bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-400"
				>{$t.contact.headingPart2}</span
			>
		</h2>

		<p
			class="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-zinc-400"
		>
			{$t.contact.subtitle}
		</p>
	</div>

	<!-- Bento Grid -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-12">
		<!-- Card 1: Main CTA Card (Spans 7 cols) -->
		<div
			class="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200/80 bg-white/70 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 md:col-span-7 lg:p-10 dark:border-zinc-800 dark:bg-zinc-900/80"
		>
			<div class="relative z-10">
				<div
					class="flex size-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400"
				>
					<Send class="size-6" />
				</div>

				<h3 class="mt-6 text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
					{$t.contact.ctaTitle}
				</h3>

				<p class="mt-3 max-w-md text-base leading-relaxed text-slate-600 dark:text-zinc-300">
					{$t.contact.ctaDesc}
				</p>
			</div>

			<div class="relative z-10 mt-8 flex flex-wrap items-center gap-4">
				<a
					href="mailto:{email}"
					class="group/btn inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition-all hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-indigo-500/25 dark:bg-white dark:text-zinc-950 dark:hover:bg-indigo-400"
				>
					<span>{$t.contact.sendMessage}</span>
					<ArrowRight class="size-4 transition-transform group-hover/btn:translate-x-1" />
				</a>
			</div>
		</div>

		<!-- Card 2: Quick Copy & Availability (Spans 5 cols) -->
		<div class="flex flex-col gap-6 md:col-span-5">
			<!-- Copy Email Card -->
			<div
				class="rounded-xl border border-slate-200/80 bg-white/70 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 dark:border-zinc-800 dark:bg-zinc-900/80"
			>
				<div class="flex items-center justify-between">
					<span
						class="font-mono text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-zinc-500"
						>{$t.contact.directEmail}</span
					>
					<div class="flex items-center gap-1.5">
						<span class="size-2 animate-pulse rounded-full bg-cyan-500"></span>
						<span class="text-xs font-semibold text-cyan-600 dark:text-cyan-400"
							>{$t.contact.available}</span
						>
					</div>
				</div>

				<button
					onclick={copyEmail}
					class="group/copy mt-4 flex w-full items-center justify-between gap-3 rounded-lg border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-left transition-all hover:border-indigo-500/50 hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/80 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
					aria-label="Copy email address"
				>
					<span
						class="truncate font-mono text-xs font-medium text-slate-800 sm:text-sm dark:text-zinc-200"
					>
						{email}
					</span>

					{#if copied}
						<span
							in:scale
							class="flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400"
						>
							<Check class="size-4" />
							<span>{$t.contact.copied}</span>
						</span>
					{:else}
						<Copy
							class="size-4 shrink-0 text-slate-400 transition-colors group-hover/copy:text-indigo-500 dark:text-zinc-500 dark:group-hover/copy:text-indigo-400"
						/>
					{/if}
				</button>
			</div>

			<!-- CV Download Card -->
			<div
				class="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white/70 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 dark:border-zinc-800 dark:bg-zinc-900/80"
			>
				<div class="flex items-center gap-4">
					<div
						class="flex size-11 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-zinc-300"
					>
						<FileText class="size-5" />
					</div>
					<div>
						<h4 class="text-sm font-bold text-slate-900 dark:text-white">{$t.contact.cvTitle}</h4>
						<p class="font-mono text-xs text-slate-500 dark:text-zinc-400">{$t.contact.cvDesc}</p>
					</div>
				</div>

				<a
					href={cvUrl}
					download
					class="flex size-10 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-600/20 transition-all hover:scale-105 hover:bg-indigo-500 active:scale-95"
					aria-label={$t.contact.downloadAria}
				>
					<FileDown class="size-4" />
				</a>
			</div>
		</div>

		<!-- Card 3: Social Connections (Spans all 12 cols) -->
		<div
			class="rounded-xl border border-slate-200/80 bg-white/70 p-6 shadow-xl backdrop-blur-xl md:col-span-12 dark:border-zinc-800 dark:bg-zinc-900/80"
		>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
				{#each socials as social}
					{@const Icon = social.icon}
					<a
						href={social.href}
						target="_blank"
						rel="noreferrer"
						class="group flex items-center gap-4 rounded-lg border border-slate-200/60 bg-slate-50/60 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-white dark:border-zinc-800/80 dark:bg-zinc-950/80 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
					>
						<div
							class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-xs dark:bg-zinc-800"
						>
							<Icon
								class="size-5 text-slate-600 transition-colors {social.color} dark:text-zinc-300"
							/>
						</div>
						<div class="overflow-hidden">
							<p class="text-xs font-bold text-slate-900 dark:text-white">{social.name}</p>
							<p class="truncate font-mono text-xs text-slate-500 dark:text-zinc-400">
								{social.handle}
							</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
