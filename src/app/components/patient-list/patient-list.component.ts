import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {


  constructor() {}

  getColor(symptom: string) {
    switch (symptom) {
      case 'cold':
        return 'red';
      case 'cough':
        return 'blue';
      case 'fever':
        return 'green';
      default:
        return 'lime'
    }
  }
  
  patients: any[] = [
    {
      "patientId": "1",
      "patientName": "Tufail Ahmed",
      "symptom": 'cough',
      "totalBill": 100,
      "doctorAttended": "Dr. Brown"
    },
    {
      "patientId": "2",
      "patientName": "Neha Sharma",
      "symptom": 'fever',
      "totalBill": 1000,
      "doctorAttended": "Dr. Blue"
    },
    {
      "patientId": "3",
      "patientName": "Ravi Kiran",
      "symptom": 'flu',
      "totalBill": 1500,
      "doctorAttended": "Dr. Torquise"
    },
    {
      "patientId": "4",
      "patientName": "Tarun Sharma",
      "symptom": 'cough',
      "totalBill": 700,
      "doctorAttended": "Dr. Brown"
    },
    {
      "patientId": "5",
      "patientName": "Jack",
      "symptom": 'cold',
      "totalBill": 1200,
      "doctorAttended": "Dr. Blue"
    },
    {
      "patientId": "6",
      "patientName": "Bill",
      "symptom": 'cold',
      "totalBill": 1700,
      "doctorAttended": "Dr. Torquise"
    },
    {
      "patientId": "7",
      "patientName": "Mike",
      "symptom": 'cough',
      "totalBill": 300,
      "doctorAttended": "Dr. Brown"
    }
  ];

  ngOnInit(): void {
  }

}
