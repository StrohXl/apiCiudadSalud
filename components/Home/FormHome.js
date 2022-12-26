import { Form,  InputNumber, Input  } from "antd";
const FormHome = ({data,form,onChange}) => {

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
                            message: 'Porfavor escriba la calle'
                        }
                    ]}

                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name='square'
                    label='Cuadra de la Casa'
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor escriba la cuadra de la casa'
                        }
                    ]}

                >
                    <Input/>
                </Form.Item>
            </Form>
    );
};

export default FormHome;