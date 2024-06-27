import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Images } from "../Config/Images";
import { ErrorMessage, Field, Form, Formik } from "formik";
import AuthService from "../../services/AuthService";
import * as Yup from "yup";
import { authSlice } from "../../redux/apis/apisSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Loader from "../Loader/Loader";
import styled, { keyframes } from "styled-components";
import toast from "react-hot-toast";
import ReCAPTCHAComponent from "../ReCAPTCHAComponent";
import { Modal } from "react-bootstrap";
import axios from "axios";
import OtpInput from "./Otp";

const Login = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const navigate = useNavigate();
  const [change, setChange] = useState<any>();
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [otpDialog, setOtpDialog] = useState(false);
  const [message, setMessage] = useState("");

  const handleOtpChange = (otp: any) => {
    setOtp(otp);
  };

  const handleGenerateOtp = async () => {
    try {
      const response = await axios.post("/api/generate-otp", {
        /* your payload */
      });
      setMessage("OTP sent to your email/phone.");
    } catch (error) {
      setMessage("Error generating OTP.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL_LOGIN}/UsersApi/Login-2FA`,
        { code: otp, email: userEmail, password: password }
      );
      if (response) {
        setOtpDialog(false);
        toast.success("OTP verified successfully!");
        navigate("/flow/customerServices");
      }
    } catch (error) {
      setMessage("Error verifying OTP.");
    }
  };

  const handleToggleView = () => {
    setIsForgotPassword((prev) => !prev);
  };
  // let setTheme = async () => {
  //   setLoader(true);
  //   let response = await AuthService.get("/admin-user/theme");
  //   console.log("Response data:", response.data);
  //   if (response) {
  //     let theme = response?.data?.data;
  //     dispatch(authSlice.actions.setTheme({ theme }));
  //     setThemeStatus(true);
  //     setLoader(false);
  //   }
  // };

  const [ip, setIp] = useState<string>('');

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        setIp(response.data.ip);
        console.log(response);
      } catch (error) {
        console.error('Error fetching the IP address:', error);
      }
    };

    fetchIp();
  }, []);

  let login = async (formField: any) => {
    setUserEmail(formField.email);
    setPassword(formField.password);
    setLoader(true);
    formField.ip=ip;
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      let response = await AuthService.post(
        `http://135.181.57.251:3680/user/login`,
        formField,
        { headers: headers }
      );
      if (response) {
        console.log(response, "response");
        toast.success(response?.data?.message);
        setOtpDialog(true);
        setLoader(false);
      } else {
        setLoader(false);
      }
    } catch (e: any) {
      console.log(e.response.data.message, "ee");
      toast.error(e.response.data.message);
      setLoader(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter email in proper format e.g. johndoes@hotmail.com")
      .required("Please enter your registered email"),
    password: Yup.string().required("Please enter your password"),
    /* .min(8, "Password must be at least 8 characters")
      .max(15, "Password not more than 15 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Min 8 and Max 15 character with at least (one capital, one special symbol and one number"
      ) */
  });
  // useEffect(() => {
  //   setTheme();
  // }, []);
  //   const gradientAnimation = keyframes`
  //   0% {
  //     background-position: 0% 50%;
  //   }
  //   50% {
  //     background-position: 100% 50%;
  //   }
  //   100% {
  //     background-position: 0% 50%;
  //   }
  // `;
  // const Overlay = styled.div`
  //   background: ${themeBuilder.backgroundOne};
  //   background: ${themeBuilder.backgroundTwo};
  //   background-size: 400% 400%;
  //   color: #ffffff;
  //   position: relative;
  //   height: 100%;
  //   transform: translateX(0);
  //   transition: transform 0.6s ease-in-out;
  //   animation: ${gradientAnimation} 10s ease infinite;
  //   -webkit-animation: ${gradientAnimation} 10s ease infinite;
  //   border-radius: 12px 0px 0px 12px;
  // `;
  return (
    <>
    
      {/* {themeStatus && ( */}
      <div className="d-flex justify-content-center login-image" style={{flexDirection: 'column'}}>
        <div className="main-logo">
            <img src={Images.finovaLogo} alt="logo" style={{display:'block', margin: '0 auto'}}/>
        </div>
        <div
          className="col-md-12 d-flex"
          style={{
            borderRadius: "16px",
          
          }}
        >
          <div
            className="col-md-4"
            style={{  
              padding: "20px",
              borderTopRightRadius: "16px",
              borderBottomRightRadius: "16px",
              margin: "0 auto"
            }}
          >
            <div
              className={``}
              style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderRadius: "32px",
                padding: "20px 50px",
              }}
            >
              <div className="pt-3">
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#0E1F39",
                    lineHeight: "20px",
                  }}
                  className="d-flex justify-content-start align-items-center"
                >
                  Welcome
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "rgba(71, 71, 73, 1)",
                    lineHeight: "12px",
                  }}
                  className="d-flex justify-content-start align-items-center pt-1"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sed posuere purus gravida.
                </div>
              </div>
              <div className="pt-4">
                <label className="pb-3 pt-3" style={{textAlign:'center', display: 'block', color:'#0E1F39',fontSize:'20px',fontWeight:'600'}}>Login</label>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={login}
                >
                  {() => {
                    return (
                      <Form>
                        <div className="form-group form-label-group">
                          <label htmlFor="email">Email</label>
                          <Field
                            className="form-control mt-1 p-2"
                            type="email"
                            placeholder="Email"
                            name="email"
                            id="email"
                            autoComplete="off"
                          />

                          <ErrorMessage
                            name="email"
                            component="div"
                            className="invalid-feedback text-danger"
                          />
                        </div>
                        <div className="form-group new_password form-label-group mt-1">
                          <label htmlFor="password">Password</label>
                          <Field
                            type={"password"}
                            name="password"
                            id="password"
                            className="form-control mt-1 p-2"
                            placeholder="Password"
                            onFocus={() => setChange(false)}
                            onBlur={(e: any) =>
                              e.target.value == ""
                                ? setChange(true)
                                : setChange(false)
                            }
                          />

                          <ErrorMessage
                            name="password"
                            component="div"
                            className="invalid-feedback text-danger"
                          />
                        </div>
                        <div className="col-md-12 d-flex align-items-center pt-3">
                          <div className="col-md-6 d-flex">
                           
                          </div>
                          <div className="col-md-6 d-flex justify-content-end simple-text">
                            Forgot Password?
                          </div>
                        </div>
                        <div className="pt-4">
                          {" "}
                          <ReCAPTCHAComponent />
                        </div>
                        <div className="d-flex justify-content-center">
                          {" "}
                          <button
                            className="w-100 mt-4"
                            type="submit"
                            style={{
                              backgroundColor: "#2A3F95",
                              borderRadius: "8px",
                              border: "1px solid #2A3F95",
                              padding: "10px 10px 10px 10px",
                              color: "#fff",
                            }}
                        
                          >
                            Sign In
                          </button>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                          {/* <div
                            style={{
                              fontSize: "14px",
                              lineHeight: "14px",
                              fontWeight: "400",
                              color: "rgba(112, 112, 112, 1)",
                            }}
                          >
                            I don’t have an Account?
                          </div>
                          <div
                            style={{
                              fontSize: "14px",
                              lineHeight: "14px",
                              fontWeight: "400",
                              color: "rgba(226, 36, 46, 1)",
                            }}
                            className="ps-2"
                          >
                            Sign Up
                          </div> */}
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={otpDialog} centered>
        <Modal.Header>
          <Modal.Title className="modal-title"></Modal.Title>
          <div
            className="cursor-pointer"
            onClick={() => {
              setOtpDialog(false);
            }}
          >
            <img src={Images.closeBtn} alt="" />
          </div>
        </Modal.Header>
        <Modal.Body className="p-2">
          <div className="d-flex justify-content-center">
            <img src={Images.otp} alt="" width={88} height={88} />
          </div>
          <div
            style={{ fontSize: "20px", fontWeight: "500", lineHeight: "28px" }}
            className="text-center pt-3"
          >
            <div>
              Please enter the verification code from your authentication
              device.
            </div>
          </div>
          <div
            style={{ fontSize: "16px", fontWeight: "600", lineHeight: "22px" }}
            className="text-center pt-3"
          >
            <div>Verification Code</div>
          </div>
          <div className="pt-3">
            <OtpInput length={6} onChangeOtp={handleOtpChange} />
          </div>
          <div className="d-flex justify-content-center">
            {" "}
            <button
              className="w-50 mt-4"
              type="submit"
              style={{
                backgroundColor: "rgba(226, 36, 46, 1)",
                borderRadius: "16px",
                border: "1px solid rgba(226, 36, 46, 1)",
                padding: "10px 10px 10px 10px",
                color: "#fff",
              }}
              onClick={() => {
                handleVerifyOtp();
              }}
            >
              Verify
            </button>
          </div>
        </Modal.Body>
      </Modal>
      {/* )} */}
      {/* {loader && <Loader />} */}
    </>
  );
};

export default Login;
