<script>
	import { onMount, onDestroy } from 'svelte';

	let scrolled = false;
	let isScrolled = false;

	const handleScroll = () => {
		scrolled = window.scrollY > 50;
	};

	$: isScrolled = scrolled;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onDestroy(() => {
		window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="
		nav-base
		{scrolled ? 'nav-scrolled' : 'nav-transparent'}
	"
>
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
		<h1 class="text-xl font-bold">MyApp</h1>

		<ul class="flex gap-6 font-medium">
			<li><a href="/#" class="hover:text-blue-600">Home</a></li>
			<li><a href="/#" class="hover:text-blue-600">About</a></li>
			<li><a href="/#" class="hover:text-blue-600">Contact</a></li>
		</ul>
	</div>
</nav>
