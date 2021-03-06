import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import Logom from "../assets/images/logos/logo.jpg"

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "NewRegister",
    href: "/NewRegister",
    icon: "bi bi-bell",
  },
 
  {
    title: "Posts",
    href: "/Posts",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Equipements",
    href: "/Equipements",
    icon: "bi bi-card-text",
  },
 
  {
    title: "Users",
    href: "/Users",
    icon: "bi bi-layout-split",
  },
 
  {
    title: "Reports",
    href: "/Reports",
    icon: "bi bi-link",
  },
  {
    title: "About",
    href: "/about",
    icon: "bi bi-people",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <img src={Logom} style={ {height:60}}/>
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
