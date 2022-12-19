import { Button, Row, Col, Card, Space } from 'antd';

const CardsChief = ({vacio, data, Eliminar}) => {
    return (
        <Row className='mt-6 flex justify-around'>
        {vacio ?
          (
            <div className='text-3xl'>
              No hay Jefes
            </div>
          ) :
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
                  <div className='text-end'>
                    <Button onClick={() => Eliminar(item.id)}>Eliminar</Button>
                  </div>
                </Card>
              </Col>
            )
          })}
      </Row>
    );
};

export default CardsChief;