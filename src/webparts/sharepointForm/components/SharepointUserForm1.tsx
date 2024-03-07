/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as React from "react";
import './SharepointForm.module.css';
import LoadingPage from "./LoadingPage";

interface ISharepointFormData {
  Opcion1 : string,
  Opcion2 : string,
  Opcion3 : string,
  Opcion4 : string,
  Opcion5 : string,
  Opcion6 : string,
  Opcion7 : string,
  Opcion8 : string,
}

// interface AppProps {
//   updateList : (nombreProveedor: string, tipoProveedor: string, email: string, texto: string) => void;
// }

const SharepointUserForm1: React.FC = () => {
  const [loadingPageVisible, setLoadingPageVisible] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<ISharepointFormData | undefined>(undefined);
  const navigate = useNavigate();
  const body = useRef<HTMLDivElement>(null);
  const formContainer = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    
    const startAnimation = () => {
      setIsVisible(true);
      gsap.fromTo(
        formContainer.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1, ease: Power3.easeInOut }
        );
      };
      
      const startTitleAnimation = () => {
        gsap.fromTo(
          titleRef.current,
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, ease: Power3.easeInOut }
          );
        };
        
        gsap.set(formContainer.current,{ opacity: 0 });
        
        setTimeout(() => {
          startAnimation();
          startTitleAnimation();
        }, 100);
      }, []);
      
      const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm<ISharepointFormData>({
        criteriaMode: "all"
      });

  const onSubmit = (formData: ISharepointFormData) => {
    console.log(data);
    setLoadingPageVisible(true);
    setIsVisible(false);
    setData(formData);
    navigate("/sites/intranetplexus/_layouts/15/workbench.aspx/sharepoint-user-form-2");
    // updateList(formData.nombreProveedor, formData.tipoProveedor, formData.email, formData.texto); 
  };

    return ( 
      <>
      {isVisible && ( 
        <div
        style={{ 
        display: isVisible ? 'flex' : 'none',
        flexDirection:'column', 
        alignItems:'center',
        justifyContent:'center',
        backgroundImage: `url("https://i0.wp.com/gananzia.com/wp-content/uploads/2019/08/elmubas.jpg?fit=500%2C375&ssl=1")`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: '100%',
        height: '50vh'
        }}
        >
      <div>
        <div ref={body}>
            <div ref={formContainer}>
            <div
            style={{ display: 'flex',flexDirection:'column', alignItems:'center' }}
            >
              <h3 style={{color:' #29282b'}}>SOLICITUD DE ALTA</h3>
            </div>
            <h4 ref={titleRef} style={{ display: 'flex',flexDirection:'column', alignItems:'center',color:' #29282b' }}>
              FORMULARIO 1/2
            </h4>
            <Form onSubmit={handleSubmit(onSubmit)} className="form">
              <Form.Group style={{ display: 'flex',flexDirection:'column', alignItems:'center', fontSize: '10px'}}>
                <Form.Control
                  style={{ marginBottom: '10px', borderRadius: '5px',borderWidth: '1px',fontSize: '12px', width: '185px'}}
                  type="text"
                  placeholder="Opcion 1"
                  {...register("Opcion1", {
                    required: "Este campo es requerido.",
                    maxLength: {
                      value: 80,
                      message: "Este campo debe tener máximo 80 caracteres"
                    }
                  })}
                  />
                <ErrorMessage
                  errors={errors}
                  name="Opcion1"
                  render={({ messages }) =>
                  messages && typeof messages === "object" ? (
                    Object.keys(messages).map((type) => (
                      <p 
                      key={type}
                      style={{color: 'red',marginTop: '-10px',fontSize: '11px',maxWidth: '156px',marginBottom:'2px'}}
                      >
                          {messages[type]}
                        </p>
                      ))
                      ) : null
                    }
                  />
                <Form.Control
                  style={{ marginBottom: '10px', borderRadius: '5px',borderWidth: '1px',fontSize: '12px', width: '185px'}}
                  type="text"
                  placeholder="Opcion 2"
                  {...register("Opcion2", {
                    required: "Este campo es requerido.",
                    maxLength: {
                      value: 80,
                      message: "Este campo debe tener máximo 80 caracteres"
                    }
                  })}
                  />
                <ErrorMessage
                  errors={errors}
                  name="Opcion2"
                  render={({ messages }) =>
                  messages && typeof messages === "object" ? (
                    Object.keys(messages).map((type) => (
                      <p 
                      key={type}
                      style={{color: 'red',marginTop: '-10px',fontSize: '11px',maxWidth: '156px',marginBottom:'2px'}}
                      >
                          {messages[type]}
                        </p>
                      ))
                      ) : null
                    }
                  />
                <Form.Control
                  style={{ marginBottom: '10px', borderRadius: '5px',borderWidth: '1px',fontSize: '12px', width: '185px'}}
                  type="text"
                  placeholder="Opcion 3"
                  {...register("Opcion3", {
                    required: "Este campo es requerido.",
                    maxLength: {
                      value: 80,
                      message: "Este campo debe tener máximo 80 caracteres"
                    }
                  })}
                  />
                <ErrorMessage
                  errors={errors}
                  name="Opcion3"
                  render={({ messages }) =>
                  messages && typeof messages === "object" ? (
                    Object.keys(messages).map((type) => (
                      <p 
                      key={type}
                      style={{color: 'red',marginTop: '-10px',fontSize: '11px',maxWidth: '156px',marginBottom:'2px'}}
                      >
                          {messages[type]}
                        </p>
                      ))
                      ) : null
                    }
                  />
                <Form.Control
                  style={{ marginBottom: '10px', borderRadius: '5px',borderWidth: '1px',fontSize: '12px', width: '185px'}}
                  type="text"
                  placeholder="Opcion 4"
                  {...register("Opcion4", {
                    required: "Este campo es requerido.",
                    maxLength: {
                      value: 80,
                      message: "Este campo debe tener máximo 80 caracteres"
                    }
                  })}
                  />
                <ErrorMessage
                  errors={errors}
                  name="Opcion4"
                  render={({ messages }) =>
                  messages && typeof messages === "object" ? (
                    Object.keys(messages).map((type) => (
                      <p 
                      key={type}
                      style={{color: 'red',marginTop: '-10px',fontSize: '11px',maxWidth: '156px',marginBottom:'2px'}}
                      >
                          {messages[type]}
                        </p>
                      ))
                      ) : null
                    }
                  />
                <Form.Control
                  style={{ marginBottom: '10px', borderRadius: '5px',borderWidth: '1px',fontSize: '12px', width: '185px'}}
                  type="text"
                  placeholder="Opcion 5"
                  {...register("Opcion5", {
                    required: "Este campo es requerido.",
                    maxLength: {
                      value: 80,
                      message: "Este campo debe tener máximo 80 caracteres"
                    }
                  })}
                  />
                <ErrorMessage
                  errors={errors}
                  name="Opcion5"
                  render={({ messages }) =>
                  messages && typeof messages === "object" ? (
                    Object.keys(messages).map((type) => (
                      <p 
                      key={type}
                      style={{color: 'red',marginTop: '-10px',fontSize: '11px',maxWidth: '156px',marginBottom:'2px'}}
                      >
                          {messages[type]}
                        </p>
                      ))
                      ) : null
                    }
                  />
                <Form.Control
                  style={{ marginBottom: '10px', borderRadius: '5px',borderWidth: '1px',fontSize: '12px', width: '185px'}}
                  type="text"
                  placeholder="Opcion 6"
                  {...register("Opcion6", {
                    required: "Este campo es requerido.",
                    maxLength: {
                      value: 80,
                      message: "Este campo debe tener máximo 80 caracteres"
                    }
                  })}
                  />
                <ErrorMessage
                  errors={errors}
                  name="Opcion6"
                  render={({ messages }) =>
                  messages && typeof messages === "object" ? (
                    Object.keys(messages).map((type) => (
                      <p 
                      key={type}
                      style={{color: 'red',marginTop: '-10px',fontSize: '11px',maxWidth: '156px',marginBottom:'2px'}}
                      >
                          {messages[type]}
                        </p>
                      ))
                      ) : null
                    }
                  />
                <Form.Control
                  style={{ marginBottom: '10px', borderRadius: '5px',borderWidth: '1px',fontSize: '12px', width: '185px'}}
                  type="text"
                  placeholder="Opcion 7"
                  {...register("Opcion7", {
                    required: "Este campo es requerido.",
                    maxLength: {
                      value: 80,
                      message: "Este campo debe tener máximo 80 caracteres"
                    }
                  })}
                  />
                <ErrorMessage
                  errors={errors}
                  name="Opcion7"
                  render={({ messages }) =>
                  messages && typeof messages === "object" ? (
                    Object.keys(messages).map((type) => (
                      <p 
                      key={type}
                      style={{color: 'red',marginTop: '-10px',fontSize: '11px',maxWidth: '156px',marginBottom:'2px'}}
                      >
                          {messages[type]}
                        </p>
                      ))
                      ) : null
                    }
                  />
                <Form.Control
                  style={{ marginBottom: '10px', borderRadius: '5px',borderWidth: '1px',fontSize: '12px', width: '185px'}}
                  type="text"
                  placeholder="Opcion 8"
                  {...register("Opcion8", {
                    required: "Este campo es requerido.",
                    maxLength: {
                      value: 80,
                      message: "Este campo debe tener máximo 80 caracteres"
                    }
                  })}
                  />
                <ErrorMessage
                  errors={errors}
                  name="Opcion8"
                  render={({ messages }) =>
                  messages && typeof messages === "object" ? (
                    Object.keys(messages).map((type) => (
                      <p 
                      key={type}
                      style={{color: 'red',marginTop: '-10px',fontSize: '11px',maxWidth: '156px',marginBottom:'2px'}}
                      >
                          {messages[type]}
                        </p>
                      ))
                      ) : null
                    }
                  />
                <Button 
                style={{ 
                  marginBottom: '5px',
                  borderRadius: '7px',
                  borderColor: '#2094c9',
                  borderWidth: '2px',
                  color: 'white',
                  backgroundColor: '#2094c9',
                  padding: '4px',
                }} 
                type="submit">
                 ENVIAR
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
    )}
    {loadingPageVisible && <LoadingPage/>}     
    </>
  )
};

export default SharepointUserForm1;

