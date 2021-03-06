// Hero project, form submmitting inputs, return JSON.

const form = document.forms["hero"];
const input = form["heroName"];

form.addEventListener("submit", makeHero, false);

function makeHero(event) {
  event.preventDefault(); // prevent the form from being submitted

  const hero = {}; // create an empty object

  // username and password.
  hero.name = form["heroName"].value; // create a name property based on the input field's value
  hero.realName = form["realName"].value;

  // Checkbox
  hero.powers = [];
  for (let i = 0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
      // If its checked, we add teh value to the array.
      hero.powers.push(form.powers[i].value);
    }
  }

  hero.powers = [...form.powers]
    .filter((box) => box.checked)
    .map((box) => box.value);

  // Radio button.
  hero.category = form["category"].value;

  // Age
  hero.age = form.age.value;

  alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
  return hero;
}

