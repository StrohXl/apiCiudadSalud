import { Input,Typography } from "antd";               
const {Title} = Typography
const {Search} = Input
const SearchPerson = ({onSearchN, onSearchA, onSearchC}) => {
    return (
        <div className="flex gap-10 px-12 mt-10 justify-center">
        <div className="w-96 text-center">
            <Title level={3}>Nombre:</Title>
            <Search placeholder="Escriba el nombre de la persona " allowClear onSearch={onSearchN} />
        </div>
        <div className="w-96 text-center ">
            <Title level={3}>Apelido:</Title>
            <Search placeholder="Escriba el apellido de la persona" allowClear onSearch={onSearchA} />
        </div>
        <div className="w-96 text-center">
            <Title level={3}>C.I:</Title>
            <Search placeholder="Escribal la cedula de la persona" allowClear onSearch={onSearchC} />
        </div>
    </div>
            
    );
};

export default SearchPerson;