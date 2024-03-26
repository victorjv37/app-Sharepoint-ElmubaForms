/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import { ErrorMessage } from "@hookform/error-message";

// interface AppProps {
//   updateList : (nombreProveedor: string, tipoProveedor: string, email: string, texto: string) => void;
// }


const SharepointUserForm1: React.FC = (): JSX.Element => {
  const [errorEnSubmit, setErrorEnSubmit] = useState(false);
  const [formData, setFormData] = useState({
    razonSocial: '',
    nombreEmpresa: '',
    cif: '',
    telefono: '',
    direccion: '',
    codigoPostal: '',
    poblacion: '',
    correoElectronico: '',
    paginaWeb: ''
  });
  const navigate = useNavigate();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })};
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      if (!form.checkValidity()) {
        setErrorEnSubmit(true); 
      } else {
        setErrorEnSubmit(false);
        console.log('Datos enviados:', formData);
        navigate("/sites/intranetplexus/_layouts/15/workbench.aspx/sharepoint-user-form-2");
      }
      console.log(errorEnSubmit)
    };

    const handleInvalid = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setErrorEnSubmit(true); 
    };

  return (
    <div
    style={{
      margin:'10px',
      minHeight: '65vh'
    }}
    >
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <img style={{height: '96px'}} src="https://www.ttrdata.com/i/R3MxdVI0Z2FubzlPY2ErMWpmbktoemNTYkNhTmxUVlV2R3V1T1JQK21vczhwRlhYV1Bkdmt1NnBmWStLcjJmTHc4VkdvUE5iR2UzVWM3dDhpQW84aTFhNmFiajZ4L3ZzUFltM1lPeXN1RTg9&w=186&h=130&far=1&bg=FFFFFF&fltr[]=usm&q=95" alt="elmubaLogo" />
      <span style={{ width: '75px', height: '75px',display:'flex', justifyContent:'center', alignItems: 'center',fontFamily: 'serif' }}>
        <CircularProgressbar
        value={25}
        text={''}
        styles={buildStyles({
          textSize: '30px',
          pathTransitionDuration: 0.5,
          pathColor: '#04a1e4',
          textColor: '#04a1e4',
          trailColor: '#black',
        })}
        />
      <span style={{position:'relative',right:'37px', fontSize:'18px', color:'#04a1e4'}}>1/4</span>
      </span>
      </div>
      <div
      style={{
        fontFamily: 'serif',
        fontSize: '16px'
      }}
      >
        <form onSubmit={handleSubmit} onInvalid={handleInvalid}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tbody>
                <th colSpan={4} style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#04a1e4', color: 'white' }}>
                  <label htmlFor="titulo"><strong>1. DATOS GENERALES DE LA EMPRESA*</strong></label>
                </th>
              <tr>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="razonSocial">RAZÓN SOCIAL</label>
                </td>
                <td style={{ border: '1px solid #000', padding: '8px'}}>
                  <input required type="text" id="razonSocial" name="razonSocial" value={formData.razonSocial} onChange={handleChange} style={{ padding: '2px', border: 'none', width: 'calc(100% - 4px)', outline: 'none'}} />
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="nombreEmpresa">NOMBRE DE LA EMPRESA</label>
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <input required type="text" id="nombreEmpresa" name="nombreEmpresa" value={formData.nombreEmpresa} onChange={handleChange} style={{ padding: '2px', border: 'none', width: 'calc(100% - 4px)', outline: 'none'}} />
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="cif">CIF</label>
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <input required type="text" id="cif" name="cif" value={formData.cif} onChange={handleChange} style={{ padding: '2px', border: 'none', width: 'calc(100% - 4px)', outline: 'none'}} />
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="telefono">TELÉFONO</label>
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <input required type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} style={{ padding: '2px', border: 'none', width: 'calc(100% - 4px)', outline: 'none'}} />
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="direccion">DIRECCIÓN</label>
                </td>
                <td colSpan={3} style={{ border: '1px solid #000', padding: '8px' }}>
                  <input required type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} style={{ padding: '2px', border: 'none', width: 'calc(100% - 4px)', outline: 'none'}} />
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="codigoPostal">C.P</label>
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <input required type="text" id="codigoPostal" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} style={{ padding: '2px', border: 'none', width: 'calc(100% - 4px)', outline: 'none'}} />
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="poblacion">POBLACIÓN</label>
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <input required type="text" id="poblacion" name="poblacion" value={formData.poblacion} onChange={handleChange} style={{ padding: '2px', border: 'none', width: 'calc(100% - 4px)', outline: 'none'}} />
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="correoElectronico">CORREO ELECTRÓNICO</label>
                </td>
                <td colSpan={3} style={{ border: '1px solid #000', padding: '8px' }}>
                  <input required type="text" id="correoElectronico" name="correoElectronico" value={formData.correoElectronico} onChange={handleChange} style={{ padding: '2px', border: 'none', width: 'calc(100% - 4px)', outline: 'none'}} />
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="paginaWeb">PÁGINA WEB</label>
                </td>
                <td colSpan={3} style={{ border: '1px solid #000', padding: '8px' }}>
                  <input required type="text" id="paginaWeb" name="paginaWeb" value={formData.paginaWeb} onChange={handleChange} style={{ padding: '2px', border: 'none', width: 'calc(100% - 4px)', outline: 'none'}} />
                </td>
              </tr>
            </tbody>
          </table>
          {errorEnSubmit && 
          <div style={{color:'red', display: 'flex', justifyContent: 'center'}}>Deben rellenarse todos los campos</div>
          }
          <span style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
            <button 
            type="submit" 
            style={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '10px',
              border:'1px solid #000',
              color: 'white',
              backgroundColor: '#04a1e4',
              padding: '10px',
              fontFamily: 'serif',
              fontSize: '20px'
            }}           >
              Siguiente</button> 
          </span>
        </form>
      </div>
    </div>
  );
}

export default SharepointUserForm1;

