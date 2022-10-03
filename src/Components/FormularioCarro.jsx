import { useForm } from "react-hook-form";
import React from 'react';
import {Box,Grid} from "@material-ui/core"
import './Formulariocss.css';
function FormularioCarro (){

        const {register,formState:{errors},handleSubmit}= useForm();

        const onSubmit = (data) =>{
                console.log(data);
        }
        return (<div>
                
                 <h2>Registro vehículo</h2>
        <form onSubmit={handleSubmit(onSubmit)}>    
         <Grid container  direction="colum" alignItems="flex-start" justifyContent="center">
         

               
                <Grid item xs={6} sm={2}>
                 
              
                 <div>
                         <label>Placa</label>
                        <input type="text" {...register("Placa",{required:true,maxLength:25})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Nacionalidad</label>
                        <input type="text" {...register("Nacionalidad",{required:true,maxLength:25})}/>
                         {errors.Modelo?.type=== "required"&&<p>* Obligatorio</p>}

                        </div>
                        <div>
                        <label >Kilometraje</label>
                        <input type="text" {...register("Kilometraje",{required:true,maxLength:25})}/>
                        {errors.Color?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Transmisión</label>
                        <input type="text" {...register("Transmision",{required:true,maxLength:25})}/>
                        {errors.Color?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
              
                        
                    
          
                </Grid>
                
             
                <Grid item xs={6} sm={2}>
                   

                        <div>
                        <label >Clase</label>
                        <input type="text" {...register("Clase",{required:true,maxLength:6})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Tipo de caja</label>
                        <input type="text" {...register("Tipodecaja",{required:true,maxLength:18})}/>
                 {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Color</label>
                        <input type="text" {...register("Color",{required:true,maxLength:6})}/>
                 {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Versión</label>
                        <input type="text" {...register("Version",{required:true,maxLength:6})}/>
                 {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                    

                        
                </Grid>
                <Grid item xs={6} sm={2}>
                        

                        <div>
                        <label >Marca</label>
                        <input type="text" {...register("Marca",{required:true,maxLength:6})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Cilindraje</label>
                        <input type="text" {...register("Cilindraje",{required:true,maxLength:18})}/>
                        {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >#chasis</label>
                        <input type="text" {...register("Chasis",{required:true,maxLength:6})}/>
                          {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>
                       
                </Grid>
                <Grid item xs={6} sm={2}>
                        

                        <div>
                        <label >Tipo</label>
                        <input type="text" {...register("Tipo",{required:true,maxLength:6})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Combustible</label>
                        <input type="text" {...register("Combustible",{required:true,maxLength:18})}/>
                        {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >#Serial</label>
                        <input type="text" {...register("Serial",{required:true,maxLength:6})}/>
                          {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>
                       
                </Grid>
                <Grid item xs={6} sm={2}>
                     

                        <div>
                        <label >Carrocería</label>
                        <input type="text" {...register("Carroceria",{required:true,maxLength:6})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Tipo pintura</label>
                        <input type="text" {...register("Tipopintura",{required:true,maxLength:18})}/>
                        {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >#Motor</label>
                        <input type="text" {...register("Motor",{required:true,maxLength:6})}/>
                          {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>
                   
                </Grid>
                <Grid item xs={6} sm={2}>
                        

                        <div>
                        <label >Modelo</label>
                        <input type="text" {...register("Modelo",{required:true,maxLength:6})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Servicio</label>
                        <input type="text" {...register("Servicio",{required:true,maxLength:18})}/>
                        {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Tracción</label>
                        <input type="text" {...register("Treaccion",{required:true,maxLength:6})}/>
                          {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>
                        
                </Grid>
                <Grid item xs={12}>
                       

                        <div>
                        <label className="observaciones">Observaciones</label>
                        <input type="text" className="Observaciones" {...register("Observaciones")}/>
                        </div>
                        
                </Grid>
              </Grid>
                </form>
                </div>
        );
                 
                 
                
}

export default FormularioCarro;