import { notification } from 'antd';
import axios from 'axios';
export const createHomeNotification = (datos) => {
    notification.success({
        message: "Casa Creada Exitosamente",
    });
};
export const deleteHomeNotification = async ( id) => {
    const chief = await axios.get('http://localhost:8080/family-chief')
    const filtrado = chief.data.filter((item)=> item.home.id == id)
    filtrado.length !== 0?   
    notification.error({
        message: `Fallo!!!`,
        description: 'Esta casa no se puede eliminar ya que posee un jefe familiar'
    }):
    notification.success({
        message: "Casa Eliminida Exitosamente",
    }) 
};
export const editHomeNotification = (datos) => {
    notification.success({
        message: "Casa Editada Exitosamente",
    
    });
};
