import _ from 'lodash';

import type { RawSymbol, SymbolState } from './types';

export const SYMBOL_SIZE = 120;

export const REEL_PADDING = 0.53;

// Dragon Dynasty initial board — v32 reference match (padded top+bottom, 3 rows visible at idx 1,2,3)
// Reference grid: Row1(top)=W,H1,S,L3,L1 | Row2(mid)=L2,L1,L1,H2,H4 | Row3(bot)=L1,L3,H3,L1,L1
export const INITIAL_BOARD: RawSymbol[][] = [
	[
		{ name: 'W' },
		{ name: 'W' },
		{ name: 'L2' },
		{ name: 'L1' },
		{ name: 'L2' },
	],
	[
		{ name: 'H1' },
		{ name: 'H1' },
		{ name: 'L1' },
		{ name: 'L3' },
		{ name: 'H1' },
	],
	[
		{ name: 'S' },
		{ name: 'S' },
		{ name: 'L1' },
		{ name: 'H3' },
		{ name: 'S' },
	],
	[
		{ name: 'L3' },
		{ name: 'L3' },
		{ name: 'H2' },
		{ name: 'L1' },
		{ name: 'L3' },
	],
	[
		{ name: 'L1' },
		{ name: 'L1' },
		{ name: 'H4' },
		{ name: 'L1' },
		{ name: 'L1' },
	],
];

export const BOARD_DIMENSIONS = { x: INITIAL_BOARD.length, y: INITIAL_BOARD[0].length - 2 };

export const BOARD_SIZES = {
	width: SYMBOL_SIZE * BOARD_DIMENSIONS.x,
	height: SYMBOL_SIZE * BOARD_DIMENSIONS.y,
};

export const BACKGROUND_RATIO = 2039 / 1000;
export const PORTRAIT_BACKGROUND_RATIO = 1242 / 2208;
const PORTRAIT_RATIO = 800 / 1422;
const LANDSCAPE_RATIO = 1600 / 900;
const DESKTOP_RATIO = 1422 / 800;

const DESKTOP_HEIGHT = 800;
const LANDSCAPE_HEIGHT = 900;
const PORTRAIT_HEIGHT = 1422;
export const DESKTOP_MAIN_SIZES = { width: DESKTOP_HEIGHT * DESKTOP_RATIO, height: DESKTOP_HEIGHT };
export const LANDSCAPE_MAIN_SIZES = {
	width: LANDSCAPE_HEIGHT * LANDSCAPE_RATIO,
	height: LANDSCAPE_HEIGHT,
};
export const PORTRAIT_MAIN_SIZES = {
	width: PORTRAIT_HEIGHT * PORTRAIT_RATIO,
	height: PORTRAIT_HEIGHT,
};

// Dragon Dynasty uses H1-H4 (no H5)
export const HIGH_SYMBOLS = ['H1', 'H2', 'H3', 'H4'];

export const INITIAL_SYMBOL_STATE: SymbolState = 'static';

const HIGH_SYMBOL_SIZE = 1.0;
const LOW_SYMBOL_SIZE = 1.0;
const SPECIAL_SYMBOL_SIZE = 1.0;

export const SPIN_OPTIONS_DEFAULT = {
	reelBounceBackSpeed: 0.15,
	reelSpinSpeedBeforeBounce: 4,
	reelPaddingMultiplierNormal: 1.2,
	reelPaddingMultiplierAnticipated: 10,
	reelSpinDelay: 145,
	reelPreSpinSpeed: 2,
	reelSpinSpeed: 3,
	reelBounceSizeMulti: 0.3,
};

export const SPIN_OPTIONS_FAST = {
	reelBounceBackSpeed: 0.15,
	reelSpinSpeedBeforeBounce: 4,
	reelPaddingMultiplierNormal: 1.2,
	reelPaddingMultiplierAnticipated: 10,
	reelSpinDelay: 145,
	reelPreSpinSpeed: 5,
	reelSpinSpeed: 5,
	reelBounceSizeMulti: 0.05,
};

export const MOTION_BLUR_VELOCITY = 31;

export const zIndexes = {
	background: {
		backdrop: -3,
		normal: -2,
		feature: -1,
	},
};

// Dragon Dynasty symbol info map - all sprites (PNG files)
const makeSymbolInfo = (assetKey: string, sizeRatio = 0.9) => ({
	type: 'sprite' as const,
	assetKey,
	sizeRatios: { width: sizeRatio, height: sizeRatio },
});

const wInfo = makeSymbolInfo('W', 1.0);
const sInfo = makeSymbolInfo('S', 1.0);
const h1Info = makeSymbolInfo('H1', HIGH_SYMBOL_SIZE);
const h2Info = makeSymbolInfo('H2', HIGH_SYMBOL_SIZE);
const h3Info = makeSymbolInfo('H3', HIGH_SYMBOL_SIZE);
const h4Info = makeSymbolInfo('H4', HIGH_SYMBOL_SIZE);
const l1Info = makeSymbolInfo('L1', LOW_SYMBOL_SIZE);
const l2Info = makeSymbolInfo('L2', LOW_SYMBOL_SIZE);
const l3Info = makeSymbolInfo('L3', LOW_SYMBOL_SIZE);

export const SYMBOL_INFO_MAP = {
	W: {
		static: wInfo,
		spin: wInfo,
		win: wInfo,
		land: wInfo,
		postWinStatic: wInfo,
		explosion: wInfo,
	},
	S: {
		static: sInfo,
		spin: sInfo,
		win: sInfo,
		land: sInfo,
		postWinStatic: sInfo,
		explosion: sInfo,
	},
	H1: {
		static: h1Info,
		spin: h1Info,
		win: h1Info,
		land: h1Info,
		postWinStatic: h1Info,
		explosion: h1Info,
	},
	H2: {
		static: h2Info,
		spin: h2Info,
		win: h2Info,
		land: h2Info,
		postWinStatic: h2Info,
		explosion: h2Info,
	},
	H3: {
		static: h3Info,
		spin: h3Info,
		win: h3Info,
		land: h3Info,
		postWinStatic: h3Info,
		explosion: h3Info,
	},
	H4: {
		static: h4Info,
		spin: h4Info,
		win: h4Info,
		land: h4Info,
		postWinStatic: h4Info,
		explosion: h4Info,
	},
	L1: {
		static: l1Info,
		spin: l1Info,
		win: l1Info,
		land: l1Info,
		postWinStatic: l1Info,
		explosion: l1Info,
	},
	L2: {
		static: l2Info,
		spin: l2Info,
		win: l2Info,
		land: l2Info,
		postWinStatic: l2Info,
		explosion: l2Info,
	},
	L3: {
		static: l3Info,
		spin: l3Info,
		win: l3Info,
		land: l3Info,
		postWinStatic: l3Info,
		explosion: l3Info,
	},
} as const;

export const SCATTER_LAND_SOUND_MAP = {
	1: 'sfx_scatter_stop_1',
	2: 'sfx_scatter_stop_2',
	3: 'sfx_scatter_stop_3',
	4: 'sfx_scatter_stop_4',
	5: 'sfx_scatter_stop_5',
} as const;
