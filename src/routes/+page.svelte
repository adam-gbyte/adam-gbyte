<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import HomeSection from '$lib/sections/HomeSection.svelte';
  import AboutSection from '$lib/sections/AboutSection.svelte';
  import SkillsSection from '$lib/sections/SkillsSection.svelte';
  import ProjectsSection from '$lib/sections/ProjectsSection.svelte';
  import ContactSection from '$lib/sections/ContactSection.svelte';
</script>

<svelte:head>
  <title>Adam Gumilang</title>
  <meta name="description" content="Profil Adam Gumilang, Web Developer" />
</svelte:head>

<main class="flex flex-col items-center bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
  <Navbar />

  <HomeSection class="overflow-hidden" />
  <AboutSection />
  <SkillsSection />
  <ProjectsSection />
  <ContactSection />

  <Footer />
</main>
