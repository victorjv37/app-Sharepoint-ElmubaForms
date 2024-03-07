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
            alignItems:'center',
            justifyContent:'center',
            backgroundImage: `url("https://i0.wp.com/gananzia.com/wp-content/uploads/2019/08/elmubas.jpg?fit=500%2C375&ssl=1")`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            width: '100%',
            height: '50vh'
            }}>
        <div>
          <div
          style={{ display: 'flex',flexDirection:'column', justifyContent:'center',alignItems: 'center' }}
          >
              <h3>SOLICITUD DE ALTA</h3>
          </div>
            <div ref={body}>
              <div style={{ display: 'flex',flexDirection:'column', alignItems:'center', fontSize: '28px',marginTop:'20px'}} ref={container} >
                <h4>Redirigiendo a Sharepoint</h4>
                <div style={{ display: 'flex' }}>
                <ClockLoader color={"#99abaf "} loading={true} size={75} />
                </div>            
                <span style={{fontSize:'16px'}}>(Esto podría tardar unos segundos...)</span>
            </div>
          </div>
        </div>
      </div>
    ) }
    </>
  );
};

export default LoadingPage;
