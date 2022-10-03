import { useForm } from "react-hook-form";
import React from 'react';
import {Box,Grid} from "@material-ui/core"
import './Formulariocss.css';
function LatoneriaVeh(){

        const {register,formState:{errors},handleSubmit}= useForm();

        const onSubmit = (data) =>{
                console.log(data);
        }
        return (<div>
                
                 <h2>Latoneria vehículo</h2>
        <form onSubmit={handleSubmit(onSubmit)}>    
         <Grid container  spacing={10}  direction="colum" alignItems="flex-start" justifyContent="center">
         

               
                <Grid item xs={6} sm={3}>
                 
              
                 <div>
                         <label>Capota</label>
                        <input type="text" {...register("Capota",{required:true,maxLength:25})}/>
                        {errors.Capota?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Guarda fango izq.
                        </label>
                        <input type="text" {...register("GuardaFangoIzquierdo",{required:true,maxLength:25})}/>
                         {errors.GuardaFangoIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}

                        </div>
                        <div>
                        <label >Paragolpes trasero</label>
                        <input type="text" {...register("Paragolpestrasero",{required:true,maxLength:25})}/>
                        {errors.ParagolpesTrasero?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Paragolpes delantero</label>
                        <input type="text" {...register("Paragolpesdelantero",{required:true,maxLength:25})}/>
                        {errors.ParagolpesDelantero?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label>Persiana</label>
                        <input type="text" {...register("Persiana",{required:true,maxLength:25})}/>
                        {errors.Persiana?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
              
                        
                    
          
                </Grid>
                
             
                <Grid item xs={6} sm={3}>
                   

                        <div>
                        <label >Puerta delantera izq.</label>
                        <input type="text" {...register("Puertadelanteraizquierda",{required:true,maxLength:6})}/>
                        {errors.PuertaDelanteraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label className="hola">cabo cubierta parallantas</label>
                        <input type="text" {...register("cabocubiertaparallantas",{required:true,maxLength:18})}/>
                 {errors.caboCubiertaParallantas?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Puerta delantera der.</label>
                        <input type="text" {...register("Puertadelanteraderecha",{required:true,maxLength:6})}/>
                 {errors.PuertaDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Costado derecho</label>
                        <input type="text" {...register("CostadoDerecho",{required:true,maxLength:6})}/>
                 {errors.CostadoDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Puerta trasera der.</label>
                        <input type="text" {...register("PuertaTraseraDerecha",{required:true,maxLength:6})}/>
                 {errors.PuertaTraseraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                    

                        
                </Grid>
                <Grid item xs={6} sm={3}>
                        

                        <div>
                        <label >Compuerta</label>
                        <input type="text" {...register("Compuerta",{required:true,maxLength:6})}/>
                        {errors.Compuerta?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Guardafango derecho</label>
                        <input type="text" {...register("GuardafangoDerecho",{required:true,maxLength:18})}/>
                        {errors.GuardafangoDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Puerta trasera izquierda</label>
                        <input type="text" {...register("PuertaTraseraIzquierda",{required:true,maxLength:6})}/>
                          {errors.PuertaTraseraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>
                       
                </Grid>
                <Grid item xs={6} sm={3}>
                        

                        <div>
                        <label >Parallamas</label>
                        <input type="text" {...register("Parallamas",{required:true,maxLength:6})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Faición</label>
                        <input type="text" {...register("Faicion",{required:true,maxLength:18})}/>
                        {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                       
                </Grid>
                
                
                </Grid>
                </form>
                </div>
        );
                 
                 
                
}

export default LatoneriaVeh;