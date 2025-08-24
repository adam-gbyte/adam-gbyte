<script>
	import { onMount } from 'svelte';

	const navItems = ['Home', 'Profile', 'Project', 'Kontak'];
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
</script>

<!-- HEADER NAV -->
<header
	bind:this={navContainer}
	class="fixed top-0 left-1/2 z-50 mt-4 flex h-25 w-[90%] -translate-x-1/2 flex-col overflow-y-auto rounded-xl border border-white/30 shadow-xl backdrop-blur-sm md:w-[80%] dark:bg-black/10"
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
</header>

<!-- CONTENT SECTIONS -->
<section id="home" class="flex h-screen items-center justify-center bg-gray-100">
	<h1 class="text-5xl">Home Section</h1>
</section>
<section id="profile" class="flex h-screen items-center justify-center bg-gray-200">
	<h1 class="text-5xl">Profile Section</h1>
</section>
<section id="project" class="flex h-screen items-center justify-center bg-gray-300">
	<h1 class="text-5xl">Project Section</h1>
</section>
<section id="kontak" class="flex h-screen items-center justify-center bg-gray-400">
	<h1 class="text-5xl">Kontak Section</h1>
</section>
