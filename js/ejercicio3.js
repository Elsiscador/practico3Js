let resultados = [0,0,0,0,0,0,0,0,0,0,0];

for (let i = 0; i < 1000; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let suma = dado1 + dado2;
  resultados[suma-2]++;
}

document.write("<table>");
document.write("<tr><th>Suma</th><th>Apariciones</th></tr>");

for (let i = 0; i < resultados.length; i++) {
  let suma = i + 2;
  let apariciones = resultados[i];
  document.write("<tr><td style='text-align: center;'>" + suma + "</td><td style='text-align: center;'>" + apariciones + "</td></tr>");
}

document.write("</table>");