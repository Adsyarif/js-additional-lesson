let angka = [];
let hitung = 1;

function fizzBuzz() {
  if (hitung % 3 === 0 && hitung % 5 === 0) {
    angka.push("fizzBuzz");
  } else if (hitung % 3 === 0) {
    angka.push("fizz");
  } else if (hitung % 5 === 0) {
    angka.push("buzz");
  } else {
    angka.push(hitung);
  }

  hitung++;
  console.log(angka);
}
