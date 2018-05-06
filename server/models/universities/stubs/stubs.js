import University from "../universities.model";
import { buildings } from "./kpi-buildings";
import { rooms } from "./kpi-rooms";
import _ from "lodash";

function groupRoomsByBuildings() {
  rooms.forEach(room => {
    const building = buildings.find(building =>
      _.endsWith(room["full_name"], "-" + building.name)
    );
    if (!building) {
      return;
    }
    room.building = building.name;
    if (!building.rooms) {
      building.rooms = [];
    } else {
      building.rooms.push(room);
    }
  });
}

export function generateUniversities() {
  University.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    groupRoomsByBuildings();

    const university1 = new University({
      title:
        "Національний технічний університет України 'Київський політехнічний інститут' ",
      description:
        "Найбільший технічний університет України дослідницького типу, один з провідних університетів Європи та світу.",
      address: "м. Київ, проспект Перемоги 37",
      telephone: "(044) 236-69-13",
      website: "http://kpi.ua",
      email: "pk@kpi.ua",
      city: "Київ",
      buildings
    });
    const university2 = new University({
      title: "Київський національний університет імені Тараса Шевченка",
      description:
        "Класичний університет дослідного зразка, провідний сучасний науково-навчальний центр України",
      address: "м. Київ, вул. Володимирська 64",
      telephone: "(044) 239 32 20",
      website: "http://www.univ.kiev.ua/ua/	",
      email: "office.chief@univ.net.ua	",
      city: "Київ",
      buildings: []
    });
    const university3 = new University({
      title:
        "Київський національний економічний університет ім. Вадима Гетьмана ",
      description:
        "Загалом в університеті навчається більше 36 тис. студентів. Тільки у базовому навчальному закладі їх навчають: 8 академіків, та член-кореспондентів Національної академії України і галузевих академій, понад 127 професорів, докторів наук, 507 кандидатів наук, доцентів.",
      address: "м. Київ, проспект Перемоги 54/1",
      telephone: "(044) 371-61-12",
      website: "http://kneu.edu.ua/ua/",
      email: "prkom@kneu.edu.ua	",
      city: "Київ",
      buildings: []
    });
    const university4 = new University({
      title: "Національний університет «Києво-Могилянська академія»",
      description:
        "Заснований 1615 року. Розміщується в корпусах історичної Києво-Могилянської академії. НаУКМА позиціонує себе як проукраїнський, національно та політично свідомий вищий навчальний заклад.",
      address: "м. Київ, вул. Г.Сковороди 2",
      telephone: "(044) 417-84-61",
      website: "http://www.ukma.edu.ua/",
      email: "neven@ukma.kiev.ua ",
      city: "Київ",
      buildings: []
    });

    University.create(
      [university1, university2, university3, university4],
      error => {
        if (error) {
          console.log(error);
        } else {
          console.log("Universitys are generated");
        }
      }
    );
  });
}
