import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import * as strings from 'SharepointFormWebPartStrings';
import {
  SPHttpClient,
  SPHttpClientResponse
} from '@microsoft/sp-http';
import App from './components/App';
import { ISharepointFormProps } from './components/ISharepointFormProps';

const listName = 'Demo'

export interface ISharepointFormWebPartProps {
  description: string;
  test: string;
}

export interface ISPLists {
  value: ISPList[];
}

export interface ISPList {
  Title: string;
  Id: string;
}


export default class SharepointFormWebPart extends BaseClientSideWebPart<ISharepointFormWebPartProps> {
  
  private async getListItemDetails(): Promise<void> {
    const description : string = this.properties.description
    console.log(description)
  }
  
  private async updateList(nombreProveedor: string, tipoProveedor: string, email: string, texto: string): Promise<void> {
    const listName = 'Demo';
    const endpoint = `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${listName}')/items`;

    
    const itemProperties: { [key:string] : string } = {
      nombreProveedor: nombreProveedor,
      tipoProveedor: tipoProveedor,
      email: email,
      texto: texto
    };
    
    try {
      const response: SPHttpClientResponse = await this.context.spHttpClient.post(endpoint, SPHttpClient.configurations.v1, {
        headers: {
          'Accept': 'application/json;odata=nometadata',
          'Content-type': 'application/json;odata=nometadata',
          'odata-version': ''
        },
        body: JSON.stringify(itemProperties)
      });
      
      if (response.ok) {
        console.log('Item actualizado correctamente en la lista.');
      } else {
        console.log('Error al actualizar el elemento en la lista:', response.statusText);
      }
    } catch (error) {
      console.log('Error en la solicitud:', error);
    }
}

    public render(): void {
      const element: React.ReactElement<ISharepointFormProps> = React.createElement(
        App,
        {
          updateList: this.updateList.bind(this),
          getListItemDetails: this.getListItemDetails.bind(this),
        }
      );
      ReactDom.render(element, this.domElement);
    }
  
    protected onDispose(): void {
      ReactDom.unmountComponentAtNode(this.domElement)
    }
  
    protected get dataVersion(): Version {
      return Version.parse('1.0');
    }

    
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
      return {
        pages: [
          {
            header: {
              description: listName
            },
            groups: [
              {
                groupName: strings.BasicGroupName,
                groupFields: [
                  PropertyPaneTextField('description', {
                    label: strings.DescriptionFieldLabel
                  })
                ]
              }
            ]
          }
        ]
      };
    }
  }
  