import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public forecasts?: WeatherForecast[];
  public tickets?: Ticket[];

  constructor(http: HttpClient) {
    http.get<Ticket[]>('/ticket').subscribe(result => {
      this.tickets = result;
    }, error => console.error(error));
  }

  //constructor(http: HttpClient) {
  //  http.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
  //    this.forecasts = result;
  //  }, error => console.error(error));
  //}

  title = 'MTAIntranetAngular';
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface ApprovalState {
  id: number;
  name: string;
  tickets: Ticket[];
}

interface Ticket {
  ticketId: number;
  categoryId: number;
  subTypeId: number;
  impactId: number;
  summary: string;
  reasonForRejection?: string | null;
  approvalStateId: number;
  approvedBy?: string | null;
  dateEntered: Date;
  dateLastUpdated: Date;
  enteredByUser: string;
}
