import { Modal, Form, Input, Select, DatePicker } from 'antd'
import { useState, useEffect } from 'react'
const ModalPersona = ({ open, onCancel, onFinish, finish, item }) => {
    const [form] = Form.useForm()
    const [data, setData] = useState(null)
    const onOk = () => {
        form.validateFields().then((values) => {
            finish({...values, bornDate: values['bornDate'].format('YYYY-MM-DD')})
            setData(null)
        })
    }
    const onChange = (valor) => {
        setData(valor)
    }
    useEffect(() => {
        if (item === null) {
            setData(null)
            form.resetFields()
        }
        else {
            setData({ ...item, bornDate: null })
            form.setFieldsValue({ ...item, bornDate: null })
        }
    }, [open])
    return (
        <Modal title={item === null? 'Nueva Persona': 'Editar Persona'} onOk={onOk} open={open} onCancel={onCancel}>
            <Form layout='vertical' initialValues={data} form={form} onChange={onChange} onFinish={onFinish} >
                <Form.Item
                    name='name'
                    label='Nombre:'
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor escriba su nombre'
                        }
                    ]}

                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name='lastName'
                    label='Apellido:'
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor escriba su apellido'
                        }
                    ]}

                >
                    <Input/>
                </Form.Item>
                <Form.Item
                     name="bornDate"
                    label='Fecha de nacimiento:'
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor seleccione su fecha de nacimiento'
                        }
                    ]}

                >
                  <DatePicker/>
                </Form.Item>
                <Form.Item
                    name='gender'
                    label='Genero:'
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor seleccione su genero'
                        }
                    ]}

                >
                    <Select options={[
                        {
                            label: 'Masculino',
                            value: 'Masculino'
                        },
                        {
                            label: 'Femenino',
                            value: 'Femenino'
                        }
                    ]} />
                </Form.Item>
                <Form.Item
                    name='dni'
                    label='Cedula de identificacion'
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor escriba su cedula'
                        }
                    ]}

                >
                    <Input/>
                </Form.Item>
           
            </Form>
        </Modal>
    );
};

export default ModalPersona;