import BiotechIcon from "@mui/icons-material/Biotech";
import SideBar from "./SideBar";
import "./index.css";

export default function LeftBar() {
  return (
    <div className="side-bar">
      <div className="logo">
        <BiotechIcon />
        <p className="logo-text">Sphore</p>
      </div>
      <SideBar />
    </div>
  );
}
