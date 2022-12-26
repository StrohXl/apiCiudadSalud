import { Button, Row, Col, Card, Popconfirm } from 'antd';

const CardsChief = ({vacio, data, Eliminar, Editar}) => {
    return (
        <Row className='mt-6 flex justify-around'>
        {vacio ?
          (
            <div className='text-3xl'>
              No hay Jefes
            </div>
          ) :
          data.length == 0?
          (
            <div className='text-3xl '>
              No hay Resultados
            </div>
          ):
          data.map(function (item, index) {
            return (
              <Col key={item.id} className='mb-6 mx-3'>
                <Card
                  hoverable
                  className='w-96 '
                  title={`Jefe Familiar ${index + 1}`} >
                  <div>Nombre: <span className='font-bold'>{item.person.name}</span></div>
                  <div>Casa: <span className='font-bold'>{item.home.n_home}</span></div>
                  <div>Numero de telefono: <span className='font-bold'>{item.numberPhone}</span></div>
                  <div>Estado: <span className='font-bold'>{item.property}</span></div>
                  <div className='flex justify-end gap-4'>
                    <Button onClick={() => Editar(index)}>Editar</Button>
                    <Popconfirm
                      title='Estas seguro deseas Eliminar?'
                      
                      onConfirm={() => Eliminar(item.id)}
                      okText='Eliminar'
                      cancelText='Cancelar'
                      >
                      <Button >Eliminar</Button>
                      </Popconfirm>
                  </div>
                </Card>
              </Col>
            )
          })}
      </Row>
    );
};

export default CardsChief;