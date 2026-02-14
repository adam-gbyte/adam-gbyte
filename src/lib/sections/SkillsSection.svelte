<script>
	import {
		Code2,
		Database,
		Layout,
		Server,
		Terminal,
		Wrench,
		Cpu,
		Globe,
		Zap,
		BrainCircuit
	} from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';

	const skillCategories = [
		{
			title: 'Frontend',
			icon: Layout,
			skills: ['Svelte', 'React', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
			color: 'text-blue-500',
			bg: 'bg-blue-500/10',
			border: 'group-hover:border-blue-500/50',
			gradient: 'from-blue-500/20 to-cyan-500/20'
		},
		{
			title: 'Backend',
			icon: Server,
			skills: ['Node.js', 'Python', 'Java', 'MongoDB', 'REST APIs'],
			color: 'text-emerald-500',
			bg: 'bg-emerald-500/10',
			border: 'group-hover:border-emerald-500/50',
			gradient: 'from-emerald-500/20 to-teal-500/20'
		},
		{
			title: 'AI & Machine Learning',
			icon: BrainCircuit,
			skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
			color: 'text-rose-500',
			bg: 'bg-rose-500/10',
			border: 'group-hover:border-rose-500/50',
			gradient: 'from-rose-500/20 to-pink-500/20'
		},
		{
			title: 'Tools & DevOps',
			icon: Wrench,
			skills: ['Git', 'VS Code', 'Antigravity', 'Vercel'],
			color: 'text-violet-500',
			bg: 'bg-violet-500/10',
			border: 'group-hover:border-violet-500/50',
			gradient: 'from-violet-500/20 to-purple-500/20'
		}
	];
</script>

<section
	id="skills"
	class="relative mx-auto flex w-full max-w-7xl flex-col gap-20 overflow-hidden px-6 py-24 sm:px-8 lg:py-32"
>
	<!-- Background Elements -->
	<div
		class="pointer-events-none absolute top-1/3 right-0 -z-10 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]"
	></div>
	<div
		class="pointer-events-none absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/3 rounded-full bg-violet-500/10 blur-[100px]"
	></div>

	<!-- Header -->
	<div class="mx-auto flex max-w-3xl flex-col items-center text-center">
		<div
			class="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400"
			in:fly={{ y: 20, duration: 800, delay: 0 }}
		>
			<Cpu class="size-3.5" />
			<span>Expertise</span>
		</div>

		<h2
			class="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white"
			in:fly={{ y: 20, duration: 800, delay: 200 }}
		>
			Skills & <span
				class="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
				>Technologies</span
			>
		</h2>

		<p
			class="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
			in:fly={{ y: 20, duration: 800, delay: 400 }}
		>
			I leverage a modern tech stack to build robust, scalable, and intuitive applications. Always
			exploring new tools to enhance development and user experience.
		</p>
	</div>

	<!-- Skills Grid -->
	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
		{#each skillCategories as category, i}
			<div
				class="group relative flex flex-col gap-6 rounded-[2rem] border border-slate-200/60 bg-white/50 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-white/5 dark:bg-slate-900/50 {category.border}"
				in:fly={{ y: 30, duration: 800, delay: 600 + i * 100 }}
			>
				<!-- Subtle Gradient Background on Hover -->
				<div
					class="absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 {category.gradient} rounded-[2rem]"
				></div>

				<!-- Category Header -->
				<div class="flex items-center gap-4">
					<div
						class="flex h-12 w-12 items-center justify-center rounded-2xl {category.bg} {category.color} ring-1 ring-black/5 ring-inset dark:ring-white/10"
					>
						<svelte:component
							this={category.icon}
							class="size-6 transition-transform duration-500 group-hover:scale-110"
						/>
					</div>
					<h3 class="text-xl font-bold text-slate-900 dark:text-white">
						{category.title}
					</h3>
				</div>

				<!-- Skills List -->
				<div class="flex flex-wrap gap-2.5">
					{#each category.skills as skill}
						<div
							class="flex items-center gap-1.5 rounded-lg border border-slate-200/50 bg-white/60 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-md dark:border-white/5 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
						>
							<Zap class="size-3 text-slate-400" />
							{skill}
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<!-- Bottom CTA -->
	<div
		class="mx-auto flex flex-col items-center gap-4 text-center"
		in:fade={{ duration: 1000, delay: 1200 }}
	>
		<div class="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
			<Globe class="size-4 animate-pulse" />
			<span>Continuously expanding my knowledge base.</span>
		</div>
	</div>
</section>
