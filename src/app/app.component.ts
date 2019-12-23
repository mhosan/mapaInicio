import { Component, OnInit } from '@angular/core';
declare let L;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mapatest';

  ngOnInit() {
    var mymap = L.map('mapid').setView([-34.921195, -57.954640], 13);

    const basemaps = {
      mapbox: L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: 'pk.eyJ1IjoibWhvc2FuIiwiYSI6ImNrMnA2ODc1NTAwYjgzbHFvc2dlYmoyczMifQ.vvQ6urid-4LaiLYsTNFHUw'
      }),
      osm1: L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
      }),
      osm2 : L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { maxZoom: 19 }),
      googleMaps: L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        detectRetina: true
      })
    }

    const overlaymaps = {
      wmsLayer : L.tileLayer.wms('http://mapa.educacion.gob.ar/geoserver/ows?', { 
        layers: 'publico:universidades',
        transparent: true,
        format: "image/png",
        attribution: "texto que se lee, vio?"})
    }

    L.control.layers(basemaps, overlaymaps, {}).addTo(mymap);
    basemaps.mapbox.addTo(mymap);
  }
}
