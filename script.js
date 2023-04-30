const send = document.querySelector("#send-info");

send.addEventListener("click", function (event) {
    event.preventDefault();
    const dayInput = document.getElementById("day-date");
    const monthInput = document.getElementById("month-date");
    const yearInput = document.getElementById("year-date");
    
    const birthDay = Number(dayInput.value);
    const birthMonth = Number(monthInput.value);
    const birthYear = Number(yearInput.value);

    if(!isValidForm(birthDay, birthMonth, birthYear)){
        return console.log('Data inválida.')
    }
  

    // const result = "Dia" + day_date + " Ano" + year_date + " Mês " + month_date
    //Como calcular os anos de vida (ano atual - ano de nascimento)
    const year_life = 2023 - birthYear;

    //Como calcular os meses de vida (idade x 12)
    const month_life = year_life * 12;

    //Como calcular os dias de vida (idade em anos * 365) // é preciso tratar, pois nem todo ano tem 365 dias
    const days_life = year_life * 365;

    document.querySelector("#years").innerHTML = year_life;
    document.querySelector("#months").innerHTML = month_life;
    document.querySelector("#days").innerHTML = days_life;
});


function isValidForm(birthDay, birthMonth, birthYear ){
    if (birthDay == '' && birthMonth == '' && birthYear == ''){
        return false;
    }
    if (birthDay == '' || birthMonth == '' || birthYear == ''){
        return false;
    }

    return true;
}