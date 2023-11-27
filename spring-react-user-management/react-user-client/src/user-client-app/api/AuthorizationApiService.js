import { proxy } from './fetchApiClient'
//export const executeBasicAuthApi =
//    (token) => fetch("/users/basicauth", {
//                   headers: {
//                      Authorization: token
//                   }
//               })
//

export const executeBasicAuthApi =
    (token) => fetch(proxy + "/users/basicauth", {
                    headers: {
                        'Authorization': token
                    }
                });