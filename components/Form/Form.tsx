import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";

const fieldStyle = "border border-gray-500 w-full px-2 py-2 mb-3 rounded-lg";
const labelStyle = "font-bold text-lg";

interface FormFields {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  zip_code: string;
  birthdayMonth: string;
  birthdayDay: string;
  birthdayYear: string;
}

export default function Form() {
  const [email, setEmail] = useState<string>("");
  const [first_name, setFirstName] = useState<string>("");
  const [last_name, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [zip_code, setZipCode] = useState<string>("");
  const [birthdayMonth, setBirthdayMonth] = useState<string>("1");
  const [birthdayDay, setBirthdayDay] = useState<string>("");
  const [birthdayYear, setBirthdayYear] = useState<string>("");

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const { data, error, isLoading, mutate } = useMutation(
    (data: FormFields) => {
      return axios.post("/api/submit-form", data);
    },
    {
      onError: (err) => {
        console.log("Error!!! " + err);
      },
      onSuccess: (data) => {
        window.location.href = process.env.NEXT_PUBLIC_FORM_REDIRECT;
      },
    }
  );

  const handleSubmit = () => {
    setErrorMsg(null);

    // Validate form fields
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (!emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email address");
      return;
    }

    if (first_name.length === 0 || last_name.length === 0) {
      setErrorMsg("Please enter a valid first and last name.");
      return;
    }

    if (phone.length === 0 || address.length === 0 || zip_code.length === 0) {
      setErrorMsg("Please enter a valid phone, address and zip code");
      return;
    }

    if (Number(birthdayMonth) < 1 || Number(birthdayMonth) > 12) {
      setErrorMsg("Please select a valid birthday month.");
      return;
    }

    if (
      isNaN(Number(birthdayDay)) ||
      Number(birthdayDay) < 1 ||
      Number(birthdayDay) > 31
    ) {
      setErrorMsg("Please enter a valid birthday date, between 1 and 31");
      return;
    }

    if (isNaN(Number(birthdayYear)) || birthdayYear.length != 4) {
      setErrorMsg("Please enter a valid birth-year");
      return;
    }

    mutate({
      email,
      first_name,
      last_name,
      phone,
      address,
      zip_code,
      birthdayMonth,
      birthdayDay,
      birthdayYear,
    });
  };

  return (
    <div>
      <p className={labelStyle}>Email</p>
      <p className="text-gray-600 italic">
        Be sure to put your real email, this is how we contact winners!
      </p>
      <input
        type="text"
        className={fieldStyle}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <div className="flex justify-between">
        <div className="w-1/2 mr-3">
          <p className={labelStyle}>First Name</p>
          <input
            type="text"
            className={fieldStyle}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="w-1/2 ml-3">
          <p className={labelStyle}>Last Name</p>
          <input
            type="text"
            className={fieldStyle}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
      </div>

      <p className={labelStyle}>Address</p>
      <input
        type="text"
        className={fieldStyle}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />

      <div className="flex justify-between">
        <div className="w-1/2 mr-3">
          <p className={labelStyle}>Phone</p>
          <input
            type="text"
            className={fieldStyle}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="w-1/2 ml-3">
          <p className={labelStyle}>Zip Code</p>
          <input
            type="text"
            className={fieldStyle}
            onChange={(e) => {
              setZipCode(e.target.value);
            }}
          />
        </div>
      </div>

      <p className={labelStyle}>Birthday</p>
      <div className="flex justify-evenly">
        <select
          className={`${fieldStyle} mr-2`}
          style={{ flex: 3 }}
          onChange={(e) => {
            setBirthdayMonth(e.target.value);
          }}
        >
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <input
          type="text"
          placeholder="Day"
          className={`${fieldStyle} mx-2`}
          style={{ flex: 1 }}
          onChange={(e) => {
            setBirthdayDay(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Year"
          className={`${fieldStyle} ml-2`}
          style={{ flex: 1 }}
          onChange={(e) => {
            setBirthdayYear(e.target.value);
          }}
        />
      </div>

      {errorMsg !== null && (
        <p className="text-red-500 text-xl my-4">{errorMsg}</p>
      )}

      <p className="text-gray-400 mb-1">
        By clicking Claim Offer you agree that you are at least 18 years old and
        you agree to our Privacy Policy.{" "}
      </p>
      <button
        className="bg-blue-600 text-white block w-full py-4 text-2xl rounded-lg"
        onClick={handleSubmit}
      >
        <p>CLAIM YOUR FREE TESLA</p>
      </button>
    </div>
  );
}
