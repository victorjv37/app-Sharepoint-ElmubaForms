/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useRef, useEffect, useState } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as React from "react";
import { ClockLoader } from "react-spinners";


gsap.registerPlugin(ScrollTrigger);

const LoadingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const body = useRef(null);
  const container = useRef(null);
  const titleRef = useRef();

  useEffect(() => {
    setIsVisible(true);
    const startTitleAnimation = () => {
       if (titleRef.current){
           gsap.fromTo(
            titleRef.current,
            { y: "100%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 1, ease: Power3.easeInOut }
            );
        }
    }

    setTimeout(startTitleAnimation, 0);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const startAnimation = () => {
      gsap.fromTo(
        container.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1, ease: Power3.easeInOut }
      );
    };

    setTimeout(startAnimation, 0);
  }, []);

  return (
    <>
    {isVisible && (
      <div style={{ 
            display: isVisible ? 'flex' : 'none',
            flexDirection:'column', 
            alignItems:'flex-start',
            backgroundImage: `url("https://elmubas.com/wp-content/uploads/2023/05/servicio-innovacion-1-1.webp")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '38vh'
            }}>
        <div style={{marginLeft: '55px', marginTop: '22px'}}>
          <div
          style={{ display: 'flex',flexDirection:'column', justifyContent:'center',alignItems: 'center' }}
          >
              <h3>SOLICITUD DE ALTA</h3>
          </div>
            <div ref={body}>
              <div style={{ display: 'flex',flexDirection:'column', alignItems:'center', fontSize: '14px',marginTop:'37px'}} ref={container} >
                <h4>Redirigiendo a Sharepoint</h4>
                <br/>
                <div style={{ display: 'flex' }}>
                <ClockLoader color={"#2094c9"} loading={true} size={45} />
                </div>            
                <span style={{fontSize:'10px',color:'#dad7d9'}}>(Esto podría tardar unos segundos...)</span>
            </div>
          </div>
        </div>
      </div>
    ) }
    </>
  );
};

export default LoadingPage;
