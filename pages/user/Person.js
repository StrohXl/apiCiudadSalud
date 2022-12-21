import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Icon from '@mdi/react';
import { mdiAccountPlus } from '@mdi/js';
import ModalPersona from '../../components/Person/ModalPerson';
import ModalGroup from '../../components/Group/ModalGroup';
import CardsPerson from '../../components/Person/CardsPerson';
import { personCreateNotification, personDeleteNotification, personEditNotification } from '../../components/Person/NotificationPerson';
import SearchPerson from '../../components/Person/SearchPerson';

const Personas = () => {

  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [openGrupoFamiliar, setOpenGrupoFamiliar] = useState(false)
  const [item, setItem] = useState(null)
  const [vacio, setVacio] = useState(false)
  const [searchA, setSearchA] = useState("")
  const [searchC, setSearchC] = useState("")
  const [searchN, setSearchN] = useState("")
  const router = useRouter()
  let Resultado = []
  const OpenModal = () => {
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
        await axios.post('http://localhost:8080/person', datos)
        CargarDatos()
        personCreateNotification()
      } catch (error) {
        console.log(error)
      }
    }
    else {
      try {
        await axios.put(`http://localhost:8080/person/${item.id}`, datos)
        CargarDatos()
        personEditNotification()
      } catch (error) {
        console.log(error)
      }
    }
    setOpen(false)
    setItem(null)

  }
  const OpenModalGrupoFamiliar = (index) => {
    setItem(data[index])
    setOpenGrupoFamiliar(true)

  }
  const CancelGrupoFamiliar = async () => {
    setOpenGrupoFamiliar(false)
    setItem(null)
  }
  const GuardarGrupoFamiliar = async (datos) => {
    try {
      await axios.post('http://localhost:8080/family-group', datos)
      setOpenGrupoFamiliar(false)
      setItem(null)
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
      await axios.delete('http://localhost:8080/person/' + id)
      CargarDatos()
      personDeleteNotification(id)
    } catch (error) {
      console.log(error)
      personDeleteNotification(id)
    }

  }
  const CargarDatos = async () => {
    try {
      const auxData = await axios.get('http://localhost:8080/person')
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
  const onSearchA =(valor)=>{
    setSearchA(valor)
  }
  const onSearchN =(valor)=>{
    setSearchN(valor)
  }
  const onSearchC =(valor)=>{
    setSearchC(valor)
  }
  !searchA && !searchC && !searchN?
  Resultado = data
  :
  Resultado = data.filter((b)=>
  b.name.toLowerCase().includes(searchN) &&
  b.lastName.toLowerCase().includes(searchA) &&
  b.dni.toLowerCase().includes(searchC) 

  )
  useEffect(() => { CargarDatos() }, [])
  return (
    <div className='min-h-screen'>
      <ModalPersona open={open} onCancel={Cancel} finish={Guardar} item={item} />
      <ModalGroup open={openGrupoFamiliar} onCancel={CancelGrupoFamiliar} finish={GuardarGrupoFamiliar} item={item} />
      <Button className='mt-6 ml-6' onClick={OpenModal}>
        Agregar Persona
        <Icon path={mdiAccountPlus} className='inline ml-1 mb-1' size={0.8} />
      </Button>
      <SearchPerson onSearchA={onSearchA} onSearchC={onSearchC} onSearchN={onSearchN}/>
      <CardsPerson vacio={vacio} data={Resultado} OpenModalGrupoFamiliar={OpenModalGrupoFamiliar} Editar={Editar} Eliminar={Eliminar} />
    </div>
  );
};

export default Personas;