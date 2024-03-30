let fields = [null, null, null, null, null, null, null, null, null];

function init() {
  render();
}

function render() {
  let content = document.getElementById("content");
  let table = "<table>";
  for (let i = 0; i < 3; i++) {
    table += "<tr>";
    for (let j = 0; j < 3; j++) {
      let index = i * 3 + j;
      let symbol = fields[index] ? fields[index] : "";
      table += "<td>" + symbol + "</td>";
    }
    table += "</tr>";
  }
  table += "</table>";
  content.innerHTML = table;
}
