import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import {Layout} from "antd";
import DashboardLayout from "../../container/layout/dashboard.container";
import {useDispatch, useSelector} from "react-redux";
import {setUser, selectUser} from "../../store/slices/user.slice";
import {openNotification} from "../../components/notify";
import {useRouter} from "next/router";
import {setLoading, selectLoading} from "../../store/slices/loading.slice";

const {Content} = Layout;

const AccountSetup = () => {
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const Router = useRouter();
  const [accounts, setAccounts] = useState([]);

  const [state, setState] = useState({
    isLoading: false,

    formData: {
      phoneNumber: "",
      citizenship: "",
      gender: "",
      address: "",
      zipCode: "",
      maritalStatus: "",
      employmentStatus: "",
      employer: "",
      industryCategory: "",
      jobTitle: "",
      totalIncome: "",
      reason: "",
      description: "",
      horizon: "",
      riskTolerance: "",
      investmentObjective: "",
      saved: "",
      propertyValue: "",
      debtValue: "",
      stocks: "",
      bonds: "",
      mutualFunds: "",
      etf: "",
      account: "",
      thirdParty: "",
      politicallyEmployed: "",
      insider: "",
      // identification: null,
    },
  });
  // Fetch investment
  const fetchInvestments = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/get-investments`,
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${user?.accessToken}`,
          },
          method: "GET",
        }
      );
      const responseData = await response.json();
      if (responseData.success) {
        setAccounts(responseData.data);
      }
    } catch (error) {}
  };

  const handleChange = (e) => {
    setState({
      ...state,
      formData: {
        ...state.formData,
        [e.target.id]: e.target.value,
      },
    });
  };

  // This converts a blob type image to base64 encoded string
  const getBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(file);
  };
  // const fileTransform = (e) => {
  //   getBase64(e.target.files[0], (base64String) => {
  //     state.formData.identification = base64String;
  //     console.log(state.formData.identification);
  //   });
  // };

  const fileTransform = (e) => {
    state.formData.identification = e.target.files[0];
    // console.log(state.formData.identification);
    // setState({
    //   ...state,
    //   formData: {
    //     [state.formData.identification]: e.target.files[0],
    //   },
    // });
  };

  const submit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/complete-registration`,
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${user?.accessToken}`,
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          method: "POST",
          body: JSON.stringify({
            ...state.formData,
            // identification: state.formData.identification,
            // identification: undefined,
          }),
        }
      );

      const responseData = await response.json();
      if (responseData.success) {
        openNotification({
          type: "success",
          message: "Success",
          description: `${responseData.message}`,
        });
        Router.push("/dashboard/funding");
      } else {
        openNotification({
          type: "error",
          message: "Error",
          description: `Internal server error! \n ${JSON.stringify(
            responseData
          )}`,
        });
      }
    } catch (error) {
      openNotification({
        type: "error",
        message: "Error",
        description: `Internal server error! \n ${JSON.stringify(
          responseData.message
        )}`,
      });
    }
    dispatch(setLoading(false));
  };

  // On Page load effect
  // useEffect(() => {
  //   fetchInvestments();
  // }, []);
  return (
    <DashboardLayout>
      {/*begin::Subheader*/}
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
      {/*end::Subheader*/}
      {/*begin::Entry*/}
      <div className="d-flex flex-column-fluid">
        {/*begin::Container*/}
        <div className="container">
          <div className="card card-custom">
            <div className="card-body p-0">
              {/*begin::Wizard 6*/}
              <div
                className="wizard wizard-6 d-flex flex-column flex-lg-row flex-column-fluid"
                id="kt_wizard"
              >
                {/*begin::Container*/}
                <div className="wizard-content d-flex flex-column mx-auto py-10 py-lg-20 w-100 w-md-700px">
                  {/*begin::Nav*/}
                  <div className="d-flex flex-column-auto flex-column ">
                    {/*begin: Wizard Nav*/}
                    <div className="wizard-nav pb-lg-10 pb-3 d-flex flex-column align-items-center align-items-md-start">
                      {/*begin::Wizard Steps*/}
                      <div className="wizard-steps d-flex flex-column flex-md-row">
                        {/*begin::Wizard Step 1 Nav*/}
                        <div
                          className="wizard-step flex-grow-1 flex-basis-0"
                          data-wizard-type="step"
                          data-wizard-state="current"
                        >
                          <div className="wizard-wrapper pr-lg-7 pr-5">
                            <div className="wizard-icon">
                              <i className="wizard-check ki ki-check" />
                              <span className="wizard-number">1</span>
                            </div>
                            <div className="wizard-label mr-3">
                              {/* <h3 class="wizard-title">Step 1</h3> */}
                              <div className="wizard-desc">
                                Personal details
                              </div>
                            </div>
                            <span className="svg-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <polygon points="0 0 24 0 24 24 0 24" />
                                  <rect
                                    fill="#000000"
                                    opacity="0.3"
                                    transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)"
                                    x="7.5"
                                    y="7.5"
                                    width={2}
                                    height={9}
                                    rx={1}
                                  />
                                  <path
                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                  />
                                </g>
                              </svg>
                            </span>
                          </div>
                        </div>
                        {/*end::Wizard Step 1 Nav*/}
                        {/*begin::Wizard Step 2 Nav*/}
                        <div
                          className="wizard-step flex-grow-1 flex-basis-0"
                          data-wizard-type="step"
                        >
                          <div className="wizard-wrapper pr-lg-7 pr-5">
                            <div className="wizard-icon">
                              <i className="wizard-check ki ki-check" />
                              <span className="wizard-number">2</span>
                            </div>
                            <div className="wizard-label mr-3">
                              {/* <h3 class="wizard-title">Step 2</h3> */}
                              <div className="wizard-desc">
                                Employment information
                              </div>
                            </div>
                            <span className="svg-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <polygon points="0 0 24 0 24 24 0 24" />
                                  <rect
                                    fill="#000000"
                                    opacity="0.3"
                                    transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)"
                                    x="7.5"
                                    y="7.5"
                                    width={2}
                                    height={9}
                                    rx={1}
                                  />
                                  <path
                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                  />
                                </g>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div
                          className="wizard-step flex-grow-1 flex-basis-0"
                          data-wizard-type="step"
                        >
                          <div className="wizard-wrapper pr-lg-7 pr-5">
                            <div className="wizard-icon">
                              <i className="wizard-check ki ki-check" />
                              <span className="wizard-number">3</span>
                            </div>
                            <div className="wizard-label mr-3">
                              {/* <h3 class="wizard-title">Step 3</h3> */}
                              <div className="wizard-desc">
                                Anti Money Laundering
                              </div>
                            </div>
                            <span className="svg-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <polygon points="0 0 24 0 24 24 0 24" />
                                  <rect
                                    fill="#000000"
                                    opacity="0.3"
                                    transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)"
                                    x="7.5"
                                    y="7.5"
                                    width={2}
                                    height={9}
                                    rx={1}
                                  />
                                  <path
                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                  />
                                </g>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div
                          className="wizard-step flex-grow-1 flex-basis-0"
                          data-wizard-type="step"
                        >
                          <div className="wizard-wrapper pr-lg-7 pr-5">
                            <div className="wizard-icon">
                              <i className="wizard-check ki ki-check" />
                              <span className="wizard-number">4</span>
                            </div>
                            <div className="wizard-label mr-3">
                              {/* <h3 class="wizard-title">Step 4</h3> */}
                              <div className="wizard-desc">
                                Client Investor Profile
                              </div>
                            </div>
                            <span className="svg-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <polygon points="0 0 24 0 24 24 0 24" />
                                  <rect
                                    fill="#000000"
                                    opacity="0.3"
                                    transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)"
                                    x="7.5"
                                    y="7.5"
                                    width={2}
                                    height={9}
                                    rx={1}
                                  />
                                  <path
                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                  />
                                </g>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div
                          className="wizard-step flex-grow-1 flex-basis-0"
                          data-wizard-type="step"
                        >
                          <div className="wizard-wrapper pr-lg-7 pr-5">
                            <div className="wizard-icon">
                              <i className="wizard-check ki ki-check" />
                              <span className="wizard-number">5</span>
                            </div>
                            <div className="wizard-label mr-3">
                              {/* <h3 class="wizard-title">Step 4</h3> */}
                              <div className="wizard-desc">Setup Account</div>
                            </div>
                            <span className="svg-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <polygon points="0 0 24 0 24 24 0 24" />
                                  <rect
                                    fill="#000000"
                                    opacity="0.3"
                                    transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)"
                                    x="7.5"
                                    y="7.5"
                                    width={2}
                                    height={9}
                                    rx={1}
                                  />
                                  <path
                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                  />
                                </g>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div
                          className="wizard-step flex-grow-1 flex-basis-0"
                          data-wizard-type="step"
                        >
                          <div className="wizard-wrapper pr-lg-7 pr-5">
                            <div className="wizard-icon">
                              <i className="wizard-check ki ki-check" />
                              <span className="wizard-number">6</span>
                            </div>
                            <div className="wizard-label mr-3">
                              {/* <h3 class="wizard-title">Step 4</h3> */}
                              <div className="wizard-desc">
                                Preview &amp; Submit
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*end::Wizard Step 2 Nav*/}
                        {/*begin::Wizard Step 3 Nav*/}
                        {/*end::Wizard Step 3 Nav*/}
                      </div>
                      {/*end::Wizard Steps*/}
                    </div>
                    {/*end: Wizard Nav*/}
                  </div>
                  {/*end::Nav*/}
                  {/*begin::Form*/}
                  <form className="px-10" noValidate="novalidate" id="kt_form">
                    {/*begin: Wizard Step 1*/}
                    <div
                      className="pb-5"
                      data-wizard-type="step-content"
                      data-wizard-state="current"
                    >
                      {/*begin::Title*/}
                      <div className="pb-10 pb-lg-12 text-center text-md-left">
                        <h3 className="font-weight-bolder text-dark font-size-h2">
                          Enter your Personal Details
                        </h3>
                        {/* <div class="text-muted font-weight-bold font-size-h4">Already have an Account ? */}
                        {/* <a href="../login/login-4/signin.html" class="text-primary font-weight-bolder">Sign In</a></div> */}
                      </div>
                      {/*begin::Title*/}
                      {/*begin::Form Group*/}
                      <div className="row">
                        <div className="form-group mb-5 col-6">
                          <label htmlFor="username">Phone Number</label>
                          <input
                            ttype="number"
                            className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                            id="phoneNumber"
                            placeholder="What is your Phone Number"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group mb-5 col-6">
                          <label htmlFor="username">Citizenship</label>
                          <input
                            type="text"
                            className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                            id="citizenship"
                            placeholder="What is your Citizenship Country"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group mb-5 col-6">
                          <label htmlFor="username">Gender</label>
                          <input
                            type="text"
                            className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                            id="gender"
                            placeholder="What is your Gender"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group mb-5 col-6">
                          <label htmlFor="username">Address</label>
                          <input
                            type="text"
                            className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                            id="address"
                            placeholder="What is your Address"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group mb-5 col-6">
                          <label htmlFor="username">Zipcode</label>
                          <input
                            type="text"
                            className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                            id="zipCode"
                            placeholder="What is your Zipcode"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group mb-5 col-6">
                          <label htmlFor="username">Marital Status</label>
                          <input
                            type="text"
                            className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                            id="maritalStatus"
                            placeholder="What is your Marital Status"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pb-5" data-wizard-type="step-content">
                      <div className="pt-lg-0 pt-5 pb-15 text-center text-md-left">
                        <h3 className="font-weight-bolder text-dark font-size-h2">
                          Employment Details
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label className="font-size-h6 font-weight-bolder text-dark">
                              Employment Status
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                              id="employmentStatus"
                              placeholder="What is your Employment Status"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-group">
                            <label className="font-size-h6 font-weight-bolder text-dark">
                              If Employed, what is the name of your Employer
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                              id="employer"
                              placeholder="Employer"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-6">
                          {/*begin::Input*/}
                          <div className="form-group">
                            <label className="font-size-h6 font-weight-bolder text-dark">
                              Industry Category
                            </label>
                            <select
                              className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                              id="industryCategory"
                              value={state.formData.industryCategory}
                              onChange={handleChange}
                            >
                              <option value="">Select industry category</option>
                              <option value="human resources">
                                Human Resources
                              </option>
                            </select>
                            {/* <span class="form-text text-muted">Please enter your State.</span> */}
                          </div>
                          {/*end::Input*/}
                        </div>
                        <div className="col-xl-6">
                          {/*begin::Select*/}
                          <div className="form-group">
                            <label className="font-size-h6 font-weight-bolder text-dark">
                              Job Title
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                              id="jobTitle"
                              placeholder="What is your Job Title"
                              onChange={handleChange}
                            />
                          </div>
                          {/*end::Input*/}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-6">
                          {/*begin::Select*/}
                          <div className="form-group">
                            <label className="font-size-h6 font-weight-bolder text-dark">
                              Total Income
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                              id="totalIncome"
                              placeholder="What is your Total Income"
                              onChange={handleChange}
                            />
                          </div>
                          {/*end::Input*/}
                        </div>
                      </div>
                      {/*end::Row*/}
                    </div>
                    {/*end: Wizard Step 2*/}
                    {/*begin: Wizard Step 3*/}
                    <div className="pb-5" data-wizard-type="step-content">
                      {/*begin::Title*/}
                      <div className="pt-lg-0 pt-5 pb-15 text-center text-md-left">
                        <h3 className="font-weight-bolder text-dark font-size-h2">
                          Anti Money Laundering
                        </h3>
                        {/* <div class="text-muted font-weight-bold font-size-h4">Complete Your Signup And Become A Member!</div> */}
                      </div>
                      {/*end::Title*/}
                      {/*begin::Section*/}
                      <div className="form-group row">
                        <label className="col-9 col-form-label">
                          Would you be opening this account on behalf of a third
                          party
                        </label>
                        <div className="col-3 col-form-label">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-success">
                              <input
                                type="checkbox"
                                id="thirdParty"
                                onChange={handleChange}
                                value="yes"
                              />
                              <span />
                              Yes
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="thirdParty"
                                onChange={handleChange}
                                value="no"
                              />
                              <span />
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-9 col-form-label">
                          Are you a politically exposed person
                        </label>
                        <div className="col-3 col-form-label">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-success">
                              <input
                                type="checkbox"
                                id="politicallyEmployed"
                                onChange={handleChange}
                                value="yes"
                              />
                              <span />
                              Yes
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="politicallyEmployed"
                                onChange={handleChange}
                                value="no"
                              />
                              <span />
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-9 col-form-label">
                          Are you an insider or senior director of a publicly
                          traded company
                        </label>
                        <div className="col-3 col-form-label">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-success">
                              <input
                                type="checkbox"
                                id="insider"
                                onChange={handleChange}
                                value="yes"
                              />
                              <span />
                              Yes
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="insider"
                                onChange={handleChange}
                                value="no"
                              />
                              <span />
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-9">
                          {/*begin::Select*/}
                          <div className="form-group">
                            <label className="font-size-h6 font-weight-bolder text-dark">
                              Upload your Identification
                              <small>
                                eg: driver's license, national identity card etc
                              </small>
                            </label>
                            <input
                              type="file"
                              className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                              id="identification"
                              onChange={fileTransform}
                            />
                          </div>
                          {/*end::Input*/}
                        </div>
                      </div>
                      {/*end::Section*/}
                    </div>
                    <div className="pb-5" data-wizard-type="step-content">
                      {/*begin::Title*/}
                      <div className="pt-lg-0 pt-5 pb-15 text-center text-md-left">
                        <h3 className="font-weight-bolder text-dark font-size-h2">
                          Anti Money Laundering
                        </h3>
                        {/* <div class="text-muted font-weight-bold font-size-h4">Complete Your Signup And Become A Member!</div> */}
                      </div>
                      {/*end::Title*/}
                      {/*begin::Section*/}
                      <div className="form-group row">
                        <label className="col-3 col-form-label">
                          What is your main reason for investing
                        </label>
                        <div className="col-9 col-form-label">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-success">
                              <input
                                type="checkbox"
                                id="reason"
                                onChange={handleChange}
                                value="home purchase"
                              />
                              <span />
                              Home Purchase
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="reason"
                                onChange={handleChange}
                                value="retirement"
                              />
                              <span />
                              Retirement
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="reason"
                                onChange={handleChange}
                                value="emergency fund"
                              />
                              <span />
                              Emergency Fund
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="reason"
                                onChange={handleChange}
                                value="marriage"
                              />
                              <span />
                              Marriage
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="reason"
                                onChange={handleChange}
                                value="vacation"
                              />
                              <span />
                              Vacation
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="reason"
                                onChange={handleChange}
                                value="capital growth"
                              />
                              <span />
                              Capital Growth
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-6 col-form-label">
                          How would you describe your investment knowledge
                        </label>
                        <div className="col-6 col-form-label">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-success">
                              <input
                                type="checkbox"
                                id="description"
                                onChange={handleChange}
                                value="limited"
                              />
                              <span />
                              Limited
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="description"
                                onChange={handleChange}
                                value="average"
                              />
                              <span />
                              Average
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="description"
                                onChange={handleChange}
                                value="sophisticated"
                              />
                              <span />
                              Sophisticated
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-6 col-form-label">
                          What is your time Horizon
                          <span style={{fontSize: "8px"}}>
                            (You can withdraw funds at any time)
                          </span>
                        </label>
                        <div className="col-6 col-form-label">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-success">
                              <input
                                type="checkbox"
                                id="horizon"
                                onChange={handleChange}
                                value="limited"
                              />
                              <span />
                              Limited
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="horizon"
                                onChange={handleChange}
                                value="average"
                              />
                              <span />
                              Average
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="horizon"
                                onChange={handleChange}
                                value="sophisticated"
                              />
                              <span />
                              Sophisticated
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-6 col-form-label">
                          How would you describe your Risk Tolerance
                        </label>
                        <div className="col-6 col-form-label">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-success">
                              <input
                                type="checkbox"
                                id="riskTolerance"
                                onChange={handleChange}
                                value="low risk"
                              />
                              <span />
                              Low Risk
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="riskTolerance"
                                onChange={handleChange}
                                value="medium risk"
                              />
                              <span />
                              Medium Risk
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="riskTolerance"
                                onChange={handleChange}
                                value="high risk"
                              />
                              <span />
                              High Risk
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-6 col-form-label">
                          What is your Investment Objective
                        </label>
                        <div className="col-6 col-form-label">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-success">
                              <input
                                type="checkbox"
                                id="investmentObjective"
                                onChange={handleChange}
                                value="income"
                              />
                              <span />
                              Income
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="investmentObjective"
                                onChange={handleChange}
                                value="growth"
                              />
                              <span />
                              Growth
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="investmentObjective"
                                onChange={handleChange}
                                value="balanced"
                              />
                              <span />
                              Balanced
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-6 col-form-label">
                          How much do you have saved
                        </label>
                        <div className="col-6 col-form-label">
                          <input
                            type="text"
                            className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                            id="saved"
                            placeholder="250,000.00"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-6 col-form-label">
                          What is the value of your property and assets
                        </label>
                        <div className="col-6 col-form-label">
                          <input
                            type="text"
                            className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                            id="propertyValue"
                            placeholder="250,000.00"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-6 col-form-label">
                          What is the value of your debts
                        </label>
                        <div className="col-6 col-form-label">
                          <input
                            type="text"
                            className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                            id="debtValue"
                            placeholder="250,000.00"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-4 col-form-label">
                          How many years do you have with the following:
                        </label>
                        <div className="col-2 col-form-label">
                          <label>Stocks</label>
                          <input
                            type="text"
                            className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                            id="stocks"
                            placeholder="250,000.00"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-2 col-form-label">
                          <label>Bonds</label>
                          <input
                            type="text"
                            className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                            id="bonds"
                            placeholder="250,000.00"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-2 col-form-label">
                          <label>Mutual Funds</label>
                          <input
                            type="text"
                            className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                            id="mutualFunds"
                            placeholder="250,000.00"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-2 col-form-label">
                          <label>ETF</label>
                          <input
                            type="text"
                            className="form-control form-control-solid h-auto p-5 border-0 rounded-lg font-size-h6"
                            id="etf"
                            placeholder="250,000.00"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      {/*end::Section*/}
                    </div>
                    <div className="pb-5" data-wizard-type="step-content">
                      {/*begin::Title*/}
                      <div className="pt-lg-0 pt-5 pb-15 text-center text-md-left">
                        <h3 className="font-weight-bolder text-dark font-size-h2">
                          Setup your Account
                        </h3>
                        {/* <div class="text-muted font-weight-bold font-size-h4">Complete Your Signup And Become A Member!</div> */}
                      </div>
                      {/*end::Title*/}
                      {/*begin::Section*/}
                      <div className="form-group row">
                        <label className="col-9 col-form-label">
                          Do you have an existing investment account you would
                          like to transfer
                        </label>
                        <div className="col-12 col-form-label">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-success">
                              <input type="checkbox" name="Checkboxes5" />
                              <span />
                              Yes, i'd like to transfer an existing investment
                              account
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input type="checkbox" name="Checkboxes5" />
                              <span />
                              No, i'll start with a new piggyalpha account
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-9 col-form-label">
                          What type of account would you like to open
                        </label>
                        <div className="col-9 col-form-label">
                          <label
                            className="form-label"
                            style={{fontSize: "10px"}}
                          >
                            For investing
                          </label>
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-success">
                              <input
                                type="checkbox"
                                id="account"
                                onChange={handleChange}
                                value="RRSP"
                              />
                              <span />
                              RRSP
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="account"
                                onChange={handleChange}
                                value="TFSA"
                              />
                              <span />
                              TFSA
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="account"
                                onChange={handleChange}
                                value="NON-REGISTERED"
                              />
                              <span />
                              Non-registered
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="account"
                                onChange={handleChange}
                                value="JOINT"
                              />
                              <span />
                              Joint
                            </label>
                            <label className="checkbox checkbox-success ">
                              <input
                                type="checkbox"
                                id="account"
                                onChange={handleChange}
                                value="RESP"
                              />
                              <span />
                              RESP
                            </label>
                          </div>
                        </div>
                      </div>
                      {/*end::Section*/}
                    </div>
                    <div className="pb-5" data-wizard-type="step-content">
                      <div className="pt-lg-0 pt-5 pb-15 text-center text-md-left">
                        <h3 className="font-weight-bolder text-dark font-size-h2">
                          Preview
                        </h3>
                        <div className="form-group">
                          <label className="col-9 col-form-label">
                            Personal Information
                          </label>
                          <span
                            className="fa fa-pencil-alt"
                            style={{float: "right"}}
                          />
                        </div>
                      </div>
                      <div className="separator separator-solid my-7" />
                      <div className="pt-lg-0 pt-5 pb-15 text-center text-md-left">
                        <div className="form-group">
                          <label className="col-9 col-form-label">
                            Employment Information
                          </label>
                          <span
                            className="fa fa-pencil-alt"
                            style={{float: "right"}}
                          />
                        </div>
                      </div>
                      <div className="separator separator-solid my-7" />
                      <div className="pt-lg-0 pt-5 pb-15 text-center text-md-left">
                        <div className="form-group">
                          <label className="col-9 col-form-label">
                            Anti-Money Laundering
                          </label>
                          <span
                            className="fa fa-pencil-alt"
                            style={{float: "right"}}
                          />
                        </div>
                      </div>
                      <div className="separator separator-solid my-7" />
                      <div className="pt-lg-0 pt-5 pb-15 text-center text-md-left">
                        <div className="form-group">
                          <label className="col-9 col-form-label">
                            Client Investor Profile
                          </label>
                          <span
                            className="fa fa-pencil-alt"
                            style={{float: "right"}}
                          />
                        </div>
                      </div>
                      <div className="separator separator-solid my-7" />
                      <div className="pt-lg-0 pt-5 pb-15 text-center text-md-left">
                        <div className="form-group">
                          <label className="col-9 col-form-label">
                            Accounts
                          </label>
                          <span
                            className="fa fa-pencil-alt"
                            style={{float: "right"}}
                          />
                        </div>
                      </div>
                      <div className="separator separator-solid my-7" />
                      <div className="mt-10 text-center">
                        <a href="#">Review Your agreements</a>
                        <br />
                        <p
                          className="opacity-70 mr-4 text-muted font-weight-bold"
                          style={{marginBottom: "-2px", fontSize: "13px"}}
                        >
                          By checking the box below, you acknowledge that you
                          have read and agreed to the terms and
                        </p>
                        <p
                          className="opacity-70 mr-4 text-muted font-weight-bold"
                          setup
                          style={{fontSize: "13px"}}
                        >
                          conditions and agree to use electronic records and
                          signatures.
                        </p>
                        <label className="checkbox checkbox-success text-muted font-weight-bold">
                          <input type="checkbox" name="Checkboxes5" />
                          <span />
                          &nbsp; I agree to the Client Agreement and as of
                          today, I certify that the information I have provided
                          in the following is correct.
                        </label>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModalScrollable"
                        >
                          Launch completion modal
                        </button>
                      </div>
                    </div>
                    {/*end: Wizard Step 3*/}
                    {/*begin: Wizard Actions*/}
                    <div className="d-flex justify-content-between pt-7">
                      <div className="mr-2">
                        <button
                          type="button"
                          className="btn btn-light-primary font-weight-bolder font-size-h6 pr-8 pl-6 py-4 my-3 mr-3"
                          data-wizard-type="action-prev"
                        >
                          <span className="svg-icon svg-icon-md mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <polygon points="0 0 24 0 24 24 0 24" />
                                <rect
                                  fill="#000000"
                                  opacity="0.3"
                                  transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000)"
                                  x={14}
                                  y={7}
                                  width={2}
                                  height={10}
                                  rx={1}
                                />
                                <path
                                  d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997)"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                          Previous
                        </button>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="btn btn-primary font-weight-bolder font-size-h6 pl-8 pr-4 py-4 my-3"
                          data-wizard-type="action-submit"
                          onClick={submit}
                        >
                          Submit
                          <span className="svg-icon svg-icon-md ml-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <polygon points="0 0 24 0 24 24 0 24" />
                                <rect
                                  fill="#000000"
                                  opacity="0.3"
                                  transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)"
                                  x="7.5"
                                  y="7.5"
                                  width={2}
                                  height={9}
                                  rx={1}
                                />
                                <path
                                  d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary font-weight-bolder font-size-h6 pl-8 pr-4 py-4 my-3"
                          data-wizard-type="action-next"
                        >
                          Next
                          <span className="svg-icon svg-icon-md ml-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <polygon points="0 0 24 0 24 24 0 24" />
                                <rect
                                  fill="#000000"
                                  opacity="0.3"
                                  transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)"
                                  x="7.5"
                                  y="7.5"
                                  width={2}
                                  height={9}
                                  rx={1}
                                />
                                <path
                                  d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                        </button>
                      </div>
                    </div>
                    {/*end: Wizard Actions*/}
                  </form>
                  {/*end::Form*/}
                </div>
                {/*end::Container*/}
              </div>
              {/*end::Wizard 6*/}
            </div>
            {/*end::Wizard*/}
          </div>
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Entry*/}

      {/* Modal*/}
      <div
        className="modal fade"
        id="exampleModalScrollable"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="staticBackdrop"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body" style={{height: "auto", width: "auto"}}>
              <div className="pt-lg-0 pt-5 pb-15 text-center text-md-left">
                <div className="d-flex flex-center">
                  <a href="#">
                    <img
                      src="assets/media/logos/favicon.ico.png"
                      className="max-h-75px"
                      alt=""
                    />
                  </a>
                </div>
                <div className style={{textAlign: "justify"}}>
                  <h3 className="font-weight-bold text-dark font-size-h2 text-center">
                    Congratulations
                  </h3>
                  <p
                    className="opacity-70 mr-4 text-Center"
                    style={{marginBottom: "-2px", fontSize: "13px"}}
                  >
                    You have successfully setup your account profile, we just
                    need to
                  </p>
                  <p
                    className="opacity-70 mr-4 text-center"
                    style={{marginBottom: "-2px", fontSize: "13px"}}
                  >
                    start building out your personalized portfolio so we can
                    start
                  </p>
                  <p
                    className="opacity-70 mr-4 text-center"
                    style={{marginBottom: "-2px", fontSize: "13px"}}
                  >
                    growing your money and fulfilling your goals.
                  </p>
                  {/* <div class="text-muted font-weight-bold font-size-h4">Complete Your Signup And Become A Member!</div> */}
                </div>
              </div>
              <center>
                <button
                  type="button"
                  className="btn btn-primary text-center font-weight-bold"
                >
                  Fund your account
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

const PageStyled = styled(Layout)``;

export default AccountSetup;
