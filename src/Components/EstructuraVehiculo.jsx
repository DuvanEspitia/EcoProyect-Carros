import { useForm } from "react-hook-form";
import React from 'react';
import {Box,Grid} from "@material-ui/core"
import './Formulariocss.css';
function EstructuraVehiculo(){

        const {register,formState:{errors},handleSubmit}= useForm();

        const onSubmit = (data) =>{
                console.log(data);
        }
        return (<div>
                
                 <h2>Estructura vehículo</h2>
        <form onSubmit={handleSubmit(onSubmit)}>    
         <Grid container spacing={10} direction="colum" alignItems="flex-start"  >
         

               
                <Grid item xs="auto" sm={4}>
                 
              
                 <div>
                         <label>Extensión capota izq.</label>
                        <input type="text" {...register("Extensióncapotaizquierda",{required:true,maxLength:25})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Paral central derecho</label>
                        <input type="text" {...register("Paralcentralderecho",{required:true,maxLength:25})}/>
                         {errors.Modelo?.type=== "required"&&<p>* Obligatorio</p>}

                        </div>
                        <div>
                        <label >G/polvo metálico izq.</label>
                        <input type="text" {...register("G/polvometálicoizquierdo",{required:true,maxLength:25})}/>
                        {errors.Color?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Engrafes costado traseros</label>
                        <input type="text" {...register("Engrafescostadotraseros",{required:true,maxLength:25})}/>
                        {errors.Color?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Parallamas</label>
                        <input type="text" {...register("Parallamas",{required:true,maxLength:6})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        
                    
          
                </Grid>
                
             
                <Grid item xs="auto" sm={4}>
                   

                        <div>
                        <label >Estribo izquierdo</label>
                        <input type="text" {...register("Estriboizquierdo",{required:true,maxLength:6})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Estribo derecho</label>
                        <input type="text" {...register("Estribo derecho",{required:true,maxLength:18})}/>
                 {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >G/polvo metálico derecho</label>
                        <input type="text" {...register("G/polvometálicoderecho",{required:true,maxLength:6})}/>
                 {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Engrafes faidon traseros</label>
                        <input type="text" {...register("Version",{required:true,maxLength:6})}/>
                 {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label>Faición</label>
                        <input type="text" {...register("Faicion",{required:true,maxLength:18})}/>
                        {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>

                        
                </Grid>
                <Grid item xs="auto" sm={4}>
                        

                        <div>
                        <label >Paral panorámico izq.</label>
                        <input type="text" {...register("Paralpanorámicoizquierdo",{required:true,maxLength:6})}/>
                        {errors.Placa?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Piso baúl superior</label>
                        <input type="text" {...register("Pisobaúlsuperior",{required:true,maxLength:18})}/>
                        {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Extensión capota derecha</label>
                        <input type="text" {...register("Extensióncapotaderecha",{required:true,maxLength:6})}/>
                          {errors.Kilometraje?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        
                        </div>
                       
                </Grid>
                
                </Grid>
                </form>
                </div>
        );
                 
                 
                
}

export default EstructuraVehiculo;