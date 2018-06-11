import User from "./user.model";
import bcrypt from "bcryptjs";

export function generateUsers() {
  User.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const superadmin = new User({
      email: "superadmin@gmail.com",
      name: "Супер",
      surname: "Адміністратор",
      mobileNumber: "+380000000000",
      ocuppation: "Адміністратор",
      password: bcrypt.hashSync("superadmin", 8),
      role: "admin"
    });

    const user = new User({
      email: "user@gmail.com",
      name: "Користувач",
      surname: "Користувач",
      mobileNumber: "+380000000000",
      ocuppation: "Користувач",
      password: bcrypt.hashSync("user", 8),
      role: "user"
    });

    User.create([superadmin, user], error => {
      if (error) {
        console.log(error);
      } else {
        console.log("Users are generated");
      }
    });
  });
}
