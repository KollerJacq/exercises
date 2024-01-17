function calcArea() {
  let first = parseInt(document.getElementById("first").value);
  let second = parseInt(document.getElementById("second").value);
  let third = parseInt(document.getElementById("third").value);

  let s = (first + second + third) / 2;
  let area =
    Math.round(Math.sqrt(s * (s - first) * (s - second) * (s - third)) * 1000) /
    1000;
  console.log(first, second, third);
  console.log(area);

  document.getElementById("calculation").innerHTML = `The area is: ${area}`;
}
