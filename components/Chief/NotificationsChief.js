import { notification } from 'antd';
export const createChiefNotification  =  () => {
    notification.success({
        message: "Jefe Familiar Creado Exitosamente",

    });
};
export const createChiefErrorNotification  =  () => {
    notification.error({
        message: "Fallo!!!!!",
        description: 'Lo siento esa persona ya es un jefe familiar porfavor seleccione a otra'

    });
};

    
    