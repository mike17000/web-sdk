export default {
	providerName: 'CarrotRGS',
	gameName: 'big_bass_adapted',
	gameID: 'big_bass_adapted',
	rtp: 0.97,
	numReels: 5,
	numRows: [3, 3, 3, 3, 3],
	betModes: {
		base: {
			cost: 1.0,
			feature: true,
			buyBonus: false,
			rtp: 0.97,
			max_win: 5000.0,
		},
		bonus: {
			cost: 100.0,
			feature: false,
			buyBonus: true,
			rtp: 0.97,
			max_win: 5000.0,
		},
	},
	paylines: {
		'1': [0, 0, 0, 0, 0],
		'2': [1, 1, 1, 1, 1],
		'3': [2, 2, 2, 2, 2],
		'4': [0, 1, 2, 1, 0],
		'5': [2, 1, 0, 1, 2],
		'6': [0, 0, 1, 2, 2],
		'7': [2, 2, 1, 0, 0],
		'8': [1, 0, 1, 2, 1],
		'9': [1, 2, 1, 0, 1],
		'10': [0, 1, 1, 1, 2],
		// Paylines 11-20 removed: GAME_REFERENCE.json specifies 10 paylines (Big Bass Bonanza spec)
	},
	symbols: {
		l1_a: {
			paytable: [
				{
					'5': 5,
				},
				{
					'4': 1,
				},
				{
					'3': 0.5,
				},
			],
		},
		h4_fishingrod: {
			paytable: [
				{
					'5': 8,
				},
				{
					'4': 2,
				},
				{
					'3': 1,
				},
			],
		},
		l4_j: {
			paytable: [
				{
					'5': 2,
				},
				{
					'4': 0.5,
				},
				{
					'3': 0.2,
				},
			],
		},
		scatter_bass: {
			special_properties: ['scatter'],
		},
		h2_tacklebox: {
			paytable: [
				{
					'5': 15,
				},
				{
					'4': 5,
				},
				{
					'3': 3,
				},
			],
		},
		l5_10: {
			paytable: [
				{
					'5': 1,
				},
				{
					'4': 0.3,
				},
				{
					'3': 0.1,
				},
			],
		},
		l3_q: {
			paytable: [
				{
					'5': 3,
				},
				{
					'4': 0.7,
				},
				{
					'3': 0.3,
				},
			],
		},
		wild_bass: {
			paytable: [
				{
					'5': 20,
				},
				{
					'4': 10,
				},
				{
					'3': 5,
				},
			],
			special_properties: ['wild', 'multiplier'],
		},
		h3_dragonfly: {
			paytable: [
				{
					'5': 10,
				},
				{
					'4': 3,
				},
				{
					'3': 2,
				},
			],
		},
		l2_k: {
			paytable: [
				{
					'5': 3,
				},
				{
					'4': 0.7,
				},
				{
					'3': 0.3,
				},
			],
		},
		h1_fisherman: {
			paytable: [
				{
					'5': 20,
				},
				{
					'4': 10,
				},
				{
					'3': 5,
				},
			],
		},
	},
	paddingReels: {
		basegame: [
			[
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
			],
			[
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
			],
			[
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
			],
			[
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
			],
			[
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
			],
		],
		freegame: [
			[
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
			],
			[
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
			],
			[
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
			],
			[
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'scatter_bass',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
			],
			[
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'wild_bass',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h2_tacklebox',
				},
				{
					name: 'h3_dragonfly',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l1_a',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l4_j',
				},
				{
					name: 'l5_10',
				},
				{
					name: 'l3_q',
				},
				{
					name: 'h1_fisherman',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l2_k',
				},
				{
					name: 'h4_fishingrod',
				},
				{
					name: 'l4_j',
				},
			],
		],
	},
};
