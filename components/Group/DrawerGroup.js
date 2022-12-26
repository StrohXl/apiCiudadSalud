import { Form, Button, Drawer, Select } from 'antd'
import { useState, useEffect } from 'react'
import TablaChief from '../Chief/TablaChief'
import TablaPerson from '../Person/TablaPerson'
const GrupoFamiliar = ({ open, onCancel, finish, item }) => {
    const [form] = Form.useForm()
    const [data, setData] = useState(null)
    const [chief, setChief] = useState(null)
    const [person, setPerson] = useState(null)
    const options = [
        {
            label: "Padre",
            value: "Padre"
        },
        {
            label: "Madre",
            value: "Madre"
        },
        {
            label: "Hijo",
            value: "Hijo"
        },
        {
            label: "Tio/a",
            value: "Tio/a"
        },
        {
            label: "Primo/a",
            value: "Primo/a"
        },
        {
            label: "Sobrino/a",
            value: "Sobrino/a"
        },
        {
            label: "Abuelo/a",
            value: "Abuelo/a"
        },
    ]
    const onOk = () => {
        form.validateFields().then((values) => {
            finish({
                ...values,
                person: (item == null ? person : item.id),
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
        <Drawer width={10000} onClose={onCancel} title={`${item == null ? 'Nuevo Grupo Familiar' : 'Editar Grupo Familiar'}`} open={open} placement='left' >
            <Form className="w-screen pr-10 " layout='vertical' initialValues={data} form={form} onChange={onChange}  >
                <Form.Item
                    className='w-96'
                    name='relationship'
                    label={(<span className='text-xl mb-3'>Relacion de la persona con el jefe familiar:</span>)}
                    rules={[
                        {

                            message: 'Porfavor seleccione una opcion'
                        }
                    ]}
                >
                    <Select options={options} />
                </Form.Item>

                <Form.Item label={(<span className='text-xl mb-6'>Seleccione una persona: </span>)}>
                    <TablaPerson personId={personId} item={null} />
                </Form.Item>
                <Form.Item
                    label={(<span className='text-xl mb-6'>Seleccione un Jefe de familiar: </span>)}
                >
                    <TablaChief chiefId={chiefId} />

                </Form.Item>


            </Form>
            <div className='w-screen text-center'>
                <Button
                    onClick={onOk}

                    type="primary"
                    className='w-2/6 h-12  bg-white text-2xl leading-none'
                >
                    Agregar
                </Button>
            </div>
        </Drawer>
    );
};

export default GrupoFamiliar;