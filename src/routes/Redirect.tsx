import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/todo');
  }, [navigate]);

  return <Spin />;
};

export default RedirectPage;
