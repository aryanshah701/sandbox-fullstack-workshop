import { ReactElement, useState } from "react";
import { useHistory } from "react-router";
import { Person } from "../utils/types";

const PracticeTwo = (): ReactElement => {
  const history = useHistory();
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [team, setTeam] = useState<string>("");
  const [data, setData] = useState<Person[]>([]);

  return (
    <div
      style={{
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div
        style={{
          marginBottom: "50px",
        }}
      >
        PRACTICE 2:
        <br />
        1. Fill out information in the inputs :)
        <br />
        2. Add your service endpoint
        <br />
        3. Add functionalities in backend/src/index.js
      </div>
      {/* Just ignore this junk */}
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        role:
        <input
          type="text"
          name="role"
          onChange={(e) => setRole(e.target.value)}
        />
      </label>
      <br />
      <label>
        age:
        <input
          type="text"
          name="age"
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />
      <label>
        team:
        <input
          type="text"
          name="team"
          onChange={(e) => setTeam(e.target.value)}
        />
      </label>
      <br />
      <input
        type="submit"
        value="Submit"
        disabled={!name || !age || !role || !team}
        onClick={() => {
          /**
           * TODO: Use your newly added service method to add a member and update the UI like so
           * services.<service_name>.then((res) => setData(res.data))
           */
          console.log("SET STUFF");
        }}
      />
      <button onClick={() => history.push("/")}>GO BACK</button>
      {data.map((item: Person) => {
        return (
          <div key={item.name}>
            this person's name is {item.name}, their role is {item.role}, theey
            are {item.age} years old, and they are on the {item.team}
          </div>
        );
      })}
    </div>
  );
};

export default PracticeTwo;
