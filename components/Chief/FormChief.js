import { Form, Input, Select,  } from 'antd'
import TablaPersonas from '../Person/TablaPerson'
import TablaHome from '../Home/TablaHome'
import { useRouter } from 'next/router';
const FormChief = ({onChange, form, data, item, personId, homeId}) => {
    const router = useRouter()
    return (
        <Form layout='vertical' initialValues={data} form={form} onChange={onChange} >
        <Form.Item
            name='numberPhone'
            label='Numero de tlf'
            rules={[
                {
                    required: true,
                    message: 'Porfavor escriba su numero de telefono'
                }
            ]}

        >
            <Input />
        </Form.Item>
        <Form.Item
            name='property'
            label='Eres Propietario o estas alquilado?'
            rules={[
                {
                    required: true,
                    message: 'Porfavor seleccione una opcion'
                }
            ]}
        >
            <Select options={[
                {
                    label: "Propietario",
                    value: "Propietario"
                },
                {
                    label: "Alquilado",
                    value: "Alquilado"
                },
            ]} />
        </Form.Item>
        <Form.Item
            label='Seleccione la persona que sera el jefe familiar de esa casa: '
        >
            <TablaPersonas personId={personId} item={item} />
        </Form.Item>
        {router.pathname == '/user/Chief' ? (
            <Form.Item 
            label="Seleccione su casa"

            >
                <TablaHome homeId={homeId} />
            </Form.Item>

        ) : ''}

    </Form>
    );
};

export default FormChief;