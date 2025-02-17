import { Link, Outlet } from "react-router-dom";
import { appPostingBasename } from "../constants/prefix";

const Layout = () => {
  return (
    <div>
      <header>
        <div>
          <Link to="/">
            <span>Career UP</span>
          </Link>

          <nav>
            <ul>
              <li>
                <Link to={`${appPostingBasename}`}>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to={`${appPostingBasename}/1`}>
                  <span>Posting 1</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
