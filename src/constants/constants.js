// export const localhost = "http://127.0.0.1:8000/";
export const localhost = "https://herokugit-auto-deploy.herokuapp.com/";
export const api = "api/";
export const endpoint = `${localhost}${api}`;
export const productsListUrl = `${endpoint}products-list`;

export const server =
  process.env.NODE_ENV !== "production"
    ? "http://127.0.0.1:8000/api"
    : "https://odoo-erp-demo-ali.herokuapp.com/api";
