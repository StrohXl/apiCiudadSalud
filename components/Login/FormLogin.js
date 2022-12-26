import { Button, Form, Input, Typography, Row, Col, Carousel } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons'
const { Title } = Typography
const FormLogin = ({ onFinish }) => {
    const [form] = Form.useForm()
    return (
       
            <div className='w-screen h-screen flex flex-col items-center bg-gradient-to-b from-slate-900 to-white justify-center '>
                <h1 className='text-4xl md:text-7xl  mb-3 font-serif text-white '>Ciudad Salud</h1>
                <h1 className='text-lg xl:text-2xl  font-serif text-white '>Iniciar Sesion</h1>

                <Form
                    form={form}
                    className='pt-20 w-4/6 lg:w-3/6 xl:w-2/6 flex flex-col gap-5 '
                    name="normal_login"
                    layout='vertical'
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label={(<span className=' mb-2 text-white text-2xl'>Correo Electornico</span>)}
                        name="email"
                        rules={[
                            {
                                type: 'email',
                             
                                message: 'Porfavor escriba su Correo',
                            },
                        ]}
                    >

                        <Input className="text-xl" prefix={<UserOutlined />} placeholder="Escriba su Correo Electronico" />
                    </Form.Item>
                    <Form.Item
                        label={(<span className=' mb-2 text-white text-2xl'>Contrasena</span>)}
                        name="password"
                        rules={[
                            {
                             
                                
                                message: 'Porfavor escriba su Contrasena!',
                            },
                        ]}
                    >
                        <Input
                            className="text-xl"
                            prefix={<LockOutlined/>}
                            placeholder="Escriba su Contrasena"
                            type='password'
                        />
                    </Form.Item>
                    <Form.Item className='text-center xl:text-start mt-6'  >
                        <Button type='primary' className='w-full h-12  bg-white text-2xl leading-none'


                            htmlType="submit" >


                            Iniciar
                        </Button>
                        <div className='border-b-white border-b-2 mt-12'></div>
                    </Form.Item>
                </Form>
            </div>



    );
};

export default FormLogin;