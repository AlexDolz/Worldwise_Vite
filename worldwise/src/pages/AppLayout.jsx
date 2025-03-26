import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import s from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={s.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
