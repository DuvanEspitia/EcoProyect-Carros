import React from 'react';
import './Formulariocss.css';
import { useForm } from "react-hook-form";
import {Box,Grid} from "@material-ui/core"
function Formulario () {

         const {register,formState:{errors},handleSubmit}= useForm();

         const onSubmit = (data) =>{
                console.log(data);
        }
        
        return (
        
       
        
        <div>
                 <h2>Registro Cliente</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container >
                       
                         <Grid item xs={12} sm={6}>
                 

                 
                
                <div>
                 <label id="izquierda">Tipo de indentificación</label>
                 <select {...register("Ciudad")}>
                 <option value="tj">Tarjeta de identidad</option>
                 <option value="cc">Cedula de ciudadanía</option>
                 <option value="tjx">Tarjeta de extranjeria</option>
                 <option value="cex">Cedula de extranjeria</option>
                 <option value="nit">NIT</option>
                 <option value="pap">Pasaporte</option>
                 </select>

                </div>
                <div>
                 <label id="izquierda">Lugar de expedición </label>
                 <input type="text"{...register("ccexpedicion")}/>

                </div>
                <div>
                 <label id="izquierda">Nombre completo</label>
                 <input type="text" {...register("nombre",{required:true,maxLength:25})}/>
                 {errors.nombre?.type=== "required"&&<p>El campo nombre es requerido</p>}
                </div>
                <div>
                 <label id="izquierda">Correo</label>
                 <input type="text"{...register("Correo")}/>

                </div>
               
                 </Grid>
                 <Grid item xs={12} sm={6}>
               

              

                <div>
                <label id="izquierda">Numero de identificación</label>
                <input type="text" {...register("nombre",{required:true,maxLength:25})}/>

                        {errors.nombre?.type=== "required"&&<p>El campo nombre es requerido</p>}
                        </div>
                        <div>
                        <label id="izquierda">Dirección</label>
                        <input type="text" {...register("direccion",{required:true})}/>

                        </div>
                        <div>
                        <label id="izquierda">Telefono</label>
                        <input type="text" {...register("telefono",{required:true})}/>

                        </div>
                        <div>
                        <label id="izquierda">Celular</label>
                        <input type="text" {...register("direccion",{required:true})}/>

                        </div>
                        <div>

                        </div>
                          
                        </Grid>                                 
                                
                        </Grid> 
                        </form>
                        <Grid item xs={10} sm={5}>
                        <div className="boton">
                        <input type="submit" value = "Guardar" ></input> 
                        </div>
                        </Grid>
        </div>
                
        );
                 
   
}

export default Formulario;