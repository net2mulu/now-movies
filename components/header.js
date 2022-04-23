import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { rem } from "polished";

const Header = ({ isDark }) => {
  return (
    <HeaderStyled isDark={isDark}>
      <div className="container">
        <div className="logo">
          <Image
            src="/images/logo.png"
            width={30}
            height={30}
            alt="Site Logo"
          />
          <span className="logo-text">Now Movies</span>
        </div>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: ${(props) => (props.isDark ? "#000000" : "#efefef")};
  padding: 20px;

  .logo {
    display: flex;
    align-items: center;

    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 20px;
    }
  }
`;

export default Header;
