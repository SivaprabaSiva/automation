import EnvironmentConfig from "../interfaces/environmentConfig";

const qaConfig: EnvironmentConfig = {
  "baseURL": "api.dashboard",
  "tenants": {
    "fashionfolks": {
      "name": "fashionfolks",
      "id": 123,
      "token": "hudwhdh23566",
      "businesses": [
        {
          "name": "fashionfolks",
          "id": 45
        },
        {
          "name": "fashionV2",
          "id": 47
        }
      ]
    }
  },
  "currentTenant": "fashionfolks"
}

export default qaConfig