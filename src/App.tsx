import { FC } from "react";
import { BrowserRouter } from 'react-router-dom'
import GeneralLayout from '@/components/layouts/general-layout/GeneralLayout'
import "@/assets/css/global.css";
import Titlebar from './components/structures/titlebar/Titlebar';
import Footer from './components/structures/footer/Footer';
import AppRoutes from './routes';
import MainWrapper from "./hoc/main-wrapper/MainWrapper";

const App:FC = () => {

  return (
    <BrowserRouter>
      <GeneralLayout>
        <Titlebar />
        
        <div className="flex min-h-full flex-col w-full">

          <MainWrapper>
            <AppRoutes />
          </MainWrapper>

          <Footer />
        </div>
      </GeneralLayout>
    </BrowserRouter>
  );
}

export default App;
