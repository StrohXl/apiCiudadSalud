import { Input, Typography, Select } from "antd";
const { Search } = Input
const { Title } = Typography
const SearchGroup = ({ onSearchN, onSearchNC, onSearchR }) => {
    const options = [
        {
            label: "Ninguno",
            value: ""
        },
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
        <div className="flex gap-20 mx-50 mt-10 justify-center">
            <div className="w-96 text-center">
                <Title level={3}>Nombre:</Title>
                <Search placeholder="Escriba el nombre de la persona" allowClear onSearch={onSearchN} />
            </div>
            <div className="w-96 text-center ">
                <Title level={3}>Numero de la casa:</Title>
                <Search placeholder="Escriba numero de la Casa" allowClear onSearch={onSearchNC} />
            </div>
            <div className="w-96 text-center">
                <Title level={3}>Relacion:</Title>
                <Select className="w-96" onChange={onSearchR} defaultValue={''} options={options} />

            </div>
        </div>
    );
};

export default SearchGroup;