<script lang="ts">
	import { Container, Text, Graphics } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';
	import { OnHotkey } from 'components-shared';
	import { stateBetDerived } from 'state-shared';

	import ButtonBetProvider from './ButtonBetProvider.svelte';
	import { UI_BASE_FONT_SIZE, UI_BASE_SIZE } from '../constants';
	import { i18nDerived } from '../i18n/i18nDerived';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const disabled = $derived(!stateBetDerived.isBetCostAvailable());
	const SPIN_SIZE = UI_BASE_SIZE * 2.1; // large coin-style spin button (V32 match)
	const sizes = { width: SPIN_SIZE, height: SPIN_SIZE };
</script>

<ButtonBetProvider>
	{#snippet children({ key, onpress })}
		<OnHotkey hotkey="Space" {disabled} {onpress} />
		<Button {...props} {sizes} {onpress} {disabled}>
			{#snippet children({ center, hovered, pressed })}
				<Container {...center}>
					<!-- Outer ambient glow (pulsing aura effect, matching V32) -->
					<Graphics
						anchor={0.5}
						draw={(g) => {
							g.clear();
							if (!disabled) {
								// Large soft glow
								g.circle(0, 0, SPIN_SIZE * 0.56);
								g.fill({ color: hovered ? 0xffee00 : 0xffd700, alpha: hovered ? 0.25 : 0.15 });
								// Medium glow layer
								g.circle(0, 0, SPIN_SIZE * 0.52);
								g.fill({ color: hovered ? 0xffe066 : 0xffc800, alpha: 0.2 });
							}
							// Pedestal base (below button, matching V32 stand)
							const pw = SPIN_SIZE * 0.8;
							const ph = SPIN_SIZE * 0.22;
							const px = -pw * 0.5;
							const py = SPIN_SIZE * 0.42;
							// Pedestal shadow
							g.roundRect(px + 4, py + 4, pw, ph, 8);
							g.fill({ color: 0x000000, alpha: 0.4 });
							// Pedestal body
							g.roundRect(px, py, pw, ph, 8);
							g.fill({ color: disabled ? 0x2a0000 : (pressed ? 0x550000 : 0x3d0000) });
							// Pedestal top highlight
							g.roundRect(px + 4, py + 2, pw - 8, 6, 3);
							g.fill({ color: disabled ? 0x440000 : 0x880000, alpha: 0.8 });
						}}
					/>
					<!-- Outer gold ring -->
					<Graphics
						anchor={0.5}
						draw={(g) => {
							g.clear();
							// Main gold border circle
							g.circle(0, 0, SPIN_SIZE * 0.5);
							g.fill({ color: disabled ? 0x886633 : (pressed ? 0xffaa00 : 0xffd700) });
							// Inner dark red fill
							g.circle(0, 0, SPIN_SIZE * 0.44);
							g.fill({ color: disabled ? 0x333333 : (pressed ? 0x8b0000 : 0x6b0000) });
							// Inner gold accent ring
							g.circle(0, 0, SPIN_SIZE * 0.42);
							g.fill({ color: disabled ? 0x664400 : 0xffd700, alpha: 0.5 });
							// Center fill (deep red gradient effect via nested circles)
							g.circle(0, 0, SPIN_SIZE * 0.39);
							g.fill({ color: disabled ? 0x333333 : (pressed ? 0x9b0000 : 0x7a0000) });
							g.circle(0, 0, SPIN_SIZE * 0.30);
							g.fill({ color: disabled ? 0x2a2a2a : (pressed ? 0x8b0000 : 0x6b0000) });
						}}
					/>
					<!-- White circle marker (matching V32 reference) -->
					<Graphics
						anchor={0.5}
						draw={(g) => {
							g.clear();
							if (['spin_default', 'spin_disabled'].includes(key)) {
								// White ring (spin indicator)
								g.circle(0, 0, SPIN_SIZE * 0.20);
								g.fill({ color: disabled ? 0x888888 : 0xffffff });
								g.circle(0, 0, SPIN_SIZE * 0.14);
								g.fill({ color: disabled ? 0x555555 : (pressed ? 0x8b0000 : 0x6b0000) });
							} else {
								// Stop: white square indicator
								g.rect(-SPIN_SIZE * 0.11, -SPIN_SIZE * 0.11, SPIN_SIZE * 0.22, SPIN_SIZE * 0.22);
								g.fill({ color: 0xffffff });
							}
						}}
					/>
				</Container>
			{/snippet}
		</Button>
	{/snippet}
</ButtonBetProvider>
