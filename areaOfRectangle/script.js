const calc = document.getElementById("calculation");

function calcArea(a, b, c) {
  let s = (a + b + c) / 2;
  let area =
    Math.round(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 1000) / 1000;
  //console.log(area);
  return area;
}

calc.innerHTML = `The area is: ${calcArea(5, 6, 7)}`;
