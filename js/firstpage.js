const machine =  {
    rows: 4,
    bears: 5,
    letters: ["A","B", "C", "D"],
};

const data =[];
generateRows();


function generateRows(){
    let gameParent = document.querySelector(".game-rows-container");
       
    for (let lettersRow = 0; lettersRow < machine.rows; lettersRow++){
      gameParent.innerHTML += `<div class= "parentbear d-flex justify-content-around m-2 ${machine.letters[lettersRow]}">
      <div class="bears">${machine.letters[lettersRow]}</div>`;
      
      for (let bears = 1; bears <= machine.bears; bears++){
        document.querySelector(
            `.${machine.letters[lettersRow]}`
        ).innerHTML += `<div class="bears" onclick="selectBear('${machine.letters[lettersRow]}',${bears})"> ${bears}</div>`;


      }
    }
}


function selectBear(letter, numberBear){
    document.querySelector(".title-form"
    ).innerHTML = `The selected bear is: ${letter + numberBear}`;
    document.querySelector(
        ".save-button-container"
    ).innerHTML = `<button type="button"  class="boton mt-3"
    onclick="select('${letter}', ${numberBear})">Save<buttton/>`;
}



function select(letter, numberBear){
    const person = document.querySelector("#name").value;
    const id = document.getElementById("idTest").value;
    const bearCode = letter + numberBear;


    data.push({person, id, bearCode});

    showInfo();

}

const showInfo = () => {
    const parentInfo = document.querySelector(".table-people");
    parentInfo.innerHTML = "";

    for (const index in data) {
        parentInfo.innerHTML += `<tr><td class="infoS">${data[index].person}</td><td class="infoS">${data[index].id}</td><td class="infoS">${data[index].bearCode}</td>
        <td><button class="btn" onclick="deletePreferences('${data[index].bearCode}')"><i class="bi bi-trash3"></i></button></td></tr>`;
      }
};

const deletePreferences = (bearCode) => {
     
    const indexObject = data.findIndex((object) => object.bearCode == bearCode);
  
  
    data.splice(indexObject, 1);
    showInfo();

  };