import React from 'react'
import { View, ScrollView } from 'react-native'

import { Cell, CellGroup, Toast, Icon } from 'react-native-xiaoshu'

const BasicToast: React.FC = () => {
  return (
    <ScrollView>
      <CellGroup title="基础用法" bordered={false}>
        <Cell
          title="文字提示"
          isLink
          onPress={() => {
            Toast({
              message: '提示内容',
              forbidPress: true,
            })
          }}
        />
        <Cell
          title="加载提示"
          isLink
          onPress={() => {
            Toast.loading({
              message: '加载中...',
              forbidPress: true,
            })
          }}
        />
        <Cell
          title="加载提示倒计时"
          isLink
          onPress={() => {
            let d = 3
            const buildMsg = () => `倒计时 ${d} 秒...`

            const ddd = Toast.loading({
              message: buildMsg(),
              forbidPress: true,
              duration: 0,
            })
            const doLoop = () => {
              if (d > 0) {
                ddd.setMessage(buildMsg())

                d -= 1

                setTimeout(() => {
                  doLoop()
                }, 1000)
              } else {
                ddd.close()
              }
            }

            doLoop()
          }}
        />
        <Cell
          title="加载提示2"
          isLink
          onPress={() => {
            Toast({
              type: 'loading',
              loadingType: 'spinner',
              message: '加载中...',
              forbidPress: true,
            })
          }}
        />
        <Cell
          title="成功提示"
          isLink
          onPress={() => {
            Toast.success('恭喜你')
          }}
        />
        <Cell
          title="失败提示"
          isLink
          onPress={() => {
            Toast.fail('很抱歉哟')
          }}
        />
        <Cell
          title="自定义图标"
          isLink
          bordered={false}
          onPress={() => {
            Toast({
              type: 'icon',
              message: '自定义图标',
              icon: <Icon.IconArrowFill size={40} color="#f30" />,
            })
          }}
        />
      </CellGroup>

      <View style={{ height: 20 }} />

      <CellGroup title="自定义位置" bordered={false}>
        <Cell
          title="顶部展示"
          isLink
          onPress={() => {
            Toast({
              message: '提示内容',
              forbidPress: true,
              position: 'top',
            })
          }}
        />
        <Cell
          title="底部展示"
          isLink
          bordered={false}
          onPress={() => {
            Toast({
              message: '提示内容',
              forbidPress: true,
              position: 'bottom',
            })
          }}
        />
      </CellGroup>

      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

export default BasicToast
