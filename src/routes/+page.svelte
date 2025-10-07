<script>
	import { smoothScroll } from '$lib/actions/smoothScroll.js';
	import TextTyping from "$lib/components/TextTyping.svelte";
	import { ChevronRight } from 'lucide-svelte';

	import Header from '$lib/components/Header.svelte';

	const logo = "https://ik.imagekit.io/gbyte/logo/Logo%20v5.2023.2%20(beta-circle).png";
</script>

<svelte:head>
	<title>Adam G</title>
</svelte:head>

<Header />

<section
	id="home"
	class="mx-5 flex min-h-screen flex-col justify-center transition-transform duration-700 ease-in-out will-change-transform md:mx-30"
>
	<h1 class="flex items-center gap-3 text-2xl leading-none font-bold md:text-5xl">
		<TextTyping />
	</h1>
	<h1 class="flex items-center gap-3 text-xl leading-none font-bold md:text-3xl">
		Hi, I'm <TextTyping words={[
			'Adam Gumilang',
			'adam-gbyte'
		]} nextText={''} />
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

<section id="about" class="flex md:flex-row flex-col h-screen items-center justify-center m-5 md:mx-30">
	<img src={logo} alt="Logo" class="w-[250px] md:w-[300px]" />
	<div class="flex flex-col md:pl-10">
		<h1 class="text-4xl mb-5 text-center mt-5">About me</h1>
		<p>Hello, I'm Adam Gumilang, a full-stack developer with 1 year of experience. I have a strong passion for crafting both intuitive user interfaces and robust backend systems. With expertise in HTML, CSS, JavaScript, Node.js, and databases, I enjoy collaborating to deliver end-to-end creative solutions. Additionally, I'm eager to continue learning and staying up-to-date with the latest web technologies.</p>
	</div>
</section>

<section id="skill" class="flex flex-col h-screen items-center justify-center m-5 md:mx-30">
	<h1 class="text-5xl">Skill & Experience</h1>
	<div class="flex flex-row">
		<div>
			Logo
		</div>
		<div>
			Logo
		</div>		
	</div>
</section>

<section id="project" class="flex h-screen items-center justify-center">
	<h1 class="text-5xl">Project Section</h1>
</section>

<section id="kontak" class="flex h-screen items-center justify-center">
	<h1 class="text-5xl">Kontak Section</h1>
</section>
