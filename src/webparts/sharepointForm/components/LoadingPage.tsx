import * as React from "react";

const LoadingPage: React.FC = () => {
  return (
    <div style={{minHeight: '65vh', width: '100%',marginTop: '10px'}}>
      <img style={{height: '96px'}} src="https://www.ttrdata.com/i/R3MxdVI0Z2FubzlPY2ErMWpmbktoemNTYkNhTmxUVlV2R3V1T1JQK21vczhwRlhYV1Bkdmt1NnBmWStLcjJmTHc4VkdvUE5iR2UzVWM3dDhpQW84aTFhNmFiajZ4L3ZzUFltM1lPeXN1RTg9&w=186&h=130&far=1&bg=FFFFFF&fltr[]=usm&q=95" alt="elmubaLogo" />
      <div style={{ 
            display:'flex',
            flexDirection:'column', 
            alignItems:'center',
            fontFamily:'serif'
            }}>
          <div style={{ marginTop: '42px'}}>
            <div
            style={{ display: 'flex',flexDirection:'column', justifyContent:'center',alignItems: 'center' }}
            >
                  <div style={{ display: 'flex',flexDirection:'column', alignItems:'center',color:'green', fontSize: '25px',marginTop:'37px'}} >
                  <h4>Formularios enviados con éxito</h4>             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
