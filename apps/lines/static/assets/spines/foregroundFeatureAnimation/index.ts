import { createAsset } from 'pixi-svelte';

import img from './background_feature.webp';
import rawAtlas from './background_feature.atlas?raw';
import spine from './background_feature.json';

export default createAsset({ img, rawAtlas, spine, preload: true });
