import { Button} from 'antd';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import ModalGroup from '../../components/Group/ModalGroup';
import Icon from '@mdi/react';
import {mdiAccountGroup} from '@mdi/js'
import CardsGroup from '../../components/Group/CardsGroup';
const Grupo = () => {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [item, setItem] = useState(null)
  const [vacio, setVacio] = useState(false)
  const router = useRouter()

  const Open = () => {
    setItem(null)
    setOpen(true)

  }
  const Cancel = async () => {
    setOpen(false)
    setItem(null)
  }
  const Guardar = async (datos) => {
    if (item === null) {
      try {
        await axios.post('http://localhost:8080/family-group', datos)
        CargarDatos()
        setOpen(false)
        setItem(null)
      } catch (error) {
        console.log(error)
      }
    }
    else {
      try {
        await axios.put(`http://localhost:8080/home/${item.id}`, datos)
        CargarDatos()
        setOpen(false)
        setItem(null)
      } catch (error) {
        console.log(error)
      }
    }

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
  useEffect(() => { CargarDatos() }, [])
  return (
    <div className='min-h-screen'>
      <ModalGroup open={open} onCancel={Cancel} finish={Guardar} item={null} />
      <Button className='mt-6 ml-6' onClick={Open}>
        Agregar Grupo familiar
        <Icon path={mdiAccountGroup} className='inline ml-1 mb-1' size={0.8} />  
        
        </Button>
        <CardsGroup vacio={vacio} data={data} Eliminar={Eliminar} />

    </div>
  );
};

export default Grupo;