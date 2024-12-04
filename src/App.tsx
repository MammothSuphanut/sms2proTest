import './App.css';
import Routers from './routes';
import { ConfigProvider } from 'antd';
import locale_Th from 'antd/locale/th_TH';

function App() {
  return (
    <ConfigProvider locale={locale_Th}>
      <Routers />
    </ConfigProvider>
  );
}

export default App;
