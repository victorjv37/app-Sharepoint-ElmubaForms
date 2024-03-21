import * as React from "react";
import { useEffect } from "react";
import SharepointUserForm1 from "./SharepointUserForm1";
import SharepointUserForm2 from "./SharepointUserForm2";
import SharepointUserForm3 from "./SharepointUserForm3";
import SharepointUserForm4 from "./SharepointUserForm4";
import LoadingPage from "./LoadingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        <BrowserRouter>
        <Routes>
          <Route path="/sites/intranetplexus/_layouts/15/workbench.aspx"
          element={
            <SharepointUserForm1/>
          }
          />
          <Route path="/sites/intranetplexus/_layouts/15/workbench.aspx/sharepoint-user-form-2"
          element={
            <SharepointUserForm2/>
          }
          />
          <Route path="/sites/intranetplexus/_layouts/15/workbench.aspx/sharepoint-user-form-3"
          element={
            <SharepointUserForm3/>
          }
          />
          <Route path="/sites/intranetplexus/_layouts/15/workbench.aspx/sharepoint-user-form-4"
          element={
            <SharepointUserForm4/>
          }
          />
          <Route path="/sites/intranetplexus/_layouts/15/workbench.aspx/loading-page"
          element={
            <LoadingPage  />
          }
          />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App