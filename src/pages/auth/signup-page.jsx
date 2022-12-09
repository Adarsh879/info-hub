import React, { useContext, useState } from "react";
import logo from "../../static/svg/icons/logo.svg";
import profileAvatar from "../../static/svg/administrator-male.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../store/auth";
import FormInput from "../component/login-form-input/index";
import { publicFetch } from "../../utils/fetcher";
import Style from "./login.module.css";
import cn from "classnames";

function SignUpPage() {
  const { setAuthState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  return (
    <div className={Style.background}>
      <div className={Style.title}>
        <h1 className={Style.text}>INFO</h1>
        <h1 className={cn(Style.text, Style.hub)}>HUB</h1>
      </div>
      <div className={Style.content}>
        <embed src={logo} className={Style.image} />
        <h2 className={Style.text1}>Sign in to continue</h2>
        <div className={Style.signin_form}>
          <div className={Style.avatar} style={{ top: "-75px" }}>
            <embed src={profileAvatar} className={Style.profile} />
          </div>
          <Formik
            initialValues={{ userid: "", username: "", password: "" }}
            onSubmit={async (values, { setStatus, resetForm }) => {
              setLoading(true);
              console.log("submiting");
              try {
                const { data } = await publicFetch.post("signup", values);
                const { token, expiresAt, userInfo } = data;
                setAuthState({ token, expiresAt, userInfo });
                resetForm({});
              } catch (error) {
                setStatus(error.response.data.message);
              }
              setLoading(false);
            }}
            validationSchema={Yup.object({
              userid: Yup.string()
                .required("Required")
                .matches(
                  /^(?:\d{10}|\w+@\w+\.\w{2,3})$/,
                  "Contains invalid characters"
                ),
              username: Yup.string()
                .required("Required")
                .max(16, "Must be at most 16 characters long")
                .matches(/^[a-zA-Z0-9_-]+$/, "Contains invalid characters"),
              password: Yup.string()
                .required("Required")
                .min(6, "Must be at least 6 characters long")
                .max(50, "Must be at most 50 characters long"),
            })}
          >
            {({
              values,
              errors,
              touched,
              status,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <FormInput
                  label="email or phone number"
                  type="text"
                  name="userid"
                  autoComplete="off"
                  value={values.userid}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  hasError={touched.userid && errors.userid}
                  errorMessage={errors.userid && errors.userid}
                />
                <FormInput
                  label="Username"
                  type="text"
                  name="username"
                  autoComplete="off"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  hasError={touched.username && errors.username}
                  errorMessage={errors.username && errors.username}
                />
                <FormInput
                  label="Password"
                  type="password"
                  name="password"
                  autoComplete="off"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  hasError={touched.password && errors.password}
                  errorMessage={errors.password && errors.password}
                />
                <button type="submit" className={Style.signup_button}>
                  Sign Up{" "}
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
