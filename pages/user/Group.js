import { Button} from 'antd';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import DrawerGroup from '../../components/Group/DrawerGroup';
import Icon from '@mdi/react';
import {mdiAccountGroup} from '@mdi/js'
import CardsGroup from '../../components/Group/CardsGroup';
import SearchGroup from '../../components/Group/SearchGroup';
import { createGroupErrorNotification, createGroupNotification, editGroupNotification } from '../../components/Group/NotificationsGroup';
const Grupo = () => {
  const [data, setData] = useState([])
  const [searchN, setSearchN] = useState([])
  const [searchNC, setSearchNC] = useState([])
  const [searchR, setSearchR] = useState([])
  const [openDrawer, setOpenDrawer] = useState(false)
  const [item, setItem] = useState(null)
  const [vacio, setVacio] = useState(false)
  const router = useRouter()
  let Resultado = []
  const OpenDrawer = () => {
    setItem(null)
    setOpenDrawer(true)

  }
  const Editar = (index) => {
    setItem(data[index])
    setOpenDrawer(true)

  }
  const Cancel = async () => {
    setOpenDrawer(false)
    setItem(null)
  }
  const Guardar = async (datos) => {
  const person = data.filter((b)=>
  b.person.id == datos.person
  )
  if(person.length != 0){
   createGroupErrorNotification()
  }
  else{
    if (item === null) {
      try {
        await axios.post('http://localhost:8080/family-group', datos)
        CargarDatos()
        setOpenDrawer(false)
        setItem(null)
        createGroupNotification()
      } catch (error) {
        console.log(error)
      }
    }
    else {
      try {
        await axios.put(`http://localhost:8080/family-group/${item.id}`, datos)
        CargarDatos()
        editGroupNotification()
        setOpenDrawer(false)
        setItem(null)
      } catch (error) {
        console.log(error)
      }
    }
  }
console.log(datos)

  }
  const Eliminar = async (id) => {
    try {
      await axios.delete('http://localhost:8080/family-group/' + id)
      CargarDatos()
    } catch (error) {
      console.log(error)
    }
  }
  const CargarDatos = async () => {
    try {
      const auxData = await axios.get('http://localhost:8080/family-group')
      setData(auxData.data)
      if(auxData.data.length == 0){
        setVacio(true)
      }
      else{
        setVacio(false)
      }
    } catch (error) {
      router.push('/')
      console.log(error)

    }
  }
  const onSearchR=(valor)=>{
    setSearchR(valor)
  }
  const onSearchN=(valor)=>{
    setSearchN(valor)
  }
  const onSearchNC=(valor)=>{
    setSearchNC(valor)
  }
  
  !searchN && !searchNC && !searchR ?
    Resultado = data :
    Resultado = data.filter((busqueda) =>
      busqueda.person.name.toString().toLowerCase().includes(searchN.toString().toLowerCase()) &&
      busqueda.chief.home.n_home.toString().toLowerCase().includes(searchNC.toString().toLowerCase()) &&
      busqueda.relationship.toString().toLowerCase().includes(searchR.toString().toLowerCase())
    )
  useEffect(() => { CargarDatos() }, [])
  return (
    <div className='min-h-screen'>
      <DrawerGroup open={openDrawer} onCancel={Cancel} finish={Guardar} item={item} />
      <Button className='mt-6 ml-6' onClick={OpenDrawer}>
        Agregar Grupo familiar
        <Icon path={mdiAccountGroup} className='inline ml-1 mb-1' size={0.8} />  
        
        </Button>
        <SearchGroup onSearchR={onSearchR} onSearchN={onSearchN} onSearchNC={onSearchNC}/>
        <CardsGroup vacio={vacio} data={Resultado} Eliminar={Eliminar} Editar={Editar} />

    </div>
  );
};

export default Grupo;