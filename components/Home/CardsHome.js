import { Button, Row, Col, Card } from 'antd';

const CardsHome = ({ vacio, data, openModalJefe, Editar, Eliminar }) => {
  return (
    <Row className='mt-6 flex justify-around'>
      {vacio ?
        (
          <div className='text-3xl'>
            No hay Casas
          </div>
        ) :
        data.length == 0 ?
          (
            <div className='text-3xl'>
              No hay Resultados
            </div>
          ) :
          data.map(function (item, index) {
            return (
              <Col key={item.id} className='mb-6 mx-3'>
                <Card className='w-96 ' title={`Casa  ` + (index + 1)} hoverable>
                  <div>Letra de la cuadra de la Casa: <span className='font-bold'>{item.square}</span></div>
                  <div>Numero de la Casa: <span className='font-bold'>{item.n_home}</span></div>
                  <div>Cuartos de la Casa: <span className='font-bold'>{item.n_rooms}</span></div>
                  <div>Banos de la Casa: <span className='font-bold'>{item.n_bathrooms}</span> </div>
                  <div>Personas que viven en la Casa: <span className='font-bold'>{item.n_population}</span></div>
                  <div>Calle de la Casa: <span className='font-bold'>{item.street}</span></div>
                  <div className='flex justify-between mt-3'>
                    <Button onClick={() => openModalJefe(index)} className='mr-3'>Jefe Familiar</Button>
                    <div>
                      <Button onClick={() => Editar(index)} className='mr-3'>Editar</Button>
                      <Button onClick={() => Eliminar(item.id, index)}>Eliminar</Button>
                    </div>
                  </div>
                </Card>
              </Col>
            )
          })}
    </Row>
  );
};

export default CardsHome;