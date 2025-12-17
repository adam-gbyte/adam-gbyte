<script>
	let current = 0;

	const slides = [
		{ id: 1, img: 'https://picsum.photos/id/1015/800/400', title: 'Slide 1' },
		{ id: 2, img: 'https://picsum.photos/id/1016/800/400', title: 'Slide 2' },
		{ id: 3, img: 'https://picsum.photos/id/1018/800/400', title: 'Slide 3' }
	];

	const next = () => {
		current = (current + 1) % slides.length;
	};

	const prev = () => {
		current = (current - 1 + slides.length) % slides.length;
	};
</script>

<div class="relative mx-auto w-full max-w-3xl overflow-hidden bg-green-300 shadow-lg">
	<!-- Slides -->
	<div
		class="flex transition-transform duration-500 ease-in-out"
		style="transform: translateX(-{current * 100}%);"
	>
		{#each slides as slide}
			<div class="h-dvh w-full flex-shrink-0">
				<img src={slide.img} alt={slide.title} class="w-full object-cover" />
			</div>
		{/each}
	</div>

	<!-- Prev Button -->
	<button
		on:click={prev}
		class="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black"
	>
		{'<'}
	</button>

	<!-- Next Button -->
	<button
		on:click={next}
		class="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black"
	>
		{'>'}
	</button>

	<!-- Indicators -->
	<div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
		{#each slides as _, i}
			<button on:click={() => (current = i)} class="h-2 w-2 rounded-full transition-all">Cek</button
			>
		{/each}
	</div>
</div>

<div class="h-screen bg-green-300"></div>
