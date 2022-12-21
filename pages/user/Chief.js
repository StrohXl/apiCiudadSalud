import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import ModalJefe from '../../components/Chief/ModalChief';
import CardsChief from '../../components/Chief/CardsChief';
import Icon from '@mdi/react';
import { mdiAccountGroupOutline } from '@mdi/js'
import SearchChief from '../../components/Chief/SearchChief';
import { createChiefNotification } from '../../components/Chief/NotificationsChief';
const Jefes = () => {
  const [data, setData] = useState([])
  const [searchN, setSearchN] = useState([])
  const [searchNC, setSearchNC] = useState([])
  const [searchT, setSearchT] = useState([])
  const [open, setOpen] = useState(false)
  const [vacio, setVacio] = useState(false)
  const router = useRouter()
  let Resultado = []
  const Open = () => {
    setOpen(true)
  }
  const Cancel = async () => {
    setOpen(false)
  }
  const Guardar = async (datos) => {
    try {
      await axios.post('http://localhost:8080/family-chief', datos)
      CargarDatos()
      createChiefNotification()
      setOpen(false)
    } catch (error) {
      console.log(error)
    }

  }
  const Eliminar = async (id) => {
    try {
      await axios.delete('http://localhost:8080/family-chief/' + id)
      CargarDatos()
    } catch (error) {
      console.log(error)
    }
  }
  const CargarDatos = async () => {
    try {
      const auxData = await axios.get('http://localhost:8080/family-chief')
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
  const onSearchN = (valor) => {
    setSearchN(valor)
  }
  const onSearchNC = (valor) => {
    setSearchNC(valor)
  }
  const onSearchT = (valor) => {
    setSearchT(valor)
  }

  !searchN && !searchNC && !searchT ?
    Resultado = data :
    Resultado = data.filter((busqueda) =>
      busqueda.person.name.toString().toLowerCase().includes(searchN.toString().toLowerCase()) &&
      busqueda.home.n_home.toString().toLowerCase().includes(searchNC.toString().toLowerCase()) &&
      busqueda.numberPhone.toString().toLowerCase().includes(searchT.toString().toLowerCase())
    )
  useEffect(() => { CargarDatos() }, [])
  return (
    <div className='min-h-screen'>
      <ModalJefe open={open} onCancel={Cancel} finish={Guardar} item={null} />
      <Button className='mt-6 ml-6' onClick={Open}>
        Agregar Jefe familiar
        <Icon path={mdiAccountGroupOutline} className='inline ml-1 mb-1' size={0.8} />
      </Button>
      <SearchChief onSearchN={onSearchN} onSearchNC={onSearchNC} onSearchT={onSearchT} />
      <CardsChief vacio={vacio} data={Resultado} Eliminar={Eliminar} />

    </div>
  );
};

export default Jefes;