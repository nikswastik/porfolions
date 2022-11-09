import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Contact.css";
export default function Contact() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const dataHandler = (value, type) => {
    if (type === "email") {
      setEmail(value);
    } else if ((type === "phone")) {
      setPhone(value);
    } else {
      setMessage(value);
    }
  };


  return (
    <div>
     
      <Box
      className="contact-cntr"
      component="form"
      noValidate
      autoComplete="off"
    >
      <div className="feilds-one">
        <TextField
          className="email-feild feild"
          id="outlined-basic"
          value={email}
          label="Email"
          variant="outlined"
          onChange={(event) => {
            dataHandler(event.target.value, "email");
          }}
        />
        <TextField
          className="phone-feild feild"
          value={phone}
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          onChange={(event) => {
            dataHandler(event.target.value, "phone");
          }}
        />
      </div>
      <TextField
        className="message-feild feild"
        value={message}
        id="outlined-multiline-static"
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        onChange={(event) => {
          dataHandler(event.target.value, "message");
        }}
      />
    </Box>
    </div>
  );
}
