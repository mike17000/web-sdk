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

<!-- Red reel background -->
<Rectangle
	x={board.x}
	y={board.y}
	anchor={0.5}
	width={board.width + PADDING * 2}
	height={board.height + PADDING * 2}
	backgroundColor={0x8b1a1a}
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
