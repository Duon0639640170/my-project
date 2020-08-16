

export const environment = {
  production: false,
  api_url: 'http://localhost:9081/it-api',
  apiregister_url: 'http://localhost:9000',

  //access_token_url for authen
authen: {
  access_token_url: "http://localhost:9000/oauth/token",
  client_id: "clientId",
  client_secret: "clientSecret"
  },
  //url for manage user and role
  auth_manager_url: "http://localhost:9000"
};

