import React from "react";
import { CreditP, CreditWrapper } from "./CreditElements";

const Credits = () => {
  return (
    <>
      <CreditWrapper>
        <CreditP>
          Designed and Developed by <span><a href="https://www.linkedin.com/in/saujanyasood
" style={{textDecoration:"none", color: "#D7F8FF"}}>Saujanya Sood</a>.</span>
          <br />
          ©2022 IEEE – All rights reserved.
        </CreditP>
      </CreditWrapper>
    </>
  );
};

export default Credits;
