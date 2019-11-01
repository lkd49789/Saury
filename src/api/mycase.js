import { getRequest  } from '@/utils/cofig/ajax.js';

export function GMyCases(data){   // 获取我的案件列表
    return getRequest({
        url:'/api/services/web/Case/GetMyCases',
        data
    })       
}

export function GCaseStatusComboboxItems(data){   // 获取案件状态下拉列表.
    return getRequest({
        url:'/api/services/web/common/GetCaseStatusComboboxItems',
        data
    })       
}

export function GCaseChargeBasic(data){   // 获取案件收费信息
    return getRequest({
        url:'/api/services/web/case/GetCaseChargeBasic',
        data
    })       
}

export function GClientContactsList(data){   // 获取案件收费信息
    return getRequest({
        url:'/api/services/web/clientContacts/GetClientContactsList',
        data
    })       
}

export function GVisitRecords(data){   // 获取拜访记录列表
    return getRequest({
        url:'/api/services/web/clientVisitServiceRecords/GetVisitRecords',
        data
    })       
}

export function GTaskProjectBasic(data){   // 
    return getRequest({
        url:'/api/services/web/taskProject/GetTaskProjectBasic',
        data
    })       
}

export function GDocumentsWithFolders(data){   // 获取文档中心文档与文件夹列表
    return getRequest({
        url:'/api/services/web/document/GetDocumentsWithFolders',
        data
    })       
}

export function GWorklogs(data){   // 获取工作日志详细信息列表
    return getRequest({
        url:'/api/services/web/worklog/GetWorklogs',
        data
    })       
}

export function GCourts(data){   // 开庭提醒列表（CaseId）
    return getRequest({
        url:'/api/services/web/caseCourt/GetCourts',
        data
    })       
}

export function GUserBillingsCount(data){   // 获取账单统计信息.
    return getRequest({
        url:'/api/services/web/financialBilling/GetUserBillingsCount',
        data
    })       
}

export function GMyBillings(data){   // 获取我的账单列表信息.
    return getRequest({
        url:'/api/services/web/financialBilling/GetMyBillings',
        data
    })       
}

export function GUserInvoicesCount(data){   // 获取用户发票统计信息..
    return getRequest({
        url:'/api/services/web/financialInvoice/GetUserInvoicesCount',
        data
    })       
}

export function GUserInvoices(data){   // 获取用户发票分页列表.
    return getRequest({
        url:'/api/services/web/financialInvoice/GetUserInvoices',
        data
    })       
}

export function GUserReceiptsCount(data){   // 取用户收款统计信息..
    return getRequest({
        url:'/api/services/web/financialReceipt/GetUserReceiptsCount',
        data
    })       
}

export function GUserReceipts(data){   // 获取用户收款分页列表...
    return getRequest({
        url:'/api/services/web/financialReceipt/GetUserReceipts',
        data
    })       
}

export function GUserChargesCount(data){   // 获取用户费用统计信息....
    return getRequest({
        url:'/api/services/web/financialCharge/GetUserChargesCount',
        data
    })       
}

export function GUserCharges(data){   // 获取用户费用分页列表.....
    return getRequest({
        url:'/api/services/web/financialCharge/GetUserCharges',
        data
    })       
}

export function GCaseLawyersWithGroup(data){   // 
    return getRequest({
        url:'/api/services/web/caseLawyer/GetCaseLawyersWithGroup',
        data
    })       
}