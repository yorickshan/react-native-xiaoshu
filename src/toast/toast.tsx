import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
  memo,
} from 'react'
import type { ViewStyle, StyleProp } from 'react-native'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import Popup from '../popup/popup'
import Circular from '../loading/circular'
import Spinner from '../loading/spinner'
import { IconSuccessOutLine, IconWarnFill } from '../icon'
import { createStyles } from './style'
import type { ToastProps, ToastMethods } from './interface'

const Toast = forwardRef<ToastMethods, ToastProps>(
  (
    {
      type,
      position = 'middle',
      message,
      overlay = false,
      forbidPress = false,
      closeOnPress = false,
      closeOnPressOverlay = false,
      loadingType = 'circular',
      duration = 2000,
      icon,
      ...reset
    },
    ref,
  ) => {
    const THEME_VAR = useTheme()
    const STYLES = widthStyle(THEME_VAR, createStyles)

    const [show, setShow] = useState(false)
    const [msg, setMsg] = useState(message)

    // 修正数据
    if (closeOnPress) {
      // 是否在点击后关闭
      // 是否禁止背景点击
      // 可以触发点击的地方正好被背景 View 挡住
      forbidPress = false
    }

    /**
     * 点击遮罩层
     */
    const onPressOverlay = () => {
      // 是否在点击遮罩层后关闭
      if (closeOnPressOverlay) {
        setShow(false)
      }
    }

    /**
     * 点击内容
     */
    const onPressContent = () => {
      // 是否在点击后关闭
      if (closeOnPress) {
        setShow(false)
      }
    }

    useEffect(() => {
      setShow(true)

      let timer: ReturnType<typeof setTimeout>

      if (duration !== 0) {
        timer = setTimeout(() => {
          // 隐藏弹窗
          setShow(false)
        }, duration)
      }

      return () => {
        clearTimeout(timer)
      }
    }, [duration])

    // 向外暴露方法
    useImperativeHandle(
      ref,
      () => ({
        close: () => {
          setShow(false)
        },
        setMessage: s => {
          setMsg(s)
        },
      }),
      [],
    )

    const toastStyles: StyleProp<ViewStyle> = [
      STYLES.toast,
      {
        justifyContent:
          position === 'top'
            ? 'flex-start'
            : position === 'bottom'
            ? 'flex-end'
            : 'center',
      },
    ]

    return (
      <Popup
        {...reset}
        visible={show}
        overlay={overlay}
        onPressOverlay={onPressOverlay}>
        <TouchableWithoutFeedback onPress={onPressContent}>
          <View
            style={toastStyles}
            pointerEvents={forbidPress ? undefined : 'box-none'}
            collapsable={false}>
            <View
              style={[
                STYLES.inner,
                type === 'text' ? STYLES.inner_type_text : null,
              ]}>
              {type !== 'text' ? (
                <View style={STYLES.loading}>
                  {type === 'loading' ? (
                    loadingType === 'circular' ? (
                      <Circular
                        color={THEME_VAR.toast_loading_icon_color}
                        size={THEME_VAR.toast_icon_size}
                      />
                    ) : (
                      <Spinner
                        color={THEME_VAR.toast_loading_icon_color}
                        size={THEME_VAR.toast_icon_size}
                      />
                    )
                  ) : null}

                  {type === 'success' ? (
                    <IconSuccessOutLine
                      color={THEME_VAR.toast_loading_icon_color}
                      size={THEME_VAR.toast_icon_size * 1.4}
                    />
                  ) : null}

                  {type === 'fail' ? (
                    <IconWarnFill
                      color={THEME_VAR.toast_loading_icon_color}
                      size={THEME_VAR.toast_icon_size * 1.4}
                    />
                  ) : null}

                  {type === 'icon' ? icon : null}
                </View>
              ) : null}

              <Text
                style={[
                  STYLES.text,
                  type === 'text' ? STYLES.text_top_0 : null,
                ]}>
                {msg}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Popup>
    )
  },
)

export default memo(Toast)
