import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>NBA</h2>
      <Link to="/western">Western</Link>
      <Link to="eastern">Eastern</Link>
      
    </div>
  );
}
