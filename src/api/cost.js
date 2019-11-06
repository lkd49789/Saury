import { getRequest  } from '@/utils/cofig/ajax.js';

export function GCharge(data){   // 获取费用信息.
    return getRequest({
        url:'/api/services/web/financialCharge/GetCharge',
        data
    })       
}

export function GCharges(data){   // 获取费用分页列表.
    return getRequest({
        url:'/api/services/web/financialCharge/GetCharges',
        data
    })       
}

// export function ReturnCharge(data){   // .
//     return getRequest({
//         url:'/api/services/web/financialCharge/ReturnCharge',
//         data
//     })       
// }

export function GChargeStates(){   // .
    return getRequest({
        url:'/api/services/web/FinancialCharge/GetChargeStates'
    })       
}

export function ProcessCharge(data){   //处理费用.
    return getRequest({
        url:'/api/services/web/FinancialCharge/ProcessCharge',
        data
    })       
}
