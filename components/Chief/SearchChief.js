import { Input, Typography } from "antd";
const { Search } = Input
const { Title } = Typography
const SearchChief = ({onSearchN, onSearchNC, onSearchT}) => {
    return (
        <div className="flex gap-10 px-12 mt-10 justify-center">


        <div className="w-96 text-center">
            <Title level={3}>Nombre:</Title>
            <Search placeholder="Escriba el nombre del jefe familiar" allowClear onSearch={onSearchN} />
        </div>
        <div className="w-96 text-center ">
            <Title level={3}>Numero de la Casa:</Title>
            <Search placeholder="Escriba el numero de la Casa" allowClear onSearch={onSearchNC} />
        </div>
        <div className="w-96 text-center">
            <Title level={3}>Tlf:</Title>
            <Search placeholder="Escribal el numero de telefono" allowClear onSearch={onSearchT} />
        </div>
    </div>
);
};

export default SearchChief;