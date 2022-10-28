import { Component, OnInit } from '@angular/core';
import { Observable, reduce, take } from 'rxjs';
import { Sig } from '../../admin/sig';
import { SigService } from 'src/app/admin/sig.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  public chart: any;
  sigs$: Observable<Sig[]> = new Observable;

  constructor(private sigService: SigService) { }

  ngOnInit(): void {
    this.getSigs()
    this.createChart();
  }

  getSigs() {
    this.sigs$ = this.sigService.getSigs()
  }

  createChart(){
    
    this.chart = new Chart("myChart", {
      type: 'bar', 

      data: {
        labels: ["sterr", "Macu", "Fraxis", "Damoe" ], 
	       datasets: [
          {
            label: "Longitude",
            data: [48.52, 48.52, 49.52, 48.12],
          },
          {
            label: "Latitude",
            data: [2.19,3.19, 2.19, 2.89],
          }  
        ]
      },
      options: {
        responsive: true,
        elements:{
          line:{
            borderColor: '#a855f7',
            borderJoinStyle: 'round',
          },
          point:{
            radius: 5,
            hoverRadius: 7,
            backgroundColor: '#ffffff',
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
        maintainAspectRatio:false,
      }
    });
  }

}
