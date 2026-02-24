import { createAsset } from 'pixi-svelte';

import img from './background.webp';
import rawAtlas from './background.atlas?raw';
import spine from './background.json';

export default createAsset({ img, rawAtlas, spine, preload: true });