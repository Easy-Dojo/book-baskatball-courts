const devEnv = {
  HOST: "http://localhost:3000",
  API_ENDPOINT: "http://localhost:8080",
};

const stgEnv = {
  HOST: "https://sipu-basketball-web-staging.herokuapp.com",
  API_ENDPOINT: "https://sipu-basketball-api-staging.herokuapp.com",
};

const prodEnv = {
  HOST: "https://sipu-basketball-web.herokuapp.com",
  API_ENDPOINT: "https://sipu-basketball-api.herokuapp.com",
};

const ENV_VARIABLES = () => {
  switch (window.location.origin) {
    case devEnv.HOST:
      return devEnv;
    case stgEnv.HOST:
      return stgEnv;
    case prodEnv.HOST:
      return prodEnv;
    default:
      return devEnv;
  }
};

export default ENV_VARIABLES();
