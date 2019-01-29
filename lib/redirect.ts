import Router from "next/router";

export default (context: any, target: string) => {
  if (context.res) {
    context.res.writeHead(303, { location: target });
    context.res.end();
  } else {
    Router.replace(target);
  }
};
