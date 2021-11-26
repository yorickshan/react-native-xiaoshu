import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import { Button, Icon, useTheme } from 'react-native-xiaoshu'

const onPress = () => {
  console.log('点击按钮')
}

const BasicButton: React.FC = () => {
  const THEME_VAR = useTheme()

  return (
    <ScrollView>
      <Text>按钮类型</Text>

      <View style={{ height: 20 }} />

      <View style={Styles.box}>
        <Button text="default" onPress={onPress} />

        <View style={{ height: 20 }} />

        <Button type="primary" text="primary" onPress={onPress} />

        <View style={{ height: 20 }} />

        <Button type="success" text="success" onPress={onPress} />

        <View style={{ height: 20 }} />

        <Button type="warning" text="warning" onPress={onPress} />

        <View style={{ height: 20 }} />

        <Button
          type="error"
          icon={<Icon.IconArrowOutline color="#fff" />}
          text="error"
          onPress={onPress}
        />

        <View style={{ height: 20 }} />

        <View
          style={{
            backgroundColor: '#fff',
            marginHorizontal: -12,
            paddingHorizontal: 12,
            marginVertical: -12,
            paddingVertical: 12,
          }}>
          <Button
            type="info"
            text="info -> 为了突出颜色，外面套了一层白色背景"
          />
        </View>
        <View style={{ height: 20 }} />
      </View>

      <View style={{ height: 20 }} />

      <View style={Styles.g1}>
        <Button text="default" style={Styles.g1b} />

        <Button type="primary" text="primary" style={Styles.g1b} />

        <Button type="success" text="success" style={Styles.g1b} />

        <Button type="warning" text="warning" style={Styles.g1b} />

        <Button
          type="error"
          icon={<Icon.IconArrowOutline color="#fff" />}
          text="error"
          style={Styles.g1b}
        />

        <Button type="info" text="info" style={Styles.g1b} />
      </View>

      <View style={{ height: 20 }} />

      <Text>朴素按钮</Text>

      <View style={{ height: 20 }} />

      <View style={Styles.box}>
        <Button text="default" plain />

        <View style={{ height: 20 }} />

        <Button type="primary" text="primary" plain />

        <View style={{ height: 20 }} />

        <Button type="success" text="success" plain />

        <View style={{ height: 20 }} />

        <Button type="warning" text="warning" plain />

        <View style={{ height: 20 }} />

        <Button
          type="error"
          icon={<Icon.IconArrowOutline color="#f30" />}
          text="error"
          plain
        />

        <View style={{ height: 20 }} />

        <Button type="info" text="info" plain />
      </View>

      <View style={Styles.g1}>
        <Button text="default" size="mini" style={Styles.g1b} plain />

        <Button
          type="primary"
          text="primary"
          size="mini"
          style={Styles.g1b}
          plain
        />

        <Button
          type="success"
          text="success"
          size="mini"
          style={Styles.g1b}
          plain
        />

        <Button
          type="warning"
          text="warning"
          size="mini"
          style={Styles.g1b}
          plain
        />

        <Button
          type="error"
          text="error"
          size="mini"
          style={Styles.g1b}
          plain
        />

        <Button type="info" text="info" size="mini" style={Styles.g1b} plain />
      </View>

      <View style={{ height: 20 }} />

      <Text>细边框</Text>

      <View style={{ height: 20 }} />

      <View style={Styles.box}>
        <Button type="primary" plain hairline text="primary" />

        <View style={{ height: 20 }} />

        <Button type="success" plain text="success" />
      </View>

      <View style={{ height: 20 }} />

      <Text>禁用</Text>

      <View style={{ height: 20 }} />

      <View style={Styles.box}>
        <Button type="primary" disabled text="primary" onPress={onPress} />

        <View style={{ height: 20 }} />

        <Button type="success" disabled text="success" onPress={onPress} />

        <View style={{ height: 20 }} />

        <Button type="error" plain disabled text="error" onPress={onPress} />

        <View style={{ height: 20 }} />

        <Button type="warning" disabled text="warning" onPress={onPress} />
      </View>

      <View style={{ height: 20 }} />

      <Text>加载状态</Text>

      <View style={{ height: 20 }} />

      <View style={Styles.box}>
        <Button
          loading
          type="primary"
          loadingText="自定义加载中的文案~"
          text="primary"
          onPress={onPress}
        />

        <View style={{ height: 20 }} />

        <Button
          type="primary"
          disabled
          loading
          text="success"
          onPress={onPress}
        />
      </View>

      <View style={{ height: 20 }} />

      <Text>按钮形状</Text>

      <View style={{ height: 20 }} />

      <View style={Styles.box}>
        <Button type="primary" square text="square" />

        <View style={{ height: 20 }} />

        <Button type="primary" round text="round" />
      </View>

      <View style={{ height: 20 }} />

      <Text>图标按钮</Text>

      <View style={{ height: 20 }} />

      <View style={Styles.box}>
        <Button type="primary" icon={<Icon.IconArrowOutline />} text="square" />

        <View style={{ height: 20 }} />

        <Button type="primary" icon={<Icon.IconArrowOutline />} text="round" />
      </View>

      <View style={{ height: 20 }} />

      <Text>按钮大小</Text>

      <View style={{ height: 20 }} />

      <View style={Styles.box}>
        <Button
          type="primary"
          size="large"
          text={`large ${THEME_VAR.button_large_height}`}
        />

        <View style={{ height: 20 }} />

        <Button
          type="primary"
          text={`default ${THEME_VAR.button_default_height}`}
        />

        <View style={{ height: 20 }} />

        <Button
          type="primary"
          size="normal"
          text={`normal ${THEME_VAR.button_normal_height}`}
        />

        <View style={{ height: 20 }} />

        <Button
          type="primary"
          size="small"
          text={`small ${THEME_VAR.button_small_height}`}
        />

        <View style={{ height: 20 }} />

        <Button
          type="primary"
          size="mini"
          text={`mini ${THEME_VAR.button_mini_height}`}
        />

        <View style={{ height: 20 }} />
      </View>

      <View style={Styles.g1}>
        <Button
          type="primary"
          size="large"
          text="large"
          style={Styles.g1b}
          plain
        />

        <Button type="primary" text="default" style={Styles.g1b} plain />

        <Button
          type="primary"
          size="normal"
          text="normal"
          style={Styles.g1b}
          plain
        />

        <Button
          type="primary"
          size="small"
          text="small"
          style={Styles.g1b}
          plain
        />

        <Button
          type="primary"
          size="mini"
          text="mini"
          style={Styles.g1b}
          plain
        />
      </View>

      <View style={{ height: 20 }} />

      <Text>自定义颜色</Text>

      <View style={{ height: 20 }} />

      <View style={Styles.box}>
        <Button color="#960" text="default" />

        <View style={{ height: 20 }} />

        <Button color="#0c6" plain text="default" />

        <View style={{ height: 20 }} />
      </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  box: {
    paddingHorizontal: 12,
  },

  g1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  g1b: {
    // width: 80,
    marginLeft: 12,
    marginVertical: 5,
  },
})

export default BasicButton
