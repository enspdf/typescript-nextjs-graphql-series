import cookie from "cookie";
import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";
import { getDataFromTree } from "react-apollo";
import initApollo from "./initApollo";
import { isBrowser } from "./isBrowser";
import { ApolloClient, NormalizedCacheObject } from "apollo-boost";
import redirect from "./redirect";

function parseCookies(req?: any, options = {}) {
  return cookie.parse(
    req ? req.headers.cookie || "" : document.cookie,
    options
  );
}

export default (App: any) => {
  return class WithData extends React.Component {
    static displayName = `WithData(${App.displayName})`;
    static propTypes = {
      apolloState: PropTypes.object.isRequired
    };

    static async getInitialProps(ctx: any) {
      const {
        Component,
        router,
        ctx: { req, res }
      } = ctx;

      const apollo = initApollo({}, { getToken: () => parseCookies(req).qid });

      ctx.ctx.apolloClient = apollo;

      let appProps = {};

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      if (res && res.finished) {
        return {};
      }

      if (!isBrowser) {
        try {
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
          );
        } catch (error) {
          console.error("Error while running `getDataFromTree`", error);
          if (error.message.includes("not authenticated")) {
            redirect(ctx.ctx, "/login");
          }
        }

        Head.rewind();
      }

      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState
      };
    }

    apolloClient: ApolloClient<NormalizedCacheObject>;

    constructor(props: any) {
      super(props);

      this.apolloClient = initApollo(props.apolloState, {
        getToken: () => {
          return parseCookies().token;
        }
      });
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};
