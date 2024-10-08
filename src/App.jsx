import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import { Button, Link, SvgIcon, Typography } from "@mui/material";
import PrimaryButton from "./components/Button/PrimaryButton";
import { DeleteOutline } from "@mui/icons-material";
import SecondaryButton from "./components/Button/SecondaryButton";
import MinimalButton from "./components/Button/MinimalButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Typography variant="h2" sx={{ mt: 6, mb: 3, color: "primary.light" }}>
        <LightBulbIcon sx={{ mr: 1, verticalAlign: "middle" }} />
        {"Pro tip: See more "}
        <Link href="https://mui.com/material-ui/getting-started/templates/">
          templates
        </Link>
        {" in the Material UI documentation."}
      </Typography>

      <PrimaryButton title={"Label"} startIcon={<DeleteOutline />} />

      <PrimaryButton
        title={"Label"}
        startIcon={<DeleteOutline />}
        size="medium"
      />

      <PrimaryButton
        title={"Label"}
        startIcon={<DeleteOutline />}
        size="large"
      />

      <div>
        <SecondaryButton
          title={"Label"}
          startIcon={<DeleteOutline />}
          size="large"
          onButtonClick={() => console.log("Button clicked")}
          isDisabled={false}
        />
      </div>

      <div>
        <MinimalButton title={"Label"} startIcon={<DeleteOutline />} />
      </div>
    </>
  );
}

function LightBulbIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
  );
}

export default App;
