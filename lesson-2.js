let nilai;

if (Math.floor(nilai / 10) * 10 >= 90) {
  switch (nilai) {
    case 100:
      console.log("PERFECT");
      break;
    case 90:
      console.log("Great");
      break;
    case 80:
      console.log("Nice");

    default:
      console.log(nilai);
  }
} else {
  console.log("Try Again");
}
