import React from "react";
import Layout from "../components/Layout";
import { Formik, Field } from "formik";
import { InputField } from "../components/fields/InputField";
import { RegisterComponent } from "../generated/apolloComponents";
import Router from "next/router";

export default () => {
  return (
    <Layout title="Register Page">
      <RegisterComponent>
        {register => (
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async (data, { setErrors }) => {
              try {
                const response = await register({
                  variables: {
                    data
                  }
                });

                console.log(response);

                Router.push("/check-email");
              } catch (err) {
                console.log("Err: ", err.graphQLErrors);
                const errors: { [key: string]: string } = {};
                err.graphQLErrors[0].validationErrors.forEach(
                  (validationErr: any) => {
                    Object.values(validationErr.constraints).forEach(
                      (message: any) => {
                        errors[validationErr.property] = message;
                      }
                    );
                  }
                );

                console.log(errors);
                setErrors(errors);
              }
            }}
            initialValues={{
              email: "",
              firstName: "",
              lastName: "",
              password: ""
            }}
          >
            {({ values, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="firstName"
                  placeholder="First Name"
                  component={InputField}
                />
                <Field
                  name="lastName"
                  placeholder="Last Name"
                  component={InputField}
                />
                <Field
                  name="email"
                  placeholder="Email"
                  component={InputField}
                />
                <Field
                  name="password"
                  placeholder="Password"
                  type="password"
                  component={InputField}
                />
                <button type="submit">Submit</button>
              </form>
            )}
          </Formik>
        )}
      </RegisterComponent>
    </Layout>
  );
};
