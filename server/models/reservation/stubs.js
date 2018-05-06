import Reservation from "./reservation.model";

export function generateReservations() {
  Reservation.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const reservation1 = new Reservation({
      organizer: "Andrii Zubrytskyi",
      university:
        "Національний технічний університет України 'Київський політехнічний інститут'",
      building: "1",
      description: "Meetup about open source",
      room: "202-18",
      startTime: new Date(),
      endTime: new Date(),
      status: "Очікує підтверждення"
    });
    const reservation2 = new Reservation({
      organizer: "Vitalii Klichko",
      university:
        "Національний технічний університет України 'Київський політехнічний інститут'",
      building: "1",
      description: "Lection about smart city",
      room: "202-18",
      startTime: new Date(),
      endTime: new Date(),
      status: "Підтверджено"
    });

    Reservation.create([reservation1, reservation2], error => {
      if (error) {
        console.log(error);
      } else {
        console.log("Reservations are generated");
      }
    });
  });
}
