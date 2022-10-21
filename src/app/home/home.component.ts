import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { Observable } from 'rxjs';
import { Sig } from '../admin/sig';
import { SigService } from '../admin/sig.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  private map!: L.Map;
  marker = `../../assets/marker.svg`
  markerIcon = L.icon({
      iconUrl: this.marker,
      iconSize: [30, 75],
  });
  sigs$: Observable<Sig[]> = new Observable;

  private initMap(): void {
    this.map = L.map('map', {
      center: [  48.864716, 2.349014 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private addMarker(lon: number, lat: number, name: string): void {
    const marker = new L.Marker([lon, lat]).setIcon(this.markerIcon).bindTooltip(name).openTooltip();

    marker.addTo(this.map)
  }
  constructor(private router:Router, private sigService: SigService) { }

  ngAfterViewInit(): void {
    this.showSigs();
    this.initMap();
  }

  showSigs() {
    this.sigs$ = this.sigService.getSigs()
    this.sigs$.subscribe(res => {
      res.map(sig => {
        this.addMarker(sig.long, sig.lat, sig.name)
      })
    })
  }

}
