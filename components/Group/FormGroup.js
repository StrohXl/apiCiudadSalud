import { Form, Select, } from 'antd'
import TablaChief from '../Chief/TablaChief'
import TablaPerson from '../Person/TablaPerson'
const FormGroup = ({ data, form, onChange, chiefId, personId, item }) => {
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
    return (
        <Form layout='vertical' initialValues={data} form={form} onChange={onChange}  >
            <Form.Item
                name='relationship'
                label='Relacion de la persona con el jefe familiar:'
                rules={[
                    {
                        required: true,
                        message: 'Porfavor seleccione una opcion'
                    }
                ]}
            >
                <Select options={options} />
            </Form.Item>
            {item == null ? (
                <Form.Item label='Seleccione una persona: '>
                    <TablaPerson personId={personId} item={item} />
                </Form.Item>)
                    : ''}
            <Form.Item
                label='Seleccione un Jefe de familiar: '
            >
                <TablaChief chiefId={chiefId} />

            </Form.Item>


        </Form>
    );
};

export default FormGroup;