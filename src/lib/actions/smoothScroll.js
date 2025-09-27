// src/lib/actions/smoothScroll.js
export function smoothScroll(node) {
  function handleClick(event) {
    const href = node.getAttribute("href");
    if (href && href.startsWith("#")) {
      event.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  node.addEventListener("click", handleClick);

  return {
    destroy() {
      node.removeEventListener("click", handleClick);
    },
  };
}
