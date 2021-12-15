import React, { memo } from 'react'

import Portal from '../portal'
import type { SelectPopupInstance } from './interface'
import SelectPopupBase from './select-popup'
import SelectPopupMethod from './select-popup-method'

export { conversionSelectPopupOptions } from './helper'

const SelectPopup: SelectPopupInstance = opt =>
  new Promise((resolve, reject) => {
    const key = Portal.add(
      <SelectPopupMethod
        {...opt}
        onChange={(v, o) => {
          opt.onChange?.(v, o)
          resolve(v)
        }}
        onClose={() => {
          opt.onClose?.()
          // eslint-disable-next-line prefer-promise-reject-errors
          reject()
        }}
        onClosed={() => {
          opt.onClosed?.()

          Portal.remove(key)
        }}
      />,
    )
  })

SelectPopup.Component = memo(props => {
  return (
    <Portal>
      <SelectPopupBase {...props} />
    </Portal>
  )
})

export default SelectPopup
