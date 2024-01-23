import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  return (
    <>
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          password: "",
          cpassword: "",
        }}
        validationSchema={Yup.object({
          fname: Yup.string()
            .max(20, "must ne 20 character or less")
            .required("firstname is mandatory"),

          lname: Yup.string()
            .max(20, "must ne 20 character or less")
            .required("lasttname is mandatory"),

          email: Yup.string()
            .max("invalid email format")
            .required("email is mandatory"),

          password: Yup.string()
            .matches(
              /(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$?!])[A-Za-z\d@#$?!]{8,100}$/,
              "must contain one upper case,one lower case, one numberic and one special character and must contain atleast 8 character"
            )
            .required("password is mandatory"),

          cpassword: Yup.string()
            .required("confirm password is mandatory")
            .oneOf(
              [Yup.ref("password"), null],
              "password and confirm password does not match"
            ),
        })}
      >
        <div className="container my-3">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3 shadow p-3">
              <Form>
                <div className="mb-2">
                  <label htmlFor="firstname">Fname</label>
                  <Field
                    type="text"
                    id="firstname"
                    name="fname"
                    className="form-control"
                  />
                  <ErrorMessage name="fname">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-2">
                  <label htmlFor="lastname">Last Name</label>
                  <Field
                    type="text"
                    id="lastname"
                    name="lname"
                    className="form-control"
                  />
                  <ErrorMessage name="lname">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-2">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <ErrorMessage name="email">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-2">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                  />
                  <ErrorMessage name="password">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-2">
                  <label htmlFor="cpassword">Confirm Password</label>
                  <Field
                    type="cpassword"
                    id="cpassword"
                    name="cpassword"
                    className="form-control"
                  />
                  <ErrorMessage name="cpassword">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default Register;
