import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client'

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  myId = 1;
  client: Client[];

  constructor(
    public dataService: ClientService
  ) { this.client = []; }

  ngOnInit(): void {
    this.myId = JSON.parse(localStorage.getItem('clients') || '').length + 1;
  }

  /*addOrEdit(){
    this.dataService.selectedClient.id = this.client.length + 1;
    this.addClient;
  }*/


  addClient(newNombre: HTMLInputElement, newApellido: HTMLInputElement, newTelefono: HTMLInputElement, newDireccion: HTMLInputElement){
    this.dataService.addClient({
      id: this.myId,
      nombre: newNombre.value,
      apellido: newApellido.value,
      telefono: newTelefono.value,
      direccion: newDireccion.value
    });
    newNombre.value = '';
    newApellido.value = '';
    newTelefono.value = '';
    newDireccion.value = '';
    this.myId++;
    window.location.reload();
    newNombre.focus();
    //console.log(this.dataService.clients);
  }


}
