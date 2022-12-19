import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import ModalHomes from '../../components/Home/ModalHomes';
import ModalJefe from '../../components/Chief/ModalChief';
import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';
import CardsHome from '../../components/Home/CardsHome';
const Casas = () => {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [openJefe, setOpenJefe] = useState(false)
  const [item, setItem] = useState(null)
  const [vacio, setVacio] = useState(false)
  const router = useRouter()
  const openModal = () => {
    setItem(null)
    setOpen(true)
  }
  const openModalJefe = (index) => {
    setOpenJefe(true)
    setItem(data[index])
  }
  const Cancel = async () => {
    setOpen(false)
    setItem(null)
  }
  const Guardar = async (datos) => {
    if (item === null) {
      try {
        await axios.post('http://localhost:8080/home', datos)
      } catch (error) {
        console.log(error)
      }
    }
    else {
      try {
        await axios.put(`http://localhost:8080/home/${item.id}`, datos)
      } catch (error) {
        console.log(error)
      }
    }
    setOpen(false)
    setItem(null)
    CargarDatos() 
  }
  const CancelJefe = async () => {
    setOpenJefe(false)
    setItem(null)
  }
  const GuardarJefe = async (datos) => {
     try {
      await axios.post('http://localhost:8080/family-chief', datos)
      setOpenJefe(false)
     } catch (error) {
      console.log(error)
     }
  }
  const Editar = async (index) => {
    setOpen(true)
    setItem(data[index])
  }
  const Eliminar = async (id) => {
    try {
     await axios.delete('http://localhost:8080/home/' + id)
      
      CargarDatos()

    } catch (error) {
      console.log(error)
    }

  }
  const CargarDatos = async () => {
    try {
      const auxData = await axios.get('http://localhost:8080/home')
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
      <ModalHomes open={open} onCancel={Cancel} finish={Guardar} item={item} />
      <ModalJefe open={openJefe} onCancel={CancelJefe} finish={GuardarJefe} item={item} />
      <Button className='mt-6 ml-6' onClick={openModal}>
        Agregar Casa
        <Icon path={mdiHome} className='inline ml-1 mb-1' size={0.8} />
      </Button>
      <CardsHome vacio={vacio} data={data} openModalJefe={openModalJefe} Editar={Editar} Eliminar={Eliminar} />

    </div>
  );
};

export default Casas;