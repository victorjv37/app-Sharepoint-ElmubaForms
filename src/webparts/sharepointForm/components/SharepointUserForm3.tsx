/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
// import { ErrorMessage } from "@hookform/error-message";

// interface AppProps {
//   updateList : (nombreProveedor: string, tipoProveedor: string, email: string, texto: string) => void;
// }


const SharepointUserForm3: React.FC = (): JSX.Element => {
  const [formData, setFormData] = useState({
    comercial: '',
    recepcionPedidos: '',
    recepcionPrevisiones: '',
    calidad: '',
    gerente: '',
    administracionFacturacion: '',
    compras: '',
    producto: '',
    cae : {
        nombrePersona : '',
        telefono: '',
        email: ''
    }
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
    navigate("/sites/intranetplexus/_layouts/15/workbench.aspx/sharepoint-user-form-4");
  };

  return (
    <div
    style={{
      margin:'10px'
    }}
    >
      <img src="https://www.ttrdata.com/i/R3MxdVI0Z2FubzlPY2ErMWpmbktoemNTYkNhTmxUVlV2R3V1T1JQK21vczhwRlhYV1Bkdmt1NnBmWStLcjJmTHc4VkdvUE5iR2UzVWM3dDhpQW84aTFhNmFiajZ4L3ZzUFltM1lPeXN1RTg9&w=186&h=130&far=1&bg=FFFFFF&fltr[]=usm&q=95" alt="elmubaLogo" />
      <div
      style={{
        fontFamily: 'serif',
        fontSize: '16px'
      }}
      >
        <form onSubmit={handleSubmit}>
          <table style={{ borderCollapse: 'collapse' }}>
            <tbody>
                <th colSpan={4} style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#04a1e4', color: 'white' }}>
                  <label htmlFor="titulo"><strong>3. CONTACTOS</strong></label>
                </th>
              <tr>
                <th style={{ padding: '2px', border: '1px solid black', width: '25%'}}> </th>
                <th style={{ padding: '2px', border: '1px solid black', width: '35%'}}>NOMBRE DE LA PERSONA*</th>
                <th style={{ padding: '2px', border: '1px solid black', width: '15%'}}>TELÉFONO</th>
                <th style={{ padding: '2px', border: '1px solid black', width: '25%'}}>EMAIL</th>
              </tr>  
              {/* <tr>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="comercial">COMERCIAL</label>
                </td>
                <td style={{ border: '1px solid #000', padding: '8px'}}>
                  <input type="text" id="comercial" name="comercial" value={formData.comercial} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="recepcionPedidos">RECEPCIÓN DE PEDIDOS</label>
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <input type="text" id="recepcionPedidos" name="recepcionPedidos" value={formData.recepcionPedidos} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="recepcionPrevisiones">RECEPCIÓN DE PREVISIONES</label>
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <input type="text" id="recepcionPrevisiones" name="recepcionPrevisiones" value={formData.recepcionPrevisiones} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                </td>
               </tr>
               <tr>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="calidad">CALIDAD</label>
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <input type="text" id="calidad" name="calidad" value={formData.calidad} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="gerente">GERENTE</label>
                </td>
                <td colSpan={3} style={{ border: '1px solid #000', padding: '8px' }}>
                  <input type="text" id="gerente" name="gerente" value={formData.gerente} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="administracionFacturacion">ADMINISTRACIÓN/FACTURACIÓN</label>
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <input type="text" id="administracionFacturacion" name="administracionFacturacion" value={formData.administracionFacturacion} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                </td>
                </tr>
                <tr>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="compras">COMPRAS</label>
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <input type="text" id="compras" name="compras" value={formData.compras} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="producto">PRODUCTO</label>
                </td>
                <td colSpan={3} style={{ border: '1px solid #000', padding: '8px' }}>
                  <input type="text" id="producto" name="producto" value={formData.producto} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                </td>
              </tr> */}
              <tr>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="cae">CAE, COORDINACIÓN ACTIVIDADES EMPRESAIALES</label>
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <input type="text" id="cae" name="cae" value={formData.cae.nombrePersona} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <input type="text" id="cae" name="caeTelefono" value={formData.cae.telefono} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                </td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>
                  <input type="text" id="cae" name="caeEmail" value={formData.cae.email} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
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

export default SharepointUserForm3;

