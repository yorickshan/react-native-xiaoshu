import React from 'react'

import Portal from '../portal'

import ActionSheetMethod from './action-sheet-method'
import type { ActionSheetOptions, Action } from './interface'

export const ActionSheet = (opts: ActionSheetOptions) => {
  return new Promise<{ item: Action; index: number }>((resolve, reject) => {
    const key = Portal.add(
      <ActionSheetMethod
        {...opts}
        onClosed={() => {
          Portal.remove(key)

          opts.onClosed?.()
        }}
        onResponse={(action, item, index) => {
          opts.onResponse?.(action, item, index)

          // 语义上应该是指定某个操作，不会关系是如何取消的，所以 Promise 只关系点击了哪个操作
          if (action === 'item') {
            resolve({
              item,
              index,
            })
          } else {
            reject(new Error(action))
          }
        }}
      />,
    )
  })
}
