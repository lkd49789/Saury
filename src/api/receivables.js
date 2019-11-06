import { getRequest  } from '@/utils/cofig/ajax.js';

export function Cases(data){   // 获取通用代码列表(递归或非递归)
    return getRequest({
        url:'/api/services/web/common/GetCases',
        data
    })       
}

export function GetReceipts(data){   // 获取收款分页列表.
    return getRequest({
        url:'/api/services/web/financialReceipt/GetReceipts',
        data
    })       
}

export function GetReceipt(data){   // 获取收款信息.
    return getRequest({
        url:'/api/services/web/financialReceipt/GetReceipt',
        data
    })       
}

export function ProcessReceipt(data){   // 
    return getRequest({
        url:'/api/services/web/FinancialReceipt/ProcessReceipt',
        data
    })       
}

export function ClaimReceipt(data){   // 认领收款.
    return getRequest({
        url:'/api/services/web/financialReceipt/ClaimReceipt',
        data
    })       
}

export function GUserReceipts(data){   // 获取用户收款分页列表.
    return getRequest({
        url:'/api/services/web/financialReceipt/GetUserReceipts',
        data
    })       
}

export function ReturnReceipt(data){   // .
    return getRequest({
        url:'/api/services/web/financialReceipt/ReturnReceipt',
        data
    })       
}

export function ConfirmReceipt(data){   // .
    return getRequest({
        url:'/api/services/web/financialReceipt/ConfirmReceipt',
        data
    })       
}

export function GReceiptStates(data){   // 获取收款状态列表.
    return getRequest({
        url:'/api/services/web/FinancialReceipt/GetReceiptStates',
        data
    })       
}