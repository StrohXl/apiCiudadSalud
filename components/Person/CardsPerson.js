import { Button, Row, Col, Card } from 'antd';

const CardsPerson = ({ vacio, data, OpenModalGrupoFamiliar, Editar, Eliminar }) => {
  return (
    <Row className='mt-6 flex justify-around'>
      {vacio ? (
        <div className='text-3xl'>
          No hay Personas
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
                <Card className='w-96 ' title={`Persona ` + (index + 1)} hoverable>
                  <div>Nombre: <span className='font-bold'>{item.name}</span></div>
                  <div>Apellido: <span className='font-bold'>{item.lastName}</span></div>
                  <div>Cedula: <span className='font-bold'>{item.dni}</span></div>
                  <div>Fecha de nacimiento: <span className='font-bold'>{item.bornDate}</span></div>
                  <div>Genero: <span className='font-bold'>{item.gender}</span></div>
                  <div className='flex justify-between mt-3'>
                    <div>
                      <Button onClick={() => OpenModalGrupoFamiliar(index)} className='mr-3'>Grupo Familiar</Button>
                    </div>
                    <div>
                      <Button onClick={() => Editar(index)} className='mr-3'>Editar</Button>
                      <Button onClick={() => Eliminar(item.id)}>Eliminar</Button>
                    </div>
                  </div>
                </Card>
              </Col>
            )
          })
      }
    </Row>
  );
};

export default CardsPerson;