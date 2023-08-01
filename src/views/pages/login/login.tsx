import React from 'react';
import style from './login.module.scss';
import { Div } from '../../assets/elements/common';
import { Button, Checkbox, Divider, Form, Input, Typography, message } from 'antd';
import { GoogleLogo, FacebookLogo, TwitterLogo } from '@phosphor-icons/react';

const { Title } = Typography;

/**
 * @function Login 
 * @description Page Login.tsx
 */

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const login = () => {
  message.success('Login efetuado com sucesso!');
}

function Login() {
  return (
    <div className={style.AppStyle}>
      <div className={style.Container}>
        <Div $primary $colorBG='transparent' $width='100%' $height='100%'>
          <Div $primary $colorBG='white' $width='30%' $height='50%' $radius='12px'>

            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Title level={2} style={{ textAlign: 'center' }}>Login</Title>
              <Form.Item
                label="Login"
                name="Login"
                rules={[{ required: true, message: 'Por favor insira o seu login!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Senha"
                name="Senha"
                rules={[{ required: true, message: 'Por favor insira a sua senha!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Lembre-me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" block>
                  Login
                </Button>
                <Divider style={{ borderColor: "black" }}>ou login com</Divider>
                <div className={style.socialLogin}>
                  <FacebookLogo size={32} color="#3b5998" weight="duotone" onClick={login} className={style.socialLogo}/>
                  <GoogleLogo size={32} weight="duotone" color="#db4537" onClick={login} className={style.socialLogo}/>
                  <TwitterLogo size={32} color="#00acee" weight="duotone" onClick={login} className={style.socialLogo}/>
                </div>
              </Form.Item>
            </Form>
          </Div>
        </Div>
      </div>
      <footer><span>powered by @BootSolutions</span></footer>
    </div >
  );
}

export default Login;