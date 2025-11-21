<script>
	import { onMount } from 'svelte';
	import { Moon, Sun } from 'lucide-svelte';
	import CodeCard from '$lib/components/CodeCard.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const exampleCode = `
// MyComponent.jsx
import React from 'react';

const MyComponent = ({ name }) => {
  return (
    <div>
      <h1>Hello, i am {name}!</h1>
      <p>And i'am a Fullstack</p>
    </div>
  );
};

export default MyComponent;`;
</script>

<svelte:head>
	<title>Adam Gumilang</title>
	<meta name="description" content="Profil Adam Gumilang, Pengembang Web" />
</svelte:head>

<Navbar />

<main
	class="flex flex-col items-center justify-center text-gray-900 dark:bg-blue-950 dark:text-white"
>
	<section
		id="home"
		class="w-max-3xl mt-16 flex h-screen scroll-mt-25 flex-col items-center gap-4 p-6 md:scroll-mt-16 md:flex-row md:p-16"
	>
		<div class="flex flex-col">
			<h1 class="mb-3 text-2xl font-bold md:mb-6 md:text-4xl dark:text-yellow-400">
				Hi, I'am Adam Gumilang
			</h1>
			<h1 class="mb-3 text-xl font-bold md:mb-6 md:text-4xl dark:text-yellow-400">
				Back end & <br />Front end Developer
			</h1>
			<p class="mb-4 dark:text-gray-300">
				Hi, I'm Adam Gumilang, a passionate web developer with expertise in building modern and
				responsive web applications. Welcome to my portfolio!
			</p>
		</div>
		<CodeCard title="React" code={exampleCode} />
	</section>

	<section
		id="about"
		class="flex h-full max-w-4xl scroll-mt-22 items-center justify-center p-6 sm:h-screen"
	>
		<div class="flex flex-col gap-10 sm:flex-row">
			<img
				class="w-full rounded-tl-4xl rounded-br-4xl sm:w-1/3"
				src="https://ik.imagekit.io/ginvitations/assets/BrideAndGroom.png"
				alt="Profile"
			/>
			<div class="flex flex-col justify-center">
				<h1 class="mb-4 text-center text-3xl font-bold">ABOUT</h1>
				<p>
					Hello, I'm Adam Gumilang, a front-end & back-end developer with 2 years of experience. I
					have a strong passion for crafting captivating and functional user interfaces. With
					expertise in HTML, CSS, and JavaScript, I enjoy collaborating to deliver creative
					solutions. Additionally, I'm eager to continue learning and staying up-to-date with the
					latest web technologies.
				</p>
			</div>
		</div>
	</section>

	<section
		id="skills"
		class="h-full w-full scroll-mt-22 items-center justify-center p-6 sm:h-screen"
	>
		<h1 class="text-center text-3xl font-bold">SKILLS</h1>
	</section>

	<section
		id="projects"
		class="h-full w-full scroll-mt-22 items-center justify-center p-6 sm:h-screen"
	>
		<h1 class="text-center text-3xl font-bold">PROJECTS</h1>
	</section>

	<section
		id="contacts"
		class="h-full w-full scroll-mt-22 items-center justify-center p-6 sm:h-screen"
	>
		<h1 class="text-center text-3xl font-bold">CONTACTS</h1>
		<p class="text-center">
			If you're interested in collaborating or have any questions, feel free to reach out to me:
		</p>
		<h2 class="text-center text-xl">adamgumilang2103@gmail.com</h2>
	</section>
</main>

<Footer />
