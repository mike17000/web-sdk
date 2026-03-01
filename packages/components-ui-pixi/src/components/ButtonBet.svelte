<script lang="ts">
	import { Container, Sprite, Graphics } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';
	import { OnHotkey } from 'components-shared';
	import { stateBetDerived } from 'state-shared';

	import ButtonBetProvider from './ButtonBetProvider.svelte';
	import { UI_BASE_SIZE } from '../constants';

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
					<!-- Outer ambient glow -->
					<Graphics
						anchor={0.5}
						draw={(g) => {
							g.clear();
							if (!disabled) {
								g.circle(0, 0, SPIN_SIZE * 0.58);
								g.fill({ color: hovered ? 0xffee00 : 0xffd700, alpha: hovered ? 0.30 : 0.20 });
								g.circle(0, 0, SPIN_SIZE * 0.54);
								g.fill({ color: hovered ? 0xffe066 : 0xffc800, alpha: 0.15 });
							}
						}}
					/>
					<!-- V32 original spin button sprite (btn_spin.png) -->
					<Sprite
						key="btnSpin"
						anchor={0.5}
						width={SPIN_SIZE}
						height={SPIN_SIZE}
						alpha={disabled ? 0.5 : pressed ? 0.85 : 1.0}
					/>
				</Container>
			{/snippet}
		</Button>
	{/snippet}
</ButtonBetProvider>
