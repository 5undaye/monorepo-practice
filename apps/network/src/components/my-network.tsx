import * as css from "./my-network.css";
import { type MyNetworkType } from "../types";
import { useEffect } from "react";

interface MyNetworkProps {
  myNetwork: MyNetworkType | null;
  fetchMyNetwork: () => Promise<void>;
}

const MyNetwork = ({ myNetwork, fetchMyNetwork }: MyNetworkProps) => {
  useEffect(() => {
    fetchMyNetwork();
  }, [fetchMyNetwork]);

  if (myNetwork === null) {
    return null;
  }

  const {
    connectionCount,
    contactCount,
    eventCount,
    pageCount,
    user: { picture, name, email },
  } = myNetwork;

  return (
    <div>
      <div className={css.topArea}>
        <span className={css.topAreaTitle}>인맥 관리</span>
      </div>
      <div className={css.topAreaLinks}>
        <div className={css.topAreaLink}>
          <div>1촌</div>
          <div className={css.topAreaLinkCount}>{connectionCount}</div>
        </div>
        <div className={css.topAreaLink}>
          <div>연락처</div>
          <div className={css.topAreaLinkCount}>{contactCount}</div>
        </div>
        <div className={css.topAreaLink}>
          <div>이벤트</div>
          <div className={css.topAreaLinkCount}>{eventCount}</div>
        </div>
        <div className={css.topAreaLink}>
          <div>페이지</div>
          <div className={css.topAreaLinkCount}>{pageCount}</div>
        </div>
      </div>
      <div className={css.bottomArea}>
        <img className={css.img} src={picture} />
        <div className={css.name}>{name}</div>
        <div className={css.email}>{email}</div>
      </div>
    </div>
  );
};

export default MyNetwork;
