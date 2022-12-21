import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Search from '../../components/Home/SearchHome'
import axios from 'axios';
import ModalHomes from '../../components/Home/ModalHomes';
import ModalJefe from '../../components/Chief/ModalChief';
import Icon from '@mdi/react';
import { mdiHomePlus } from '@mdi/js';
import CardsHome from '../../components/Home/CardsHome';
import { createHomeNotification, editHomeNotification, deleteHomeNotification } from '../../components/Home/NotificationsHomes';
import { createChiefNotification } from '../../components/Chief/NotificationsChief';

const Casas = () => {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [searchN, setSearchN] = useState('')
  const [searchS, setSearchS] = useState('')
  const [searchST, setSearchST] = useState('')
  const [openJefe, setOpenJefe] = useState(false)
  const [item, setItem] = useState(null)
  const [vacio, setVacio] = useState(false)
  const router = useRouter()
  let resultados = []

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
        createHomeNotification(datos)
      } catch (error) {
        console.log(error)
      }
    }
    else {
      try {

        await axios.put(`http://localhost:8080/home/${item.id}`, datos)
        editHomeNotification(datos)
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
      createChiefNotification(datos)
    } catch (error) {
      console.log(error)
    }
  }
  const Editar = async (index) => {
    setOpen(true)
    setItem(data[index])
  }
  const Eliminar = async (id, index) => {
    try {
      await axios.delete('http://localhost:8080/home/' + id)
      deleteHomeNotification(id)
    } catch (error) {
      console.log('no se elminio')
      console.log(error)
    }
    CargarDatos()
  }
  const CargarDatos = async () => {
    try {
      const auxData = await axios.get('http://localhost:8080/home')
      setData(auxData.data)
      if (auxData.data.length == 0) {
        setVacio(true)
      }
      else {
        setVacio(false)
      }
    } catch (error) {
      router.push('/')
      console.log(error)

    }
  }
  const onSearchN = (value) => {
    setSearchN(value)
  };
  const onSearchS = (value) => {
    setSearchS(value)
  };
  const onSearchST = (value) => {
    setSearchST(value)
  };

  !searchN && !searchS && !searchST ?
    resultados = data :
    resultados = data.filter((busqueda) =>
      busqueda.n_home.toString().toLowerCase().includes(searchN.toString().toLowerCase())&&
      busqueda.square.toString().toLowerCase().includes(searchS.toString().toLowerCase())  &&
      busqueda.street.toString().toLowerCase().includes(searchST.toString().toLowerCase()) 
      )

  useEffect(() => { CargarDatos() }, [])
  return (
    <div className='min-h-screen'>
      <ModalHomes open={open} onCancel={Cancel} finish={Guardar} item={item} />
      <ModalJefe open={openJefe} onCancel={CancelJefe} finish={GuardarJefe} item={item} />
      <Button className='mt-6 ml-6' onClick={openModal}>
        Agregar Casa
        <Icon path={mdiHomePlus} className='inline ml-1 mb-1' size={0.8} />
      </Button>
      <Search onSearchN={onSearchN} onSearchS={onSearchS} onSearchST={onSearchST} />
      <CardsHome vacio={vacio} data={resultados} openModalJefe={openModalJefe} Editar={Editar} Eliminar={Eliminar} />

    </div>
  );
};

export default Casas;