import '../styles/App.css';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import { FoodProvider } from '../context';



function App() {
  return (
    <>
        <Header /> 
        <Navbar />
        <FoodProvider>
          <Outlet />
        </FoodProvider>
        <Footer /> 
    
    </>
  );
}

export default App;
