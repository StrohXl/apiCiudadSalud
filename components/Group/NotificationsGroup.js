import { notification } from 'antd';
export const createGroupNotification  =  () => {
    notification.success({
        message: "Grupo familiar Creado Exitosamente",

    });
};
export const editGroupNotification  =  () => {
    notification.success({
        message: "Grupo familiar Editado Exitosamente",

    });
};
export const createGroupErrorNotification  =  () => {
    notification.error({
        message: "Fallo!!!!!",
        description: 'Lo siento ya tiene un grupo familiar'

    });
};

    
    