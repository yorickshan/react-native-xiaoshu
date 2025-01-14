import type React from 'react'

import type { PopupPropsCommon } from '../popup/interface'
import type { TreeProps, TreeValue, TreeOption } from '../tree/interface'

export type SelectorValue = TreeValue

export type SelectorOption = TreeOption

export interface SelectorProps
  extends Omit<PopupPropsCommon, 'closeOnPressOverlay' | 'onPressOverlay'>,
    Omit<TreeProps, 'value' | 'defaultValue' | 'options'> {
  value?: SelectorValue | SelectorValue[]

  defaultValue?: SelectorValue | SelectorValue[]

  options: SelectorOption[]
  /**
   * 点击遮罩层关闭
   * @default true
   */
  closeOnPressOverlay?: boolean

  /**
   * 标题
   * @default '请选择'
   */
  title?: React.ReactNode

  /**
   * 是否显示关闭图标
   * @default true
   */
  showClose?: boolean

  /**
   * 当值变化的时候立即响应
   */
  onChangeImmediate?: (
    v: SelectorValue[] | SelectorValue,
  ) => SelectorValue[] | SelectorValue

  /**
   * 顶部安全高度
   * @default safeAreaInsets.top
   */
  safeAreaInsetTop?: number

  /**
   * 确定按钮文案
   * @default '确定'
   */
  confirmButtonText?: string
}

export interface SelectorMethodProps extends Omit<SelectorProps, 'visible'> {
  beforeChange?: (
    value: SelectorValue | SelectorValue[],
    options: SelectorOption[],
  ) => boolean | Promise<boolean>
}

export interface SelectorOptions
  extends Omit<SelectorMethodProps, 'onChange' | 'onRequestClose'> {
  // 是否可以删了，函数的方式直接用 .then 操作
  onChange?: (
    value: SelectorValue[] | SelectorValue,
    options: SelectorOption | SelectorOption[],
  ) => void
}

export interface SelectorTextProps {
  /**
   * 标题
   * @default '请选择'
   */
  title?: React.ReactNode

  /**
   * 当前选中的值
   */
  value: SelectorValue

  /**
   * 当前的选项
   */
  options: SelectorOption[]

  /**
   * 选择后的回调
   */
  onChange?: (value: SelectorValue, options: SelectorOption) => void

  /**
   * 箭头方向
   * @default 'right'
   */
  arrowDirection?: 'left' | 'up' | 'right' | 'down'

  /**
   * 显示分割线
   * @default true
   */
  divider?: boolean

  /**
   * 左侧是否有间距
   * @default true
   */
  head?: boolean
}

export type SelectorFnInstance = (
  p: SelectorOptions,
) => Promise<SelectorValue[] | SelectorValue>

export interface SelectorInstance extends SelectorFnInstance {
  Component: React.FC<SelectorProps>
  Text: React.FC<SelectorTextProps>
}
