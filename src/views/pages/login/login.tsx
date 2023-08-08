import React from 'react';
import style from './login.module.scss';
import { Div } from '../../assets/elements/common';
import { GoogleLogo, FacebookLogo, TwitterLogo } from '@phosphor-icons/react';
import { Button, Checkbox, Divider, Form, Input, Typography, message } from 'antd';

const Title = Typography.Title;
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

const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
  e.preventDefault();
};


function Login() {
  return (
    <div className={style.Bg}>
      <div className={style.AppStyle}>
        <div className={style.Container} onContextMenu={handleContextMenu}>
          <Div $primary $colorBG='white' $width='100%' $height='100%' $radius='24px' className={style.DivForm}>
            <img src="./img/logo_black.png" alt="Logo BootSolutions" draggable={false} />
            <Title level={2} style={{ color: "black" }}>Login</Title>
            <Form
              name="basic"
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 0 }}
              style={{
                maxWidth: 1200,
                width: '80%',
              }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >

              <Form.Item
                label="Login"
                name="Login"
                rules={[{ required: true, message: 'Por favor insira o seu login!' }]}
              >
                <Input className={style.Input} />
              </Form.Item>

              <Form.Item
                label="Senha"
                name="Senha"
                rules={[{ required: true, message: 'Por favor insira a sua senha!' }]}
              >
                <Input.Password className={style.Input} />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" >
                <Checkbox>Lembre-me</Checkbox>
              </Form.Item>

              <Form.Item >
                  <Button type="primary" htmlType="submit" block onClick={login}>
                    Login
                  </Button>
                <Divider style={{ borderColor: "black" }}>ou login com</Divider>
                <div className={style.socialLogin}>
                  <FacebookLogo size={32} color="#3b5998" weight="duotone" onClick={login} className={style.socialLogo} />
                  <GoogleLogo size={32} weight="duotone" color="#db4537" onClick={login} className={style.socialLogo} />
                  <TwitterLogo size={32} color="#00acee" weight="duotone" onClick={login} className={style.socialLogo} />
                </div>
              </Form.Item>
            </Form>
          </Div>
        </div>
      </div >
      <footer><span>powered by @BootSolutions</span></footer>
    </div>
  );
}

export default Login;