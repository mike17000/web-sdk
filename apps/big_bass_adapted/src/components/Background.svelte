<script lang="ts">
	import { Rectangle, Sprite, SpineProvider, SpineTrack } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { SECOND } from 'constants-shared/time';

	import { getContext } from '../game/context';

	const context = getContext();
	const canvasSizes = $derived(context.stateLayoutDerived.canvasSizes());
	const showBaseBackground = $derived(context.stateGame.gameType === 'basegame');
	const showFeatureBackground = $derived(context.stateGame.gameType === 'freegame');
</script>

<!-- Black base layer -->
<Rectangle {...canvasSizes} backgroundColor={0x000000} zIndex={-3} />

<!-- Base game background: night fishing PNG -->
<FadeContainer show={showBaseBackground} duration={SECOND} zIndex={-2}>
	<Sprite
		key="bg_base"
		x={canvasSizes.width / 2}
		y={canvasSizes.height / 2}
		width={canvasSizes.width}
		height={canvasSizes.height}
		anchor={{ x: 0.5, y: 0.5 }}
	/>
</FadeContainer>

<!-- Free spins background: golden sunset PNG -->
<FadeContainer show={showFeatureBackground} duration={SECOND} zIndex={-1}>
	<Sprite
		key="bg_feature"
		x={canvasSizes.width / 2}
		y={canvasSizes.height / 2}
		width={canvasSizes.width}
		height={canvasSizes.height}
		anchor={{ x: 0.5, y: 0.5 }}
	/>
</FadeContainer>
