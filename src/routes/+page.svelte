<script>
  import { smoothScroll } from "$lib/actions/smoothScroll.js";
  import TextTyping from "$lib/components/TextTyping.svelte";
  import { ChevronRight } from "lucide-svelte";

  import Header from "$lib/components/Header.svelte";

  const logo =
    "https://ik.imagekit.io/gbyte/logo/Logo%20v5.2023.2%20(beta-circle).png";

  import { onMount } from "svelte";
  onMount(() => {
    const skillSection = document.querySelector("#skill");
    const scrollBox = document.querySelector("#skill-scroll");

    let isInsideSkill = false;

    const handleScroll = (e) => {
      if (!isInsideSkill) return;

      if (window.innerWidth < 768) {
        // Mobile: scroll horizontal
        scrollBox.scrollLeft += e.deltaY;
        e.preventDefault();

        // Jika sudah di akhir kanan
        if (
          scrollBox.scrollLeft + scrollBox.clientWidth >=
          scrollBox.scrollWidth - 1
        ) {
          isInsideSkill = false;
        }
      } else {
        // Desktop: scroll vertical dalam box
        scrollBox.scrollTop += e.deltaY;
        e.preventDefault();

        if (
          scrollBox.scrollTop + scrollBox.clientHeight >=
          scrollBox.scrollHeight - 1
        ) {
          isInsideSkill = false;
        }
      }
    };

    // Deteksi saat section skill masuk ke viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isInsideSkill = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(skillSection);

    // Tambahkan listener
    window.addEventListener("wheel", handleScroll, { passive: false });
  });
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

  <!-- Wrapper scrollable -->
  <div
    id="skill-scroll"
    class="flex md:flex-col flex-row gap-5 w-full max-w-4xl overflow-x-auto md:overflow-y-auto md:overflow-x-hidden snap-x md:snap-y scroll-smooth h-[50vh]"
  >
    <div
      class="flex flex-col items-center flex-shrink-0 w-[80vw] md:w-auto snap-start group justify-center"
    >
      <img
        src="/icons/html-5.svg"
        alt="HTML"
        class="w-16 h-16 mb-3 transition-transform duration-300 group-hover:scale-110"
      />
      <p class="text-sm md:text-base font-medium">HTML</p>
    </div>
    <div
      class="flex flex-col items-center flex-shrink-0 w-[80vw] md:w-auto snap-start group justify-center"
    >
      <img
        src="/icons/javascript.svg"
        alt="JavaScript"
        class="w-16 h-16 mb-3 transition-transform duration-300 group-hover:scale-110"
      />
      <p class="text-sm md:text-base font-medium">JavaScript</p>
    </div>
    <div
      class="flex flex-col items-center flex-shrink-0 w-[80vw] md:w-auto snap-start group justify-center"
    >
      <img
        src="/icons/nodejs.svg"
        alt="Node.js"
        class="w-16 h-16 mb-3 transition-transform duration-300 group-hover:scale-110"
      />
      <p class="text-sm md:text-base font-medium">Node.js</p>
    </div>
    <div
      class="flex flex-col items-center flex-shrink-0 w-[80vw] md:w-auto snap-start group justify-center"
    >
      <img
        src="/icons/svelte.svg"
        alt="SvelteKit"
        class="w-16 h-16 mb-3 transition-transform duration-300 group-hover:scale-110"
      />
      <p class="text-sm md:text-base font-medium">SvelteKit</p>
    </div>
    <div
      class="flex flex-col items-center flex-shrink-0 w-[80vw] md:w-auto snap-start group justify-center"
    >
      <img
        src="/icons/tailwind.svg"
        alt="Tailwind CSS"
        class="w-16 h-16 mb-3 transition-transform duration-300 group-hover:scale-110"
      />
      <p class="text-sm md:text-base font-medium">Tailwind CSS</p>
    </div>
  </div>

  <div class="mt-16 text-center max-w-3xl">
    <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
      Saya memiliki pengalaman dalam membangun aplikasi full-stack menggunakan
      teknologi modern seperti <span class="font-semibold">SvelteKit</span>,
      <span class="font-semibold">Express.js</span>, dan
      <span class="font-semibold">MongoDB</span>.
    </p>
  </div>
</section>

<section id="project" class="flex h-screen items-center justify-center">
  <h1 class="text-5xl">Project Section</h1>
</section>

<section id="kontak" class="flex h-screen items-center justify-center">
  <h1 class="text-5xl">Kontak Section</h1>
</section>
