const createDivCells = function () {
  // CREIAMO LA CELLA
  for (let i = 0; i <= 90; i++) {
    //per ogni numero creo una cella
    let cellaDiv = document.createElement("div");
    //gli do classe cella per stilarla
    cellaDiv.classList.add("cella");
    //troviamo div in html
    let schermoNumeriEstratti = document.getElementById(
      "schermoNumeriEstratti"
    );
    //appendiamo i div al tabellone
    schermoNumeriEstratti.appendChild(cellaDiv);
    // CREIAMO IL CONTENUTO quindi i 76 numeri
    let valoreCella = document.createElement("h3");
    //diamo il valore cella a quello corrente della i
    valoreCella.innerText = i;
    // qui potremmo anche dare una classe per stilare il numero
    valoreCella.classList.add("valoreCellaStile");
    //appendiamo il valore al div
    cellaDiv.appendChild(valoreCella);
  }
};
createDivCells();
//ricordiamoci che dovremo creare un cassettone array3 di numeri usciti all'interno del for eh!
const bottoneRandom = document.getElementById("bottoneNumeroRandom");
bottoneRandom.addEventListener("click", () => {
  let numeroCaso = Math.floor(Math.random() * 91);
  document.querySelector(".vuoto").innerText = numeroCaso;

  let celle = document.querySelectorAll(".cella");
  celle.forEach((element) => {
    if (Number(element.innerText) === numeroCaso) {
      element.classList.add("red");
    }
  });
});
