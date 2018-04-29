import Reservation from './reservation.model';

export function generateReservations () {
    Reservation.count().exec((err, count) => {
        if (count > 0) {
          return;
        }
    
        const reservation1 = new Reservation({ 
            organizer: 'Andrii Zubrytskyi',
            description: 'Meetup about open source',
            room: '202-18',
            time: new Date(),
            duration: '3 hours',
        });
        const reservation2 = new Reservation({ 
            organizer: 'Vitalii Klichko',
            description: 'Lection about smart city',
            room: '202-18',
            time: new Date(),
            duration: '3 hours',
        });

        Reservation.create([reservation1, reservation2], (error) => {
          if (error) {
            console.log(error);
          } else {
              console.log('Reservations are generated')
          }
        });
      });
}