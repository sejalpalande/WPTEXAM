import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container-fluid m-0 p-0">
      <Header />
      <contains />
    </div>
  );
}

function Header() {
  const [title, settitle] = useState("MyChatApp");
  const [id, setid] = useState("210940856324");
  const [name, setname] = useState("Sejal P");

  return (
    <>
      <div
        className="container-fluid row bg-secondary m-0 p-0 align-items-center"
        style={{ height: "50px" }}
      >
        <div className="col">
          <div>
            <span className="fw-bold text-light" style={{}}>
              {title}
            </span>
            <span className="text-light" style={{ fontSize: "10px" }}>
              by {name}
            </span>
            <span className="text-light" style={{ fontSize: "10px" }}>
              id:{id}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function contains() {
  const send = async () => {
    if (msg === "") {
      alert("Empty message is not allowed.");
      return;
    }

    const url = `https://localhost:4000/send`;
    const data = {
      msg: msg,
    };

    await axios.post(url, data);
    setmsg("");
    alert("sent");
  };

  const [msg, setmsg] = useState("");
  const msghandler = (event) => {
    setmsg(event.target.value);
  };

  return (
    <div className="container-fluid m-0 p-0 mt=3 mx-2">
      <div className="w-100">
        <input
          className="me-2"
          style={{ width: "70vw" }}
          type="text"
          placeholder="Lets chat here..."
          value={msg}
          onChange={msghandler}
        />
        <input
          type="button"
          style={{ width: "20vw" }}
          value="send"
          onClick={send}
        />
      </div>
    </div>
  );
}

export default App;
