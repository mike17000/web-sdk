<script lang="ts">
	import { Text, REM } from 'pixi-svelte';

	type Props = {
		name: string;
	};

	const props: Props = $props();
</script>

<Text
	text={props.name}
	anchor={{ x: 0, y: 0 }}
	style={{
		fontFamily: 'Cinzel, serif',
		fontSize: REM * 1.8,
		fontWeight: '900',
		fill: 0xffd700,
		dropShadow: true,
		dropShadowColor: 0x410500,
		dropShadowBlur: 8,
		dropShadowDistance: 2,
	}}
/>
