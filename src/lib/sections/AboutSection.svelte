<script>
	import { User, Code, Briefcase, Sparkles } from 'lucide-svelte';
</script>

<section
	id="about"
	class="relative mx-auto flex w-full max-w-6xl justify-center overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
>
	<div
		class="relative grid w-full grid-cols-1 items-center gap-12 rounded-3xl border border-white/40 bg-white/60 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:shadow-emerald-500/10 sm:p-12 md:grid-cols-2 dark:border-white/10 dark:bg-slate-900/60"
	>
		<!-- IMAGE COLUMN -->
		<div class="relative order-1 mx-auto w-full max-w-sm md:order-none">
			<!-- Animated Glow Background -->
			<div
				class="absolute -inset-4 rotate-6 rounded-[2rem] bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 opacity-30 blur-2xl transition-all duration-700 hover:rotate-12 hover:opacity-50"
			></div>

			<!-- Image Container -->
			<div
				class="relative overflow-hidden rounded-[2rem] border border-white/30 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
			>
				<div
					class="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"
				></div>
				<img
					class="h-full w-full object-cover"
					src="https://ik.imagekit.io/ginvitations/assets/BrideAndGroom.png"
					alt="Profile"
					loading="lazy"
				/>
			</div>
		</div>

		<!-- TEXT COLUMN -->
		<div class="order-2 flex flex-col gap-6 text-center md:text-left">
			<!-- Badge -->
			<div
				class="group mx-auto flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-medium text-emerald-600 transition-colors hover:bg-emerald-500/10 md:mx-0 dark:text-emerald-400"
			>
				<Sparkles class="size-3.5" />
				<span>Introduction</span>
			</div>

			<!-- Heading -->
			<h2
				class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white"
			>
				About <span
					class="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
					>Me</span
				>
			</h2>

			<!-- Description -->
			<p class="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
				I am a <span class="font-semibold text-emerald-600 dark:text-emerald-400"
					>full-stack developer</span
				>
				passionate about crafting digital experiences that live on the web. My focus is on building accessible,
				pixel-perfect, and performant applications that solve real-world problems.
			</p>

			<!-- Stats Grid -->
			<div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
				<!-- Experience Card -->
				<div
					class="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 dark:border-white/10 dark:bg-white/5"
				>
					<div class="flex items-start gap-4">
						<div
							class="rounded-lg bg-emerald-100/50 p-2.5 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
						>
							<Briefcase class="size-5" />
						</div>
						<div>
							<p class="text-sm font-semibold text-slate-900 dark:text-white">Experience</p>
							<p class="mt-1 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
								2+ <span class="text-base font-normal text-slate-500 dark:text-slate-400"
									>Years</span
								>
							</p>
						</div>
					</div>
				</div>

				<!-- Focus Card -->
				<div
					class="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 dark:border-white/10 dark:bg-white/5"
				>
					<div class="flex items-start gap-4">
						<div
							class="rounded-lg bg-blue-100/50 p-2.5 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
						>
							<Code class="size-5" />
						</div>
						<div>
							<p class="text-sm font-semibold text-slate-900 dark:text-white">Focus</p>
							<p class="mt-1 text-lg font-bold text-slate-700 dark:text-slate-200">
								Full-Stack Web
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Background Decorative Elements -->
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px]"
	></div>
	<div
		class="pointer-events-none absolute top-0 right-0 -z-10 h-[300px] w-[300px] translate-x-1/3 -translate-y-1/3 rounded-full bg-teal-500/10 blur-[80px]"
	></div>
</section>
