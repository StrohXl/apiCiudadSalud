import { Form, Select, InputNumber  } from "antd";
const FormHome = ({data,form,onChange}) => {
    const optionsStreet = [
        {
            value: '1',
            label: 'Calle 1'
        },
        {
            value: '2',
            label: 'Calle 2'
        },
        {
            value: '3',
            label: 'Calle 3'
        },
        {
            value: '4',
            label: 'Calle 4'
        },
        {
            value: '5',
            label: 'Calle 5'
        },

    ]
    const optionsSquare = [
        {
            value: 'A',
            label: 'A'
        },
        {
            value: 'B',
            label: 'B'
        },
        {
            value: 'C',
            label: 'C'
        },
        {
            value: 'D',
            label: 'D'
        },
        {
            value: 'E',
            label: 'E'
        },
        {
            value: 'F',
            label: 'F'
        },
        {
            value: 'G',
            label: 'G'
        },
        {
            value: 'H',
            label: 'H'
        },

    ]
    return (
        <Form layout='vertical' initialValues={data} form={form} onChange={onChange} >
                <Form.Item
                    name='n_rooms'
                    label='Numero de cuartos'
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor escriba el numero de cuartos que contiene la casa'
                        }
                    ]}

                >
                    <InputNumber min={1} max={10} />
                </Form.Item>
                <Form.Item
                    name='n_population'
                    label='Numero de residentes'
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor escriba la cantidad de personas que habitan la casa'
                        }
                    ]}

                >
                    <InputNumber min={1} max={10} />
                </Form.Item>
                <Form.Item
                    name='n_bathrooms'
                    label='Numero de la banos'
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor escriba la cantidad de banos que contiene la casa'
                        }
                    ]}

                >
                    <InputNumber min={1} max={10} />
                </Form.Item>
                <Form.Item
                    name='n_home'
                    label='Numero de la casa'
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor escriba el numero de la casa'
                        }
                    ]}

                >
                    <InputNumber min={1} max={1000} />
                </Form.Item>
                <Form.Item
                    name='street'
                    label='Calle de la Casa'
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor seleccione una calle'
                        }
                    ]}

                >
                    <Select
                        options={optionsStreet}

                    />
                </Form.Item>
                <Form.Item
                    name='square'
                    label='Letra de la cuadra de la Casa'
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor seleccione una letra'
                        }
                    ]}

                >
                    <Select
                        options={optionsSquare}

                    />
                </Form.Item>
            </Form>
    );
};

export default FormHome;