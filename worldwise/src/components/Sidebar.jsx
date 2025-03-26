import AppNav from "./AppNav";
import Logo from "./Logo";
import s from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={s.sidebar}>
      <Logo />
      <AppNav />

      <p>List of cities</p>
      <footer className={s.footer}></footer>
      <p className={s.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </div>
  );
}

export default Sidebar;
