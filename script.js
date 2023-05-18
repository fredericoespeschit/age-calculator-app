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

    const age = year(birthMonth, birthYear, birthDay);

    document.querySelector("#years").innerHTML = age;
    // document.querySelector("#months").innerHTML = age.monthLife;
    // document.querySelector("#days").innerHTML = age.dayLife;
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

// function calculateAge(birthDay, birthMonth, birthYear) {
//     //Como calcular os anos de vida (ano atual - ano de nascimento)
//     const currentDate = new Date();
//     const day = currentDate.getDay();
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth();

//     const yearLife = year - birthYear;

//     //Como calcular os meses de vida (idade x 12)
//     const monthLife = yearLife * 12;
//     console.log(monthLife)

//     if ((birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 400 === 0) {
//         const dayLifeB = yearLife * 366;
//         return dayLifeB;
//     } else {
//         const dayLife = yearLife * 365;
//         return dayLife;
//     }

//     //Como calcular os dias de vida (idade em anos * 365) // é preciso tratar, pois nem todo ano tem 365 dias

// }

function year (birthMonth, birthYear, birthDay) {
    // Como calcular a idade de uma pessoa?
    // Ano atual - ano de nascimento
    // Validar o mês informado e verificar se o mês de aniversario informado já passou
    // Se estamos no mês do aniversario, verificar se o dia do aniversario já passou
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let age = currentYear - birthYear;

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)){
        age = age - 1;
        console.log(age)
    }

    return age;

}
function month (birthMonth, birthYear, birthDay) {
    //Como calcular os meses de vida (idade x 12)
    //Idade em anos x 12, porque são 12 meses
    const monthsYear = 12;
    const age = year(birthMonth, birthYear, birthDay);
    

    age = age * monthsYear;
    console.log(age)
    return age;
}
function day () {
    //Como calcular os dias de vida (idade em anos * 365) 
    //Idade em anos * a quantidade de dias no ano
    //Tratar a quantidade de dias, quando o ano for bissexto multiplicar por 366
}