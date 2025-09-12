<script>
	import { onMount } from 'svelte';

	import { ChevronRight } from 'lucide-svelte';
	import { smoothScroll } from '$lib/actions/smoothScroll.js';

	const navItems = ['HOME', 'ABOUT', 'SKILL', 'PROJECT', 'KONTAK'];
	let currentIndex = 0;
	let navContainer;

	// scroll ke section
	function scrollToSection(id) {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}

	// observer untuk deteksi section aktif
	function createObserver() {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.6
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const idx = navItems.findIndex((i) => i.toLowerCase() === entry.target.id);
					if (idx !== -1) {
						currentIndex = idx;

						// auto scroll nav agar current selalu di tengah
						const activeEl = navContainer.querySelector(`[data-idx="${idx}"]`);
						activeEl?.scrollIntoView({
							block: 'center',
							behavior: 'smooth'
						});
					}
				}
			});
		}, options);

		navItems.forEach((item) => {
			const section = document.getElementById(item.toLowerCase());
			if (section) observer.observe(section);
		});
	}

	onMount(() => {
		createObserver();
	});

	const names = ['adam-gbyte', 'Adam Gumilang'];
	const skills = ['Full Stack', 'Frontend', 'Backend'];
	let index = 0;
	let timer;

	onMount(() => {
		timer = setInterval(() => {
			index = (index + 1) % names.length;
		}, 3000);

		return () => clearInterval(timer);
	});

	let itemHeight = 32; // default mobile

	const checkBreakpoint = () => {
		if (window.matchMedia('(min-width: 768px)').matches) {
			itemHeight = 72; // md ke atas
		} else {
			itemHeight = 32; // mobile
		}
	};

	onMount(() => {
		checkBreakpoint();
		window.addEventListener('resize', checkBreakpoint);
		return () => window.removeEventListener('resize', checkBreakpoint);
	});

	// reactive offsetY
	$: offsetY = `translateY(-${index * itemHeight}px)`;
</script>

<!-- HEADER NAV -->
<header bind:this={navContainer} class="items-center">
	<div
		class="fixed top-0 left-1/2 z-50 mt-4 flex h-25 w-[90%] -translate-x-1/2 flex-col overflow-y-auto rounded-full border-gray-500 bg-white shadow-sm inset-shadow-sm"
	>
		{#each navItems as item, i}
			<button
				data-idx={i}
				on:click={() => scrollToSection(item.toLowerCase())}
				class="my-1 cursor-pointer transition-all duration-300
        {i === currentIndex ? 'text-xl font-bold text-blue-600' : 'text-gray-500'}"
			>
				{item}
			</button>
		{/each}
	</div>

	<button
		on:click={() => {
			document.documentElement.classList.toggle('dark');
		}}
		class="absolute top-3 right-3 rounded-full border border-gray-300 bg-gray-200 px-3 py-1 text-sm transition hover:bg-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
	>
		Toggle Dark Mode
	</button>
</header>

<!-- CONTENT SECTIONS -->
<section
	id="home"
	class="mx-5 flex min-h-screen flex-col justify-center transition-transform duration-700 ease-in-out will-change-transform md:mx-30"
>
	<h1 class="flex items-center gap-3 text-2xl leading-none font-bold md:text-5xl">
		<span>Hi, I&apos;m</span>
		<!-- Kotak teks -->
		<span
			class="relative inline-flex h-[32px] w-[170px] overflow-hidden rounded-xl px-3 md:h-[72px] md:w-[370px]"
			aria-live="polite"
		>
			<span
				class="absolute top-0 left-0 text-blue-600 transition-transform duration-700 ease-in-out will-change-transform"
				style={`transform: ${offsetY}`}
			>
				{#each names as n}
					<span class="block h-[32px] leading-[32px] md:h-[72px] md:leading-[72px]">
						{n}
					</span>
				{/each}
			</span>
		</span>
	</h1>
	<h2 class="text-xl font-bold md:text-3xl">Full Stack Developer</h2>
	<h1 class="flex items-center gap-3 text-2xl leading-none font-bold md:text-5xl">
		<!-- <span>Hi, I&apos;m</span> -->
		<!-- Kotak teks -->
		<span
			class="relative inline-flex h-[32px] w-[170px] overflow-hidden rounded-xl px-3 md:h-[72px] md:w-[370px]"
			aria-live="polite"
		>
			<span
				class="absolute top-0 left-0 text-blue-600 transition-transform duration-700 ease-in-out will-change-transform"
				style={`transform: ${offsetY}`}
			>
				{#each skills as n}
					<span class="block h-[32px] leading-[32px] md:h-[72px] md:leading-[72px]">
						{n}
					</span>
				{/each}
			</span>
		</span>
		<span>Developer</span>
	</h1>
	<p class="mt-4 max-w-xl text-gray-600 dark:text-gray-300">
		Welcome to my personal website! I'm Adam Gumilang, a passionate Full Stack Developer with
		expertise in building dynamic and responsive web applications. Explore my skills, projects, and
		get in touch!
	</p>
	<a href="#about" use:smoothScroll class="mt-5 flex w-full flex-row items-center"
		>About Me<ChevronRight class="h-4" />
	</a>
</section>

<section id="about" class="flex h-screen items-center justify-center">
	<h1 class="text-5xl">About Section</h1>
</section>
<section id="skill" class="flex h-screen items-center justify-center">
	<h1 class="text-5xl">Skill Section</h1>
</section>
<section id="project" class="flex h-screen items-center justify-center">
	<h1 class="text-5xl">Project Section</h1>
</section>
<section id="kontak" class="flex h-screen items-center justify-center">
	<h1 class="text-5xl">Kontak Section</h1>
</section>
