import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import {Layout} from "antd";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
// import {setUser, selectUser} from "../store/slices/user.slice";
import {openNotification} from "../components/notify";
import {setLoading, selectLoading} from "../store/slices/loading.slice";

const {Content} = Layout;

const SignUp = () => {
  const dispatch = useDispatch();
  const Router = useRouter();
  const loading = useSelector(selectLoading);

  const [state, setState] = useState({
    isLoading: false,

    formData: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      dob: "",
      sinNumber: "",
    },
  });

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
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/register`,
        {
          headers: {
            "Content-Type": "application/json",
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
        Router.push("/sign-in");
      } else {
        openNotification({
          type: "error",
          message: "Error",
          description: `log in failed! \n ${responseData.message}`,
        });
      }
    } catch (error) {
      openNotification({
        type: "error",
        message: "Error",
        description: `Registration failed! \n ${JSON.stringify(
          responseData.message
        )}`,
      });
    }
    dispatch(setLoading(false));
  };
  return (
    <div>
      <div className="d-flex flex-column flex-root">
        <div
          className="login login-4 login-signin-on d-flex flex-row-fluid"
          id="kt_login"
        >
          <div
            className="d-flex flex-center flex-row-fluid bgi-size-cover bgi-position-top bgi-no-repeat"
            style={{backgroundColor: "white"}}
          >
            <div className="login-form p-7 position-relative overflow-hidden">
              <div className="d-flex flex-center">
                <a href="#">
                  <img
                    src="assets/media/logos/logo.png"
                    className="max-h-75px"
                    alt=""
                  />
                </a>
              </div>
              <div
                className="card register-board"
                style={{backgroundColor: "#F0F1F4", maxWidth: "900px"}}
              >
                <div className="card-body">
                  {/* <div class="login-signin"> */}
                  <div className="mb-9">
                    <h3 className="font-weight-bold">
                      Get Started in a few Minutes
                    </h3>
                  </div>
                  <div className="row">
                    {/* <form class="form" id="kt_login_signin_form"> */}
                    <div className="form-group mb-5 col-6">
                      <label htmlFor="username">
                        First Name
                        <span style={{fontSize: "8px"}}>
                          Legal first (given) name
                        </span>
                      </label>
                      <input
                        className="form-control h-auto form-control-solid py-4 px-8"
                        style={{backgroundColor: "white"}}
                        type="text"
                        placeholder="First Name"
                        id="firstname"
                        autoComplete="off"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group mb-5 col-6">
                      <label htmlFor="username">
                        Last Name
                        <span style={{fontSize: "8px"}}>
                          Legal last (given) name
                        </span>
                      </label>
                      <input
                        className="form-control h-auto form-control-solid py-4 px-8"
                        style={{backgroundColor: "white"}}
                        type="text"
                        placeholder="Last Name"
                        id="lastname"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group mb-5 col-6">
                      <label htmlFor="username">Email</label>
                      <input
                        className="form-control h-auto form-control-solid py-4 px-8"
                        style={{backgroundColor: "white"}}
                        type="email"
                        placeholder="Email"
                        id="email"
                        autoComplete="off"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group mb-5 col-6">
                      <label htmlFor="username">Date of Birth</label>
                      <input
                        className="form-control h-auto form-control-solid py-4 px-8"
                        style={{backgroundColor: "white"}}
                        type="date"
                        disabledDate={(d) =>
                          !d ||
                          d.isAfter("2002-12-31") ||
                          d.isSameOrBefore("1960-01-01")
                        }
                        placeholder="yyyy-mm-dd"
                        id="dob"
                        autoComplete="off"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group mb-5 col-6">
                      <label htmlFor="username">SIN Number</label>
                      <input
                        className="form-control h-auto form-control-solid py-4 px-8"
                        style={{backgroundColor: "white"}}
                        type="text"
                        placeholder="SIN Number"
                        id="sinNumber"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group mb-5 col-6">
                      <label htmlFor="username">Create Password</label>
                      <input
                        className="form-control h-auto form-control-solid py-4 px-8"
                        style={{backgroundColor: "white"}}
                        type="password"
                        placeholder="Create Password"
                        id="password"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button
                      // id="kt_login_signin_submit"
                      className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
                      onClick={submit}
                      // block={true}
                      loading={loading}
                      disabled={loading}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-10 text-center">
                <a
                  href="#"
                  id="kt_login_signup"
                  className="text-muted text-hover-primary font-weight-bold"
                >
                  By clicking "Sign Up", you agree to PiggyAlpha's{" "}
                </a>
                <a href="#">Terms of Use and Privacy Policy.</a>
              </div>
            </div>
          </div>
        </div>
        {/*end::Login*/}
      </div>
    </div>
  );
};

const PageStyled = styled(Layout)``;

export default SignUp;
