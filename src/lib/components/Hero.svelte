<script>
	import {
		ArrowRight,
		Github,
		Linkedin,
		Mail,
		FileDown,
		Terminal,
		CheckCircle2
	} from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';
	import { t } from '$lib/i18n';

	const cvUrl = '/cv/cv_adam_gumilang.pdf';
</script>

<section
	id="home"
	class="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 overflow-hidden px-6 pt-24 pb-10 sm:pt-28 sm:pb-12 md:flex-row md:gap-12 md:pt-32 md:pb-16"
>
	<!-- Left Text Content -->
	<div class="relative z-10 flex max-w-2xl flex-col gap-6 text-center md:text-left">
		<!-- Mobile Avatar -->
		<div class="mx-auto md:hidden" in:fade={{ duration: 600 }}>
			<div
				class="relative size-28 overflow-hidden rounded-xl border-2 border-indigo-500/40 shadow-xl ring-4 shadow-indigo-500/10 ring-indigo-500/10 dark:border-indigo-400/40"
			>
				<img
					src="https://ik.imagekit.io/goldiron/adam-gbyte/AdamG.jpeg"
					alt="Adam Gumilang"
					class="h-full w-full object-cover"
				/>
			</div>
		</div>

		<!-- Headings -->
		<div class="space-y-2">
			<h1
				class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl dark:text-white"
				in:fly={{ y: 20, duration: 800, delay: 300 }}
			>
				{$t.hero.greeting}
				<span class="text-indigo-600 dark:text-indigo-400">Adam Gumilang</span>
			</h1>

			<p
				class="text-base font-semibold tracking-tight text-slate-700 sm:text-lg dark:text-zinc-300"
				in:fly={{ y: 20, duration: 800, delay: 450 }}
			>
				{$t.hero.role}
			</p>
		</div>

		<!-- Short Bio -->
		<p
			class="mx-auto max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg md:mx-0 dark:text-zinc-400"
			in:fly={{ y: 20, duration: 800, delay: 600 }}
		>
			{$t.hero.bio}
		</p>

		<!-- Tech Highlights -->
		<div
			class="flex flex-wrap items-center justify-center gap-2 md:justify-start"
			in:fly={{ y: 15, duration: 700, delay: 750 }}
		>
			{#each ['SvelteKit', 'React', 'Node.js', 'Python', 'Tailwind CSS', 'Machine Learning'] as tech}
				<span
					class="rounded-md border border-slate-200/80 bg-white/70 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 shadow-xs backdrop-blur-xs dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300"
				>
					{tech}
				</span>
			{/each}
		</div>

		<!-- Action Buttons -->
		<div
			class="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center md:justify-start"
			in:fly={{ y: 20, duration: 800, delay: 900 }}
		>
			<a
				href="#projects"
				class="group inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-all hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-indigo-500/25 dark:bg-white dark:text-zinc-950 dark:hover:bg-indigo-400"
			>
				<span>{$t.hero.viewProjects}</span>
				<ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
			</a>

			<a
				href="#contacts"
				class="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 shadow-xs backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:text-slate-900 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-white"
			>
				<Mail class="size-4 text-indigo-500 dark:text-indigo-400" />
				<span>{$t.hero.contactMe}</span>
			</a>

			<a
				href={cvUrl}
				download
				class="group inline-flex items-center gap-2 rounded-lg border border-slate-200/80 bg-transparent px-4 py-3 text-sm font-medium text-slate-600 transition-all hover:bg-slate-100 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
			>
				<FileDown class="size-4 text-slate-400 group-hover:text-indigo-500" />
				<span>{$t.hero.resume}</span>
			</a>
		</div>

		<!-- Social Icons -->
		<div
			class="flex items-center justify-center gap-5 pt-2 md:justify-start"
			in:fly={{ y: 15, duration: 700, delay: 1050 }}
		>
			<a
				href="https://github.com/adam-gbyte"
				target="_blank"
				rel="noreferrer"
				class="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-zinc-800 dark:hover:text-white"
				aria-label="GitHub Profile"
			>
				<Github class="size-5" />
			</a>
			<a
				href="https://www.linkedin.com/in/adam-gumilang/"
				target="_blank"
				rel="noreferrer"
				class="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-blue-600 dark:hover:bg-zinc-800 dark:hover:text-blue-400"
				aria-label="LinkedIn Profile"
			>
				<Linkedin class="size-5" />
			</a>
			<a
				href="mailto:adamgumilang2103@gmail.com"
				class="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-indigo-600 dark:hover:bg-zinc-800 dark:hover:text-indigo-400"
				aria-label="Send Email"
			>
				<Mail class="size-5" />
			</a>
		</div>
	</div>

	<!-- Right Visual Side (Desktop HUD / Portrait) -->
	<div
		class="relative z-10 hidden flex-1 items-center justify-center md:flex"
		in:fade={{ duration: 1000, delay: 400 }}
	>
		<div class="relative w-full max-w-md">
			<!-- Main Card Container -->
			<div
				class="relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-5 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
			>
				<!-- Terminal Top Bar -->
				<div
					class="mb-4 flex items-center justify-between border-b border-slate-200/60 pb-3 dark:border-zinc-800"
				>
					<div class="flex items-center gap-1.5">
						<span class="size-3 rounded-full bg-rose-500/80"></span>
						<span class="size-3 rounded-full bg-amber-500/80"></span>
						<span class="size-3 rounded-full bg-emerald-500/80"></span>
					</div>
					<div
						class="flex items-center gap-1 font-mono text-[11px] text-slate-400 dark:text-zinc-500"
					>
						<Terminal class="size-3 text-indigo-500 dark:text-indigo-400" />
						<span>adam@portfolio:~</span>
					</div>
				</div>

				<!-- Profile Picture & HUD Overlay -->
				<div class="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-zinc-950">
					<img
						src="https://ik.imagekit.io/goldiron/adam-gbyte/AdamG.jpeg"
						alt="Adam Gumilang"
						class="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
					/>
					<!-- Bottom Tag inside Image -->
					<div
						class="absolute inset-x-0 bottom-0 flex items-center justify-between bg-zinc-950/85 px-3.5 py-2.5 text-white backdrop-blur-xs"
					>
						<div>
							<p class="text-sm font-bold">Adam Gumilang</p>
							<p class="text-xs text-zinc-300">{$t.hero.role}</p>
						</div>
						<div
							class="flex items-center gap-1 rounded-md bg-indigo-500/20 px-2 py-0.5 text-[11px] font-semibold text-indigo-300"
						>
							<CheckCircle2 class="size-3" />
							<span>{$t.hero.activeTag}</span>
						</div>
					</div>
				</div>

				<!-- Mini Code Snippet HUD -->
				<div
					class="mt-4 space-y-1.5 rounded-lg border border-slate-200/60 bg-slate-50/80 p-3 font-mono text-xs text-slate-700 dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-300"
				>
					<div
						class="flex items-center justify-between text-[11px] text-slate-400 dark:text-zinc-500"
					>
						<span>{$t.hero.terminalStatus}</span>
						<span>{$t.hero.terminalLocation}</span>
					</div>
					<p class="text-slate-500 dark:text-zinc-400">
						<span class="text-indigo-600 dark:text-indigo-400">const</span> engineer = &#123;
						<span class="text-cyan-600 dark:text-cyan-400">{$t.hero.terminalMode}</span> &#125;;
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
