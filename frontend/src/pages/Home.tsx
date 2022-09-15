import meme from '../meme.png';
import { ReactElement } from 'react';
import { useHistory } from 'react-router';

const Home = (): ReactElement => {
  const history = useHistory();
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
      <p
        style={{
          fontWeight: 600,
          fontSize: "32px"
        }}
      >
        Hello! Welcome to Cindy's jank workshop practices
      </p>
      <img src={meme} className="App-logo" alt="logo" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%"
        }}
      >
        <button
          onClick={() => {
            history.push("/get-practice")
          }}
        >practice 1</button>
        <button
          onClick={() => {
            history.push("/update-practice")
          }}
        >practice 2</button>
        <button
          onClick={() => {
            history.push("/delete-practice")
          }}
        >practice 3</button>
      </div>
    </div>
  )
}

export default Home;