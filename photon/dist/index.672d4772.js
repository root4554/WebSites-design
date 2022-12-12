var map = L.map("map").setView([
    43.33823,
    -1.78927
], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
L.marker([
    43.33823,
    -1.78927
]).addTo(map).bindPopup('<canvas id="irun"></canvas>');
// errenteria
L.marker([
    43.31195,
    -1.90234
]).addTo(map).bindPopup('<canvas id="errenteria"></canvas>');
// donostia
L.marker([
    43.29181,
    -1.98851
]).addTo(map).bindPopup('<canvas id="donostia"></canvas>');
// hondarribia
L.marker([
    43.3625,
    -1.7915
]).addTo(map).bindPopup('<canvas id="hondarribia"></canvas>');
//** */
const municipio = (municipio)=>{
    let eusOffers = offersEus.map((offer)=>offer.municipio);
    let esOffers = offersEsp.map((offer)=>offer.municipio);
    let euslistcount = eusOffers.filter((x)=>x === municipio).length;
    let eslistcount = esOffers.filter((x)=>x === municipio).length;
    let euslist = offersEus.filter((x)=>x.municipio === municipio);
    let eslist = offersEsp.filter((x)=>x.municipio === municipio);
    // euslist = euslist.map((x) => x.desEmpleo);
    // eslist = eslist.map((x) => x.desEmpleo);
    // console.log(euslist.length);
    // console.log(eslist.length);
    return [
        eslistcount,
        euslistcount,
        eslist,
        euslist
    ];
};
let IrunChart;
map.on("popupopen", ()=>{
    if (IrunChart) IrunChart.destroy();
    const ctx = document.getElementById("irun");
    if (ctx) {
        showOffers("IRUN");
        IrunChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [
                    "ES",
                    "EU"
                ],
                datasets: [
                    {
                        label: "Empleos de lanbide en Irun",
                        data: [
                            municipio("IRUN")[0],
                            municipio("IRUN")[1]
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
let RenteChart;
map.on("popupopen", ()=>{
    if (RenteChart) RenteChart.destroy();
    const ctx = document.getElementById("errenteria");
    if (ctx) {
        showOffers("ERRENTERIA");
        RenteChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [
                    "ES",
                    "EU"
                ],
                datasets: [
                    {
                        label: "Empleos de lanbide en Irun",
                        data: [
                            municipio("ERRENTERIA")[0],
                            municipio("ERRENTERIA")[1]
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
// showOffers("ERRENTERIA");
});
let DonostiChart;
map.on("popupopen", ()=>{
    if (DonostiChart) DonostiChart.destroy();
    const ctx = document.getElementById("donostia");
    if (ctx) {
        showOffers("DONOSTIA/SAN SEBASTI\xc1N");
        DonostiChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [
                    "ES",
                    "EU"
                ],
                datasets: [
                    {
                        label: "Empleos de lanbide en Irun",
                        data: [
                            municipio("DONOSTIA/SAN SEBASTI\xc1N")[0],
                            municipio("DONOSTIA/SAN SEBASTI\xc1N")[1]
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
// showOffers("DONOSTIA/SAN SEBASTIÁN");
});
let HondaChart;
map.on("popupopen", ()=>{
    if (HondaChart) HondaChart.destroy();
    const ctx = document.getElementById("hondarribia");
    if (ctx) {
        showOffers("HONDARRIBIA");
        HondaChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [
                    "ES",
                    "EU"
                ],
                datasets: [
                    {
                        label: "Empleos de lanbide en Irun",
                        data: [
                            municipio("HONDARRIBIA")[0],
                            municipio("HONDARRIBIA")[1]
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
// showOffers("HONDARRIBIA");
});
const showOffers = (city)=>{
    console.log(city);
    let sidebar = document.querySelector(".sidebar");
    if (sidebar.contains(document.querySelector(".remove"))) {
        console.log("siremo");
        sidebar.removeChild(document.querySelector(".remove"));
    }
    let Groupenav = document.createElement("div");
    Groupenav.className = "nav-group remove";
    Groupenav.innerHTML = `<h3>Ofertas de empleo</h3>
  <h3 class="nav-group-title">Castellano</h3>
  <ul class="nav-group" style="padding: 0;">
     ${municipio(city)[2].map((x)=>`<li class="nav-group-item"><a href="${x.url}" target="blank">${x.desEmpleo}</a>
         <p>${x.municipio}</p>
         <p>${x.fecPub}</p>
         </li>`)}
  </ul>
  <h3 class="nav-group-title">Euskera</h3>
  <ul class="nav-group" style="padding: 0;">
      ${municipio(city)[3].map((x)=>`<li class="nav-group-item"><a href="${x.url}" target="blank">${x.desEmpleo}</a>
          <p>${x.municipio}</p>
          <p>${x.fecPub}</p>
          </li>`)}
  </ul>
  `;
    sidebar.appendChild(Groupenav);
};

//# sourceMappingURL=index.672d4772.js.map
