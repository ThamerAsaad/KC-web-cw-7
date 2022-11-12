function BMI(weight, height) {
  let ruselt = weight / (height * height);
  return ruselt;
}
console.log(85, 1.8);

function Status(BodyMass) {
  if (BodyMass < 18.5) {
    return "لديك نقص في الوزن";
  } else if (BodyMass >= 18.5 && BodyMass < 25) {
    return "وزنك صحي";
  } else {
    return "لديك زيادة في الوزن";
  }
}
function calculate() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi_value = BMI(weight, height);
  let desc = Status(bmi_value);
  let box = document.getElementById("result");

  box.innerText = bmi_value + " == " + desc;
}
