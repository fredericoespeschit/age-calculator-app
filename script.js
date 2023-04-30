const send = document.querySelector("#send-info");

send.addEventListener("click", function (event) {
    event.preventDefault();
    const dayInput = document.getElementById("day-date");
    const monthInput = document.getElementById("month-date");
    const yearInput = document.getElementById("year-date");

    const birthDay = Number(dayInput.value);
    const birthMonth = Number(monthInput.value);
    const birthYear = Number(yearInput.value);

    if (!isValidForm(birthDay, birthMonth, birthYear)) {
        return console.log("Data inválida.");
    }

    const age = calculateAge(birthDay, birthMonth, birthYear);

    document.querySelector("#years").innerHTML = age.yearLife;
    document.querySelector("#months").innerHTML = age.monthLife;
    document.querySelector("#days").innerHTML = age.dayLife;
});

function isValidForm(birthDay, birthMonth, birthYear) {
    if (birthDay == "" && birthMonth == "" && birthYear == "") {
        return false;
    }
    if (birthDay == "" || birthMonth == "" || birthYear == "") {
        return false;
    }

    return true;
}

function calculateAge(birthDay, birthMonth, birthYear) {
    //Como calcular os anos de vida (ano atual - ano de nascimento)

    const currentDate = new Date();
    const day = currentDate.getDay();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const yearLife = year - birthYear;

    //Como calcular os meses de vida (idade x 12)
    const monthLife = yearLife * 12;
    console.log(monthLife)



    if ((birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 400 === 0) {
        const dayLifeB = yearLife * 366;
        return dayLifeB;
    } else {
        const dayLife = yearLife * 365;
        return dayLife;
    }


    //Como calcular os dias de vida (idade em anos * 365) // é preciso tratar, pois nem todo ano tem 365 dias

}