import { Button, Drawer, Form, Input, Select } from "antd";
import TablaHome from "../Home/TablaHome";
import { useState, useEffect } from "react";
import TablaPersonas from "../Person/TablaPerson";
const DrawerChief = ({ item, onClose, open, finish }) => {
    const options = [
        {
            label: 'Propietario',
            value: 'Propietario'
        },
        {
            label: 'Alquilado',
            value: 'Alquilado'
        },
    ]
    const [form] = Form.useForm()
    const [data, setData] = useState(null)
    const [person, setPerson] = useState('')
    const [home, setHome] = useState('')

    const onOk = () => {
        form.validateFields().then((values) => {
            finish({
                ...values,
                person: person,
                home: (router.pathname == '/user/Home' ? item.id : home)
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
        <Drawer className="bg-red-500" width={10000} onClose={onClose} title='Nuevo Jefe Familiar' open={open} placement='left'  >
            <Form form={form} onChange={onChange} initialValues={data} className="w-screen pr-10 " layout={'vertical'}  >
                <Form.Item
                    label={(<span className="text-2xl">Numero de tlf:</span>)}
                    name='numberPhone'
                    className='w-96 '
                >
                    <Input className="mt-3" />
                </Form.Item>
                <Form.Item
                    name='property'
                    label={(<span className="text-2xl">Propietario:</span>)}
                    className='w-96 '
                >
                    <Select options={options} className="mt-3" />
                </Form.Item>
                <Form.Item
                    label={(<span className="text-2xl">Casa:</span>)}
                >
                    <TablaHome className="mt-3" homeId={homeId} />
                </Form.Item>
                <Form.Item
                    label={(<span className="text-2xl">Persona:</span>)}
                >
                    <TablaPersonas personId={personId} item={item} />
                </Form.Item>
                <Form.Item className="text-center">
                    <Button
                        onClick={onOk}
                      
                        type="primary"
                        className='w-2/6 h-12  bg-white text-2xl leading-none'
                    >
                        Agregar
                    </Button>
                </Form.Item>

            </Form>
        </Drawer   >
    );
};

export default DrawerChief;