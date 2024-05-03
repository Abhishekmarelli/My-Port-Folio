import { AllRoutes } from './AllRoutes/AllRoutes';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function App() {
  return (
    <main>
    <Navbar/>
    <AllRoutes/>
   <Footer/> 
   </main>
  );
}

export default App;
