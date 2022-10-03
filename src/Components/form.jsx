import React,{useState} from 'react';
import './formcss.css';
import EstructuraVehiculo from './EstructuraVehiculo';
import FormularioCarro from './FormularioCarro';
import LatoneriaVeh from './LatoneriaVeh';
import {Box,Grid} from "@material-ui/core"
function Form() {
    
    const[page,setPage] = useState(0);

    const FormTitles = ["1-4","2-4","3-4","4-4"];

    const PageDisplay=()=>{
        if(page===0){
            return<FormularioCarro/>;
        }else if(page===1){
            return<EstructuraVehiculo/>
        }
        else if (page===2){
            return<LatoneriaVeh/>
        }
    }
        return (
           
            <div className='form' >
                <Grid container alignItems="flex-start" direction="colum"  justifyContent="center">
            <div className='progressbar'></div> 
            <div className='form-container'>
                <div className='header'>
                    <h6>{FormTitles[page]}</h6>
                </div>
                <div className='body'>{PageDisplay()}</div>
                <Grid  xs={12} sm={12}>
                    <div className="footer">
                   
                    <button
                    className="button" 
                    disabled={page===0}
                    onClick={()=>{ setPage((currPage) => currPage-1);}}
                    >Atrás
                    </button>
                 
                    <button 
                    className="buttonl"
                    disabled={page===FormTitles.length-1}
                    onClick={()=>{ setPage((currPage) => currPage+1);}}
                    >Siguiente
                    </button>
                    
                </div>
                </Grid>
            </div>
            </Grid>
        </div>
        );
  
}
export default Form;