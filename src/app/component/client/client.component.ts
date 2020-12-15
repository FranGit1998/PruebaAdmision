import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  myClient: any;
  ClientFound: any;
  
  constructor(
    public dataService: ClientService
  ) { this.myClient = [],
      this.ClientFound = [] }

  ngOnInit(): void {
  }

  getPositions($event: any){
    this.myClient = this.dataService.getOneClient($event);
    this.ClientFound = this.myClient;
  }

  editClient(){
    this.dataService.editClient(this.ClientFound);
  }

  CloseModal(){
    window.location.reload();
  }

}
