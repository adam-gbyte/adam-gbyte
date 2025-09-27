<script>
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Header from '$lib/components/Header.svelte';

	import { onMount } from 'svelte';
	onMount(() => {
		if (window.FinisherHeader) {
			new window.FinisherHeader({
				selector: '.finisher-header',
				count: 50,
				size: {
					min: 4,
					max: 8,
					pulse: 0
				},
				speed: {
					x: {
						min: 0,
						max: 0.7
					},
					y: {
						min: 0,
						max: 0.6
					}
				},
				colors: {
					background: '#201e30',
					particles: ['#fbfcca', '#d7f3fe', '#ffd0a7']
				},
				blending: 'overlay',
				opacity: {
					center: 1,
					edge: 0.65
				},
				skew: 0,
				shapes: ['c']
			});
		}
	});
</script>

<!-- <div class="bg-[var(--bg)] text-[var(--text)] transition-colors duration-300"> -->
<!-- <Sidebar /> -->
<Header />

<slot />
<!-- </div> -->
