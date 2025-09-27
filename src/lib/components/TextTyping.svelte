<script>
  import { onMount } from "svelte";

  export let words = ["Frontend", "Backend", "Fullstack"];
  export let nextText = 'Developer'
  let currentWordIndex = 0;
  let displayText = "";
  let isDeleting = false;
  let typingSpeed = 120;
  let deletingSpeed = 60;
  let pauseTime = 1000; // jeda saat full kata

  function typeEffect() {
    let currentWord = words[currentWordIndex];

    if (!isDeleting) {
      // proses mengetik
      displayText = currentWord.substring(0, displayText.length + 1);

      if (displayText === currentWord) {
        // tunggu sebentar lalu mulai hapus
        setTimeout(() => {
          isDeleting = true;
          typeEffect();
        }, pauseTime);
        return; // jangan langsung lanjut ke setTimeout di bawah
      }
    } else {
      // proses menghapus
      displayText = currentWord.substring(0, displayText.length - 1);

      if (displayText === "") {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
  }

  onMount(() => {
    typeEffect();
  });
</script>

<p>
  <span class="text-blue-500">{displayText}</span> {nextText}
</p>
