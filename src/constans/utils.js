import toast from 'react-hot-toast';

export const deletedToast = () => {
  return toast.success('Contact deleted!', {
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
    iconTheme: {
      primary: '#713200',
      secondary: '#FFFAEE',
    },
  });
};

export const addToast = name => {
  return toast.success(`Contact ${name} successfully added!`, {
    style: {
      border: '1px solid green',
      padding: '16px',
      color: 'green',
    },
  });
};

export const errorToast = () => {
  return toast.error('A contact with the same name already exists!', {
    style: {
      border: '1px solid red',
      padding: '16px',
      color: 'red',
    },
  });
};
