import {
  useState
} from 'react';

export const useOrderConfirm = () => {
  const [openOrderConfirm, setOrderConfirm] = useState(false);
  return {
    openOrderConfirm,
    setOrderConfirm
  };
};
