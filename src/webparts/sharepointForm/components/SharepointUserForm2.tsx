/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
// import { ErrorMessage } from "@hookform/error-message";

// interface AppProps {
//   updateList : (nombreProveedor: string, tipoProveedor: string, email: string, texto: string) => void;
// }


const SharepointUserForm2: React.FC = (): JSX.Element => {
  const [formData, setFormData] = useState({
    entidad: '',
    swift: '',
    iban: '',
    numeroCc: '',
    direccionFacturacionFacturacion: ''
  });
  const navigate = useNavigate();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })};
  
  const handleSubmit = () => {
    console.log('Datos enviados:', formData);
    navigate("/sites/intranetplexus/_layouts/15/workbench.aspx/sharepoint-user-form-3");
  };

  return (
    <div
    style={{
      margin:'10px',
      minHeight: '65vh'
    }}
    >
      <img style={{height: '96px'}} src="https://www.ttrdata.com/i/R3MxdVI0Z2FubzlPY2ErMWpmbktoemNTYkNhTmxUVlV2R3V1T1JQK21vczhwRlhYV1Bkdmt1NnBmWStLcjJmTHc4VkdvUE5iR2UzVWM3dDhpQW84aTFhNmFiajZ4L3ZzUFltM1lPeXN1RTg9&w=186&h=130&far=1&bg=FFFFFF&fltr[]=usm&q=95" alt="elmubaLogo" />
      <div
      style={{
        fontFamily: 'serif',
        fontSize: '16px'
      }}
      >
        <form onSubmit={handleSubmit}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
              <th colSpan={4} style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#04a1e4', color: 'white' }}>
                <label htmlFor="titulo"><strong>2. CONDICIONES DE PAGO Y FACTURACIÓN*</strong></label>
              </th>
              </tr>
              {/* <tr style={{ border: '1px solid #000', padding: '8px' }}>
                <th style={{ border: '1px solid #000', padding: '8px', width: '25%'}}>Hola</th>
                <td style={{ border: '1px solid #000', padding: '8px',}}>Hola</td>
                <td style={{ border: '1px solid #000', padding: '8px',}}>Hola</td>
                <td style={{ border: '1px solid #000', padding: '8px',}}>Hola</td>
              </tr> */}
            </thead>
            <tbody >
              <tr>
                <td style={{ border: '1px solid #000', padding: '8px', width: '23%' }}>
                  DATOS BANCARIOS
                </td>
                <tr>
                  <td style={{ padding: '8px',borderBottom: '1px solid #000' , width: '15%' }}>
                    <label htmlFor="entidad">ENTIDAD</label>
                  </td>
                  <td style={{ border: '1px solid #000', padding: '8px', borderTop: 'none'}}>
                    <input type="text" id="entidad" name="entidad" value={formData.entidad} onChange={handleChange} style={{ padding: '2px', border: 'none', width: 'calc(100% - 4px)', outline: 'none'}} />
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', borderTop: '1px solid #000', borderBottom: '1px solid #000'  }}>
                    <label htmlFor="swift">SWIFT</label>
                  </td>
                  <td style={{ border: '1px solid #000', padding: '8px' }}>
                    <input type="text" id="swift" name="swift" value={formData.swift} onChange={handleChange} style={{ padding: '2px', border: 'none', width: 'calc(100% - 4px)', outline: 'none'}} />
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', borderTop: '1px solid #000', borderBottom: '1px solid #000' }}>
                    <label htmlFor="iban">IBAN</label>
                  </td>
                  <td style={{ border: '1px solid #000', padding: '8px' }}>
                    <input type="text" id="iban" name="iban" value={formData.iban} onChange={handleChange} style={{ padding: '2px', border: 'none', width: 'calc(100% - 4px)', outline: 'none'}} />
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', borderTop: '1px solid #000' }}>
                    <label htmlFor="numeroCc">Nº CC</label>
                  </td>
                  <td style={{ border: '1px solid #000', padding: '8px', borderBottom:'none' }}>
                    <input type="text" id="numeroCc" name="numeroCc" value={formData.numeroCc} onChange={handleChange} style={{ padding: '2px', border: 'none', width: 'calc(100% - 4px)', outline: 'none'}} />
                  </td>
                </tr>
              </tr>
              <tr>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="direccionFacturacion">DIRECCIÓN DE FACTURACION</label>
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <input type="text" id="direccionFacturacion" name="direccionFacturacion" value={formData.direccionFacturacionFacturacion} onChange={handleChange} style={{ padding: '2px', border: 'none', width: 'calc(100% - 4px)', outline: 'none'}} />
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
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
              Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SharepointUserForm2;

