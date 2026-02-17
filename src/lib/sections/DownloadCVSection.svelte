<script>
	import { Download, FileText, CheckCircle2, FileDown } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';

	const cvUrl = '/cv/cv_adam_gumilang.pdf';
</script>

<section
	id="download-cv"
	class="relative mx-auto flex w-full max-w-7xl flex-col px-6 py-24 sm:px-8 lg:py-32"
>
	<div
		class="group relative overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-white/50 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/30 sm:p-12 lg:p-16 dark:border-white/5 dark:bg-slate-900/50"
		in:fly={{ y: 40, duration: 1000, delay: 200 }}
	>
		<!-- Subtle Gradient Aura -->
		<div
			class="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
		></div>

		<div class="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
			<!-- Text Content -->
			<div class="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
				<div
					class="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400"
					in:fly={{ y: 20, duration: 800, delay: 400 }}
				>
					<FileText class="size-3.5" />
					<span>Curriculum Vitae</span>
				</div>

				<h2
					class="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white"
					in:fly={{ y: 20, duration: 800, delay: 600 }}
				>
					Ready to <span
						class="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
						>Work Together?</span
					>
				</h2>

				<p
					class="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
					in:fly={{ y: 20, duration: 800, delay: 800 }}
				>
					Download my comprehensive CV to explore my detailed technical background, project
					contributions, and educational milestones. Let's build something amazing together.
				</p>

				<div class="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
					<a
						href={cvUrl}
						download
						class="group/btn inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/40 active:scale-95"
						in:fly={{ y: 20, duration: 800, delay: 1000 }}
					>
						<FileDown class="size-5 transition-transform group-hover/btn:scale-110" />
						Download CV
					</a>

					<div
						class="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400"
						in:fade={{ duration: 1000, delay: 1200 }}
					>
						<CheckCircle2 class="size-4 text-emerald-500" />
						<span>PDF Format</span>
					</div>
				</div>
			</div>

			<!-- Decorative Side Element -->
			<div
				class="relative hidden h-64 w-64 items-center justify-center lg:flex"
				in:fade={{ duration: 1000, delay: 800 }}
			>
				<div
					class="absolute inset-0 animate-[spin_20s_linear_infinite] rounded-full border-2 border-dashed border-emerald-500/20"
				></div>
				<div
					class="absolute inset-8 animate-[spin_15s_linear_infinite_reverse] rounded-full border-2 border-dashed border-blue-500/20"
				></div>
				<div
					class="flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 text-emerald-600 shadow-inner backdrop-blur-md dark:border-white/5 dark:text-emerald-400"
				>
					<Download class="size-12 animate-bounce" />
				</div>
			</div>
		</div>
	</div>
</section>
