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

const Funding = (props) => {
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const Router = useRouter();
  const [accounts, setAccounts] = useState([]);

  const [state, setState] = useState({
    isLoading: false,
    formData: {
      account: "",
      amount: "",
      startDate: "",
      schedule: "",
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
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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

  const submit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/add-fund`,
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${user?.accessToken}`,
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          method: "POST",
          body: JSON.stringify({
            ...state.formData,
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
        Router.push("/dashboard/portfolio");
      } else {
        openNotification({
          type: "error",
          message: "Error",
          description: `Request failed! \n ${JSON.stringify(
            responseData.message
          )}`,
        });
      }
    } catch (error) {
      openNotification({
        type: "error",
        message: "Error",
        description: "Internal server error",
      });
    }
    dispatch(setLoading(false));
  };
  // On Page load effect
  useEffect(() => {
    fetchInvestments();
  }, []);
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
              <h5 className="text-dark font-weight-bold my-1 mr-5">Funding</h5>
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
              {/*begin: Wizard*/}
              <div
                className="wizard wizard-3"
                id="kt_wizard_v3"
                data-wizard-state="step-first"
                data-wizard-clickable="true"
              >
                {/*begin: Wizard Nav*/}
                <div className="wizard-nav">
                  <div className="wizard-steps px-8 py-8 px-lg-15 py-lg-3">
                    {/*begin::Wizard Step 1 Nav*/}
                    <div
                      className="wizard-step"
                      data-wizard-type="step"
                      data-wizard-state="current"
                    >
                      <div className="wizard-label">
                        <h3 className="wizard-title">
                          <span />
                          Add or Move Funds
                        </h3>
                        <div className="wizard-bar" />
                      </div>
                    </div>
                    {/*end::Wizard Step 1 Nav*/}
                    {/*begin::Wizard Step 2 Nav*/}
                    <div className="wizard-step" data-wizard-type="step">
                      <div className="wizard-label">
                        <h3 className="wizard-title">
                          <span />
                          Withdraw Funds
                        </h3>
                        <div className="wizard-bar" />
                      </div>
                    </div>
                    {/*end::Wizard Step 2 Nav*/}
                    {/*begin::Wizard Step 3 Nav*/}
                    <div className="wizard-step" data-wizard-type="step">
                      <div className="wizard-label">
                        <h3 className="wizard-title">
                          <span />
                          Transfer Account
                        </h3>
                        <div className="wizard-bar" />
                      </div>
                    </div>
                    {/*end::Wizard Step 3 Nav*/}
                    {/*begin::Wizard Step 4 Nav*/}
                  </div>
                </div>
                {/*end: Wizard Nav*/}
                {/*begin: Wizard Body*/}
                <div className="row justify-content-center py-10 px-8 py-lg-12 px-lg-10">
                  <div className="col-xl-12 col-xxl-7">
                    {/*begin: Wizard Form*/}
                    <form className="form">
                      {/*begin: Wizard Step 1*/}
                      <div
                        className="pb-5"
                        data-wizard-type="step-content"
                        data-wizard-state="current"
                      >
                        <div className="form-group">
                          <label>Select Account</label>
                          <div className="input-icon">
                            <select
                              className="form-control form-control-solid h-auto border-0 rounded-lg font-size-h6"
                              id="account"
                              value={state.formData.account}
                              onChange={handleChange}
                            >
                              <option value="">Select account</option>
                              {accounts?.length > 0
                                ? accounts.map((investment, index) => {
                                    return (
                                      <option
                                        key={index}
                                        value={investment.account}
                                      >
                                        {investment.account}
                                      </option>
                                    );
                                  })
                                : null}
                            </select>
                            <span>
                              <i className="fas fa-credit-card" />
                            </span>
                          </div>
                        </div>
                        {/* </div> */}
                        {/*end::Input*/}
                        {/*begin::Input*/}
                        <div className="form-group">
                          <label>Amount</label>
                          <div className="input-icon">
                            <input
                              type="number"
                              className="form-control form-control-solid h-auto border-0 rounded-lg font-size-h6"
                              placeholder="Amount"
                              id="amount"
                              onChange={handleChange}
                            />
                            <span>
                              <i className="fas fa-dollar-sign" />
                            </span>
                          </div>
                        </div>
                        {/*end::Input*/}
                        <div className="row">
                          <div className="col-xl-6">
                            {/*begin::Input*/}
                            <div className="form-group">
                              <label>Schedule</label>
                              <div className="input-icon">
                                <select
                                  className="form-control form-control-solid h-auto border-0 rounded-lg font-size-h6"
                                  id="schedule"
                                  onChange={handleChange}
                                  value={state.formData.schedule}
                                >
                                  <option value="">Select schedule</option>
                                  <option value="every month">
                                    Every Month
                                  </option>
                                  <option value="every day">Every Day</option>
                                </select>
                                <span>
                                  <i className="fas fa-clock" />
                                </span>
                              </div>
                            </div>
                            {/*end::Input*/}
                          </div>
                          <div className="col-xl-6">
                            {/*begin::Input*/}
                            <div className="form-group">
                              <label>Start Date</label>
                              <div className="input-icon">
                                <input
                                  type="date"
                                  className="form-control form-control-solid h-5 border-0 rounded-lg font-size-h6"
                                  id="startDate"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            {/*end::Input*/}
                          </div>
                        </div>
                        <center>
                          <button
                            type="submit"
                            className="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                            onClick={submit}
                            // block={true}
                            loading={loading}
                            disabled={loading}
                          >
                            Add Funds
                          </button>
                        </center>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModalScrollable"
                        >
                          Launch completion modal
                        </button>
                      </div>
                      {/*end: Wizard Step 1*/}
                      {/*begin: Wizard Step 2*/}
                    </form>
                    {/*end: Wizard Form*/}
                  </div>
                </div>
              </div>
              {/*end: Wizard*/}
            </div>
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
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <div className="pt-lg-0 pt-5 pb-15 text-center text-md-left">
                <div className="d-flex flex-center"></div>
                <div className style={{textAlign: "justify"}}>
                  <h3 className="font-weight-bold text-dark font-size-h2 text-center">
                    Where is your Bank Account
                  </h3>
                  <div className="form-group">
                    <div className="input-icon">
                      <input
                        type="text"
                        className="form-control form-control-solid h-auto  border-0 rounded-lg font-size-h6"
                        placeholder="Search for your Bank of FInancial Institution financial institution"
                      />
                    </div>
                  </div>
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

export default Funding;
