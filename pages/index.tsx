import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { Mutation } from "react-apollo";
import { loginMutation } from "../graphql/user/mutations/login";
import {
  LoginMutation,
  LoginVariables,
  LoginComponent
} from "../generated/apolloComponents";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <LoginComponent>
        {mutate => (
          <button
            onClick={async () => {
              const response = await mutate({
                variables: { email: "test@test.com", password: "password" }
              });

              console.log(response);
            }}
          >
            Call Login Mutation
          </button>
        )}
      </LoginComponent>
    </Layout>
  );
};

export default IndexPage;
