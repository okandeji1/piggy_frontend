import React, {useState} from "react";
import styled from "@emotion/styled";
import {Layout} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setUser, selectUser} from "../../../store/slices/user.slice";
const {Content} = Layout;

const Header = () => {
  const user = useSelector(selectUser);
  return (
    <div
      id="kt_header"
      className="header flex-column header-fixed"
      style={{backgroundColor: "#E4F9FF"}}
    >
      {/*begin::Top*/}
      <div className="header-top">
        {/*begin::Container*/}
        <div className="container">
          {/*begin::Left*/}
          <div className="d-none d-lg-flex align-items-center mr-3">
            {/*begin::Logo*/}
            <a href="#" className="mr-20">
              <img
                alt="Logo"
                src="/assets/media/logos/piggy-1.png"
                className="max-h-35px"
              />
            </a>
            {/*end::Logo*/}
            {/*begin::Tab Navs(for desktop mode)*/}
            {/*begin::Tab Navs*/}
          </div>
          {/*end::Left*/}
          {/*begin::Topbar*/}
          <div className="topbar bg-primary">
            {/*begin::Search*/}
            {/*end::Search*/}
            {/*begin::Notifications*/}
            {/*begin::Quick panel*/}
            {/*begin::User*/}
            <div className="topbar-item" style={{backgroundColor: "#E4F9FF"}}>
              <div
                className="btn btn-icon btn-hover-transparent-white w-sm-auto d-flex align-items-center btn-lg px-2"
                id="kt_quick_user_toggle"
              >
                <div className="d-flex flex-column text-right pr-sm-3">
                  <span
                    className="opacity-50 font-weight-bold font-size-sm d-none d-sm-inline"
                    style={{color: "black"}}
                  >
                    Hi Sean
                  </span>
                  <span
                    className="font-weight-bolder font-size-sm d-none d-sm-inline"
                    style={{color: "black"}}
                  >
                    UX Designer
                  </span>
                </div>
                <span
                  className="symbol symbol-35"
                  style={{backgroundColor: "blue"}}
                >
                  <span className="symbol-label font-size-h5 font-weight-bold text-white bg-white-o-30">
                    <i className="far fa-bell" />
                  </span>
                </span>
              </div>
            </div>
            {/*end::User*/}
          </div>
          {/*end::Topbar*/}
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Top*/}
      {/*begin::Bottom*/}
      <div className="header-bottom">
        {/*begin::Container*/}
        <div className="container">
          {/*begin::Header Menu Wrapper*/}
          <div className="header-navs header-navs-left" id="kt_header_navs">
            {/*begin::Tab Navs(for tablet and mobile modes)*/}
            <ul
              className="header-tabs p-5 p-lg-0 d-flex d-lg-none nav nav-bold nav-tabs"
              role="tablist"
            >
              {/*begin::Item*/}
              <li className="nav-item mr-2">
                <a
                  href="#"
                  className="nav-link btn btn-clean active"
                  data-toggle="tab"
                  data-target="#kt_header_tab_1"
                  role="tab"
                >
                  Home
                </a>
              </li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="nav-item mr-2">
                <a
                  href="#"
                  className="nav-link btn btn-clean"
                  data-toggle="tab"
                  data-target="#kt_header_tab_2"
                  role="tab"
                >
                  Reports
                </a>
              </li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="nav-item mr-2">
                <a
                  href="#"
                  className="nav-link btn btn-clean"
                  data-toggle="tab"
                  data-target="#kt_header_tab_2"
                  role="tab"
                >
                  Orders
                </a>
              </li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="nav-item mr-2">
                <a
                  href="#"
                  className="nav-link btn btn-clean"
                  data-toggle="tab"
                  data-target="#kt_header_tab_2"
                  role="tab"
                >
                  Help Ceter
                </a>
              </li>
              {/*end::Item*/}
            </ul>
            {/*begin::Tab Navs*/}
            {/*begin::Tab Content*/}
            <div className="tab-content">
              {/*begin::Tab Pane*/}
              <div
                className="tab-pane py-5 p-lg-0 show active"
                id="kt_header_tab_1"
              >
                {/*begin::Menu*/}
                <div
                  id="kt_header_menu"
                  className="header-menu header-menu-mobile header-menu-layout-default"
                >
                  {/*begin::Nav*/}
                  <ul className="menu-nav">
                    <li className="menu-item" aria-haspopup="true">
                      <a href="#" className="menu-link">
                        <span className="menu-text">Portfolio</span>
                      </a>
                    </li>
                    <li
                      className="menu-item menu-item-submenu menu-item-rel"
                      data-menu-toggle="click"
                      aria-haspopup="true"
                    >
                      <a href="#" className="menu-link menu-toggle">
                        <span className="menu-text">Activity</span>
                        <span className="menu-desc" />
                        <i className="menu-arrow" />
                      </a>
                    </li>
                    <li
                      className="menu-item menu-item-submenu menu-item-rel"
                      data-menu-toggle="click"
                      aria-haspopup="true"
                    >
                      <a href="#" className="menu-link menu-toggle">
                        <span className="menu-text">Funding</span>
                        <span className="menu-desc" />
                        <i className="menu-arrow" />
                      </a>
                    </li>
                  </ul>
                  {/*end::Nav*/}
                </div>
                {/*end::Menu*/}
              </div>
              {/*begin::Tab Pane*/}
              {/*begin::Tab Pane*/}
              <div
                className="tab-pane p-5 p-lg-0 justify-content-between"
                id="kt_header_tab_2"
              >
                <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center">
                  {/*begin::Actions*/}
                  <a
                    href="#"
                    className="btn btn-light-success font-weight-bold mr-3 my-2 my-lg-0"
                  >
                    Latest Orders
                  </a>
                  <a
                    href="#"
                    className="btn btn-light-primary font-weight-bold my-2 my-lg-0"
                  >
                    Customer Service
                  </a>
                  {/*end::Actions*/}
                </div>
                <div className="d-flex align-items-center">
                  {/*begin::Actions*/}
                  <a
                    href="#"
                    className="btn btn-danger font-weight-bold my-2 my-lg-0"
                  >
                    Generate Reports
                  </a>
                  {/*end::Actions*/}
                </div>
              </div>
              {/*begin::Tab Pane*/}
            </div>
            {/*end::Tab Content*/}
          </div>
          {/*end::Header Menu Wrapper*/}
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Bottom*/}
    </div>
  );
};

const PageStyled = styled(Layout)``;

export default Header;
