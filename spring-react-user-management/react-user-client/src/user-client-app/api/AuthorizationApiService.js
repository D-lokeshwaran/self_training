import { fetchApiClient } from './fetchApiClient'
//export const executeBasicAuthApi =
//    (token) => fetch("/users/basicauth", {
//                   headers: {
//                      Authorization: token
//                   }
//               })
//

export const executeBasicAuthApi =
    (token) => fetchApiClient("/users/basicauth");