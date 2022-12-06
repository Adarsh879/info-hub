import React, { useContext, useState } from "react";
import "../static/css/login.css";
import logo from "../static/image/logo.jpg";
import profileAvatar from "../static/svg/administrator-male.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../store/auth";
import FormInput from "./component/login-form-input/index";
import { publicFetch } from "../utils/fetcher";

// class SignUpPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       email: "",
//       password: "",
//     };
//   }

//   handleInputChange = (event) => {
//     const { value, name } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   onSubmit = (event) => {
//     event.preventDefault();
//     fetch("http://localhost:5000/api/register", {
//       method: "POST",
//       body: JSON.stringify(this.state),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => {
//         if (res.status === 200) {
//           redirect("/");
//         } else {
//           const error = new Error(res.error);
//           throw error;
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         alert("Error logging in please try again");
//       });
//   };

//   render() {
//     return (
//       <div className="background">
//         <div className="title">
//           <h1 className="text">INFO</h1>
//           <h1 className="text hub">HUB</h1>
//         </div>
//         <div className="content">
//           <img src={logo} className="image" />
//           <h2 className="text1" style={{ "margin-bottom": "10px" }}>
//             Create new Account
//           </h2>
//           <div style={{ display: "flex", "align-items": "baseline" }}>
//             <h3 className="text1" style={{ "font-size": "14px" }}>
//               Already Registered?
//             </h3>
//             <a>Login</a>
//           </div>
//           <div className="signin-form" style={{ height: "400px" }}>
//             <div className="avatar">
//               <embed src={profileAvatar} className="profile" />
//             </div>
//             <form onSubmit={this.onSubmit}>
//               <label about="Email">Please enter your name</label>
//               <input
//                 type={"text"}
//                 name="username"
//                 placeholder="Your name"
//                 value={this.state.username}
//                 onChange={this.handleInputChange}
//                 required
//               ></input>
//               <label about="Email">Please enter Email </label>
//               <input
//                 type={"email"}
//                 name="email"
//                 placeholder="Your email"
//                 value={this.state.email}
//                 onChange={this.handleInputChange}
//                 required
//               ></input>
//               <label about="password">Create a new password</label>
//               <input
//                 type={"password"}
//                 name="password"
//                 placeholder="enter a password"
//                 value={this.state.password}
//                 onChange={this.handleInputChange}
//                 required
//               ></input>
//               <button type="submit" className="signup-button">
//                 Sign Up
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

function SignUpPage() {
  const { setAuthState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  return (
    <div className="background">
      <div className="title">
        <h1 className="text">INFO</h1>
        <h1 className="text hub">HUB</h1>
      </div>
      <div className="content">
        <img src={logo} className="image" />
        <h2 className="text1">Sign in to continue</h2>
        <div className="signin-form">
          <div className="avatar" style={{ top: "-75px" }}>
            <embed src={profileAvatar} className="profile" />
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
                <button type="submit" className="signup-button">
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
