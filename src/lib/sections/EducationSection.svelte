<script>
	import { GraduationCap, Calendar, BookOpenCheck, Cpu, Library } from 'lucide-svelte';
	import { fly, fade } from 'svelte/transition';

	const education = {
		university: 'Nusa Putra University',
		faculty: 'Faculty of Engineering, Computer and Design',
		major: 'Informatics Engineering',
		period: '2023 — Present',
		focus: ['AI Engineering', 'Web Development']
	};
</script>

<section
	id="education"
	class="relative mx-auto flex w-full max-w-7xl flex-col gap-15 overflow-hidden px-6 py-24 sm:px-8 lg:py-32"
>
	<!-- Background Elements -->
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
	></div>

	<!-- Header -->
	<div class="mx-auto flex max-w-3xl flex-col items-center text-center">
		<div
			class="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400"
			in:fly={{ y: 20, duration: 800, delay: 0 }}
		>
			<Library class="size-3.5" />
			<span>Academic</span>
		</div>

		<h2
			class="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white"
			in:fly={{ y: 20, duration: 800, delay: 200 }}
		>
			My <span class="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
				>Education</span
			>
		</h2>

		<p
			class="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
			in:fly={{ y: 20, duration: 800, delay: 400 }}
		>
			A journey of learning, exploring new technologies, and building a foundation in engineering.
		</p>
	</div>

	<!-- Main Education Card -->
	<div class="mx-auto w-full max-w-4xl" in:fly={{ y: 50, duration: 800, delay: 600 }}>
		<div
			class="group relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white/50 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-white/5 dark:bg-slate-900/50"
		>
			<!-- Subtle Gradient Backdrop -->
			<div
				class="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
			></div>

			<div class="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
				<!-- Icon/Decoration Section -->
				<div class="hidden md:block">
					<div
						class="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20 dark:text-emerald-400"
					>
						<GraduationCap class="size-10" />
					</div>
				</div>

				<!-- Content Section -->
				<div class="flex-1 space-y-6">
					<div class="flex flex-col gap-2">
						<div class="flex items-center gap-2">
							<GraduationCap class="size-5 text-emerald-500 md:hidden" />
							<h3 class="text-2xl font-bold text-slate-900 dark:text-white">
								{education.university}
							</h3>
						</div>
						<p class="text-sm font-medium text-slate-500 dark:text-slate-400">
							{education.faculty}
						</p>
					</div>

					<div class="grid gap-4 sm:grid-cols-2">
						<div class="flex items-center gap-3 text-slate-700 dark:text-slate-300">
							<div class="rounded-lg bg-slate-100 p-2 dark:bg-white/5">
								<BookOpenCheck class="size-4 text-emerald-500" />
							</div>
							<span class="font-semibold">{education.major}</span>
						</div>

						<div class="flex items-center gap-3 text-slate-700 dark:text-slate-300">
							<div class="rounded-lg bg-slate-100 p-2 dark:bg-white/5">
								<Calendar class="size-4 text-emerald-500" />
							</div>
							<span class="font-medium">{education.period}</span>
						</div>
					</div>

					<div class="space-y-4 pt-4">
						<div
							class="flex items-center gap-2 text-sm font-bold tracking-wider text-slate-400 uppercase"
						>
							<Cpu class="size-4" />
							<span>Key Focus Areas</span>
						</div>

						<div class="flex flex-wrap gap-3">
							{#each education.focus as item}
								<div
									class="rounded-xl border border-slate-200/50 bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-md dark:border-white/5 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
								>
									{item}
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom Motivation Line -->
	<div
		class="mx-auto flex flex-col items-center gap-4 text-center"
		in:fade={{ duration: 1000, delay: 1200 }}
	>
		<p class="text-sm font-medium text-slate-500 dark:text-slate-400">
			"Education is the most powerful weapon which you can use to change the world."
		</p>
	</div>
</section>
