<script>
	import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';
</script>

<section
	id="home"
	class="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-12 overflow-hidden px-6 py-20 md:flex-row md:py-0"
>
	<!-- Background Glows -->
	<div
		class="pointer-events-none absolute -top-20 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]"
	></div>
	<div
		class="pointer-events-none absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]"
	></div>

	<!-- Content -->
	<div class="relative z-10 flex max-w-2xl flex-col gap-3 text-center md:text-left">
		<div in:fly={{ y: 20, duration: 800, delay: 200 }}>
			<span
				class="mx-auto inline-block w-fit rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm font-medium text-emerald-600 md:mx-0 dark:text-emerald-400"
			>
				Available for new projects
			</span>
		</div>

		<div class="space-y-4">
			<h1
				class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white"
				in:fly={{ y: 20, duration: 800, delay: 400 }}
			>
				Adam <span
					class="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
					>Gumilang</span
				>
			</h1>

			<h2
				class="text-xl font-medium text-slate-600 sm:text-2xl dark:text-slate-300"
				in:fly={{ y: 20, duration: 800, delay: 600 }}
			>
				Full-Stack Developer & AI Engineer
			</h2>
		</div>

		<p
			class="mx-auto max-w-lg text-lg leading-relaxed text-slate-600 md:mx-0 dark:text-slate-400"
			in:fly={{ y: 20, duration: 800, delay: 800 }}
		>
			Informatics Engineering student experienced in backend, web development, and basic AI, with a
			strong motivation to learn, collaborate remotely, and build real-world technology solutions.
		</p>

		<div
			class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start"
			in:fly={{ y: 20, duration: 800, delay: 1000 }}
		>
			<a
				href="#projects"
				class="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-emerald-500/30 dark:bg-white dark:text-slate-900 dark:hover:bg-emerald-400"
			>
				View Projects
				<ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
			</a>

			<a
				href="#contacts"
				class="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/50 px-8 py-3.5 text-base font-medium text-slate-700 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:text-slate-900 dark:border-white/10 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white"
			>
				Contact Me
				<Mail class="size-4" />
			</a>
		</div>

		<div
			class="flex items-center justify-center gap-6 pt-4 md:justify-start"
			in:fly={{ y: 20, duration: 800, delay: 1200 }}
		>
			<a
				href="https://github.com/adam-gbyte"
				target="_blank"
				rel="noreferrer"
				class="text-slate-400 transition hover:text-slate-900 dark:hover:text-white"
			>
				<Github class="size-6" />
				<span class="sr-only">GitHub</span>
			</a>
			<a
				href="https://www.linkedin.com/in/adam-gumilang-663b7a361/"
				target="_blank"
				rel="noreferrer"
				class="text-slate-400 transition hover:text-blue-600 dark:hover:text-blue-400"
			>
				<Linkedin class="size-6" />
				<span class="sr-only">LinkedIn</span>
			</a>
		</div>
	</div>

	<!-- Visual/Image Side -->
	<div class="relative z-10 hidden md:block" in:fade={{ duration: 1000, delay: 600 }}>
		<div class="relative h-[500px] w-[500px]">
			<!-- Abstract blobs/shapes -->
			<div
				class="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 blur-3xl"
			></div>

			<!-- Image Container (Glass) -->
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
				<div
					class="relative h-80 w-80 rotate-3 overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm transition duration-500 hover:scale-105 hover:rotate-0"
				>
					<img
						src="https://ik.imagekit.io/goldiron/adam-gbyte/AdamG.jpeg"
						alt="Adam Gumilang"
						class="h-full w-full object-cover"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent mix-blend-overlay"
					></div>
				</div>

				<!-- Floating Badge -->
				<div class="absolute -right-6 -bottom-6 animate-bounce [animation-duration:3s]">
					<div
						class="flex items-center gap-2 rounded-2xl border border-white/40 bg-white/80 p-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80"
					>
						<div class="flex -space-x-2">
							<span
								class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 ring-2 ring-white dark:bg-blue-900 dark:ring-slate-900"
								>⚛️</span
							>
							<span
								class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 ring-2 ring-white dark:bg-orange-900 dark:ring-slate-900"
								>🔥</span
							>
							<span
								class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 ring-2 ring-white dark:bg-emerald-900 dark:ring-slate-900"
								>🎨</span
							>
						</div>
						<div class="flex flex-col">
							<span class="text-xs font-bold text-slate-900 dark:text-white">Full-Stack</span>
							<span class="text-[10px] text-slate-500 dark:text-slate-400">Developer</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
