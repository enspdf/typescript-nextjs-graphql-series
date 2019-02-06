import * as React from "react";
import { HelloComponent } from "../generated/apolloComponents";
import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <HelloComponent>
        {({ data }) => (
          <div>{data && data.hello ? data.hello : "...loading"}</div>
        )}
      </HelloComponent>
    </Layout>
  );
};
