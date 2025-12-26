<script>
	// import NavbarNew from '$lib/components/NavbarNew.svelte';
	import NavbarNew2 from '$lib/components/NavbarNew2.svelte';
  import { onMount } from 'svelte';
//   import Navbar from '$lib/components/Navbar.svelte';

  let progress = 0;
  let virtualScroll = 0;
  const LOCK_DISTANCE = 240;

  const clamp = (v) => Math.min(1, Math.max(0, v));

  onMount(() => {
    const onWheel = (e) => {
      if (progress < 1) {
        e.preventDefault();
        virtualScroll += e.deltaY;
        virtualScroll = Math.max(0, virtualScroll);
        progress = clamp(virtualScroll / LOCK_DISTANCE);
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  });
</script>

<svelte:head>
	<title>Adam Gumilang</title>
	<meta name="description" content="Profil Adam Gumilang, Pengembang Web" />
</svelte:head>

<New2 {progress} />

<div style="padding-top:100vh;">
  <slot />
</div>
