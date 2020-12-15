import { ReturnStatement } from '@angular/compiler';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { ClientComponent } from '../component/client/client.component';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients: Client[];
  //selectedClient: Client = {id:0,nombre:'',apellido:'',telefono:'',direccion:''};

  constructor() { 
    this.clients = [];
   }

  getClients(){
    if(localStorage.getItem('clients') === null){
     return this.clients;
    } else {
      this.clients = JSON.parse(localStorage.getItem('clients') || '{}');
      return this.clients;
    }
  }

  addClient(client: Client){
    this.clients.push(client);
    let clients: Client[] = [];
    if(localStorage.getItem('clients') === null){
     clients.push(client);
     window.alert("Cliente guardado!");
     localStorage.setItem('clients', JSON.stringify(clients)); 
    } else {
     clients = JSON.parse(localStorage.getItem('clients') || '{}');
     clients.push(client);
     window.alert("Cliente guardado!");
     localStorage.setItem('clients', JSON.stringify(clients));
    }
  }

   getOneClient(_id : any){
     return this.clients.find(client => client.id === _id);
   }

   editClient(newClientEdit: Client){
     const index = this.clients.findIndex(client => client.id === newClientEdit.id);
     this.clients[index] = newClientEdit;
     window.alert("Cliente editado!");
     localStorage.setItem('clients', JSON.stringify(this.clients));
   }

   deleteClient(client: Client){
    for(let i = 0; i <= this.clients.length; i++){
      if(client == this.clients[i]){
        this.clients.splice(i, 1);
        window.alert("Cliente eliminado!");
        localStorage.setItem('clients', JSON.stringify(this.clients));
      }
    }
   }
}
