<script>
  import { smoothScroll } from "$lib/actions/smoothScroll.js";
  import TextTyping from "$lib/components/TextTyping.svelte";
  import { ChevronRight } from "lucide-svelte";

  import Header from "$lib/components/Header.svelte";

  const logo =
    "https://ik.imagekit.io/gbyte/logo/Logo%20v5.2023.2%20(beta-circle).png";

  let projects = [
    {
      id: "project_1",
      img: "https://ik.imagekit.io/ginvitations/assets/logo/Logo_GInvitations_v1_1.png?updatedAt=1747346902745",
      title: `Ginvitations`,
      description: `Deskripsi singkat untuk project Ginvitations`,
    },
    {
      id: "project_2",
      img: "https://ik.imagekit.io/goldiron/Logo2.png?updatedAt=1761141754589",
      title: `KKN Kabandungan`,
      description: `Deskripsi singkat untuk project KKN Kabandungan`,
    },
  ];

  // Variabel untuk menyimpan project yang sedang dipilih
  let selectedProject = null;

  function openModal(project) {
    selectedProject = project;
  }

  function closeModal() {
    selectedProject = null;
  }
</script>

<svelte:head>
  <title>Adam G</title>
</svelte:head>

<Header />

<section
  id="home"
  class="mx-5 flex min-h-screen flex-col justify-center transition-transform duration-700 ease-in-out will-change-transform md:mx-30"
>
  <h1
    class="flex items-center gap-3 text-2xl leading-none font-bold md:text-5xl"
  >
    <TextTyping />
  </h1>
  <h1
    class="flex items-center gap-3 text-xl leading-none font-bold md:text-3xl"
  >
    Hi, I'm <TextTyping words={["Adam Gumilang", "adam-gbyte"]} nextText={""} />
  </h1>
  <p class="mt-4 max-w-xl text-gray-600 dark:text-gray-300">
    Welcome to my personal website! I'm Adam Gumilang, a passionate Full Stack
    Developer with expertise in building dynamic and responsive web
    applications. Explore my skills, projects, and get in touch!
  </p>
  <a
    href="#about"
    use:smoothScroll
    class="mt-5 flex w-full flex-row items-center"
    >About Me<ChevronRight class="h-4" />
  </a>
</section>

<section
  id="about"
  class="flex md:flex-row flex-col h-screen items-center justify-center m-5 md:mx-30"
>
  <img src={logo} alt="Logo" class="w-[250px] md:w-[300px]" />
  <div class="flex flex-col md:pl-10">
    <h1 class="text-4xl mb-5 text-center mt-5">About me</h1>
    <p>
      Hello, I'm Adam Gumilang, a full-stack developer with 1 year of
      experience. I have a strong passion for crafting both intuitive user
      interfaces and robust backend systems. With expertise in HTML, CSS,
      JavaScript, Node.js, and databases, I enjoy collaborating to deliver
      end-to-end creative solutions. Additionally, I'm eager to continue
      learning and staying up-to-date with the latest web technologies.
    </p>
  </div>
</section>

<section
  id="skill"
  class="relative flex flex-col h-screen items-center justify-center m-5 md:mx-30"
>
  <h1 class="text-4xl md:text-5xl font-bold mb-10 text-center">
    Skill & Experience
  </h1>

  <div class="mt-16 text-center max-w-3xl">
    <p>HTML, CSS, JavaScript, React, Sveltekit, TailwindCSS</p>
    <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
      Saya memiliki pengalaman dalam membangun aplikasi full-stack menggunakan
      teknologi modern seperti <span class="font-semibold">SvelteKit</span>,
      <span class="font-semibold">Express.js</span>, dan
      <span class="font-semibold">MongoDB</span>.
    </p>
  </div>
</section>

<section
  id="project"
  class="flex flex-col min-h-screen items-center justify-center px-6 py-12 bg-gray-50"
>
  <h1 class="text-4xl md:text-5xl font-bold mb-10 text-gray-800">
    My Projects
  </h1>

  <div class="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
    {#each projects as project}
      <button
        on:click={() => openModal(project)}
        class="w-72 bg-blue-200 cursor-pointer rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
      >
        <img src={project.img} alt="Logo" class="w-full md:w-full" />
        <h2 class="text-xl font-semibold mb-2 text-gray-800">
          {project.title}
        </h2>
        <p class="text-gray-600">{project.description}</p>
      </button>
    {/each}
  </div>
</section>

<!-- POPUP MODAL -->
{#if selectedProject}
  <div
    class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 py-5 px-4 md:py-10 md:px-6 overflow-auto"
  >
    <div
      class="bg-white rounded-2xl shadow-xl w-full h-full max-h-[90vh] relative"
    >
      <button
        class="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-xl"
        on:click={closeModal}
      >
        X
      </button>

      <div
        class="h-full flex flex-col justify-center items-center text-center p-6"
      >
        <h2 class="text-3xl font-bold mb-4 text-gray-800">
          {selectedProject.title}
        </h2>
        <p class="text-gray-600 mb-6">{selectedProject.description}</p>

        <button
          class="bg-blue-500 text-white cursor-pointer px-6 py-3 rounded-lg hover:bg-blue-600"
          on:click={closeModal}
        >
          Tutup
        </button>
      </div>
    </div>
  </div>
{/if}

<section id="kontak" class="flex h-screen items-center justify-center">
  <h1 class="text-5xl">Kontak Section</h1>
</section>
