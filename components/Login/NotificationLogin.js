import { notification } from 'antd';
export const ErrorNotification  =  () => {
    notification.error({
        message: "Su correo o la contrasea son incorretos",

    });
};