//Main application file for the Taller Typescript 1 application

import {Series} from './Series.js';
import {series} from './data.js';

const seriesBody: HTMLElement = document.getElementById('series')!;


function addSeries(series: Series[]): void {
  series.forEach(serie => {
    const trElement = document.createElement("tr");
    const children = ["th", "td", "td", "td"];

    //List to list elements to create (add) series
    children.map(child => document.createElement(child)).forEach((element, index) => {
      switch (index) {
        case 0:
          element.innerText = serie.id.toString();
          break;
        case 1:
          const buttonElement = document.createElement("button");
          buttonElement.type = "button";
          buttonElement.className = "btn btn-link";
          buttonElement.innerText = serie.name;
          buttonElement.id = "btn" + serie.id;
          buttonElement.onclick = () => inforomationTable(serie);
          element.appendChild(buttonElement);
          break;
        case 2:
          element.innerText = serie.channel;
          break;
        case 3:
          element.innerText = serie.seasons.toString();
          break;
      }
      trElement.appendChild(element);
    });
    seriesBody.appendChild(trElement);
  });
} 



function seasonsAverage(series: Series[]): void {

  let totalSeasons: number = 0;
  let totalSeries: number = series.length;
  let average: number;

  series.forEach( (serie) => totalSeasons += serie.seasons);

  average = totalSeasons/totalSeries;

  let trElement = document.createElement("p");
  trElement.style.color = "black";
  trElement.innerText = `${"Seasons Average:"} ${parseInt(average.toString())}`;

  seriesBody.appendChild(trElement);
}


function inforomationTable(serie: Series): void {

  let colInfo: HTMLElement = document.getElementById("info")!;
  let cdExistente = document.getElementById("cardId");

  if (cdExistente != null){
    colInfo.removeChild(cdExistente);
  }
  
  let cdElement: HTMLElement = document.createElement("div");
  let cdBody: HTMLElement = document.createElement("div");

  cdElement.className = "card";
  cdElement.id = "cardId"
  cdElement.setAttribute("style", "width: 20rem;");

  cdBody.className = "card-body";
  
  cdElement.innerHTML = `<img src=${serie.urlImage} class="card-img-top">`;

  cdBody.innerHTML = `<h5 class="card-title"> ${serie.name} </h5>
  <p class="card-text"> ${serie.description} </p>
  <a href= ${serie.urlSerie} class="btn btn-primary" target="_blank"> Where to watch </a>`;

  cdElement.appendChild(cdBody);
  colInfo.appendChild(cdElement);
}

addSeries(series);
seasonsAverage(series);