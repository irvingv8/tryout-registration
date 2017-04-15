
/* eslint-disable */
//  888b     d888                  888             888      888
//  8888b   d8888                  888             888      888
//  88888b.d88888                  888             888      888
//  888Y88888P888  .d88b.  888d888 888888  8888b.  888      888
//  888 Y888P 888 d88""88b 888P"   888        "88b 888      888
//  888  Y8P  888 888  888 888     888    .d888888 888      Y8P
//  888   "   888 Y88..88P 888     Y88b.  888  888 888       "
//  888       888  "Y88P"  888      "Y888 "Y888888 888      888
//
//
//  Y88b   d88P                                                                     888                                                                         888
//   Y88b d88P                                                                      888                                                                         888
//    Y88o88P                                                                       888                                                                         888
//     Y888P  .d88b.  888  888       8888b.  888d888 .d88b.       88888b.   .d88b.  888888      88888b.  888d888 .d88b.  88888b.   8888b.  888d888 .d88b.   .d88888
//      888  d88""88b 888  888          "88b 888P"  d8P  Y8b      888 "88b d88""88b 888         888 "88b 888P"  d8P  Y8b 888 "88b     "88b 888P"  d8P  Y8b d88" 888
//      888  888  888 888  888      .d888888 888    88888888      888  888 888  888 888         888  888 888    88888888 888  888 .d888888 888    88888888 888  888
//      888  Y88..88P Y88b 888      888  888 888    Y8b.          888  888 Y88..88P Y88b.       888 d88P 888    Y8b.     888 d88P 888  888 888    Y8b.     Y88b 888
//      888   "Y88P"   "Y88888      "Y888888 888     "Y8888       888  888  "Y88P"   "Y888      88888P"  888     "Y8888  88888P"  "Y888888 888     "Y8888   "Y88888
//                                                                                              888                      888
//                                                                                              888                      888
// Now mortals, follow me into the abyss                                                        888                      888
/* eslint-enable */

import axios from 'axios';

// // Settings for Local
// export const ROOT_URL = 'http://localhost:3003/api/v1.0';
// const TRYOUT_CATEGORY = 41;

// // Settings for Dev
export const ROOT_URL = 'https://ss-core-dev.herokuapp.com/api/v1.0';
const TRYOUT_CATEGORY = 41;

// // Settings for QA
// export const ROOT_URL = 'https://ss-core-qa.herokuapp.com/api/v1.0';
// const TRYOUT_CATEGORY = 41;

// // Settings for live
// export const ROOT_URL = 'https://ss-core-live.herokuapp.com/api/v1.0';
// const TRYOUT_CATEGORY = 41;


export const instance = axios.create({
  baseURL: ROOT_URL,
});

export function registerPlayer(player) {
  return () => {
    const registerPlayerUrl = `/category/${TRYOUT_CATEGORY}/register_tryouts`;

    return instance.request({
      method: 'post',
      url: registerPlayerUrl,
      data: player,
    })
    .then((response) => {
      console.log(response);
      return {};
    });
  };
}
