import React, { useRef, useState, useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import axios from 'axios';
import ModalPersona from './ModalPerson';
import { personCreateNotification } from './NotificationPerson';

const TablaPersonas = ({personId, item}) => {
    const [data, setData] = useState(null)
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [openModal, setOpenModal] = useState(false)
    const searchInput = useRef(null);
    const rowSelection ={
        type: 'radio',
        onSelect: (record)=>{
            personId(record)
          
        }

    }
    const pagination = {
        pageSize: 4,
    }
    const openModalPersona = () => {
        setOpenModal(true)
    }
    const CargarDatos = async () => {
        const auxdata = await axios.get('http://localhost:8080/person')
        auxdata.data.map((item)=>{
            item.key = item.id
        })
        setData(auxdata.data)
    }
    const Cancel = () => {
        setOpenModal(false)
    }
    const Guardar = async (datos) => {
        try {
            await axios.post('http://localhost:8080/person', datos)
            CargarDatos()
            setOpenModal(false)
            personCreateNotification()
        } catch (error) {
            console.log(error)
        }
    }
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                     
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={(<span className=' pr-1'><SearchOutlined /></span>)}
                        className='text-lg leading-none'
                       
                    >
                        Buscar
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        className='text-lg leading-none'
                       
                    >
                        Resetear
                    </Button>
                    <Button
                        type="link"
                        className='text-lg leading-none'
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filtrar
                    </Button>
                    <Button
                        type="link"
                        className='text-lg leading-none'
                        onClick={() => {
                            close();
                        }}
                    >
                        cerrar
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                className='text-xl'
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Apellido',
            dataIndex: 'lastName',
            key: 'lastName',
            width: '30%',
            ...getColumnSearchProps('lastName'),
        },
        {
            title: 'Cedula',
            dataIndex: 'dni',
            key: 'dni',
            ...getColumnSearchProps('dni'),
       
        },
    ];
    useEffect(() => {
        CargarDatos()
    }, [])
    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={pagination} rowSelection={rowSelection}/>
            {item == null?""
            :(
                <Button onClick={openModalPersona} >Agregar Persona</Button>
            )}
          
            <ModalPersona open={openModal} onCancel={Cancel} finish={Guardar} item={null} />
        </div>

    );
};
export default TablaPersonas

