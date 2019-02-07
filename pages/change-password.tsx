import React from "react";
import Layout from "../components/Layout";
import { Formik, Field } from "formik";
import { InputField } from "../components/fields/InputField";
import { ChangePasswordComponent } from "../generated/apolloComponents";
import Router from "next/router";
import { NextContext } from "next";

const ChangePassword = ({ token }: { token: string }) => {
  return (
    <Layout title="Change Password Page">
      <ChangePasswordComponent>
        {changePassword => (
          <Formik
            onSubmit={async data => {
              const response = await changePassword({
                variables: {
                  data: {
                    password: data.password,
                    token
                  }
                }
              });

              console.log(response);

              Router.push("/");
            }}
            initialValues={{
              password: ""
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="password"
                  placeholder="Password"
                  component={InputField}
                  type="password"
                />
                <button type="submit">Change Password</button>
              </form>
            )}
          </Formik>
        )}
      </ChangePasswordComponent>
    </Layout>
  );
};

ChangePassword.getInitialProps = ({
  query: { token }
}: NextContext<{ token: string }>) => {
  return {
    token
  };
};

export default ChangePassword;
