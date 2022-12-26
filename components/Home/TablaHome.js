import React, { useRef, useState, useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import axios from 'axios';

const TablaHome = ({ homeId }) => {
    const [data, setData] = useState(null)
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const rowSelection = {
        type: 'radio',
        onSelect: (record) => {
            homeId(record)

        }
    }
    const pagination = {
        pageSize: 4,
    }

    const CargarDatos = async () => {
        const auxdata = await axios.get('http://localhost:8080/home')
        console.log(auxdata)
        auxdata.data.map((item) => {
            item.key = item.id
        })
        setData(auxdata.data)
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
                            className='text-lg leading-none'
                            type="primary"
                            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                            icon={(<span className=' pr-1'><SearchOutlined /></span>)}
                            
                     
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
                        className='text-lg leading-none inlin'
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
                className='text-lg leading-none'
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
            title: 'Numero de la Casa',
            dataIndex: 'n_home',
            key: 'n_home',
            width: '30%',
            ...getColumnSearchProps('n_home'),
        },
        {
            title: 'Cuadra',
            dataIndex: 'square',
            key: 'square',
            width: '30%',
            ...getColumnSearchProps('square'),
        },
        {
            title: 'Calle',
            dataIndex: 'street',
            key: 'street',
            ...getColumnSearchProps('street'),
     
        },
    ];
    useEffect(() => {
        CargarDatos()
    }, [])
    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={pagination} rowSelection={rowSelection} />

        </div>

    );
};
export default TablaHome

