export default {
	// ── PRELOAD (before loading screen dismissal) ──────────────────────────
	pressToContinueText: {
		type: 'sprites',
		src: new URL('../../assets/sprites/pressToContinueText/pressanywhere.json', import.meta.url).href,
		preload: true,
	},
	progressBar: {
		type: 'sprites',
		src: new URL('../../assets/sprites/progressBar/progressBar.json', import.meta.url).href,
		preload: true,
	},
	background: {
		type: 'sprite',
		src: '/background.jpg',
		preload: true,
	},
	sound: {
		type: 'audio',
		src: new URL('../../assets/audio/sounds.json', import.meta.url).href,
		preload: true,
	},

	// ── LAZY LOAD ──────────────────────────────────────────────────────────
	// Symbols (PNG sprites)
	W:  { type: 'sprite', src: '/symbols/W.png' },
	S:  { type: 'sprite', src: '/symbols/S.png' },
	H1: { type: 'sprite', src: '/symbols/H1.png' },
	H2: { type: 'sprite', src: '/symbols/H2.png' },
	H3: { type: 'sprite', src: '/symbols/H3.png' },
	H4: { type: 'sprite', src: '/symbols/H4.png' },
	L1: { type: 'sprite', src: '/symbols/L1.png' },
	L2: { type: 'sprite', src: '/symbols/L2.png' },
	L3: { type: 'sprite', src: '/symbols/L3.png' },

	// Reel frame
	reelsFrame: {
		type: 'sprites',
		src: new URL('../../assets/sprites/reelsFrame/reels_frame.json', import.meta.url).href,
	},

	// Fonts
	goldFont: {
		type: 'font',
		src: new URL('../../assets/fonts/goldFont/gold.xml', import.meta.url).href,
	},

	// Spine animations
	reelhouse: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/reelhouse/reelhouse_glow.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/reelhouse/reelhouse_glow.json', import.meta.url).href,
			scale: 2,
		},
	},
	transition: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/transition/transition.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/transition/transition.json', import.meta.url).href,
			scale: 2,
		},
	},
	bigwin: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/bigwin/big_wins.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/bigwin/bigwin.json', import.meta.url).href,
			scale: 2,
		},
	},
	anticipation: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/anticipation/anticipation.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/anticipation/anticipation.json', import.meta.url).href,
			scale: 2,
		},
	},
	fsIntro: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsIntro/fs_screen.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/fsIntro/fs_screen.json', import.meta.url).href,
			scale: 2,
		},
	},
	fsIntroNumber: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsIntro/fs_screen.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/fsIntro/fs_screen_number.json', import.meta.url).href,
			scale: 2,
		},
	},
	fsOutroNumber: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsIntro/fs_screen.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/fsIntro/fs_total_number.json', import.meta.url).href,
			scale: 2,
		},
	},
	globalMultiplier: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/globalMultiplier/multiframe.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/globalMultiplier/multiframe.json', import.meta.url).href,
			scale: 2,
		},
	},

	// Dragon Dynasty logo (extracted from v32 reference)
	gameLogo: {
		type: 'sprite',
		src: '/logo.png',
		preload: true,
	},
	// Reel frame overlay (extracted from v32 reference)
	reelFrameOverlay: {
		type: 'sprite',
		src: '/reel_frame_overlay.png',
	},
} as const;
