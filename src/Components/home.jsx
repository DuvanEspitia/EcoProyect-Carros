import './estiloini.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Box,Grid} from "@material-ui/core"
import {Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap';
import car from "../../src/Image/car.png";
import user from "../../src/Image/cliente.png";
import doc from "../../src/Image/documento.png";
import revi from "../../src/Image/revisar.png";

function Home(){
  const[dropdown,setDropdown]=useState(false);
  const[dropdown1,setDropdown1]=useState(false);
  const[dropdown2,setDropdown2]=useState(false);
  const[dropdown3,setDropdown3]=useState(false);   
  const abrirCerrarDropdown=()=>{setDropdown(!dropdown);}
  const abrirCerrarDropdown1=()=>{setDropdown1(!dropdown1);}
  const abrirCerrarDropdown2=()=>{ setDropdown2(!dropdown2);}
  const abrirCerrarDropdown3=()=>{ setDropdown3(!dropdown3);}
  return(

                <div>
                        <Grid container spacing={12} direction="row" justifyContent="center" alignItems="flex-start">
                        <Grid item xs={12} >
                <div className="top">
                    <p className="titulo">Bienvenidos, ¿Que deseas hacer?</p>
                    </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={12}><div className="space"></div></Grid>
                    <Grid item xs={6} sm={3}>
                         <div className="Button-home">
                         <img src={user} className="img" alt="user"></img>
                                <Dropdown isOpen={dropdown1} toggle={abrirCerrarDropdown1}>
                                        <DropdownToggle caret className="Botoncae">
                                        Cliente
                                        </DropdownToggle>
                                 <DropdownMenu>
                                        <DropdownItem className="Contenido">Cliente registrado</DropdownItem>
                                        <DropdownItem className="Contenido">
                                                <Link to="/Formulario" className="link"> Cliente nuevo</Link>
                                                </DropdownItem>
                                  </DropdownMenu>
                                 </Dropdown>
                                </div>
                        </Grid>
                   
                        <Grid item xs={6} sm={3}>
                         <div className="Button-home">
                                <img src={car} className="imgc" alt="vehiculo"></img>
                        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
                                        <DropdownToggle caret className="Botoncae">
                                        Vehiculo
                                        </DropdownToggle>
                                <DropdownMenu>
                                        <DropdownItem className="Contenido">Vehiculo registrado</DropdownItem>
                                        <DropdownItem className="Contenido"><Link to="/form" className="link"> Vehiculo nuevo</Link></DropdownItem>
                                </DropdownMenu>
                        </Dropdown>
                                </div>
                        </Grid>
                               
                        
                   
                   
                          <Grid item xs={6} sm={3}>
                         <div className="Button-home">
                         <img src={revi} className="img" alt="peritaje"></img>
                        <Dropdown isOpen={dropdown2} toggle={abrirCerrarDropdown2}>
                                <DropdownToggle caret className="Botoncae">
                                Revisiones
                                </DropdownToggle>
                                <DropdownMenu>
                                        <DropdownItem className="Contenido">Técnica</DropdownItem>
                                        <DropdownItem className="Contenido">Tecno mecánica</DropdownItem>
                                        <DropdownItem className="Contenido">Motor</DropdownItem>
                                </DropdownMenu>
                        </Dropdown>
                                </div>  
                        </Grid>  
                    
                         <Grid item xs={6} sm={3}>
                         <div className="Button-home">
                         <img src={doc} className="img" alt="Reporte"></img>
                        <Dropdown isOpen={dropdown3} toggle={abrirCerrarDropdown3}>
                                <DropdownToggle caret className="Botoncae">
                                Reporte
                                </DropdownToggle>
                                <DropdownMenu>
                                        <DropdownItem className="Contenido">Peritaje</DropdownItem>
                                        <DropdownItem className="Contenido">Revisión técnica</DropdownItem>
                                        <DropdownItem className="Contenido">Revisión mecánica</DropdownItem>
                                        <DropdownItem className="Contenido">Revisión motor</DropdownItem>
                                </DropdownMenu>
                        </Dropdown>
                                </div>
                                </Grid>
                                
                        
                    
                  
                    </Grid>
                </div>

        );
    

}

export default Home;
