<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';

	import UiSprite from './UiSprite.svelte';
	import type { ButtonIcon } from '../types';
	import type { Snippet } from 'svelte';
	import { i18nDerived } from '../i18n/i18nDerived';
	import { UI_BASE_FONT_SIZE } from '../constants';

	type Props = Omit<ButtonProps, 'children'> & {
		icon: ButtonIcon;
		sizes: { width: number; height: number };
		active?: boolean;
		children?: Snippet;
		variant?: 'dark' | 'light';
	};

	const {
		icon,
		active,
		variant = 'dark',
		children: childrenFromParent,
		...buttonProps
	}: Props = $props();
</script>

<Button {...buttonProps}>
	{#snippet children({ center, hovered, pressed })}
		<UiSprite
			{...center}
			anchor={0.5}
			width={buttonProps.sizes.width}
			height={buttonProps.sizes.height}
			backgroundColor={variant === 'dark' ? 0x6b0000 : 0xffffff}
			borderWidth={variant === 'dark' ? 3 : 0}
			borderColor={variant === 'dark' ? 0xffd700 : 0x000000}
			{...buttonProps.disabled
				? {
						backgroundColor: 0x3a0000,
						borderColor: 0x886600,
					}
				: {}}
			{...active
				? {
						borderWidth: 5,
						borderColor: 0xffd700,
					}
				: {}}
		/>

		<Text
			{...center}
			anchor={0.5}
			text={i18nDerived[icon]()}
			style={{
				align: 'center',
				wordWrap: false,
				wordWrapWidth: 130,
				fontFamily: 'Cinzel, serif',
				fontWeight: '700',
				fontSize: UI_BASE_FONT_SIZE * 0.45,
				fill: variant === 'dark' ? 0xffd700 : 0x000000,
				dropShadow: true,
				dropShadowColor: 0x410500,
				dropShadowBlur: 2,
				dropShadowDistance: 1,
			}}
		/>

		{@render childrenFromParent?.()}
	{/snippet}
</Button>
