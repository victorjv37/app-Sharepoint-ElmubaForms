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
        comercialNombre: '',
        comercialTelefono: '',
        comercialEmail: '',
        recPedidosNombre: '',
        recPedidosTelefono: '',
        recPedidosEmail: '',
        recPrevisionesNombre: '',
        recPrevisionesTelefono: '',
        recPrevisionesEmail: '',
        calidadNombre: '',
        calidadTelefono: '',
        calidadEmail: '',
        gerenteNombre: '',
        gerenteTelefono: '',
        gerenteEmail: '',
        adminFactNombre: '',
        adminFactTelefono: '',
        adminFactEmail: '',
        comprasNombre: '',
        comprasTelefono: '',
        comprasEmail: '',
        productoNombre: '',
        productoTelefono: '',
        productoEmail: '',
        caeNombre1 : '',
        caeTelefono1: '',
        caeEmail1: '',
        caeNombre2 : '',
        caeTelefono2: '',
        caeEmail2: ''
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
      margin:'10px',
      minHeight: '65vh',
      maxWidth: '100%'
    }}
    >
      <img style={{height: '96px'}} src="https://www.ttrdata.com/i/R3MxdVI0Z2FubzlPY2ErMWpmbktoemNTYkNhTmxUVlV2R3V1T1JQK21vczhwRlhYV1Bkdmt1NnBmWStLcjJmTHc4VkdvUE5iR2UzVWM3dDhpQW84aTFhNmFiajZ4L3ZzUFltM1lPeXN1RTg9&w=186&h=130&far=1&bg=FFFFFF&fltr[]=usm&q=95" alt="elmubaLogo" />
      <div
      style={{
        fontFamily: 'serif',
        fontSize: '14px'
      }}
      >
        <form onSubmit={handleSubmit}>
          <table style={{borderCollapse: 'collapse',width: '100%',border:'1px solid #000'}}>
            <thead>
              <tr>
                <th colSpan={4} style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#04a1e4', color: 'white' }}>
                  <label htmlFor="titulo"><strong>3. CONTACTOS*</strong></label>
                </th>
              </tr>
              <tr style={{fontSize: '12px'}}>
                <th style={{border:'1px solid #000',textAlign:'center'}}> </th>
                <th style={{border:'1px solid #000',textAlign:'center'}}>NOMBRE DE LA PERSONA*</th>
                <th style={{border:'1px solid #000',textAlign:'center'}}>TELÉFONO*</th>
                <th style={{border:'1px solid #000',textAlign:'center'}}>EMAIL*</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    COMERCIAL*
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="comercialNombre">. </label>
                    <input type="text" id="comercialNombre" name="comercialNombre" value={formData.comercialNombre} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="comercialTelefono">. </label>
                    <input type="text" id="comercialTelefono" name="comercialTelefono" value={formData.comercialTelefono} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="comercialEmail">. </label>
                    <input type="text" id="comercialEmail" name="comercialEmail" value={formData.comercialEmail} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                </tr>
                <tr>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    RECEPCION PEDIDOS*
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="recPedidosNombre">. </label>
                    <input type="text" id="recPedidosNombre" name="recPedidosNombre" value={formData.recPedidosNombre} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="recPedidosTelefono">. </label>
                    <input type="text" id="recPedidosTelefono" name="recPedidosTelefono" value={formData.recPedidosTelefono} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="recPedidosEmail">. </label>
                    <input type="text" id="recPedidosEmail" name="recPedidosEmail" value={formData.recPedidosEmail} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                </tr>
                <tr>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    RECEPCION PREVISIONES
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="recPrevisionesNombre">. </label>
                    <input type="text" id="recPrevisionesNombre" name="recPrevisionesNombre" value={formData.recPrevisionesNombre} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="recPrevisionesTelefono">. </label>
                    <input type="text" id="recPrevisionesTelefono" name="recPrevisionesTelefono" value={formData.recPrevisionesTelefono} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="recPrevisionesEmail">. </label>
                    <input type="text" id="recPrevisionesEmail" name="recPrevisionesEmail" value={formData.recPrevisionesEmail} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                </tr>
                <tr>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    CALIDAD*
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="calidadNombre">. </label>
                    <input type="text" id="calidadNombre" name="calidadNombre" value={formData.calidadNombre} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="calidadTelefono">. </label>
                    <input type="text" id="calidadTelefono" name="calidadTelefono" value={formData.calidadTelefono} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="calidadEmail">. </label>
                    <input type="text" id="calidadEmail" name="calidadEmail" value={formData.calidadEmail} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                </tr>
                <tr>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    GERENTE
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="gerenteNombre">. </label>
                    <input type="text" id="gerenteNombre" name="gerenteNombre" value={formData.gerenteNombre} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="gerenteTelefono">. </label>
                    <input type="text" id="gerenteTelefono" name="gerenteTelefono" value={formData.gerenteTelefono} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="gerenteEmail">. </label>
                    <input type="text" id="gerenteEmail" name="gerenteEmail" value={formData.gerenteEmail} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                </tr>
                <tr>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    ADMINISTRACIÓN DE FACTURAS*
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="adminFactNombre">. </label>
                    <input type="text" id="adminFactNombre" name="adminFactNombre" value={formData.adminFactNombre} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="adminFactTelefono">. </label>
                    <input type="text" id="adminFactTelefono" name="adminFactTelefono" value={formData.adminFactTelefono} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="adminFactEmail">. </label>
                    <input type="text" id="adminFactEmail" name="adminFactEmail" value={formData.adminFactEmail} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                </tr>
                <tr>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    COMPRAS
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="comprasNombre">. </label>
                    <input type="text" id="comprasNombre" name="comprasNombre" value={formData.comprasNombre} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="comprasTelefono">. </label>
                    <input type="text" id="comprasTelefono" name="comprasTelefono" value={formData.comprasTelefono} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="comprasEmail">. </label>
                    <input type="text" id="comprasEmail" name="comprasEmail" value={formData.comprasEmail} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                </tr>
                <tr>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    PRODUCTO
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="productoNombre">. </label>
                    <input type="text" id="productoNombre" name="productoNombre" value={formData.productoNombre} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="productoTelefono">. </label>
                    <input type="text" id="productoTelefono" name="productoTelefono" value={formData.productoTelefono} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                  <td style={{border:'1px solid #000',textAlign:'center'}}>
                    <label style={{display:'none'}} htmlFor="productoEmail">. </label>
                    <input type="text" id="productoEmail" name="productoEmail" value={formData.productoEmail} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none'}} />
                  </td>
                </tr>
                <tr>
                <td colSpan={1} style={{ border: '1px solid #000', padding: '8px' }}>
                  <label htmlFor="cae">CAE, COORDINACIÓN ACTIVIDADES EMPRESAIALES</label>
                </td>
                <td colSpan={3} style={{border: '1px solid black'}}>
                  <tr>
                    <td style={{ borderBottom: '1px solid #000',borderRight: '1px solid #000', padding: '8px' }}>
                      <label style={{display:'none'}} htmlFor="caeNombre1">. </label>
                      <input type="text" id="caeNombre1" name="caeNombre1" value={formData.caeNombre1} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none', paddingTop:'0px'}} />
                    </td>
                    <td style={{ borderBottom: '1px solid #000',borderRight: '1px solid #000', padding: '8px' }}>
                      <label style={{display:'none'}} htmlFor="caeTelefono1">. </label>
                      <input type="text" id="caeTelefono1" name="caeTelefono1" value={formData.caeTelefono1} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none', paddingTop:'0px'}} />
                    </td>
                    <td style={{ borderBottom: '1px solid #000', padding: '8px' }}>
                      <label style={{display:'none'}} htmlFor="caeEmail1">. </label>
                      <input type="text" id="caeEmail1" name="caeEmail1" value={formData.caeEmail1} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none', paddingTop:'0px'}} />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ borderTop: '1px solid #000',borderRight: '1px solid #000', padding: '8px' }}>
                      <label style={{display:'none'}} htmlFor="caeNombre2">. </label>
                      <input type="text" id="caeNombre2" name="caeNombre2" value={formData.caeNombre2} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none', paddingTop:'0px'}} />
                    </td>
                    <td style={{ borderTop: '1px solid #000',borderRight: '1px solid #000', padding: '8px' }}>
                      <label style={{display:'none'}} htmlFor="caeTelefono2">. </label>
                      <input type="text" id="caeTelefono2" name="caeTelefono2" value={formData.caeTelefono2} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none', paddingTop:'0px'}} />
                    </td>
                    <td style={{ borderTop: '1px solid #000', padding: '8px' }}>
                      <label style={{display:'none'}} htmlFor="caeEmail2">. </label>
                      <input type="text" id="caeEmail2" name="caeEmail2" value={formData.caeEmail2} onChange={handleChange} style={{ padding: '2px', border: 'none', outline: 'none', paddingTop:'0px'}} />
                    </td>
                  </tr>
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

