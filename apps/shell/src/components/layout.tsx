import { Link, NavLink, Outlet } from "react-router-dom";

import { appEduBasename, appJobBasename, appNetworkBasename, appPostingBasename } from "../constants/prefix";
import { Button, Icon } from "@career-up/ui-kit";
import { useAuth0 } from "@auth0/auth0-react";
import { useShellNavigateListener } from "@career-up/shell-router";

const Layout = () => {
  useShellNavigateListener();

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({ appState: { returnTo: "/" } });
  };

  const handleLogout = async () => {
    await logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <div>
      <header className="fixed top-0 left-0 w-screen z-[105] bg-white border-b border-b-[rgba(0,0,0,0.2)]">
        <div className="flex items-center mx-auto min-h-full max-w-6xl">
          <Link to="/" className="flex items-center gap-3 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="4" r="2" />
              <circle cx="18" cy="8" r="2" />
              <circle cx="20" cy="16" r="2" />
              <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
            </svg>
            <span>Find Me</span>
          </Link>
          {!isAuthenticated && (
            <div className="ml-10">
              <Button onClick={handleLogin}>Login</Button>
            </div>
          )}
          {isAuthenticated && (
            <div className="ml-10">
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          )}
          <nav className="ml-auto min-h-[52px]">
            <ul className="flex flex-nowrap list-none opacity-100 m-0">
              <li className="flex items-center">
                <NavLink
                  to={`${appPostingBasename}`}
                  className={({ isActive }) =>
                    `flex items-center flex-col cursor-pointer text-xl font-normal justify-center text-center relative min-h-[51px] min-w-[80px] border-b-2 ${
                      isActive
                        ? "text-black/90 border-b-black/90"
                        : "text-black/60 border-b-white hover:text-black/90 hover:border-b-black/90"
                    }`
                  }
                >
                  <Icon.Home />
                  <span className="text-[13px]">홈</span>
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to={`${appNetworkBasename}`}
                  className={({ isActive }) =>
                    `flex items-center flex-col cursor-pointer text-xl font-normal justify-center text-center relative min-h-[51px] min-w-[80px] border-b-2 ${
                      isActive
                        ? "text-black/90 border-b-black/90"
                        : "text-black/60 border-b-white hover:text-black/90 hover:border-b-black/90"
                    }`
                  }
                >
                  <Icon.UserFriends />
                  <span className="text-[13px]">인맥</span>
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to={`${appEduBasename}`}
                  className={({ isActive }) =>
                    `flex items-center flex-col cursor-pointer text-xl font-normal justify-center text-center relative min-h-[51px] min-w-[80px] border-b-2 ${
                      isActive
                        ? "text-black/90 border-b-black/90"
                        : "text-black/60 border-b-white hover:text-black/90 hover:border-b-black/90"
                    }`
                  }
                >
                  <Icon.LaptopCode />
                  <span className="text-[13px]">교육</span>
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to={`${appJobBasename}`}
                  className={({ isActive }) =>
                    `flex items-center flex-col cursor-pointer text-xl font-normal justify-center text-center relative min-h-[51px] min-w-[80px] border-b-2 ${
                      isActive
                        ? "text-black/90 border-b-black/90"
                        : "text-black/60 border-b-white hover:text-black/90 hover:border-b-black/90"
                    }`
                  }
                >
                  <Icon.Briefcase />
                  <span className="text-[13px]">채용공고</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="pt-[53px]">{isAuthenticated && <Outlet />}</div>
    </div>
  );
};

export default Layout;
