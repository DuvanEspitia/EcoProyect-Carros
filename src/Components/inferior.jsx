import { useForm } from "react-hook-form";
import React from 'react';
import {Box,Grid} from "@material-ui/core"
import './Formulariocss.css';
function Inferior (){

        const {register,formState:{errors},handleSubmit}= useForm();

        const onSubmit = (data) =>{
                console.log(data);
        }
        return (<div>
                
                 <h2>Inferior</h2>
        <form onSubmit={handleSubmit(onSubmit)}>    
         <Grid container spacing={3}  direction="colum" alignItems="flex-start" justifyContent="center">
         

               
                <Grid item xs={6} sm="auto">
                 
              
                 <div>
                         <label>Alma paragolpes trasero</label>
                        <input type="text" className="Box-size" {...register("almaParagolpesTrasero",{required:true,maxLength:25})}/>
                        {errors.almaParagolpesTrasero?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Base tijera izquierda</label>
                        <input type="text" className="Box-size" {...register("baseTijeraIzquierda",{required:true,maxLength:25})}/>
                         {errors.Modelo?.type=== "required"&&<p>* Obligatorio</p>}

                        </div>
                        <div>
                        <label >Extensión punta izquierda</label>
                        <input type="text" className="Box-size" {...register("extensiónPuntaIzquierda",{required:true,maxLength:25})}/>
                        {errors.extensiónPuntaIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Barra estabilizadora</label>
                        <input type="text" className="Box-size" {...register("barraEstabilizadora",{required:true,maxLength:25})}/>
                        {errors.barraEstabilizadora?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Faldón inferior</label>
                        <input type="text" className="Box-size" {...register("faldónInferior",{required:true,maxLength:25})}/>
                        {errors.faldónInferior?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        
                        <div>
                        <label >Punta delantera izq.</label>
                        <input type="text" className="Box-size" {...register("puntaDelanteraIzq",{required:true,maxLength:6})}/>
                        {errors.puntaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>

                </Grid>
                
             
                <Grid item xs={6} sm="auto">
                   

                        <div>
                        <label >Alma paragolpes delantero</label>
                        <input type="text" className="Box-size" {...register("almaParagolpesDelantero",{required:true,maxLength:6})}/>
                        {errors.almaParagolpesDelantero?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Base tijera derecha</label>
                        <input type="text" className="Box-size" {...register("baseTijeraDerecho",{required:true,maxLength:18})}/>
                 {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Carter</label>
                        <input type="text" className="Box-size" {...register("carter",{required:true,maxLength:16})}/>
                 {errors.carter?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Exosto</label>
                        <input type="text" className="Box-size" {...register("exosto",{required:true,maxLength:16})}/>
                 {errors.exosto?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Torre izquierda</label>
                        <input type="text" className="Box-size" {...register("TorreIzquierda",{required:true,maxLength:16})}/>
                 {errors.exosto?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                    
                        <div>
                        <label >Punta trasera dere.</label>
                        <input type="text" className="Box-size" {...register("puntaTraseraDere",{required:true,maxLength:6})}/>
                        {errors.puntaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>

                        
                </Grid>
                <Grid item xs={6} sm="auto">
                        

                        <div>
                        <label >Desfase diagonales</label>
                        <input type="text" className="Box-size" {...register("desfaseDiagonales",{required:true,maxLength:6})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Desfase en longitud</label>
                        <input type="text" className="Box-size" {...register("desfaseEnLongitud",{required:true,maxLength:18})}/>
                        {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Cuna motor</label>
                        <input type="text" className="Box-size" {...register("cunaMotor",{required:true,maxLength:6})}/>
                          {errors.cunaMotor?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Torre derecha</label>
                        <input type="text" className="Box-size" {...register("TorreDerecha",{required:true,maxLength:6})}/>
                          {errors.TorreDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        </div> <div>
                        <label >Punto delantera derecha</label>
                        <input type="text" className="Box-size" {...register("PuntoDelanteraDerecha",{required:true,maxLength:6})}/>
                          {errors.PuntoDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Punta trasera izqu.</label>
                        <input type="text" className="Box-size" {...register("puntaTraseraIzquierda",{required:true,maxLength:6})}/>
                        {errors.puntaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                       
                </Grid>
                <Grid item xs={6} sm="auto">
                        

                        <div>
                        <label>Traviesa inferior</label>
                        <input type="text" className="Box-size" {...register("TraviesaInferior",{required:true,maxLength:18})}/>
                        {errors.TraviesaInferior?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Pestaña punta tras izq.</label>
                        <input type="text" className="Box-size" {...register("PestañaPuntaTrasIzq",{required:true,maxLength:6})}/>
                          {errors.PestañaPuntaTrasIzq?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label>Frontal</label>
                        <input type="text" className="Box-size" {...register("Frontal",{required:true,maxLength:18})}/>
                        {errors.Frontal?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label>Piso baul inferior</label>
                        <input type="text" className="Box-size" {...register("PisoBaulInferior",{required:true,maxLength:18})}/>
                        {errors.PisoBaulInferior?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label>Tanque de gasolina</label>
                        <input type="text" className="Box-size" {...register("TanqueDeGasolina",{required:true,maxLength:18})}/>
                        {errors.TanqueDeGasolina?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>                      <div>
                        <label>Pestaña punta tras del derec.</label>
                        <input type="text" className="Box-size" {...register("PestañaPuntaTrasdelDerec",{required:true,maxLength:18})}/>
                        {errors.PestañaPuntaTrasdelDerec?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                       
                </Grid>
                <Grid item xs={6} sm="auto">
                     

                        <div>
                        <label >Traviesa superior</label>
                        <input type="text" className="Box-size" {...register("TraviesaSuperior",{required:true,maxLength:6})}/>
                        {errors.TraviesaSuperior?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>G/ polvo eje izq.</label>
                        <input type="text" className="Box-size" {...register("GpolvoEjeIzq",{required:true,maxLength:18})}/>
                        {errors.GpolvoEjeIzq?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Piso carrocería</label>
                        <input type="text" className="Box-size" {...register("PisoCarroceria",{required:true,maxLength:6})}/>
                          {errors.PisoCarroceria?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Pegas faldón inferior</label>
                        <input type="text" className="Box-size" {...register("PegasFaldoninferior",{required:true,maxLength:6})}/>
                          {errors.PegasFaldoninferior?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Troque trasero</label>
                        <input type="text" className="Box-size" {...register("TroqueTrasero",{required:true,maxLength:6})}/>
                          {errors.TroqueTrasero?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                   
                </Grid>
              </Grid>
                </form>
                </div>
        );
                 
                 
                
}

export default Inferior;