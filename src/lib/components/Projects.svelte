<script>
	import { ExternalLink, Github, ChevronLeft, ChevronRight, Zap } from 'lucide-svelte';
	import { tabs } from '$lib/data/dataProjects';
	import { currentLang, t } from '$lib/i18n';

	let currentImages = $state((tabs || []).map(() => 0));

	function next(projectIndex, images) {
		if (!images || images.length === 0) return;
		currentImages[projectIndex] = (currentImages[projectIndex] + 1) % images.length;
		currentImages = [...currentImages];
	}

	function prev(projectIndex, images) {
		if (!images || images.length === 0) return;
		currentImages[projectIndex] = (currentImages[projectIndex] - 1 + images.length) % images.length;
		currentImages = [...currentImages];
	}

	function goTo(projectIndex, imageIndex) {
		currentImages[projectIndex] = imageIndex;
		currentImages = [...currentImages];
	}

	function getLocalized(field) {
		if (!field) return '';
		if (typeof field === 'object') {
			return field[$currentLang] || field.id || field.en || '';
		}
		return field;
	}
</script>

<section
	id="projects"
	class="relative mx-auto flex w-full max-w-7xl flex-col gap-12 overflow-hidden px-6 py-12 sm:px-8 sm:py-16 md:gap-14 md:py-20"
>
	<!-- Section Header -->
	<div class="mx-auto flex max-w-3xl flex-col items-center text-center">
		<h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
			{$t.projects.headingPart1}
			<span class="text-indigo-600 dark:text-indigo-400">{$t.projects.headingPart2}</span>
		</h2>

		<p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-zinc-400">
			{$t.projects.subtitle}
		</p>
	</div>

	<!-- Projects List -->
	<div class="flex flex-col gap-14 lg:gap-16">
		{#if tabs && tabs.length > 0}
			{#each tabs as project, i}
				{@const badgeText = getLocalized(project.badge)}
				{@const subtitleText = getLocalized(project.subtitle)}
				{@const descText = getLocalized(project.description)}
				<div
					class="group relative flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 {i %
						2 !==
					0
						? 'lg:flex-row-reverse'
						: ''}"
				>
					<!-- Text Side (Width 5/12) -->
					<div class="flex flex-col gap-5 lg:w-5/12">
						<!-- Badge & Title -->
						<div>
							<div class="flex items-center gap-3">
								<span
									class="font-mono text-xs font-bold tracking-wider text-indigo-600 uppercase dark:text-indigo-400"
								>
									{badgeText || 'Project'}
								</span>
								<div class="h-px flex-1 bg-slate-200 dark:bg-zinc-800"></div>
							</div>

							<h3
								class="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white"
							>
								{project.title}
							</h3>

							{#if subtitleText}
								<div
									class="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-zinc-300"
								>
									<Zap class="size-3.5 text-cyan-500" />
									<span>{subtitleText}</span>
								</div>
							{/if}
						</div>

						<!-- Description -->
						<p class="text-base leading-relaxed text-slate-600 dark:text-zinc-300">
							{descText}
						</p>

						<!-- Tech Tags -->
						{#if project.tags}
							<div class="flex flex-wrap gap-2 pt-1">
								{#each project.tags as tag}
									<span
										class="rounded-md border border-slate-200/80 bg-white/70 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300"
									>
										{tag}
									</span>
								{/each}
							</div>
						{/if}

						<!-- CTA Links -->
						<div class="flex flex-wrap items-center gap-3 pt-2">
							{#if project.link}
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									class="group/btn inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-slate-900/15 transition-all hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-indigo-500/25 dark:bg-white dark:text-zinc-950 dark:hover:bg-indigo-400"
								>
									<span>{$t.projects.livePreview}</span>
									<ExternalLink
										class="size-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
									/>
								</a>
							{/if}

							{#if project.github}
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									class="group/btn inline-flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white/80 px-5 py-2.5 text-xs font-bold text-slate-700 shadow-xs transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:text-slate-900 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-white"
								>
									<Github class="size-3.5" />
									<span>{$t.projects.sourceCode}</span>
								</a>
							{/if}
						</div>
					</div>

					<!-- Image / Browser Window Mockup (Width 7/12) -->
					<div class="relative lg:w-7/12">
						<!-- Frame Container -->
						<div
							class="group/slider relative overflow-hidden rounded-xl border border-slate-200/80 bg-zinc-950 shadow-2xl backdrop-blur-xl dark:border-zinc-800"
						>
							<!-- Browser Top Header -->
							<div
								class="flex items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-4 py-2.5"
							>
								<div class="flex items-center gap-1.5">
									<div class="size-2.5 rounded-full bg-rose-500/80"></div>
									<div class="size-2.5 rounded-full bg-amber-500/80"></div>
									<div class="size-2.5 rounded-full bg-emerald-500/80"></div>
								</div>
								<div
									class="max-w-[200px] truncate rounded-md bg-zinc-900 px-3 py-1 font-mono text-[11px] text-zinc-400 sm:max-w-xs"
								>
									{#if project.link}
										{project.link.replace('https://', '').replace(/\/$/, '')}
									{:else}
										preview://adam-portfolio
									{/if}
								</div>
								<div class="size-3"></div>
							</div>

							<!-- Image Viewport -->
							<div class="relative aspect-16/10 w-full overflow-hidden bg-zinc-950 sm:aspect-video">
								<div
									class="flex h-full transition-transform duration-700 ease-in-out"
									style="transform: translateX(-{(currentImages[i] || 0) * 100}%);"
								>
									{#each project.images as image, idx}
										<div class="relative h-full w-full flex-shrink-0">
											{#if image}
												<img
													src={image}
													alt={`${project.title} screenshot ${idx + 1}`}
													class="h-full w-full object-cover object-top"
													loading="lazy"
												/>
											{:else}
												<div
													class="flex h-full w-full items-center justify-center bg-zinc-950 text-zinc-500"
												>
													{$t.projects.noPreview}
												</div>
											{/if}
										</div>
									{/each}
								</div>

								<!-- Controls (If multiple images) -->
								{#if project.images && project.images.length > 1}
									<button
										onclick={() => prev(i, project.images)}
										class="absolute top-1/2 left-3 -translate-y-1/2 rounded-lg border border-white/10 bg-zinc-950/70 p-2 text-white/90 backdrop-blur-md transition-all hover:scale-105 hover:bg-zinc-900"
										aria-label="Previous image"
									>
										<ChevronLeft class="size-4" />
									</button>

									<button
										onclick={() => next(i, project.images)}
										class="absolute top-1/2 right-3 -translate-y-1/2 rounded-lg border border-white/10 bg-zinc-950/70 p-2 text-white/90 backdrop-blur-md transition-all hover:scale-105 hover:bg-zinc-900"
										aria-label="Next image"
									>
										<ChevronRight class="size-4" />
									</button>

									<!-- Slide Dots -->
									<div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
										{#each project.images as _, idx}
											<button
												onclick={() => goTo(i, idx)}
												aria-label={`Jump to slide ${idx + 1}`}
												class="h-1.5 rounded-sm transition-all duration-300
												{idx === (currentImages[i] || 0) ? 'w-5 bg-indigo-400' : 'w-1.5 bg-white/40 hover:bg-white/70'}"
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
			<div class="text-center text-slate-500">{$t.projects.noProjects}</div>
		{/if}
	</div>
</section>
