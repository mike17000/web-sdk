<script lang="ts" module>
	export type EmitterEventBoardFrame =
		| { type: 'boardFrameGlowShow' }
		| { type: 'boardFrameGlowHide' };
</script>

<script lang="ts">
	import { Rectangle, Sprite } from 'pixi-svelte';
	import { getContext } from '../game/context';

	const context = getContext();
	const PADDING = 20;

	let glowAlpha = $state(0);

	context.eventEmitter.subscribeOnMount({
		boardFrameGlowShow: () => { glowAlpha = 1; },
		boardFrameGlowHide: () => { glowAlpha = 0; },
	});

	const board = $derived(context.stateGameDerived.boardLayout());
</script>

<!-- Reel background — covers full frame area (matches frame overlay 4.5x padding) to eliminate blue-grey bg bleed -->
<!-- Color: 0x2A0503 (R:42,G:5,B:3) — matches ref darkest bg RGB(42,5,3) for contrast -->
<Rectangle
	x={board.x}
	y={board.y}
	anchor={0.5}
	width={board.width + PADDING * 4.5}
	height={board.height + PADDING * 4.5}
	backgroundColor={0x2A0503}
	borderRadius={8}
	zIndex={-2}
/>

<!-- Win glow -->
{#if glowAlpha > 0}
	<Rectangle
		x={board.x}
		y={board.y}
		anchor={0.5}
		width={board.width + PADDING * 4}
		height={board.height + PADDING * 4}
		backgroundColor={0xffd700}
		alpha={0.3}
		borderRadius={14}
		zIndex={1}
	/>
{/if}

<!-- Subtle darkening overlay — tuned down since background is now correctly dark -->
<Rectangle
	x={board.x}
	y={board.y}
	anchor={0.5}
	width={board.width}
	height={board.height}
	backgroundColor={0x000000}
	alpha={0.05}
	zIndex={2}
/>

<!-- Reel frame overlay from v32 reference -->
<Sprite
	key="reelFrameOverlay"
	x={board.x}
	y={board.y}
	anchor={0.5}
	width={board.width + PADDING * 4.5}
	height={board.height + PADDING * 4.5}
	zIndex={3}
/>
