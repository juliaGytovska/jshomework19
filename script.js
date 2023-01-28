
//Завдання №1
let quastion = prompt("How old are you?")
if (quastion <= 17) {
    confirm("Do you study at school?");
}

else if (quastion > 17 && quastion < 25) {
    confirm("Do you study at university?");
}
else if (quastion >= 25 && quastion < 60) {
    confirm("Do you have a job ?");
}
else {
    alert("What are you doing?");
}


//Завдання №2
let prop = prompt("Enter css properties?")
switch (prop) {
    case "block":
        alert("set display-block")
        break;

    case "flex":
        alert("set display-flex")
        break;

    case "grid":
        alert("set display-grid")
        break;
    case "inline":
        alert("set display-inline")
        break;
    case "none":
        alert("set display-none")
        break;
    default:
        alert("Set : display: inline-block")
        break;
}

//Завдання №3

const user= Number(prompt('Please enter the number'));
if (isNaN(user)) {
  alert('Your number is incorrect, please write correct number');
} else {
    alert(` ${user} by 12 equal is ${user*12}`)
}


//Завдання №4
for (let i = 2; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
