import { getRequest } from '../utils/cofig/ajax.js';

export function IsTenantAvailable(data){   // 校验租户
    return getRequest({url:'/api/services/app/Account/IsTenantAvailable',
        data
        })       
}

export function Authenticate(header,data){ // 校验账号
    return getRequest({url:'/api/TokenAuth/Authenticate',
    header,
    data
  })  
}