import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  newAppTitle : String = "";
  newAppDesc : String ="";
  newAppDate: Date =new Date();
  appointments : Appointment[] = [];

  ngOnInit(): void{
    let savedAppointments = localStorage.getItem("Appointments");
    this.appointments = savedAppointments? JSON.parse(savedAppointments) : [];
  }
  addAppointment(){
    //alert(this.newAppTitle +" "+this.newAppDesc+" "+this.newAppDate);
    let newAppointment: Appointment = {
      appId:Date.now()+"",
      appTitle: this.newAppTitle,
      appDescription: this.newAppDesc,
      appTime: this.newAppDate
    }
    this.appointments.push(newAppointment);

    this.newAppTitle="";
    this.newAppDesc="";
    this.newAppDate=new Date();

    localStorage.setItem("Appointments", JSON.stringify(this.appointments))

    alert(this.appointments.length);
  }

  removeAppointment(index: number){
    this.appointments.splice(index, 1)

    localStorage.setItem("Appointments", JSON.stringify(this.appointments))
  }
}
