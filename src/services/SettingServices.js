import requests from "./httpService";

const SettingServices = {
  // global setting all function
  addGlobalSetting: async (body) => {
    return requests.post("/setting/global/add", body);
  },

  getGlobalSetting: async () => {
    return requests.get("/setting/global/all");
  },

  updateGlobalSetting: async (body) => {
    return requests.put(`/setting/global/update`, body);
  },

  // store setting all function
  addStoreSetting: async (body) => {
    return requests.post("/setting/store-setting/add", body);
  },

  getStoreSetting: async () => {
    return requests.get("/setting/store-setting/all");
  },

  updateStoreSetting: async (body) => {
    return requests.put(`/setting/store-setting/update`, body);
  },

  // store customization setting all function
  addStoreCustomizationSetting: async (body) => {
    return requests.post("/setting/customization/add", body);
  },

  getStoreCustomizationSetting: async () => {
    return requests.get("/setting/customization/all");
  },

  updateStoreCustomizationSetting: async (body) => {
    return requests.put(`/setting/customization/update`, body);
  },
};

export default SettingServices;
