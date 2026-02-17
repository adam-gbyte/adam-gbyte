<script>
	import {
		Mail,
		MessageSquare,
		ArrowRight,
		Copy,
		Check,
		Send,
		Download,
		FileText,
		CheckCircle2,
		FileDown,
		Linkedin,
		Github,
		Twitter,
		Globe,
		ExternalLink
	} from 'lucide-svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let copied = false;
	const email = 'adamgumilang2103@gmail.com';
	const cvUrl = '/cv/cv_adam_gumilang.pdf';

	function copyEmail() {
		navigator.clipboard.writeText(email);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}

	const socials = [
		{
			name: 'LinkedIn',
			icon: Linkedin,
			href: 'https://www.linkedin.com/in/adam-gumilang-663b7a361/',
			color: 'hover:text-blue-600 dark:hover:text-blue-400'
		},
		{
			name: 'GitHub',
			icon: Github,
			href: 'https://github.com/adam-gbyte',
			color: 'hover:text-slate-900 dark:hover:text-white'
		},
		{
			name: 'Gmail',
			icon: Mail,
			href: 'mailto:adamgumilang2103@gmail.com',
			color: 'hover:text-sky-500 dark:hover:text-sky-400'
		}
	];
</script>

<section
	id="contacts"
	class="relative isolate mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:py-40"
>
	<!-- Section Header -->
	<div class="mb-16 flex flex-col items-center text-center">
		<div
			class="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400"
			in:fly={{ y: 20, duration: 800 }}
		>
			<MessageSquare class="size-3.5" />
			<span class="tracking-widest uppercase">Contact Me</span>
		</div>
		<h2
			class="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
		>
			Let's Create <span
				class="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
				>Together</span
			>
		</h2>
	</div>

	<!-- Bento Grid Container -->
	<div class="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 lg:gap-6">
		<!-- Card 1: Main Contact CTA (Spans 2x2) -->
		<div
			class="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-white/50 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/30 md:col-span-2 md:row-span-2 lg:p-12 dark:border-white/5 dark:bg-slate-900/50"
			in:fly={{ y: 40, duration: 1000, delay: 200 }}
		>
			<div class="relative z-10">
				<div
					class="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
				>
					<Send class="size-8" />
				</div>
				<h3 class="mt-8 text-3xl font-black text-slate-900 lg:text-4xl dark:text-white">
					Have a project <br /> in mind?
				</h3>
				<p class="mt-4 max-w-sm text-lg text-slate-600 dark:text-slate-400">
					I'm currently available for freelance work and open to new full-time opportunities.
				</p>
			</div>

			<div class="mt-12">
				<a
					href="mailto:{email}"
					class="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-slate-900 px-10 py-5 text-lg font-black text-white shadow-2xl transition-all hover:-translate-y-1 hover:bg-emerald-600 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-400"
				>
					<span>Say Hello</span>
					<ArrowRight class="size-5 transition-transform group-hover/btn:translate-x-1" />
				</a>
			</div>

			<!-- Visual Decor -->
			<div class="absolute -right-8 -bottom-8 -z-10 h-64 w-64 opacity-10">
				<Globe class="h-full w-full" />
			</div>
		</div>

		<!-- Card 2: CV Download (Spans 2x1) -->
		<div
			class="group relative col-span-1 flex items-center justify-between overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-white/50 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/30 md:col-span-2 lg:p-10 dark:border-white/5 dark:bg-slate-900/50"
			in:fly={{ y: 40, duration: 1000, delay: 400 }}
		>
			<div class="flex items-center gap-6">
				<div
					class="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
				>
					<FileText class="size-7" />
				</div>
				<div>
					<h3 class="text-xl font-bold text-slate-900 dark:text-white">Curriculum Vitae</h3>
					<p class="text-sm text-slate-500 dark:text-slate-400">PDF • 1.2 MB</p>
				</div>
			</div>
			<a
				href={cvUrl}
				download
				class="group/dl flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 transition-all hover:scale-110 hover:bg-emerald-600 active:scale-95"
				aria-label="Download CV"
			>
				<FileDown class="size-6 transition-transform group-hover/dl:translate-y-0.5" />
			</a>
		</div>

		<!-- Card 3: Socials (Spans 1x1) -->
		<div
			class="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-white/50 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/30 dark:border-white/5 dark:bg-slate-900/50"
			in:fly={{ y: 40, duration: 1000, delay: 600 }}
		>
			<h3 class="text-sm font-black tracking-widest text-slate-400 uppercase">Connect</h3>
			<div class="mt-4 flex flex-col gap-4">
				{#each socials as social}
					<a
						href={social.href}
						class="flex items-center gap-3 text-slate-600 transition-colors {social.color} dark:text-slate-400"
						aria-label={social.name}
					>
						<svelte:component this={social.icon} class="size-5" />
						<span class="text-sm font-bold">{social.name}</span>
					</a>
				{/each}
			</div>
		</div>

		<!-- Card 4: Copy Email & Status (Spans 1x1) -->
		<div
			class="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-white/50 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/30 dark:border-white/5 dark:bg-slate-900/50"
			in:fly={{ y: 40, duration: 1000, delay: 800 }}
		>
			<div class="flex items-center gap-2">
				<div class="relative flex h-2 w-2">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
					></span>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
				</div>
				<span
					class="text-[10px] font-black tracking-widest text-emerald-600 uppercase dark:text-emerald-400"
					>Available</span
				>
			</div>

			<button
				onclick={copyEmail}
				class="group/copy mt-4 flex w-full flex-col items-start gap-2 text-left"
			>
				<span class="text-xs font-bold text-slate-400 uppercase">Click to copy</span>
				<div
					class="flex w-full items-center justify-between gap-2 overflow-hidden rounded-xl border border-slate-200 bg-white/50 px-3 py-2 text-sm font-medium text-ellipsis whitespace-nowrap text-slate-700 dark:border-white/5 dark:bg-slate-800/50 dark:text-slate-300"
				>
					<span class="truncate">{email}</span>
					{#if copied}
						<span in:scale>
							<Check class="size-4 text-emerald-500" />
						</span>
					{:else}
						<Copy class="size-4 text-slate-400 group-hover/copy:text-emerald-500" />
					{/if}
				</div>
			</button>
		</div>
	</div>
</section>

<style>
	/* Grid adjustments for better bento feel */
	@media (min-width: 768px) {
		.grid {
			grid-template-areas:
				'main main cv cv'
				'main main soc stat';
		}
	}
</style>
