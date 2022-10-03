import { useForm } from "react-hook-form";
import React from 'react';
import {Box,Grid} from "@material-ui/core"
import './Formulariocss.css';
function Pintura(){

        const {register,formState:{errors},handleSubmit}= useForm();

        const onSubmit = (data) =>{
                console.log(data);
        }
        return (<div>
                
                 <h2>Pintura</h2>
        <form onSubmit={handleSubmit(onSubmit)}>    
         <Grid container  spacing={10}  alignItems="flex-start" justifyContent="center">
         

               
                <Grid item xs={6} sm={3}>
                 
              
                 <div>
                         <label>Pint extension capota izq.</label>
                        <input type="text" {...register("PintExtensionCapotaIzq",{required:true,maxLength:25})}/>
                        {errors.PintExtensionCapotaIzq?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Pint estribo dere.
                        </label>
                        <input type="text" {...register("pintEstriboDerecho",{required:true,maxLength:25})}/>
                         {errors.pintEstriboDerecho?.type=== "required"&&<p>* Obligatorio</p>}

                        </div>
                        <div>
                        <label >Pint paral central izq.</label>
                        <input type="text" {...register("pintParalCentralIzquierda",{required:true,maxLength:25})}/>
                        {errors.pintParalCentralIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Pint paragolpes delan.</label>
                        <input type="text" {...register("pintParagolpesDelantero",{required:true,maxLength:25})}/>
                        {errors.ParagolpesDelantero?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label>Pint puerta delantera der.</label>
                        <input type="text" {...register("pintPuertaDelanteraDerecha",{required:true,maxLength:25})}/>
                        {errors.pintPuertaDelanteraDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
              
                        
                    
          
                </Grid>
                
             
                <Grid item xs={6} sm={3}>
                   

                        <div>
                        <label >Pint extension capota der.</label>
                        <input type="text" {...register("PintExtensionCapotaDerecha",{required:true,maxLength:6})}/>
                        {errors.PintExtensionCapotaDerecha?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label className="hola">Pint cubierta parallama</label>
                        <input type="text" {...register("pintCubiertaParallama",{required:true,maxLength:18})}/>
                 {errors.pintCubiertaParallama?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Pint capo</label>
                        <input type="text" {...register("PintCapo",{required:true,maxLength:6})}/>
                 {errors.PintCapo?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Pint parallamas</label>
                        <input type="text" {...register("PintParallama",{required:true,maxLength:6})}/>
                 {errors.PintParallama?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Pint guardafango izquierdo</label>
                        <input type="text" {...register("pintGuardafangoIzquierdo",{required:true,maxLength:6})}/>
                 {errors.pintGuardafangoIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                    

                        
                </Grid>
                <Grid item xs={6} sm={3}>
                        

                        <div>
                        <label >Pint estribo izq.</label>
                        <input type="text" {...register("pintEstriboIzquierdo",{required:true,maxLength:6})}/>
                        {errors.pintEstriboIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>pint persinana</label>
                        <input type="text" {...register("pintPersinana",{required:true,maxLength:18})}/>
                        {errors.pintPersinana?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label >Pint persinana</label>
                        <input type="text" {...register("PuertaTraseraIzquierda",{required:true,maxLength:6})}/>
                          {errors.PuertaTraseraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >Pint puerta trasera derecha</label>
                        <input type="text" {...register("pintPuertaTraseraDerecha",{required:true,maxLength:6})}/>
                          {errors.PuertaTraseraIzquierda?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label >pint puerta trasera izq</label>
                        <input type="text" {...register("pintPuertaTraseraIzq",{required:true,maxLength:6})}/>
                          {errors.pintPuertaTraseraIzq?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                       
                </Grid>
                <Grid item xs={6} sm={3}>
                        

                        <div>
                        <label >Pint compuerta</label>
                        <input type="text" {...register("pintCompuerta",{required:true,maxLength:6})}/>
                        {errors.pintCompuerta?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Pint paral panoramico der.</label>
                        <input type="pintParalPanoramicoDerecho" {...register("pintParalPanoramicoDerecho",{required:true,maxLength:18})}/>
                        {errors.pintParalPanoramicoDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                        </div>
                        <div>
                        <label>Pint costado izquierdo</label>
                        <input type="pintCostadoIzquierdo" {...register("pintCostadoIzquierdo",{required:true,maxLength:18})}/>
                        {errors.pintCostadoIzquierdo?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>pint costado der.</label>
                        <input type="pintParalPanoramicoDerecho" {...register("pintCostadoDerecho",{required:true,maxLength:18})}/>
                        {errors.pintCostadoDerecho?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>
                        <div>
                        <label>Pint paral panoramico der.</label>
                        <input type="pintParalPanoramicoDerecho" {...register("pintParalPanoramicoDerecho",{required:true,maxLength:18})}/>
                        {errors.Chasis?.type=== "required"&&<p>* Obligatorio</p>}
                        
                        </div>

                       
                </Grid>
                
                
                </Grid>
                </form>
                </div>
        );
                 
                 
                
}

export default Pintura;