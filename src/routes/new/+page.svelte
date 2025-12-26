<script>
	let current = 0;

	const slides = [
		{ id: 1, img: 'https://picsum.photos/id/1015/1200/600', title: 'Landscape Project' },
		{ id: 2, img: 'https://picsum.photos/id/1016/1200/600', title: 'UI Exploration' },
		{ id: 3, img: 'https://picsum.photos/id/1018/1200/600', title: 'Creative Design' }
	];

	const next = () => {
		current = (current + 1) % slides.length;
	};

	const prev = () => {
		current = (current - 1 + slides.length) % slides.length;
	};
</script>

<section class="min-h-screen bg-gray-100 flex items-center justify-center">
  <h1 class="text-6xl font-bold">Section 1</h1>
</section>

<section class="min-h-screen bg-gray-200 flex items-center justify-center">
  <h1 class="text-6xl font-bold">Section 2</h1>
</section>


<div class="relative mx-auto mt-24 w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-xl">
	<!-- Slides -->
	<div
		class="flex transition-transform duration-700 ease-out"
		style="transform: translateX(-{current * 100}%);"
	>
		{#each slides as slide}
			<div class="relative h-[420px] w-full flex-shrink-0">
				<img
					src={slide.img}
					alt={slide.title}
					class="h-full w-full object-cover"
				/>

				<!-- Overlay -->
				<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

				<!-- Title -->
				<div class="absolute bottom-6 left-6 text-white">
					<h2 class="text-2xl font-semibold tracking-wide">{slide.title}</h2>
				</div>
			</div>
		{/each}
	</div>

	<!-- Prev -->
	<button
		on:click={prev}
		class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/40"
	>
		‹
	</button>

	<!-- Next -->
	<button
		on:click={next}
		class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/40"
	>
		›
	</button>

	<!-- Indicators -->
	<div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
		{#each slides as _, i}
			<button
				aria-label={i}
				on:click={() => (current = i)}
				class="h-2 w-8 rounded-full transition-all duration-300
				{current === i ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}"
			></button>
		{/each}
	</div>
</div>

<!-- Spacer demo -->
<div class="h-screen bg-neutral-100"></div>
