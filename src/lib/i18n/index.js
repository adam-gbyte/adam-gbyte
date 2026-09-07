import { writable, derived } from 'svelte/store';

// Default language is 'id' (Bahasa Indonesia)
export const currentLang = writable('id');
export const selectedLang = writable('id');
export const isLangChanging = writable(false);

let currentLangVal = 'id';
currentLang.subscribe((val) => {
	currentLangVal = val;
});

let isTransitioning = false;

export function initLang() {
	if (typeof localStorage !== 'undefined') {
		const saved = localStorage.getItem('lang');
		if (saved === 'en' || saved === 'id') {
			currentLang.set(saved);
			selectedLang.set(saved);
			currentLangVal = saved;
			document.documentElement.lang = saved;
		} else {
			localStorage.setItem('lang', 'id');
			document.documentElement.lang = 'id';
		}
	}
}

export function setLang(lang) {
	if ((lang === 'id' || lang === 'en') && lang !== currentLangVal && !isTransitioning) {
		isTransitioning = true;
		selectedLang.set(lang);
		isLangChanging.set(true);

		setTimeout(() => {
			currentLang.set(lang);
			currentLangVal = lang;
			if (typeof localStorage !== 'undefined') {
				localStorage.setItem('lang', lang);
				document.documentElement.lang = lang;
			}
			setTimeout(() => {
				isLangChanging.set(false);
				isTransitioning = false;
			}, 60);
		}, 140);
	}
}

export function toggleLang() {
	const next = currentLangVal === 'id' ? 'en' : 'id';
	setLang(next);
}

export const dictionary = {
	id: {
		nav: {
			home: 'Beranda',
			about: 'Tentang',
			skills: 'Keahlian',
			projects: 'Proyek',
			contact: 'Kontak'
		},
		hero: {
			greeting: 'Halo, Saya',
			role: 'Full-Stack Developer & AI Engineer',
			bio: 'Mahasiswa Teknik Informatika yang berfokus pada pengembangan aplikasi web berkinerja tinggi, arsitektur backend yang tangguh, serta solusi machine learning yang memberikan dampak nyata.',
			viewProjects: 'Lihat Proyek',
			contactMe: 'Hubungi Saya',
			resume: 'Unduh CV',
			terminalStatus: 'status: 200 OK',
			terminalLocation: 'lokasi: Indonesia',
			terminalMode: "mode: 'membangun_solusi'",
			activeTag: 'Aktif'
		},
		about: {
			headingPart1: 'Didorong rasa ingin tahu,',
			headingPart2: 'berdedikasi membangun dampak.',
			roleTag: 'Software Developer & AI Enthusiast',
			bioTitle: 'Passionate Full-Stack Developer',
			bioSubtitle:
				'Spesialis dalam mengubah kebutuhan kompleks menjadi arsitektur perangkat lunak yang bersih, skalabel, dan memiliki antarmuka yang intuitif.',
			narrativeTitle: 'Rekayasa di Titik Temu Kode & Kecerdasan Buatan',
			narrativeBody:
				'Saya adalah mahasiswa Teknik Informatika dengan pengalaman praktis di seluruh siklus hidup pengembangan web. Dari merancang backend berperforma tinggi dan REST API hingga membangun frontend yang responsif dan mengintegrasikan model machine learning, saya selalu mengutamakan kode yang bersih dan terstruktur.',
			stats: {
				experience: 'Pengalaman',
				experienceYears: '2+ Tahun',
				experienceDesc: 'Membangun aplikasi web modern dan sistem terotomasi.',
				focus: 'Fokus Utama',
				focusValue: 'Full-Stack & AI',
				focusDesc: 'SvelteKit, React, Node.js, dan Machine Learning.',
				education: 'Pendidikan',
				educationValue: 'Teknik Informatika',
				educationDesc: 'Fondasi teori kuat dalam algoritma dan rekayasa perangkat lunak.',
				collaboration: 'Kolaborasi',
				collaborationValue: 'Remote & Agile',
				collaborationDesc:
					'Berpengalaman dengan alur kerja Git, code review, dan kerja tim jarak jauh.'
			}
		},
		skills: {
			headingPart1: 'Keahlian &',
			headingPart2: 'Teknologi',
			subtitle:
				'Koleksi teknologi modern, pustaka, dan alat bantu yang saya gunakan untuk mewujudkan ide menjadi produk digital yang tangguh.',
			categories: {
				frontend: {
					title: 'Arsitektur Frontend',
					description: 'Membangun antarmuka pengguna yang responsif, aksesibel, dan reaktif.'
				},
				backend: {
					title: 'Backend & API',
					description: 'Merancang arsitektur sistem sisi server dan alur pipa data yang skalabel.'
				},
				ai: {
					title: 'AI & Machine Learning',
					description: 'Melatih dan menerapkan model cerdas untuk kebutuhan praktis.'
				},
				devops: {
					title: 'DevOps & Tooling',
					description: 'Mengoptimalkan alur kerja pengembangan, deployment, dan version control.'
				}
			}
		},
		projects: {
			headingPart1: 'Proyek',
			headingPart2: 'Unggulan',
			subtitle:
				'Koleksi aplikasi web nyata, platform otomatisasi, dan solusi kecerdasan buatan yang dibangun dengan teknologi modern.',
			livePreview: 'Lihat Demo',
			sourceCode: 'Kode Sumber',
			noPreview: 'Pratinjau tidak tersedia',
			noProjects: 'Belum ada proyek yang dimuat saat ini.'
		},
		contact: {
			headingPart1: 'Mari bangun sesuatu yang',
			headingPart2: 'luar biasa bersama.',
			subtitle:
				'Baik Anda memiliki proyek baru, tawaran kerja, maupun sekadar ingin berdiskusi, pintu pesan saya selalu terbuka.',
			ctaTitle: 'Punya ide proyek atau ingin merekrut?',
			ctaDesc:
				'Saya terbuka untuk posisi penuh waktu (full-time), proyek freelance, maupun kolaborasi teknologi di bidang software engineering dan AI.',
			sendMessage: 'Kirim Pesan',
			directEmail: 'Email Langsung',
			available: 'Tersedia',
			copied: 'Disalin!',
			cvTitle: 'Curriculum Vitae',
			cvDesc: 'PDF • 127 KB',
			downloadAria: 'Unduh CV'
		},
		footer: {
			tagline: 'Membangun pengalaman digital berkinerja tinggi dengan kode & kecerdasan buatan.',
			backToTop: 'Kembali ke Atas',
			rights: 'Semua hak cipta dilindungi.'
		}
	},
	en: {
		nav: {
			home: 'Home',
			about: 'About',
			skills: 'Skills',
			projects: 'Projects',
			contact: 'Contact'
		},
		hero: {
			greeting: "Hi, I'm",
			role: 'Full-Stack Developer & AI Engineer',
			bio: 'Informatics Engineering student focused on engineering high-performance web applications, robust backend architectures, and machine learning solutions that create measurable impact.',
			viewProjects: 'View Projects',
			contactMe: 'Contact Me',
			resume: 'Resume',
			terminalStatus: 'status: 200 OK',
			terminalLocation: 'location: Indonesia',
			terminalMode: "mode: 'crafting_solutions'",
			activeTag: 'Active'
		},
		about: {
			headingPart1: 'Driven by curiosity,',
			headingPart2: 'dedicated to building impact.',
			roleTag: 'Software Developer & AI Enthusiast',
			bioTitle: 'Passionate Full-Stack Developer',
			bioSubtitle:
				'Specialized in turning complex requirements into clean, scalable software architecture with intuitive user interfaces.',
			narrativeTitle: 'Engineering at the Intersection of Code & Intelligence',
			narrativeBody:
				'I am an Informatics Engineering student with hands-on experience across the entire web development lifecycle. From architecting performant backends and REST APIs to crafting fluid frontends and deploying machine learning models, I strive for clean abstractions and robust maintainability.',
			stats: {
				experience: 'Experience',
				experienceYears: '2+ Years',
				experienceDesc: 'Building modern web applications and automated systems.',
				focus: 'Core Focus',
				focusValue: 'Full-Stack & AI',
				focusDesc: 'SvelteKit, React, Node.js, and Machine Learning models.',
				education: 'Education',
				educationValue: 'Informatics Engineering',
				educationDesc: 'Strong theoretical foundation in algorithms and software design.',
				collaboration: 'Collaboration',
				collaborationValue: 'Remote & Agile',
				collaborationDesc: 'Experienced with Git workflows, code reviews, and remote teamwork.'
			}
		},
		skills: {
			headingPart1: 'Skills &',
			headingPart2: 'Technologies',
			subtitle:
				'A battle-tested stack of modern frameworks, libraries, and tools that I use to turn ideas into resilient digital products.',
			categories: {
				frontend: {
					title: 'Frontend Architecture',
					description: 'Crafting responsive, accessible, and reactive user interfaces.'
				},
				backend: {
					title: 'Backend & APIs',
					description: 'Architecting scalable server-side systems and data pipelines.'
				},
				ai: {
					title: 'AI & Machine Learning',
					description: 'Training and deploying intelligent models for practical tasks.'
				},
				devops: {
					title: 'DevOps & Tooling',
					description: 'Optimizing development workflow, deployment, and version control.'
				}
			}
		},
		projects: {
			headingPart1: 'Featured',
			headingPart2: 'Projects',
			subtitle:
				'A showcase of high-impact web applications, automated platforms, and intelligent machine learning solutions built with modern technology.',
			livePreview: 'Live Preview',
			sourceCode: 'Source Code',
			noPreview: 'No preview available',
			noProjects: 'No projects available at this moment.'
		},
		contact: {
			headingPart1: "Let's build something",
			headingPart2: 'extraordinary together.',
			subtitle:
				'Whether you have an upcoming project, freelance inquiry, or just want to connect, my inbox is always open.',
			ctaTitle: 'Have a project idea or looking to hire?',
			ctaDesc:
				"I'm actively seeking full-time roles, freelance opportunities, and collaborative ventures in software engineering and AI.",
			sendMessage: 'Send Message',
			directEmail: 'Direct Email',
			available: 'Available',
			copied: 'Copied!',
			cvTitle: 'Curriculum Vitae',
			cvDesc: 'PDF • 127 KB',
			downloadAria: 'Download CV'
		},
		footer: {
			tagline: 'Building high-performance digital experiences with code & intelligence.',
			backToTop: 'Back to Top',
			rights: 'All rights reserved.'
		}
	}
};

export const t = derived(currentLang, ($lang) => dictionary[$lang] || dictionary.id);
