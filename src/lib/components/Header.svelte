<script>
	import { onMount } from 'svelte';

	const navItems = ['HOME', 'ABOUT', 'SKILL', 'PROJECT', 'KONTAK'];
	let currentIndex = 0;
	let navContainer;

	function scrollToSection(id) {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}

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