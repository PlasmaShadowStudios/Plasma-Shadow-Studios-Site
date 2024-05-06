"use client";
import styles from "./Header.module.scss";
import GameLogo from "../../images/Robots & Things Logo.png";
import Image from "next/image";

import { useState } from "react";
import PrimaryButton from "../Button/Button";
import useIsMobile from "./useIsMobile";

const headerLinks = ["/", "/updates", "/demo", "/screenshots", "/videos"];
const headerNames = ["About", "Updates", "Demo", "Screenshots", "Videos"];

interface Props {
  currentPage?: string;
}

const Header = ({ currentPage = "" }: Props) => {
  // Hide link menu if not on mobile
  const [showLinkMenu, setShowLinkMenu] = useState(
    true
    //!useIsMobile(global.window && window.innerWidth)
  );

  return (
    <div className={styles.appHeader}>
      <header>
        <PrimaryButton
          className={styles.hamburgerButton}
          variant={"text"}
          text="≡"
          onClick={() => {
            setShowLinkMenu(!showLinkMenu);
          }}
        />
        <Image
          src={GameLogo}
          quality={100}
          width={96}
          onClick={() => {
            window.location.replace(`/${process.env.REACT_APP_BASE_URL}`);
          }}
          className={styles.logo}
          alt="Robots & Things"
        />

        <div className={showLinkMenu ? styles.links : styles.hideLinks}>
          {headerLinks.map((headerLink, index) => (
            <a href={`${headerLink}`} key={headerLink}>
              <p
                className={
                  currentPage === headerNames[index] ? styles.underline : ""
                }
              >
                {headerNames[index]}
              </p>
            </a>
          ))}
        </div>
        {!showLinkMenu && (
          <div className={styles.links}>
            <div className={styles.fakeLinks}>
              <p className={styles.underline}>{`${currentPage}`}</p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
