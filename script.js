const send = document.querySelector("#send-info");

send.addEventListener("click", function (event) {
    event.preventDefault();
    const day = document.getElementById("day-date");
    const day_date = day.value;

    const month = document.getElementById("month-date");
    const month_date = month.value;

    const year = document.getElementById("year-date");
    const year_date = year.value;

    // const result = "Dia" + day_date + " Ano" + year_date + " Mês " + month_date
    //Como calcular os anos de vida (ano atual - ano de nascimento)
    const year_life = 2023 - year_date;

    //Como calcular os meses de vida (idade x 12)
    const month_life = year_life * 12;

    //Como calcular os dias de vida (idade em anos * 365) // é preciso tratar, pois nem todo ano tem 365 dias
    const days_life = year_life * 365;

    document.querySelector("#years").innerHTML = year_life;
    document.querySelector("#months").innerHTML = month_life;
    document.querySelector("#days").innerHTML = days_life;
    // console.log(result);
});
