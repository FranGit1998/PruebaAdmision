import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  @Output() sendPosition = new EventEmitter;

  clients: Client[];

  paginaActual: number = 1; 

  constructor(
    public dataService: ClientService
  ) { 
    this.clients = [];
   }

  ngOnInit() {
    this.clients = this.dataService.getClients();
  }

  /*editClient(client: Client){
    this.dataService.selectedClient = client;
  }*/

  getPositions(_id: any){
    this.sendPosition.emit(_id);
  }

  deleteClient(client: Client){
    if(confirm('¿Estas seguro que deseas eliminar este cliente?')){
      this.dataService.deleteClient(client);
    }
  }

}
