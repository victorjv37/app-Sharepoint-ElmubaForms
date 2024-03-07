/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as React from "react";
import './SharepointForm.module.css';
import LoadingPage from "./LoadingPage";

interface ISharepointFormData {
  nombreProveedor: string;
  tipoProveedor: string;
  email: string;
  texto: string;
}

interface AppProps {
  updateList : (nombreProveedor: string, tipoProveedor: string, email: string, texto: string) => void;
}

const SharepointUserForm: React.FC<AppProps> = ({updateList}) => {
  const [loadingPageVisible, setLoadingPageVisible] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<ISharepointFormData | undefined>(undefined);
  const [optionColor,setOptioncolor] = useState<string>('rgb(118, 118, 118)')
  // const navigate = useNavigate();
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
      
      const handleChange = (e: React.MouseEvent<HTMLSelectElement>) => {
        const selectedValue = (e.target as HTMLSelectElement).value;
        setOptioncolor(selectedValue);
      }

  const onSubmit = (formData: ISharepointFormData) => {
    console.log(data);
    setLoadingPageVisible(true);
    setIsVisible(false);
    setData(formData);
    updateList(formData.nombreProveedor, formData.tipoProveedor, formData.email, formData.texto); 
    // navigate("/companyForm");
  };

    return ( 
      <>
      {isVisible && ( 
        <div
        style={{ 
        display: isVisible ? 'flex' : 'none',
        flexDirection:'column', 
        alignItems:'flex-start',
        backgroundImage: `url("https://elmubas.com/wp-content/uploads/2023/05/servicio-innovacion-1-1.webp")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '38vh'
        }}
        >
      <div  style={{marginLeft: '45px', marginTop: '22px'}} >
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
                  placeholder="Nombre comercial del proveedor"
                  {...register("nombreProveedor", {
                    required: "Este campo es requerido.",
                    maxLength: {
                      value: 80,
                      message: "Este campo debe tener máximo 80 caracteres"
                    }
                  })}
                  />
                <ErrorMessage
                  errors={errors}
                  name="nombreProveedor"
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
                  placeholder="Email"
                  {...register("email", {required: "Este campo es requerido",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Este campo debe tener formato Email"
                  }})}
                  />
                <ErrorMessage
                  errors={errors}
                  name="email"
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
                  type="textarea"
                  placeholder="Texto"
                  {...register("texto", {required: "Este campo es requerido"})}
                  />
                <ErrorMessage
                  errors={errors}
                  name="texto"
                  render={({ messages }) =>
                  messages && typeof messages === "object" ? (
                    Object.keys(messages).map((type) => (
                      <p 
                      className="error" 
                      key={type}
                      style={{color: 'red',marginTop: '-10px',fontSize: '11px',maxWidth: '156px',marginBottom:'2px'}}
                      >
                          {messages[type]}
                        </p>
                      ))
                      ) : null
                    }
                    />
                <select
                style={{
                  marginBottom: '10px',
                   borderRadius: '5px',
                   borderWidth: '1px',
                   fontSize: '12px', 
                   width: '190px', 
                   height: '21px',
                   color: optionColor}}
                defaultValue=""
                onClick={(e) => handleChange(e)}
                {...register("tipoProveedor", {
                  required: 'Seleccione una opción',
                  validate: value => value !== ''
                })}
                >
                  <option value="" disabled hidden>Tipo de proveedor</option>
                  <option style={{color:' #29282b'}} value="Opcion 1" >Opcion 1</option>
                  <option style={{color:' #29282b'}} value=" Opcion 2" > Opcion 2</option>
                </select>
                <ErrorMessage
                  errors={errors}
                  name="tipoProveedor"
                  render={({ message }) =>
                  <p 
                  style={{color: 'red',marginTop: '-10px',fontSize: '11px',maxWidth: '156px', marginBottom: '2px'}}
                  >
                          {message}
                        </p>
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

export default SharepointUserForm;

