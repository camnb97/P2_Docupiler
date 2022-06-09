
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const clientRoutes = require('./clientRoutes');

router.use('/users', userRoutes);

router.use('/pets', petRoutes);
router.use('/client', clientRoutes);

var calendarEl = document.getElementById("calendar");
var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: "dayGridMonth",
  selectable: true,
  unselectAuto: true,
  dateClick: function (info) {
    // console.log(info.dateStr);
    // maybe save date and prompt in database
    var title = prompt("add client name and meeting time");

    calendar.addEvent({
      title: title,
      start: info.dateStr,
      allDay: true,
    });

  },
  select: function (info) {
    // alert("selected " + info.startStr + " to " + info.endStr);
  },
});

calendar.render();

