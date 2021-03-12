import React, {useState} from "react";
import styled from "@emotion/styled";
import {Layout} from "antd";
import DashboardLayout from "../../container/layout/dashboard.container";

const {Content} = Layout;

const Test = () => {
  return (
    <DashboardLayout>
      <div>Test</div>
    </DashboardLayout>
  );
};

const PageStyled = styled(Layout)``;

export default Test;
