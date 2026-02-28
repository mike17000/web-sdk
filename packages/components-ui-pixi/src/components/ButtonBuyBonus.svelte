<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';
	import { stateModal, stateBet, stateBetDerived } from 'state-shared';

	import UiSprite from './UiSprite.svelte';
	import { UI_BASE_FONT_SIZE, UI_BASE_SIZE } from '../constants';
	import { getContext } from '../context';
	import { i18nDerived } from '../i18n/i18nDerived';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const { stateXstateDerived, eventEmitter } = getContext();
	const sizes = { width: UI_BASE_SIZE * 1.4, height: UI_BASE_SIZE * 1.4 };
	const disabled = $derived(!stateXstateDerived.isIdle());
	const active = $derived(stateBetDerived.activeBetMode()?.type === 'activate');

	const openModal = () => (stateModal.modal = { name: 'buyBonus' });
	const disableActiveBetMode = () => (stateBet.activeBetModeKey = 'BASE');
	const onpress = () => {
		eventEmitter.broadcast({ type: 'soundPressGeneral' });

		if (active) {
			disableActiveBetMode();
		} else {
			openModal();
		}
	};

	const getState = (value: {
		active: boolean;
		disabled: boolean;
		hovered: boolean;
		pressed: boolean;
	}) => {
		if (value.disabled) return 'disabled' as const;
		if (value.pressed) return 'pressed' as const;
		if (value.hovered) return 'hovered' as const;
		if (value.active) return 'active' as const;
		return 'default' as const;
	};
</script>

<Button {...props} {sizes} {disabled} {onpress}>
	{#snippet children({ center, hovered, pressed })}
		{@const state = getState({
			active,
			disabled,
			hovered,
			pressed,
		})}

		<UiSprite
			key="buyBonus"
			{...center}
			anchor={0.5}
			width={sizes.width}
			height={sizes.height}
			backgroundColor={disabled ? 0x3a0000 : active ? 0x8b6914 : 0xd4a017}
			borderWidth={4}
			borderColor={disabled ? 0x886600 : 0x8b6000}
			borderRadius={18}
		/>

		<Text
			{...center}
			anchor={0.5}
			text={state === 'active' ? i18nDerived.disable() : i18nDerived.buyBonus()}
			style={{
				align: 'center',
				wordWrap: true,
				wordWrapWidth: 130,
				fontFamily: 'Cinzel, serif',
				fontWeight: '900',
				fontSize: UI_BASE_FONT_SIZE * 0.75,
				fill: disabled ? 0x886600 : 0x3a0000,
				dropShadow: false,
			}}
		/>
	{/snippet}
</Button>
