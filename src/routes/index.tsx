import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';

const Routers = () => {
  return <RouterProvider router={routers} />;
};

export default Routers;
