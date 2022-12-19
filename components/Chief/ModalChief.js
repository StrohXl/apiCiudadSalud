import { Modal, Form} from 'antd'
import { useState, useEffect } from 'react'
import FormChief from './FormChief';

const ModalJefeFamiliar = ({ open, onCancel, finish, item }) => {
    const [form] = Form.useForm()
    const [data, setData] = useState(null)
    const [person, setPerson] = useState('')
    const [home, setHome] = useState('')

    const onOk = () => {
            form.validateFields().then((values) => {
                finish({ ...values, 
                    person: person,
                     home: (item == null? home :  item.id) })
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
        setData(null)
        form.resetFields()
    }, [open])

    return (
        <Modal title='Jefe Familiar' onOk={onOk} open={open} onCancel={onCancel}>
            <FormChief onChange={onChange} form={form} data={data} item={item} personId={personId} homeId={homeId} />
        </Modal>
    );
};

export default ModalJefeFamiliar;