<script>
	import { Github, Instagram, Linkedin, Mail, ArrowUp } from 'lucide-svelte';

	const year = new Date().getFullYear();

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<footer
	class="relative w-full overflow-hidden border-t border-slate-200/60 bg-white/50 pt-16 pb-8 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/50"
>
	<!-- Background Glow -->
	<div
		class="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-500/5 blur-[80px]"
	></div>

	<div class="mx-auto flex max-w-6xl flex-col gap-12 px-6">
		<div class="flex flex-col items-center justify-between gap-8 md:flex-row">
			<!-- Brand & Tagline -->
			<div class="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
				<a
					href="#home"
					class="text-2xl font-bold tracking-tight text-slate-900 transition hover:opacity-80 dark:text-white"
				>
					<span class="text-emerald-500">Adam</span> Gumilang
				</a>
				<p class="max-w-xs text-sm text-slate-500 dark:text-slate-400">
					Building digital experiences with passion and precision.
				</p>
			</div>

			<!-- Social Links -->
			<div class="flex items-center gap-4">
				<a
					href="https://github.com/adam-gbyte"
					target="_blank"
					rel="noreferrer"
					class="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
					aria-label="GitHub"
				>
					<Github class="size-5 transition-transform group-hover:scale-110" />
				</a>
				<a
					href="https://www.linkedin.com/in/adam-gumilang-663b7a361/"
					target="_blank"
					rel="noreferrer"
					class="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
					aria-label="LinkedIn"
				>
					<Linkedin class="size-5 transition-transform group-hover:scale-110" />
				</a>
				<a
					href="https://www.instagram.com/adam_gumilang_/"
					target="_blank"
					rel="noreferrer"
					class="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:-translate-y-1 hover:border-pink-500 hover:text-pink-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-pink-400 dark:hover:text-pink-400"
					aria-label="Instagram"
				>
					<Instagram class="size-5 transition-transform group-hover:scale-110" />
				</a>
				<a
					href="mailto:adamgumilang2103@gmail.com"
					class="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
					aria-label="Email"
				>
					<Mail class="size-5 transition-transform group-hover:scale-110" />
				</a>
			</div>
		</div>

		<hr class="border-slate-200 dark:border-white/10" />

		<!-- Bottom Bar -->
		<div class="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
			<p class="text-sm text-slate-500 dark:text-slate-400">
				&copy; {year} Adam Gumilang. All rights reserved.
			</p>

			<button
				on:click={scrollToTop}
				class="group flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400"
			>
				Back to Top
				<span
					class="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition group-hover:-translate-y-1 group-hover:bg-emerald-500 group-hover:text-white dark:bg-slate-800"
				>
					<ArrowUp class="size-4" />
				</span>
			</button>
		</div>
	</div>
</footer>
