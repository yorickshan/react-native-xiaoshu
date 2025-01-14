/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import type { ViewStyle } from 'react-native'
import { ScrollView } from 'react-native'

import { TabBar, Button, Space } from '@fruits-chain/react-native-xiaoshu'
import {
  EyeOutline,
  SearchOutline,
  VolumeOutline,
} from '@fruits-chain/icons-react-native'

const bottomBarIconStyle: ViewStyle = {
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  // 无论大小图表都保持同一个占用空间
  width: 20,
  height: 20,
}

const bottomBar = [
  {
    value: 1,
    label: '首页',
    iconRender: (color: string) => (
      <EyeOutline
        color={color}
        pointerEvents="none"
        size={20}
        style={bottomBarIconStyle}
      />
    ),
  },
  {
    value: 2,
    label: '其他其他',
    iconRender: (color: string) => (
      <SearchOutline
        color={color}
        pointerEvents="none"
        size={20}
        style={bottomBarIconStyle}
      />
    ),
  },
  {
    value: 3,
    label: '更多更多更多',
    iconRender: (color: string) => (
      <VolumeOutline
        color={color}
        pointerEvents="none"
        size={20}
        style={bottomBarIconStyle}
      />
    ),
  },
]

const bottomBar2 = bottomBar.map(({ value, label }) => ({
  value: 10 + value,
  label,
}))

const bottomBar3 = [
  ...bottomBar2,
  ...bottomBar2.map(({ value, label }) => ({
    value: value * 2,
    label: `${label}_2`,
  })),
]

const BasicSwitch: React.FC = () => {
  const [value1, setValue1] = useState(bottomBar[1].value)

  return (
    <>
      <ScrollView>
        <Space head>
          <TabBar
            safeAreaInsetBottom={false}
            options={bottomBar}
            value={value1}
            onChange={v => {
              setValue1(v as number)
            }}
          />

          <Button
            text="重置"
            danger
            onPress={() => {
              setValue1(bottomBar[1].value)
            }}
          />

          <TabBar
            indicator
            safeAreaInsetBottom={false}
            options={bottomBar}
            value={value1}
            onChange={v => {
              setValue1(v as number)
            }}
          />

          <TabBar
            indicator
            indicatorWidth={20}
            safeAreaInsetBottom={false}
            defaultValue={bottomBar2[1].value}
            options={bottomBar2}
          />

          <TabBar
            indicator
            indicatorWidth={0}
            safeAreaInsetBottom={false}
            defaultValue={bottomBar2[1].value}
            options={bottomBar2}
          />

          <TabBar indicator safeAreaInsetBottom={false} options={bottomBar2} />

          <TabBar
            tabAlign="left"
            indicator
            safeAreaInsetBottom={false}
            options={bottomBar2}
          />

          <TabBar
            tabAlign="left"
            indicator
            safeAreaInsetBottom={false}
            options={bottomBar3}
          />

          <TabBar
            tabAlign="left"
            indicator
            indicatorWidth={0}
            safeAreaInsetBottom={false}
            options={bottomBar3}
          />

          <TabBar
            tabAlign="left"
            indicator
            indicatorWidth={20}
            safeAreaInsetBottom={false}
            options={bottomBar3}
          />
        </Space>
      </ScrollView>

      <TabBar options={bottomBar} defaultValue={bottomBar[0].value} />
    </>
  )
}

export default BasicSwitch
