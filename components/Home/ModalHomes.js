import { Modal, Form } from 'antd'
import { useState, useEffect } from 'react'
import FormHome from './FormHome';
const ModalHomes = ({ open, onCancel, finish, item }) => {
    const [form] = Form.useForm()
    const [data, setData] = useState(null)
    const onOk = () => {
        form.validateFields().then((values) => {
            finish(values, item)
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
            setData({ ...item })
            form.setFieldsValue({ ...item })
        }
    }, [open])
    return (
        <Modal
            title={item === null ? 'Nueva Casa' : 'Editar Casa'}
            onOk={onOk}
            open={open}
            onCancel={onCancel}
          >
            <FormHome data={data} form={form} onChange={onChange} />
        </Modal>
    );
};

export default ModalHomes;