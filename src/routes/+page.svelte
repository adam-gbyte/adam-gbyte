<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { isLangChanging } from '$lib/i18n';
</script>

<svelte:head>
	<title>Adam Gumilang | Full-Stack Developer & AI Engineer</title>
	<meta
		name="description"
		content="Portofolio resmi Adam Gumilang: Full-Stack Developer & AI Engineer. Menampilkan proyek web modern, arsitektur backend, machine learning, dan keahlian teknis."
	/>
</svelte:head>

<div
	class="relative flex min-h-screen flex-col bg-slate-50/60 text-slate-900 transition-colors duration-300 dark:bg-[#09090b] dark:text-zinc-100"
>
	<Navbar />

	<main
		class="flex flex-1 flex-col items-center transition-all duration-200 ease-out {$isLangChanging
			? 'scale-[0.998] opacity-25'
			: 'scale-100 opacity-100'}"
	>
		<Hero />
		<About />
		<Skills />
		<Projects />
		<Contact />
	</main>

	<div
		class="transition-opacity duration-200 ease-out {$isLangChanging
			? 'opacity-25'
			: 'opacity-100'}"
	>
		<Footer />
	</div>
</div>
