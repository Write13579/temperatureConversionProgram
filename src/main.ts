const input = document.getElementById(`input`) as HTMLInputElement;
const ctof = document.getElementById(`celtofah`) as HTMLInputElement;
const ftoc = document.getElementById(`fahtocel`) as HTMLInputElement;
const submit = document.getElementById(`submit`);
const result = document.getElementById(`result`) as HTMLOutputElement;
const info = document.getElementById(`info`) as HTMLOutputElement;
let temp: number;
let infoTemp: string | number;

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

    infoTemp = input.value;
    temp = Math.round((parseInt(input.value) * 1.8 + 32) * 100) / 100; //moglo byc .toFixed(2) ale co tam
    result.textContent = `${temp.toString()} °F`;
  } else if (ftoc.checked) {
    //F to C

    temp = Math.round((((parseInt(input.value) - 32) * 5) / 9) * 100) / 100; //j.w.
    infoTemp = temp;
    result.textContent = `${temp.toString()} °C`;
  } else {
    result.textContent = "";
  }

  if (infoTemp == input.value) {
    temp = Number(infoTemp);
    //parseInt nie dziala bo jakis format string | number mu nie pasuje, ale z Number() dziala xd
  }
  if (infoTemp) {
    switch (result.textContent !== "") {
      case temp >= 30:
        info.textContent = `nie wychodz bo za cieplo ☀`;
        break;
      case temp < 30 && temp >= 20:
        info.textContent = `bydzie cieplo 🌤`;
        break;
      case temp < 20 && temp >= 5:
        info.textContent = `zaloz bluze ⛅`;
        break;
      case temp < 5 && temp >= -10:
        info.textContent = `zaloz kurtke ❄`;
        break;
      case temp <= -10:
        info.textContent = `nie wychodz bo pizdzi 🥶`;
        break;
    }
  }
}
