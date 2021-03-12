import React, {useState} from "react";
import styled from "@emotion/styled";
import {Layout} from "antd";

const {Content} = Layout;

const SubHeader = () => {
  return (
    <div
      className="subheader py-2 py-lg-6 subheader-transparent"
      id="kt_subheader"
    >
      <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        {/*begin::Info*/}
        <div className="d-flex align-items-center flex-wrap mr-1">
          {/*begin::Page Heading*/}
          <div className="d-flex align-items-baseline flex-wrap mr-5">
            {/*begin::Page Title*/}
            <h5 className="text-dark font-weight-bold my-1 mr-5">
              Setup your profile
            </h5>
          </div>
          {/*end::Page Heading*/}
        </div>
        {/*end::Info*/}
        {/*begin::Toolbar*/}
      </div>
    </div>
  );
};

const PageStyled = styled(Layout)``;

export default SubHeader;
