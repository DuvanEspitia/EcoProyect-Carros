import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';



import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Components/home'
import Formulario from './Components/Formulario'
import FormularioCarro from './Components/FormularioCarro'
import EstructuraVehiculo from './Components/EstructuraVehiculo'
import Login from './Components/login'
import Form from "./Components/form"
import LatoneriaVeh from './Components/LatoneriaVeh';
import Inferior from './Components/inferior';
import Pintura from './Components/Pintura';
function App() {
  return (  
    <div>
      <Router>
      

     
      <Routes>
      <Route  path="/" element={<Login/>}/>
      <Route  path="/home" element={<Home/>}/>
      <Route  path="/formulario" element={<Formulario/>}/>
      <Route  path="/formulariocarro" element={<FormularioCarro/>}/>
      <Route  path="/EstructuraVehiculo" element={<EstructuraVehiculo/>}/>
      <Route  path="/form" element={<Form/>}/>
      <Route  path="/LatoneriaVeh" element={<LatoneriaVeh/>}/>
      <Route  path="/inferior" element={<Inferior/>}/>
      <Route  path="/Pintura" element={<Pintura/>}/>
      </Routes>
      </Router>
      </div>
  );
}


export default App;
