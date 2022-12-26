import { Button, Row, Col, Card, Popconfirm } from 'antd';


const CardsGroup = ({ vacio, data, Eliminar,Editar }) => {
  return (
    <Row className='mt-6 flex justify-around'>
      {vacio ?
        (
          <div className='text-3xl'>
            No hay Grupos Familiares
          </div>
        ) :
        data.map(function (item, index) {
          return (
            <Col key={item.id} className='mb-6 mx-3'>
              <Card
                hoverable
                className='w-96 '
                title={`Grupo familiar ${index + 1}`} >
                <div>Nombre de la persona: <span className='font-bold'>{item.person.name}</span></div>
                <div>Relacion: <span className='font-bold'>{item.relationship}</span></div>
                <div>Numero de la casa: <span className='font-bold'>{item.chief.home.n_home}</span></div>
                <div>Habitantes en la casa: <span className='font-bold'>{item.chief.home.n_population}</span></div>
                <div>Nombre del jefe familiar: <span className='font-bold'>{item.chief.person.name}</span></div>
                <div>Numero del jefe familiar: <span className='font-bold'>{item.chief.numberPhone}</span></div>
                <div className='text-end mt-3'>
                <Popconfirm
                      title='Estas seguro que deseas Eliminar?'
                      onConfirm={() => Eliminar(item.id)}
                      okText='Eliminar'
                      cancelText='Cancelar'
                      >
                      <Button >Eliminar</Button>
                      </Popconfirm>
                      <Button className='ml-4' onClick={()=> Editar(index)} >Editar</Button>
                </div>
              </Card>
            </Col>
          )
        })}
    </Row>
  );
};

export default CardsGroup;