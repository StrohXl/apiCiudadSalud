import { Button, Form, Input, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import Icon from '@mdi/react';
import { mdiLogin } from '@mdi/js';
const { Title } = Typography
const FormLogin = ({ onFinish }) => {
    const [form] = Form.useForm()
    return (
        <div className='w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6'>
            <div className='h-40 rounded-tl-xl rounded-tr-xl bg-blue-500 flex items-center justify-center'>
                <Title ><span className='text-white font-'>Ciudad Salud</span></Title>
            </div>
            <Form
                form={form}
                className='py-12 px-3 bg-white rounded-bl-xl rounded-br-xl'
                name="normal_login"
                layout='vertical'
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    label='Correo del Usuario'
                    rules={[
                        {
                            type: 'email',
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Correo" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label='Contrasena del Usuario'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Contrasena"
                    />
                </Form.Item>

                <Form.Item>
                    <Button className='bg-blue-500 w-full ' type="primary" htmlType="submit" >

                        <Icon
                            className='inline mr-2'
                            vertical
                            title="User Profile"
                            path={mdiLogin}
                            color='white'
                            size={1} />
                        Ingresar
                    </Button>

                </Form.Item>
            </Form>
        </div>

    );
};

export default FormLogin;