<script lang="ts">
	import { Text, Graphics } from 'pixi-svelte';
	import { WHITE } from 'constants-shared/colors';

	import { UI_BASE_FONT_SIZE } from '../constants';

	type Props = {
		label: string;
		value: string;
		tiled?: boolean;
		stacked?: boolean;
	};

	const props: Props = $props();

	const labelStyle = {
		fontFamily: 'Cinzel, serif',
		fontSize: UI_BASE_FONT_SIZE * 0.8,
		fontWeight: '700',
		fill: 0xffd700,
		dropShadow: true,
		dropShadowColor: 0x410500,
		dropShadowBlur: 3,
		dropShadowDistance: 1,
	} as const;

	const valueStyle = {
		fontFamily: 'Cinzel, serif',
		fontSize: UI_BASE_FONT_SIZE,
		fontWeight: '700',
		fill: 0xfff8aa,
		dropShadow: true,
		dropShadowColor: 0x410500,
		dropShadowBlur: 3,
		dropShadowDistance: 1,
	} as const;

	// Ornate banner dimensions (matching V32 filigree scroll style)
	const BANNER_W = UI_BASE_FONT_SIZE * 3 * (326 / 73);
	const BANNER_H = UI_BASE_FONT_SIZE * 3;
	const CAP_R = BANNER_H * 0.5; // circular end caps radius
</script>

{#if props.stacked}
	{#if props.tiled}
		<!-- Ornate scroll-banner background with circular gold end-caps -->
		<Graphics
			y={-20}
			anchor={{ x: 0.5, y: 0 }}
			x={0}
			draw={(g) => {
				g.clear();
				const bw = BANNER_W;
				const bh = BANNER_H;
				const bx = -bw * 0.5;
				// Drop shadow
				g.roundRect(bx + 3, 3, bw, bh, bh * 0.45);
				g.fill({ color: 0x000000, alpha: 0.35 });
				// Main body fill (deep crimson)
				g.roundRect(bx, 0, bw, bh, bh * 0.45);
				g.fill({ color: 0x5a0000 });
				// Inner highlight gradient (lighter center strip)
				g.roundRect(bx + 6, 3, bw - 12, bh * 0.4, 4);
				g.fill({ color: 0x8a0000, alpha: 0.5 });
				// Gold border
				g.roundRect(bx, 0, bw, bh, bh * 0.45);
				g.stroke({ width: 2.5, color: 0xffd700 });
				// Left decorative cap (gold circle)
				g.circle(bx + CAP_R * 0.6, bh * 0.5, CAP_R * 0.7);
				g.fill({ color: 0x8a1000 });
				g.circle(bx + CAP_R * 0.6, bh * 0.5, CAP_R * 0.7);
				g.stroke({ width: 2, color: 0xffd700 });
				// Right decorative cap (gold circle)
				g.circle(bx + bw - CAP_R * 0.6, bh * 0.5, CAP_R * 0.7);
				g.fill({ color: 0x8a1000 });
				g.circle(bx + bw - CAP_R * 0.6, bh * 0.5, CAP_R * 0.7);
				g.stroke({ width: 2, color: 0xffd700 });
			}}
		/>
	{/if}
	<Text anchor={{ x: 0.5, y: 0 }} text={props.label} style={labelStyle} />
	<Text anchor={{ x: 0.5, y: 0 }} text={props.value} style={valueStyle} y={UI_BASE_FONT_SIZE} />
{:else}
	{#if props.tiled}
		<!-- Horizontal (non-stacked) ornate banner -->
		<Graphics
			x={-90}
			anchor={{ x: 0, y: 0.5 }}
			draw={(g) => {
				g.clear();
				const bw = BANNER_W;
				const bh = BANNER_H;
				// Drop shadow
				g.roundRect(3, -bh * 0.5 + 3, bw, bh, bh * 0.45);
				g.fill({ color: 0x000000, alpha: 0.35 });
				// Main body
				g.roundRect(0, -bh * 0.5, bw, bh, bh * 0.45);
				g.fill({ color: 0x5a0000 });
				// Inner highlight
				g.roundRect(6, -bh * 0.5 + 3, bw - 12, bh * 0.4, 4);
				g.fill({ color: 0x8a0000, alpha: 0.5 });
				// Gold border
				g.roundRect(0, -bh * 0.5, bw, bh, bh * 0.45);
				g.stroke({ width: 2.5, color: 0xffd700 });
				// Decorative end-caps
				g.circle(CAP_R * 0.6, 0, CAP_R * 0.7);
				g.fill({ color: 0x8a1000 });
				g.circle(CAP_R * 0.6, 0, CAP_R * 0.7);
				g.stroke({ width: 2, color: 0xffd700 });
				g.circle(bw - CAP_R * 0.6, 0, CAP_R * 0.7);
				g.fill({ color: 0x8a1000 });
				g.circle(bw - CAP_R * 0.6, 0, CAP_R * 0.7);
				g.stroke({ width: 2, color: 0xffd700 });
			}}
		/>
	{/if}
	<Text anchor={{ x: 0, y: 0.5 }} text={props.label} style={labelStyle} />
	<Text
		anchor={{ x: 1, y: 0.5 }}
		text={props.value}
		style={valueStyle}
		x={UI_BASE_FONT_SIZE * 10}
	/>
{/if}
