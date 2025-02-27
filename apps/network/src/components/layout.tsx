import MyNetworkContainer from "../containers/my-network-container";
import { wrapper, left, center } from "./layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={wrapper}>
      <div className={left}>
        <MyNetworkContainer />
      </div>
      <div className={center}>{children}</div>
    </div>
  );
};

export default Layout;
