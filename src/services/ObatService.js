import http from "../http-common";

const getAll = () => {
  return http.get("/obat");
};

const get = (ID_OBAT) => {
  return http.get(`/obat/${ID_OBAT}`);
};

const create = (data) => {
  return http.post("/obat", data);
};

const update = (ID_OBAT, data) => {
  return http.put(`/obat/${ID_OBAT}`, data);
};

const remove = (ID_OBAT) => {
  return http.delete(`/obat/${ID_OBAT}`);
};

const removeAll = () => {
  return http.delete(`/obat`);
};

const findByTitle = (title) => {
  return http.get(`/obat?NAMAOBAT=${title}&CODE_OBAT=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};
