import isNil from 'lodash/isNil'
import React, { memo } from 'react'
import { View, Text } from 'react-native'

import { useControllableValue } from '../hooks'
import Theme from '../theme'

import CheckboxIcon from './checkbox-icon'
import type { CheckboxProps } from './interface'
import { varCreator, styleCreator } from './style'

function Checkbox<ActiveValueT = boolean, InactiveValueT = boolean>({
  labelTextStyle,
  iconStyle,
  activeValue = true as unknown as ActiveValueT,
  inactiveValue = false as unknown as InactiveValueT,
  label,
  labelDisabled = false,
  labelPosition = 'right',
  iconSize = 20,
  renderIcon,
  disabled,
  activeColor,

  style,
  children,

  ...restProps
}: CheckboxProps<ActiveValueT, InactiveValueT>) {
  if (disabled) {
    labelDisabled = disabled
  }

  const [value, onChange] = useControllableValue<ActiveValueT | InactiveValueT>(
    restProps,
    {
      defaultValue: inactiveValue,
    },
  )
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)

  const active = value === activeValue
  const onChangeValue = () => {
    const newValue = active ? inactiveValue : activeValue
    onChange(newValue)
  }

  const labelJSX = !isNil(label) ? (
    <Text
      suppressHighlighting
      style={[
        STYLES.label,
        {
          [labelPosition === 'left' ? 'marginRight' : 'marginLeft']:
            CV.checkbox_label_margin,
        },
        disabled ? STYLES.label_disabled : null,
        labelTextStyle,
      ]}
      onPress={labelDisabled ? undefined : onChangeValue}>
      {label}
    </Text>
  ) : (
    children
  )
  const iconProps = {
    style: iconStyle,
    active,
    activeColor,
    disabled,
    size: iconSize,
    onPress: onChangeValue,
  }
  const iconJSX = renderIcon ? (
    renderIcon(iconProps)
  ) : (
    <CheckboxIcon {...iconProps} />
  )

  return (
    <View style={[STYLES.checkbox, style]}>
      {labelPosition === 'left' ? labelJSX : null}
      {iconJSX}
      {labelPosition === 'right' ? labelJSX : null}
    </View>
  )
}

export default memo(Checkbox) as <
  ActiveValueT = boolean,
  InactiveValueT = boolean,
>(
  p: CheckboxProps<ActiveValueT, InactiveValueT>,
) => JSX.Element
