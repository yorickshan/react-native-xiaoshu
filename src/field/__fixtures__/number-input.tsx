import React, { useState } from 'react'
import { CellGroup, Field, Button } from '@fruits-chain/react-native-xiaoshu'

const BasicFieldTextInput: React.FC = () => {
  const [text1, setText1] = useState<number>(null)

  return (
    <CellGroup title="Field NumberInput">
      <Field.NumberInput
        title="非受控输入框"
        placeholder="请输入"
        onChange={v => {
          console.log(v)
        }}
      />
      <Field.NumberInput
        title="非受控输入框:整数"
        type="digit"
        placeholder="请输入"
        onChange={v => {
          console.log(v)
        }}
      />
      <Field.NumberInput
        title="非受控输入框"
        placeholder="请输入"
        defaultValue={100}
        onChange={v => {
          console.log(v)
        }}
      />
      <Field.NumberInput
        title="非受控输入框:小数"
        placeholder="请输入"
        limitDecimals={3}
        onChange={v => {
          console.log(v)
        }}
      />
      <Field.NumberInput
        title="受控组件"
        placeholder="请输入"
        value={text1}
        onChange={setText1}
        addonAfter={
          <Button
            text="清空"
            size="mini"
            type="error"
            onPress={() => {
              setText1(null)
            }}
          />
        }
      />
      <Field.NumberInput
        vertical
        title="上下"
        placeholder="请输入"
        value={text1}
        onChange={setText1}
        bordered={false}
      />
    </CellGroup>
  )
}

export default BasicFieldTextInput
