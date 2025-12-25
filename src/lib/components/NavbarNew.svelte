<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let scrolled = false;

	const handleScroll = () => {
		scrolled = window.scrollY > 50;
	};

	onMount(() => {
		if (!browser) return;
		handleScroll();
		window.addEventListener('scroll', handleScroll);
	});

	onDestroy(() => {
		if (!browser) return;
		window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="fixed top-0 z-50 w-full transition-all duration-300
	{scrolled
		? 'bg-white/90 backdrop-blur shadow-md text-gray-900'
		: 'bg-transparent text-black'}"
>
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
		<h1 class="text-xl font-semibold tracking-wide">
			<span class="text-blue-600">My</span>Portfolio
		</h1>

		<ul class="flex gap-8 text-sm uppercase tracking-wider">
			<li><a href="#home" class="hover:text-blue-500 transition">Home</a></li>
			<li><a href="#about" class="hover:text-blue-500 transition">About</a></li>
			<li><a href="#projects" class="hover:text-blue-500 transition">Projects</a></li>
			<li><a href="#contact" class="hover:text-blue-500 transition">Contact</a></li>
		</ul>
	</div>
</nav>
