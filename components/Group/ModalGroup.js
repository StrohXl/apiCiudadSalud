import { Modal, Form } from 'antd'
import { useState, useEffect } from 'react'
import FormGroup from './FormGroup';

const GrupoFamiliar = ({ open, onCancel, finish, item }) => {
    const [form] = Form.useForm()
    const [data, setData] = useState(null)
    const [chief, setChief] = useState(null)
    const [person, setPerson] = useState(null)

    const onOk = () => {
        form.validateFields().then((values) => {
            finish({
                ...values,
                person: (item == null? person : item.id),
                chief: chief
            })
            setData(null)
        })
    }
    const onChange = (valor) => {
        setData(valor)
    }
    const chiefId = (dataChief) => {
        setChief(dataChief.id)
    }
    const personId = (dataPerson) => {
        setPerson(dataPerson.id)
    }

    useEffect(() => {
        setData(null)
        form.resetFields()
    }, [open])

    return (
        <Modal title='Grupo Familiar' onOk={onOk} open={open} onCancel={onCancel}>
            <FormGroup data={data} form={form} onChange={onChange} chiefId={chiefId} item={item} personId={personId} />

        </Modal>
    );
};

export default GrupoFamiliar;