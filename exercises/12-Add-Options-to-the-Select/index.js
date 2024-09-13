let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
let selectCountry = document.querySelector("#mySelect");
for (let i=0; i<countries.length; i++) {
    let newCountry = document.createElement("option");
    newCountry.innerHTML = `${countries[i]}`
    selectCountry.appendChild(newCountry);
}
selectCountry.addEventListener("change", (event) => {
    alert(`${event.target.value}`)
});
