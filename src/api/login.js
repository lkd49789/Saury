import { getData } from '../utils/cofig/ajax.js';

export function IsTenantAvailable(data){   // 校验租户
    return getData({url:'/api/services/app/Account/IsTenantAvailable',
        data
        })       
}

export function Authenticate(header,data){ // 校验账号
    return getData({url:'/api/TokenAuth/Authenticate',
    header,
    data
  })  
}