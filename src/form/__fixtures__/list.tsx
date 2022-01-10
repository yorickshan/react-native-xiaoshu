import React from 'react'
import {
  CellGroup,
  Form,
  Field,
  Button,
  Toast,
  Dialog,
  Icon,
} from '@fruits-chain/react-native-xiaoshu'

const BasicFormList: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      onFinish={values => {
        console.log(values)
        Toast(JSON.stringify(values))
      }}>
      <CellGroup title="List" bordered={false}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}>
          <Field.TextInput
            required
            title="用户名"
            placeholder="请输入用户名"
            bordered={false}
          />
        </Form.Item>

        <Form.List name="address">
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map((field, fieldIndex) => {
                  return (
                    <CellGroup
                      key={field.key}
                      title={`地址 ${fieldIndex + 1}`}
                      extra={
                        <Icon.DeleteFill
                          onPress={() => {
                            Dialog.confirm({
                              title: '提示',
                              message: '确定要删除？',
                              confirmButtonColor: '#f30',
                              confirmButtonText: '删除',
                            })
                              .then(data => {
                                if (data === 'confirm') {
                                  remove(fieldIndex)
                                }
                              })
                              .catch(() => {})
                          }}
                        />
                      }>
                      <Form.Item
                        name={[field.name, 'code']}
                        rules={[
                          {
                            required: true,
                            message: '请输入邮编',
                          },
                        ]}>
                        <Field.TextInput
                          required
                          title="邮编"
                          placeholder="请输入邮编"
                        />
                      </Form.Item>
                      <Form.Item
                        name={[field.name, 'city']}
                        rules={[
                          {
                            required: true,
                            message: '请输入城市',
                          },
                        ]}>
                        <Field.TextInput
                          required
                          title="城市"
                          placeholder="请输入城市"
                          bordered={false}
                        />
                      </Form.Item>
                    </CellGroup>
                  )
                })}
                <Button
                  text="新增地址"
                  type="warning"
                  onPress={() => {
                    add({})
                  }}
                />
              </>
            )
          }}
        </Form.List>

        <Button text="提交" type="primary" onPress={form.submit} />
      </CellGroup>
    </Form>
  )
}

export default BasicFormList