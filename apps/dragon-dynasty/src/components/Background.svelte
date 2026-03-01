<script lang="ts">
	import { Rectangle, Sprite } from 'pixi-svelte';
	import { getContext } from '../game/context';

	const context = getContext();
	const canvasSizes = $derived(context.stateLayoutDerived.canvasSizes());
</script>

<Rectangle {...canvasSizes} backgroundColor={0x1a0a0a} zIndex={-3} />

<!-- Background scene (cherry blossom / Chinese palace) -->
<Sprite
	key="background"
	x={canvasSizes.width / 2}
	y={canvasSizes.height / 2}
	anchor={0.5}
	width={canvasSizes.width}
	height={canvasSizes.height}
	zIndex={-2}
/>

<!-- Dragon Dynasty logo (from v32 reference) — covers full logo zone 0-480px -->
<Sprite
	key="gameLogo"
	x={canvasSizes.width / 2}
	y={240}
	anchor={0.5}
	width={canvasSizes.width}
	height={480}
	zIndex={2}
/>
