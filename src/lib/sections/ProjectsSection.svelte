<script>
	import {
		ChevronLeft,
		ChevronRight,
		ExternalLink,
		Github,
		Layers,
		Code,
		Zap,
		Globe
	} from 'lucide-svelte';
	import { tabs } from '$lib/data/dataProjects';
	import { fade, fly } from 'svelte/transition';

	// Track current image index for each project independently
	// Use fallback empty array if tabs is undefined to prevent crash
	let currentImages = (tabs || []).map(() => 0);

	function next(projectIndex, images) {
		if (!images || images.length === 0) return;
		currentImages[projectIndex] = (currentImages[projectIndex] + 1) % images.length;
	}

	function prev(projectIndex, images) {
		if (!images || images.length === 0) return;
		currentImages[projectIndex] = (currentImages[projectIndex] - 1 + images.length) % images.length;
	}

	function goTo(projectIndex, imageIndex) {
		currentImages[projectIndex] = imageIndex;
	}
</script>

<section
	id="projects"
	class="relative mx-auto flex w-full max-w-7xl flex-col gap-24 overflow-hidden px-6 py-24 sm:px-8 lg:py-32"
>
	<!-- Background Glow -->
	<div
		class="pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
	></div>

	<!-- Header -->
	<div class="mx-auto flex max-w-3xl flex-col items-center text-center">
		<div
			class="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400"
			in:fly={{ y: 20, duration: 800, delay: 0 }}
		>
			<Layers class="size-3.5" />
			<span>Portfolio</span>
		</div>
		<h2
			class="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white"
			in:fly={{ y: 20, duration: 800, delay: 200 }}
		>
			Featured <span
				class="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
				>Projects</span
			>
		</h2>
		<p
			class="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
			in:fly={{ y: 20, duration: 800, delay: 400 }}
		>
			A selection of things I've built, ranging from web applications to open-source tools.
		</p>
	</div>

	<!-- Projects Stack -->
	<div class="flex flex-col gap-32">
		{#if tabs && tabs.length > 0}
			{#each tabs as project, i}
				<div
					class="group relative flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20 {i %
						2 !==
					0
						? 'lg:flex-row-reverse'
						: ''}"
					in:fly={{ y: 50, duration: 800, delay: 200 }}
				>
					<!-- Text Content Side -->
					<div class="flex flex-col gap-6 lg:w-5/12">
						<div>
							<div class="flex items-center gap-3">
								<span
									class="text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400"
								>
									{project.badge || 'Project'}
								</span>
								<div class="h-px flex-1 bg-gradient-to-r from-emerald-500/20 to-transparent"></div>
							</div>

							<h3
								class="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl dark:text-white"
							>
								{project.title}
							</h3>

							{#if project.subtitle}
								<div
									class="mt-3 flex items-center gap-2 text-base font-semibold text-slate-700 dark:text-slate-300"
								>
									<Zap class="size-4 text-emerald-500" />
									{project.subtitle}
								</div>
							{/if}
						</div>

						<p class="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
							{project.description}
						</p>

						{#if project.tags}
							<div class="flex flex-wrap gap-2">
								{#each project.tags as t}
									<span
										class="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-800 dark:text-slate-300"
									>
										{t}
									</span>
								{/each}
							</div>
						{/if}

						<div class="mt-4 flex flex-wrap gap-4">
							{#if project.link}
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									class="group/btn inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-emerald-500/30 dark:bg-white dark:text-slate-900 dark:hover:bg-emerald-400"
								>
									<span>View Project</span>
									<!-- Replaced ArrowUpRight with ExternalLink for compatibility -->
									<ExternalLink
										class="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
									/>
								</a>
							{/if}

							{#if project.github}
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									class="group/btn inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
								>
									<Github class="size-4" />
									<span>Source Code</span>
								</a>
							{/if}
						</div>
					</div>

					<!-- Image/Visual Side -->
					<div class="relative lg:w-7/12">
						<!-- Geometric Decoration - Using string interpolation for classes -->
						<div
							class="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-slate-200/50 to-slate-100/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-slate-800/50 dark:to-slate-900/50 {i %
								2 ===
							0
								? 'left-1/2'
								: 'right-1/2'}"
						></div>

						<!-- Browser Window Frame -->
						<div
							class="group/slider relative overflow-hidden rounded-xl border border-slate-200/60 bg-slate-50 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
						>
							<!-- Browser Controls -->
							<div
								class="flex items-center gap-1.5 border-b border-slate-200/50 bg-slate-100/50 px-4 py-3 backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-800/50"
							>
								<div class="size-2.5 rounded-full bg-red-400"></div>
								<div class="size-2.5 rounded-full bg-amber-400"></div>
								<div class="size-2.5 rounded-full bg-green-400"></div>
								<div
									class="ml-4 flex-1 rounded-md bg-white/50 px-3 py-1 text-xs text-slate-400 dark:bg-slate-950/30"
								>
									{#if project.link}
										{project.link.replace('https://', '').replace(/\/$/, '')}
									{:else}
										project-preview
									{/if}
								</div>
							</div>

							<div class="relative w-full overflow-hidden bg-slate-900">
								<div
									class="flex h-full transition-transform duration-700 ease-in-out"
									style="transform: translateX(-{(currentImages[i] || 0) * 100}%);"
								>
									{#each project.images as image, idx}
										<div class="relative h-full w-full flex-shrink-0">
											{#if image}
												<img
													src={image}
													alt={`${project.title} ${idx + 1}`}
													class="h-full w-full object-cover object-top"
													loading="lazy"
												/>
											{:else}
												<div
													class="flex h-full w-full items-center justify-center bg-slate-800 text-slate-500"
												>
													No Image
												</div>
											{/if}
											<!-- Image overlay gradient -->
											<div
												class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"
											></div>
										</div>
									{/each}
								</div>

								<!-- Navigation Arrows (Only show if multiple images) -->
								{#if project.images && project.images.length > 1}
									<button
										on:click={() => prev(i, project.images)}
										class="absolute top-1/2 left-4 -translate-y-1/2 rounded-full border border-white/10 bg-black/30 p-2 text-white/90 opacity-0 backdrop-blur-md transition-all group-hover/slider:opacity-100 hover:scale-110 hover:bg-black/50"
									>
										<ChevronLeft class="size-5" />
									</button>

									<button
										on:click={() => next(i, project.images)}
										class="absolute top-1/2 right-4 -translate-y-1/2 rounded-full border border-white/10 bg-black/30 p-2 text-white/90 opacity-0 backdrop-blur-md transition-all group-hover/slider:opacity-100 hover:scale-110 hover:bg-black/50"
									>
										<ChevronRight class="size-5" />
									</button>

									<!-- Slide Indicators -->
									<div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
										{#each project.images as _, idx}
											<button
												on:click={() => goTo(i, idx)}
												aria-label={`Go to slide ${idx + 1}`}
												class="h-1.5 rounded-full shadow-sm transition-all duration-300
												{idx === (currentImages[i] || 0) ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'}"
											></button>
										{/each}
									</div>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/each}
		{:else}
			<div class="text-center text-slate-500">No projects loaded.</div>
		{/if}
	</div>
</section>
