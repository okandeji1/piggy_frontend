import { notification, Modal } from 'antd';

export const openNotification = (prop) => {
    notification[prop.type]({
      message: `${prop.message}`,
      description: `${prop.description}`,
     
    });
  };



export const openModal = ({type = 'info', title = 'Confirm', content, onOk, onCancel, ...rest}) => {

  Modal[type]({
    title: title,
    content: content,
    onOk: onOk, 
    onCancel: onCancel,
    autoFocusButton: 'cancel',
    ...rest
  });
};


