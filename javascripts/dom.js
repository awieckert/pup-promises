const printToDom = (dataStuff) => {
  document.getElementById('pups').innerHTML += domString(dataStuff);
};

const domString = (pups) => {
  let stringToPrint = '';
  pups.forEach((item) => {
    stringToPrint += `<div class="panel panel-default">`;
    stringToPrint += `<div class="panel-heading">${item.name}</div>`;
    stringToPrint += `<div class="panel-body"><p>${item.bio}</p></div>`;
    stringToPrint += `</div>`;
  });
  return stringToPrint;
};

module.exports = printToDom;
