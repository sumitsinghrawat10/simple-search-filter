import React, { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  const a = ["sun", "mon", "tue", "wed", "thrus", "fri", "sat"];

  const data = a.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );
  const changeD = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <center>
        {" "}
        <h1>Search Filter</h1>
        <input onChange={changeD} />
        {data.map((d) => (
          <h1> {d} </h1>
        ))}
      </center>
    </div>
  );
};

export default App;
