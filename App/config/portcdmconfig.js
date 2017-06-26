/**
 * Stores everything that is related to the specific portcdm instance
 * we want to use
 */
export const PortCDMConfig = {
  host: `http://dev.portcdm.eu:8080`,
  user : {
    name: 'viktoria',
    password: 'vik123'
  }
};

PortCDMConfig.endpoints = {
  AMSS: {
    state_update: `${PortCDMConfig.host}/amss/state_update/`
  },
  MSS: {
    mss: `${PortCDMConfig.host}/mb/mss`
  }
}