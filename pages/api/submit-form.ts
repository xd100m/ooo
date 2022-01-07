import { pg } from "../../components/api/knex";

export default async function handler(req, res) {
  const check = [
    req.body.email,
    req.body.first_name,
    req.body.last_name,
    req.body.phone,
    req.body.address,
    req.body.zip_code,
    req.body.birthdayMonth,
    req.body.birthdayDay,
    req.body.birthdayYear,
  ];

  if (check.includes(undefined) || check.includes(null)) {
    res.status(400).json({ message: "Please provide all the required fields" });
    return;
  }

  // Validate fields
  const {
    email,
    first_name,
    last_name,
    phone,
    address,
    zip_code,
    birthdayMonth,
    birthdayDay,
    birthdayYear,
  } = req.body;

  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if (!emailRegex.test(email)) {
    res.status(400);
    return;
  }

  if (first_name.length === 0 || last_name.length === 0) {
    res.status(400);
    return;
  }

  if (phone.length === 0 || address.length === 0 || zip_code.length === 0) {
    res.status(400);
    return;
  }

  if (Number(birthdayMonth) < 1 || Number(birthdayMonth) > 12) {
    res.status(400);
    return;
  }

  if (
    isNaN(Number(birthdayDay)) ||
    Number(birthdayDay) < 1 ||
    Number(birthdayDay) > 31
  ) {
    res.status(400);
    return;
  }

  if (isNaN(Number(birthdayYear)) || birthdayYear.length != 4) {
    res.status(400);
    return;
  }

  // Add records to database
  await pg("submissions")
    .insert({
      email,
      first_name,
      last_name,
      phone,
      address,
      zip_code,
      birthday: `${birthdayYear}-${birthdayMonth}-${birthdayDay}`,
    })
    .catch((err) => {
      console.log(err);
    });

  res.json({ message: "You got it" });
}
