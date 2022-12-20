import { notification } from "antd";
import axios from "axios";
export const personCreateNotification =()=>{
    notification.success({
        message: "Persona Creada Exitosamente"
    })
}
export const personEditNotification =()=>{
    notification.success({
        message: "Persona Editada Exitosamente"
    })
}
export const personDeleteNotification = async (id)=>{
    const auxData = await axios.get('http://localhost:8080/family-chief')
    const filter = auxData.data.filter((item)=> item.person.id == id )
    console.log(filter)

    filter.length !== 0?
    notification.error({
        message: "Fallo!!!",
        description: `No se puede eliminar esta persona ya que es un jefe familiar`
        
    }):
    notification.success({
        message: "Persona Eliminada Exitosamente"
    })
}