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

// export function Authenticate(data){ // 
//   return getRequest({url:'/api/TokenAuth/Authenticate',
//   data
// })  
// }

export function AddWechatUserLogin(data){ // 小程序和系统用户绑定
  return getRequest({url:'/api/services/web/userExternalLogin/AddWechatUserLogin',
  data
})  
}