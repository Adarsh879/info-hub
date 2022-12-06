import { React, Component, useContext } from "react";
import logo from "../static/image/logo.jpg";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import "../static/css/header.css";
import { Avatar, Button, Input } from "@material-ui/core";
import { AuthContext } from "../store/auth";
import { Link } from "react-router-dom";

// class Header extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="header">
//         <div className="header__logo">
//           <img src={logo} alt="" />
//         </div>
//         <div className="header__icons">
//           <div className="active header__icon">
//             <HomeIcon />
//           </div>
//           <div className="header__icon">
//             <FeaturedPlayListOutlinedIcon />
//           </div>
//           <div className="header__icon">
//             <AssignmentTurnedInOutlinedIcon />
//           </div>
//           <div className="header__icon">
//             <PeopleAltOutlinedIcon />
//           </div>
//           <div className="header__icon">
//             <NotificationsOutlinedIcon />
//           </div>
//           <div className="header__input">
//             <SearchIcon />
//             <input type="text" placeholder="Search questions" />
//           </div>
//           <div className="qHeader__Rem">
//             <div className="qHeader__avatar">
//               <Avatar className="Avatar" />
//             </div>
//             <LanguageIcon />
//             <Button>Ask Question</Button>
//           </div>
//           <div className={styles.userInfo}>
//             <p>
//               Welcome{" "}
//               <Link
//               // href="/users/[user]"
//               // as={`/users/${authState.userInfo.username}`}
//               >
//                 <a>{authState.userInfo.username}!</a>
//               </Link>
//             </p>
//             <a onClick={() => logout()}>log out</a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

function Header() {
  const { authState, logout } = useContext(AuthContext);

  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <div className="header__icons">
        <div className="active header__icon">
          <HomeIcon />
        </div>
        <div className="header__icon">
          <FeaturedPlayListOutlinedIcon />
        </div>
        <div className="header__icon">
          <AssignmentTurnedInOutlinedIcon />
        </div>
        <div className="header__icon">
          <PeopleAltOutlinedIcon />
        </div>
        <div className="header__icon">
          <NotificationsOutlinedIcon />
        </div>
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search questions" />
        </div>
        <div className="qHeader__Rem">
          <div className="qHeader__avatar">
            <Avatar className="Avatar" />
          </div>
          <LanguageIcon />
          <Button>
            <Link to="/ask">Ask Question</Link>
          </Button>
        </div>
        <div style={{ flex: 1 }}></div>
        <div className="userInfo">
          <p>
            Welcome{" "}
            <Link
            // href="/users/[user]"
            // as={`/users/${authState.userInfo.username}`}
            >
              <a>{authState.userInfo.username}!</a>
            </Link>
          </p>
          <a onClick={() => logout()}>log out</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
