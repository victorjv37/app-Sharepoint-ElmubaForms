import * as React from "react";
import { useEffect } from "react";
import SharepointUserForm from "./SharepointUserForm";

interface ISharepointFormProps {
  updateList: (nombreProveedor: string, tipoProveedor: string, email: string, texto:string) => void;
  getListItemDetails: () => void;
}

const App: React.FC<ISharepointFormProps> = ({updateList,getListItemDetails}) => {
 
  useEffect(() => {
    getListItemDetails();
  }, [getListItemDetails]);
  
  return (
    <div>
        <SharepointUserForm
        updateList={updateList}
        /> 
    </div>
  )
}

export default App