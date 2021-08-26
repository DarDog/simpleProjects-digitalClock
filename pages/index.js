const dateContainer = document.querySelector('.digital-clock'),
    dayContainer = dateContainer.querySelector('.digital-clock__day'),
    hoursContainer = dateContainer.querySelector('.digital-clock__hour'),
    minutesContainer = dateContainer.querySelector('.digital-clock__minute');

const dayList = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

const getDate = () => {
  const date = new Date(),
      dayNumber = date.getDay(),
      hours = date.getHours(),
      minutes = date.getMinutes();

  dayContainer.textContent = dayList[dayNumber];
  hoursContainer.textContent = hours.length < 2 ? '0' + hours : hours;
  minutesContainer.textContent = minutes.length < 2 ? '0' + minutes : minutes;

  setTimeout(getDate, 200)
}

window.addEventListener('load', getDate)