import { getRequest  } from '@/utils/cofig/ajax.js';

export function GMyBillings(data){   // 获取我的账单列表信息.
    return getRequest({
        url:'/api/services/web/financialBilling/GetMyBillings',
        data
    })       
}

export function SendApprovalBilling(data){   // 发送审核.
    return getRequest({
        url:'/api/services/web/financialBilling/SendApprovalBilling',
        data
    })       
}

export function GetBillInfoForEdit(data){   // 获取待修改的账单信息.
    return getRequest({
        url:'/api/services/web/financialBilling/GetBillInfoForEdit',
        data
    })       
}

export function GetCasePaySummary(data){   // 获取案件收费信息（账单）.
    return getRequest({
        url:'/api/services/web/financialBilling/GetCasePaySummary',
        data
    })       
}

export function GetChargeSummary(data){   // 账单获取费用信息.
    return getRequest({
        url:'/api/services/web/financialBilling/GetChargeSummary',
        data
    })       
}

export function GetBillinglogSummary(data){   // 账单获取工作日志.
    return getRequest({
        url:'/api/services/web/financialBilling/GetBillinglogSummary',
        data
    })       
}

export function GetBillings(data){   // 账单获取工作日志.
    return getRequest({
        url:'/api/services/web/FinancialBilling/GetBillings',
        data
    })       
}
