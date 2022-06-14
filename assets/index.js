var calendarEl = document.getElementById("calendar");
var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: "dayGridMonth",
  selectable: true,
  unselectAuto: true,
  dateClick: function (info) {
     // console.log(info.dateStr);
     // maybe save date and prompt in database
    var title = prompt("add client name and meeting time");

    if (title) {
      calendar.fullCalendar('renderEvent', {
          title: title,
          start: start,
          end: end,
      }, true);
    }
    calendar.addEvent({
      title: title,
      start: info.dateStr,
      allDay: true,
    });
    calendar.post({
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
