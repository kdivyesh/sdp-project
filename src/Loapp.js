import "./App.css";
import { FcLibrary} from "react-icons/fc";
import Form from "./components/Form";
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
function Loapp() {
  const navigate = useNavigate()
  return (
    <div
      className="App container"
      style={{ maxWidth: 500, margin: "1rem auto" }}
    >
      <h1 className="display-1 my-5">
        <FcLibrary /> Loan Calculator{" "}
      </h1>
      <Form />
      <Button onClick={()=>{navigate("/Home")}}> Home</Button>
    </div>
  );
}

export default Loapp;