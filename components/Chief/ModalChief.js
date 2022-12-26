import { Modal, Form } from 'antd'
import { useState, useEffect } from 'react'
import FormChief from './FormChief';
import { useRouter } from 'next/router';
const ModalJefeFamiliar = ({ open, onCancel, finish, item }) => {
    const router = useRouter()
    const [form] = Form.useForm()
    const [data, setData] = useState(null)
    const [person, setPerson] = useState('')
    const [home, setHome] = useState('')

    const onOk = () => {
        form.validateFields().then((values) => {
            finish({
                ...values,
                person: person,
                home: (router.pathname == '/user/Home' ? item.id : home  )
            })
            setData(null)
        })

    }
    const onChange = (valor) => {
        setData(valor)
    }
    const personId = (dataPerson) => {
        setPerson(dataPerson.id)
    }
    const homeId = (dataHome) => {
        setHome(dataHome.id)
    }

    useEffect(() => {
        if (item == null) {
            setData(null)
            form.resetFields()
        }
        else {
            setData({ ...item })
            form.setFieldsValue({ ...item })
        }

    }, [open])

    return (
        <Modal title={item == null ? 'Crear nuevo Jefe Familiar' : 'Editar Jefe Familiar'} onOk={onOk} open={open} onCancel={onCancel}>
            <FormChief onChange={onChange} form={form} data={data} item={item} personId={personId} homeId={homeId} />
        </Modal>
    );
};

export default ModalJefeFamiliar;