/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import { Tabs, Result, Card, Blank } from '@fruits-chain/react-native-xiaoshu'

const BasicTabs: React.FC = () => {
  const [value1, setValue1] = useState('2')

  return (
    <ScrollView>
      <Blank top>
        <Card square bodyPadding={false}>
          <Tabs indicatorWidth={24}>
            <Tabs.TabPane key="1" tab="第一个">
              <Result status="success" title="啊哈" subtitle="嘿嘿嘿" />
            </Tabs.TabPane>

            {null}

            <>
              <Tabs.TabPane key="3" tab="第二个1">
                <Result status="warning" title="嗯哼？1" subtitle="哈哈哈" />
              </Tabs.TabPane>
              <Tabs.TabPane key="4" tab="第二个2">
                <Result status="warning" title="嗯哼？2" subtitle="哈哈哈" />
              </Tabs.TabPane>
            </>

            <Tabs.TabPane key="2" tab="第二个">
              <Result status="warning" title="嗯哼？" subtitle="哈哈哈" />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </Blank>

      <Blank top>
        <Card title="受控模式" square bodyPadding={false}>
          <Tabs activeKey={value1} onChange={setValue1}>
            <Tabs.TabPane key="1" tab="第一个">
              <Result status="success" title="啊哈" subtitle="嘿嘿嘿" />
            </Tabs.TabPane>

            <Tabs.TabPane key="2" tab="第二个">
              <Result status="warning" title="嗯哼？" subtitle="哈哈哈" />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </Blank>

      <Blank top>
        <Card title="部分 TabBar 自定义" square bodyPadding={false}>
          <Tabs
            activeKey={value1}
            onChange={setValue1}
            tabAlign="left"
            textColor="#999"
            activeTextColor="#098"
            indicatorColor="#098"
            indicatorHeight={4}>
            <Tabs.TabPane key="1" tab="第一个">
              <Result status="success" title="啊哈" subtitle="嘿嘿嘿" />
            </Tabs.TabPane>

            <Tabs.TabPane key="2" tab="第二个">
              <Result status="warning" title="嗯哼？" subtitle="哈哈哈" />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </Blank>
    </ScrollView>
  )
}

export default BasicTabs