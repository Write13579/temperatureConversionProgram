const input = document.getElementById(`input`) as HTMLInputElement;
const ctof = document.getElementById(`celtofah`) as HTMLInputElement;
const ftoc = document.getElementById(`fahtocel`) as HTMLInputElement;
const submit = document.getElementById(`submit`);
const result = document.getElementById(`result`) as HTMLOutputElement;
let temp: number;

if (input) {
  if (submit) {
    if (result) {
      convert();
    }
  }
}

function convert() {
  if (ctof.checked) {
    //C to F

    temp = Math.round((parseInt(input.value) * 1.8 + 32) * 100) / 100; //moglo byc .toFixed(2) ale co tam
    result.textContent = `${temp.toString()} °F`;
  } else if (ftoc.checked) {
    //F to C

    temp = Math.round((((parseInt(input.value) - 32) * 5) / 9) * 100) / 100; //j.w.
    result.textContent = `${temp.toString()} °C`;
  } else {
    result.textContent = "";
  }
}
