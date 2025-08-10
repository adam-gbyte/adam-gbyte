import { writable } from 'svelte/store';

let initial = 'light';
if (typeof localStorage !== 'undefined') {
	initial =
		localStorage.getItem('theme') ||
		(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

export const theme = writable(initial);

theme.subscribe((value) => {
	if (typeof document !== 'undefined') {
		document.documentElement.classList.toggle('dark', value === 'dark');
	}
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('theme', value);
	}
});
