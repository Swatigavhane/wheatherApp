import { Component, OnInit } from '@angular/core';
import { ApiwheatherService } from '../apiwheather.service';

@Component({
  selector: 'app-w-details',
  templateUrl: './w-details.component.html',
  styleUrls: ['./w-details.component.scss']
})
export class WDetailsComponent implements OnInit {

  constructor(private weatherapi: ApiwheatherService) { }
  days={0:"Mon" , 1:"Tue" , 2:"Wed" , 3:"Thu" , 4:"Fri" ,5:"Sat" ,6:"Sun"};
  city:string;
  showDetails:boolean=false;
  humidity:string;
  current_temp:string;
  condition:string;
  region:string;
  localtime:Date;
  isday:string;
  cloud:number;
  icon:string;
  
  ngOnInit() {
   
  }


  getCity()
  {
    this.showDetails=true;
    document.getElementById("weatherCard").style.visibility='visible';
    this.getdetails();
  }

  getdetails() {
    this.weatherapi.getWeather(this.city).subscribe(
      res => {console.log(res),
        this.cloud=res.current["cloud"];
      this.condition=res.current.condition["text"],
      this.humidity=res.current["humidity"];
      this.isday=res.current["is_day"];
      this.localtime=res.location["localtime"];
      this.region=res.location["region"];
      this.current_temp=res.current["temp_c"];
      this.icon=res.current.condition["icon"];
    },
      error => {console.log(error)}
    );
  }


}
