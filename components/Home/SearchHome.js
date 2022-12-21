import { Input, Select, Typography } from "antd";
const { Search } = Input
const { Title } = Typography
const index = ({ onSearchN, onSearchS, onSearchST }) => {
    const optionsStreet = [
        {
            value: '',
            label: 'Ninguno'
        },
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
            value: '',
            label: 'Ninguno'
        },
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
        <div className="flex gap-20 mx-50 mt-10 justify-center">


            <div className="w-96 text-center">
                <Title level={3}>Numero de la casa:</Title>
                <Search placeholder="Escriba el numero de la Casa" allowClear onSearch={onSearchN} />
            </div>
            <div className="w-96 text-center ">
                <Title level={3}>Letra de la casa:</Title>
                <Select className="w-96" defaultValue={''} placeholder='Seleccione la letra' options={optionsSquare} onChange={onSearchS} />
            </div>
            <div className="w-96 text-center">
                <Title level={3}>Calle de la casa:</Title>
                <Select className="w-96" defaultValue={''} placeholder='Seleccione la calle' options={optionsStreet} onChange={onSearchST} />
            </div>
        </div>
    );
};

export default index;