import { Component, OnInit } from '@angular/core';
import { ServApiService } from 'src/app/services/serv-api.service'; 


@Component({
  selector: 'app-enfermedades',
  templateUrl: './enfermedades.page.html',
  styleUrls: ['./enfermedades.page.scss'],
})
export class EnfermedadesPage implements OnInit {

  enfermedad={ 
    recovered:'',
    deaths:'',
    confirmed:'',
    lastChecked:'',
    lastReported:'',
    location:'',
  }

  constructor(private servapiService:ServApiService) { }

  ngOnInit() {
    this.servapiService.getTopHeadLines().subscribe(resp=>{
      console.log('enfermedades',resp);

      this.enfermedad.recovered=resp.data.recovered
      this.enfermedad.deaths=resp.data.deaths.toString()
      this.enfermedad.confirmed=resp.data.confirmed.toString()
      this.enfermedad.lastChecked=resp.data.lastChecked
      this.enfermedad.lastReported=resp.data.lastReported
      this.enfermedad.location=resp.data.location
      console.log(this.enfermedad)   

    
  });
  }

}
