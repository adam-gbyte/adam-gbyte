<script>
	import { Briefcase, GraduationCap, Code2, Users2 } from 'lucide-svelte';
	import { t } from '$lib/i18n';
</script>

<section
	id="about"
	class="relative mx-auto flex w-full max-w-7xl flex-col gap-16 overflow-hidden px-6 py-24 sm:px-8 lg:py-32"
>
	<!-- Ambient Background -->
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[140px] dark:bg-indigo-500/15"
	></div>

	<!-- Section Header -->
	<div class="mx-auto flex max-w-3xl flex-col items-center text-center">
		<h2
			class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white"
		>
			{$t.about.headingPart1} <br class="hidden sm:inline" />
			<span
				class="bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-400"
				>{$t.about.headingPart2}</span
			>
		</h2>
	</div>

	<!-- Main Bento Grid -->
	<div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
		<!-- Left: Portrait Card (Spans 5 cols) -->
		<div
			class="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white/70 p-6 shadow-xl backdrop-blur-xl lg:col-span-5 dark:border-zinc-800 dark:bg-zinc-900/80"
		>
			<div class="relative aspect-4/5 w-full overflow-hidden rounded-lg bg-zinc-950">
				<img
					src="https://ik.imagekit.io/goldiron/adam-gbyte/AdamG.jpeg"
					alt="Adam Gumilang"
					class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					loading="lazy"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"
				></div>
				<div class="absolute inset-x-4 bottom-4 flex items-center justify-between text-white">
					<div>
						<p class="text-base font-bold">Adam Gumilang</p>
						<p class="text-xs text-zinc-300">{$t.about.roleTag}</p>
					</div>
					<span
						class="rounded-md border border-white/20 bg-black/40 px-2.5 py-1 font-mono text-xs backdrop-blur-md"
						>IDN</span
					>
				</div>
			</div>

			<div class="mt-6 flex flex-col gap-2">
				<p class="text-sm font-semibold text-slate-800 dark:text-zinc-200">
					{$t.about.bioTitle}
				</p>
				<p class="text-xs leading-relaxed text-slate-500 dark:text-zinc-400">
					{$t.about.bioSubtitle}
				</p>
			</div>
		</div>

		<!-- Right: Bio & Key Bento Cards (Spans 7 cols) -->
		<div class="flex flex-col gap-6 lg:col-span-7">
			<!-- Narrative Card -->
			<div
				class="rounded-xl border border-slate-200/80 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/80"
			>
				<h3 class="text-xl font-bold text-slate-900 dark:text-white">
					{$t.about.narrativeTitle}
				</h3>
				<p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-zinc-300">
					{$t.about.narrativeBody}
				</p>
			</div>

			<!-- 2x2 Mini Bento Grid -->
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<!-- Stat Card 1 -->
				<div
					class="group rounded-xl border border-slate-200/80 bg-white/70 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 dark:border-zinc-800 dark:bg-zinc-900/80"
				>
					<div
						class="flex size-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400"
					>
						<Briefcase class="size-5" />
					</div>
					<h4 class="mt-4 text-base font-bold text-slate-900 dark:text-white">
						{$t.about.stats.experience}
					</h4>
					<p class="mt-1 text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
						{$t.about.stats.experienceYears}
					</p>
					<p class="mt-2 text-xs text-slate-500 dark:text-zinc-400">
						{$t.about.stats.experienceDesc}
					</p>
				</div>

				<!-- Stat Card 2 -->
				<div
					class="group rounded-xl border border-slate-200/80 bg-white/70 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 dark:border-zinc-800 dark:bg-zinc-900/80"
				>
					<div
						class="flex size-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400"
					>
						<Code2 class="size-5" />
					</div>
					<h4 class="mt-4 text-base font-bold text-slate-900 dark:text-white">
						{$t.about.stats.focus}
					</h4>
					<p class="mt-1 text-base font-bold text-slate-700 dark:text-zinc-200">
						{$t.about.stats.focusValue}
					</p>
					<p class="mt-2 text-xs text-slate-500 dark:text-zinc-400">
						{$t.about.stats.focusDesc}
					</p>
				</div>

				<!-- Stat Card 3 -->
				<div
					class="group rounded-xl border border-slate-200/80 bg-white/70 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 dark:border-zinc-800 dark:bg-zinc-900/80"
				>
					<div
						class="flex size-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400"
					>
						<GraduationCap class="size-5" />
					</div>
					<h4 class="mt-4 text-base font-bold text-slate-900 dark:text-white">
						{$t.about.stats.education}
					</h4>
					<p class="mt-1 text-sm font-bold text-slate-700 dark:text-zinc-200">
						{$t.about.stats.educationValue}
					</p>
					<p class="mt-2 text-xs text-slate-500 dark:text-zinc-400">
						{$t.about.stats.educationDesc}
					</p>
				</div>

				<!-- Stat Card 4 -->
				<div
					class="group rounded-xl border border-slate-200/80 bg-white/70 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 dark:border-zinc-800 dark:bg-zinc-900/80"
				>
					<div
						class="flex size-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400"
					>
						<Users2 class="size-5" />
					</div>
					<h4 class="mt-4 text-base font-bold text-slate-900 dark:text-white">
						{$t.about.stats.collaboration}
					</h4>
					<p class="mt-1 text-sm font-bold text-slate-700 dark:text-zinc-200">
						{$t.about.stats.collaborationValue}
					</p>
					<p class="mt-2 text-xs text-slate-500 dark:text-zinc-400">
						{$t.about.stats.collaborationDesc}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
