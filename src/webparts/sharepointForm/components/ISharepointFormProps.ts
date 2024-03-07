export interface ISharepointFormProps {
  updateList: (nombreProveedor: string, tipoProveedor:string, email: string, text: string) => void;
  getListItemDetails: () => void
}
