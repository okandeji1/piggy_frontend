import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import {Layout} from "antd";
import Link from "next/link";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {setUser, selectUser} from "../store/slices/user.slice";
import {openNotification} from "../components/notify";
import {setLoading, selectLoading} from "../store/slices/loading.slice";

const {Content} = Layout;

const SignIn = () => {
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const Router = useRouter();

  const [state, setState] = useState({
    isLoading: false,

    formData: {
      username: "",
      password: "",
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
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/login`,
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
        dispatch(setUser(responseData.user));
        localStorage.setItem("token", responseData.token);
        if (responseData.user.is_completed) {
          Router.push("/dashboard/funding");
        } else {
          Router.push("/dashboard/account-setup");
        }
      } else {
        openNotification({
          type: "error",
          message: "Error",
          description: `log in failed! \n ${JSON.stringify(
            responseData.message
          )}`,
        });
      }
    } catch (error) {
      openNotification({
        type: "error",
        message: "Error",
        description: `log in failed! \n Internal server error`,
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
                className="card card-board"
                style={{backgroundColor: "#F0F1F4", width: "100%"}}
              >
                <div className="card-body">
                  {/* <div class="login-signin"> */}
                  <div className="mb-10">
                    <h3 className="font-weight-bold">Welcome to PiggyAlpha</h3>
                    <div>
                      We are here to help you achieve your investment objective
                      in the easiest way possible
                    </div>
                  </div>
                  <form className="form" id="kt_login_signin_form">
                    <div className="form-group mb-5">
                      <label htmlFor="username">Email</label>
                      <input
                        className="form-control h-auto form-control-solid py-4 px-8"
                        style={{backgroundColor: "white"}}
                        type="text"
                        placeholder="Email"
                        id="email"
                        autoComplete="off"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group mb-5">
                      <label htmlFor="password">Password</label>
                      <a
                        href="#"
                        id="kt_login_forgot"
                        style={{float: "right", color: "blue"}}
                      >
                        Forgot Password ?
                      </a>
                      <input
                        className="form-control h-auto form-control-solid py-4 px-8"
                        style={{backgroundColor: "white"}}
                        type="password"
                        placeholder="Password"
                        id="password"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button
                      className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
                      type="submit"
                      onClick={submit}
                      // block={true}
                      // loading={loading}
                      // disabled={loading}
                    >
                      Sign In
                    </button>
                  </form>
                  {/* </div> */}
                </div>
              </div>
              <div className="mt-10 text-center">
                <span className="opacity-70 mr-4">New Here? </span>
                <Link href="/sign-up">
                  <a
                    // id="kt_login_signup"
                    className="text-muted text-hover-primary font-weight-bold"
                  >
                    Create Account?
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PageStyled = styled(Layout)``;

export default SignIn;
