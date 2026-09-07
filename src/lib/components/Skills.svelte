<script>
	import { Layout, Server, BrainCircuit, Wrench, Zap } from 'lucide-svelte';
	import { t } from '$lib/i18n';

	const categoryList = [
		{
			key: 'frontend',
			icon: Layout,
			skills: ['SvelteKit', 'React.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
			accent: 'text-sky-500 dark:text-sky-400',
			borderHover: 'hover:border-sky-500/40'
		},
		{
			key: 'backend',
			icon: Server,
			skills: ['Node.js', 'Express', 'Python', 'MySQL', 'MongoDB', 'REST APIs'],
			accent: 'text-indigo-500 dark:text-indigo-400',
			borderHover: 'hover:border-indigo-500/40'
		},
		{
			key: 'ai',
			icon: BrainCircuit,
			skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'YOLOv8'],
			accent: 'text-rose-500 dark:text-rose-400',
			borderHover: 'hover:border-rose-500/40'
		},
		{
			key: 'devops',
			icon: Wrench,
			skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Antigravity', 'Vite'],
			accent: 'text-violet-500 dark:text-violet-400',
			borderHover: 'hover:border-violet-500/40'
		}
	];
</script>

<section
	id="skills"
	class="relative mx-auto flex w-full max-w-7xl flex-col gap-16 overflow-hidden px-6 py-24 sm:px-8 lg:py-32"
>
	<!-- Ambient Background Glow -->
	<div
		class="pointer-events-none absolute top-1/4 -left-20 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[140px] dark:bg-indigo-500/15"
	></div>
	<div
		class="pointer-events-none absolute -right-20 bottom-10 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px] dark:bg-cyan-500/12"
	></div>

	<!-- Section Header -->
	<div class="mx-auto flex max-w-3xl flex-col items-center text-center">
		<h2
			class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white"
		>
			{$t.skills.headingPart1}
			<span
				class="bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-400"
				>{$t.skills.headingPart2}</span
			>
		</h2>

		<p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-zinc-400">
			{$t.skills.subtitle}
		</p>
	</div>

	<!-- Skills Grid -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		{#each categoryList as item}
			{@const Icon = item.icon}
			{@const categoryData = $t.skills.categories[item.key]}
			<div
				class="group relative flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white/70 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/80 {item.borderHover}"
			>
				<div>
					<!-- Top Icon & Title -->
					<div class="flex items-center gap-3.5">
						<div
							class="flex size-11 items-center justify-center rounded-lg bg-slate-100 dark:bg-zinc-800 {item.accent}"
						>
							<Icon class="size-5 transition-transform duration-300 group-hover:scale-110" />
						</div>
						<h3 class="text-lg font-bold text-slate-900 dark:text-white">
							{categoryData.title}
						</h3>
					</div>

					<p class="mt-3 text-xs leading-relaxed text-slate-500 dark:text-zinc-400">
						{categoryData.description}
					</p>
				</div>

				<!-- Skills Badges -->
				<div class="mt-6 flex flex-wrap gap-2">
					{#each item.skills as skill}
						<span
							class="inline-flex items-center gap-1.5 rounded-md border border-slate-200/60 bg-white/80 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 shadow-xs transition-all hover:bg-slate-100 hover:text-slate-900 dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
						>
							<Zap class="size-3 text-indigo-500 dark:text-indigo-400" />
							<span>{skill}</span>
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
