<script>
	import {
		ArrowRight,
		Send,
		Download,
		Plus,
		Trash,
		Settings,
		Mail,
		Github,
		Linkedin,
		ExternalLink
	} from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';

	const variants = [
		{
			name: 'Primary Gradient',
			class:
				'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5',
			icon: ArrowRight
		},
		{
			name: 'Glass Emerald',
			class:
				'bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 backdrop-blur-sm hover:bg-emerald-500/20 hover:-translate-y-0.5 dark:text-emerald-400',
			icon: Send
		},
		{
			name: 'Glass Slate',
			class:
				'bg-slate-900/5 border border-slate-900/10 text-slate-900 backdrop-blur-sm hover:bg-slate-900/10 hover:-translate-y-0.5 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10',
			icon: Download
		},
		{
			name: 'Outline Glow',
			class:
				'border-2 border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 hover:-translate-y-0.5 dark:border-white/10 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-400',
			icon: Settings
		},
		{
			name: 'Ghost Accent',
			class:
				'text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-400 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400',
			icon: Plus
		},
		{
			name: 'Destructive',
			class:
				'bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20',
			icon: Trash
		},
		{
			name: 'Neon Glow',
			class:
				'bg-slate-900 text-emerald-400 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-95 transition-all duration-300',
			icon: ExternalLink
		},
		{
			name: 'Neo-Brutalist',
			class:
				'bg-emerald-400 text-slate-900 border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all',
			icon: Plus
		},
		{
			name: 'Glass Shimmer',
			class:
				'relative overflow-hidden bg-white/10 border border-white/20 text-slate-900 dark:text-white backdrop-blur-md hover:bg-white/20 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent hover:before:animate-[shimmer_1.5s_infinite]',
			icon: Settings
		},
		{
			name: 'Floating 3D',
			class:
				'bg-white text-emerald-600 border border-slate-100 shadow-[0_10px_20px_-5px_rgba(16,185,129,0.2)] hover:shadow-[0_20px_25px_-5px_rgba(16,185,129,0.3)] hover:-translate-y-1.5 active:translate-y-0 transition-all duration-300 dark:bg-slate-800 dark:border-slate-700 dark:text-emerald-400',
			icon: Send
		},
		{
			name: 'Cyber Glitch',
			class:
				'relative bg-purple-600 text-white border-2 border-cyan-400 hover:skew-x-2 active:skew-x-0 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] before:absolute before:inset-0 before:bg-red-500 before:opacity-0 hover:before:opacity-100 hover:before:animate-pulse before:-z-10 bg-clip-padding transition-all',
			icon: Github
		},
		{
			name: 'Retro Arcade',
			class:
				'bg-yellow-400 text-black border-4 border-black font-mono uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:bg-yellow-500 transition-all',
			icon: Plus
		},
		{
			name: 'Border Beam',
			class:
				'relative p-[2px] overflow-hidden rounded-xl bg-slate-950 text-white before:absolute before:inset-[-1000%] before:animate-[spin_4s_linear_infinite] before:bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#3b82f6_50%,#10b981_100%)]',
			innerClass:
				'relative flex h-full w-full items-center justify-center rounded-[11px] bg-slate-950 px-5 py-2.5 text-sm font-semibold backdrop-blur-3xl',
			icon: Settings,
			isCustom: true
		},
		{
			name: 'Liquid Morph',
			class:
				'rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-gradient-to-br from-indigo-500 to-purple-600 text-white animate-[morph_5s_ease-in-out_infinite] hover:animate-none hover:scale-105 transition-all shadow-xl',
			icon: ExternalLink
		},
		{
			name: 'Neumorphic Glass',
			class:
				'bg-white/10 dark:bg-slate-800/10 border border-white/20 dark:border-white/5 shadow-[inset_10px_10px_15px_rgba(0,0,0,0.1),10px_10px_15px_rgba(0,0,0,0.1)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),5px_5px_10px_rgba(0,0,0,0.1)] transition-all dark:text-slate-200',
			icon: Mail
		},
		{
			name: 'Holographic',
			class:
				'relative overflow-hidden bg-white/10 border border-white/30 text-white font-bold backdrop-blur-md transition-all duration-500 hover:scale-105 before:absolute before:inset-0 before:-z-10 before:animate-[hologram_3s_linear_infinite] before:bg-[linear-gradient(45deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,#ff0000)] before:[background-size:400%_400%] before:opacity-30 hover:before:opacity-100 dark:text-white shadow-2xl',
			icon: ExternalLink
		},
		{
			name: 'Blueprint Sketch',
			class:
				'bg-[#1a3a5f] text-white border-2 border-white/40 font-mono rounded-[20px_5px_15px_8px/12px_15px_8px_20px] hover:rounded-[15px_10px_20px_5px/5px_20px_10px_15px] transition-all hover:bg-[#254d7e] shadow-[4px_4px_0px_rgba(255,255,255,0.2)] active:shadow-none active:translate-x-1 active:translate-y-1',
			icon: Settings
		},
		{
			name: 'Expanding Aura',
			class:
				'relative bg-emerald-500 text-white shadow-[0_0_0_0_rgba(16,185,129,0.4)] hover:shadow-[0_0_0_20px_rgba(16,185,129,0)] transition-all duration-700 hover:-translate-y-1',
			icon: Send
		},
		{
			name: 'Perspective Tilt',
			class:
				'relative bg-slate-100 text-slate-800 border border-slate-200 [transform-style:preserve-3d] [perspective:1000px] hover:[transform:rotateX(10deg)_rotateY(-10deg)] hover:shadow-2xl transition-all duration-500 dark:bg-slate-800 dark:text-white dark:border-slate-700',
			icon: Plus
		}
	];

	const sizes = [
		{ name: 'Small', class: 'px-3 py-1.5 text-xs' },
		{ name: 'Medium', class: 'px-5 py-2.5 text-sm' },
		{ name: 'Large', class: 'px-8 py-3.5 text-base' }
	];
</script>

<svelte:head>
	<title>Button Components | Adam Gumilang</title>
</svelte:head>

<section class="relative min-h-screen w-full overflow-hidden bg-white px-6 py-24 dark:bg-slate-950">
	<!-- Background Glows -->
	<div
		class="pointer-events-none absolute -top-20 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]"
	></div>
	<div
		class="pointer-events-none absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]"
	></div>

	<div class="mx-auto max-w-5xl space-y-20">
		<div class="space-y-4 text-center" in:fly={{ y: 20, duration: 800 }}>
			<span
				class="inline-block rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400"
			>
				UI Components
			</span>
			<h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
				Premium <span
					class="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
					>Button</span
				> Variants
			</h1>
			<p class="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
				A collection of modern, accessible, and highly customizable button components designed for
				the next generation of web applications.
			</p>
		</div>

		<div class="grid gap-12">
			{#each variants as variant, i}
				<div
					class="group relative space-y-6 rounded-3xl border border-slate-200 bg-white/50 p-8 backdrop-blur-xl transition-all hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5 dark:border-white/10 dark:bg-slate-900/50"
					in:fly={{ y: 20, duration: 800, delay: i * 100 }}
				>
					<div class="flex items-center justify-between">
						<h3 class="text-xl font-bold text-slate-900 dark:text-white">{variant.name}</h3>
						<span class="font-mono text-xs text-slate-400">0{i + 1}</span>
					</div>

					<div class="flex flex-wrap items-center gap-6">
						{#each sizes as size}
							<button
								class="group/btn inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 {variant.class} {size.class}"
							>
								{#if variant.isCustom}
									<span class={variant.innerClass}>
										<svelte:component
											this={variant.icon}
											class="mr-2 size-4 transition-transform group-hover/btn:scale-110"
										/>
										{variant.name}
									</span>
								{:else}
									<svelte:component
										this={variant.icon}
										class="size-4 transition-transform group-hover/btn:scale-110"
									/>
									{variant.name}
								{/if}
							</button>
						{/each}

						<!-- Disabled Example -->
						<button
							disabled
							class="inline-flex cursor-not-allowed items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold opacity-50 {variant.class}"
						>
							<svelte:component this={variant.icon} class="size-4" />
							Disabled
						</button>
					</div>
				</div>
			{/each}
		</div>

		<!-- Footer Link -->
		<div class="flex justify-center pt-10" in:fade={{ delay: 1000 }}>
			<a
				href="/"
				class="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
			>
				<ArrowRight class="size-4 rotate-180" />
				Back to Home
			</a>
		</div>
	</div>
</section>

<style>
	@keyframes shimmer {
		100% {
			transform: translateX(100%);
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes morph {
		0%,
		100% {
			border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
		}
		50% {
			border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
		}
	}

	@keyframes hologram {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
