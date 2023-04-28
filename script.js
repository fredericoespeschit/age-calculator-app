const send = document.querySelector("#send-info");

send.addEventListener("click", function (event) {
  event.preventDefault();
  const day = document.getElementById("day-date");
  const day_date = day.value;

  const month = document.getElementById("month-date");
  const month_date = month.value;

  const year = document.getElementById("year-date");
  const year_date = year.value;

  const result = "Dia" + day_date + " Ano" + year_date + " Mês " + month_date

  console.log(result);

})
