import http from "../http-common";

const getAll = () => {
  return http.get("/satuan");
};

const get = (ID_SATUAN) => {
  return http.get(`/satuan/${ID_SATUAN}`);
};

export default {
  getAll,
  get,
};
