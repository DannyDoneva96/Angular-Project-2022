import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  center: google.maps.LatLngLiteral = {
      lat: 24,
      lng: 12
  };
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {
      draggable: false
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  addMarker(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }
}