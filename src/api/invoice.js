import { getRequest } from '../utils/cofig/ajax.js';

export function GInvoice(data){ // 获取发票信息
    return getRequest({url:'/api/services/web/FinancialInvoice/GetInvoice',
    data
  })  
}

export function SInvoice(data){ // 提交发票.
    return getRequest({url:'/api/services/web/financialInvoice/SubmitInvoice',
    data
  })  
}

export function GInvoices(data){ // 获取发票分页列表.
    return getRequest({url:'/api/services/web/financialInvoice/GetInvoices',
    data
  })  
}

export function GInvoiceStates(data){ // 获取发票分页列表.
    return getRequest({url:'/api/services/web/FinancialInvoice/GetInvoiceStates',
    data
  })  
}

export function ProcessInvoice(data){ // 处理发票.
    return getRequest({url:'/api/services/web/FinancialInvoice/ProcessInvoice',
    data
  })  
}

export function CancelInvoice(data){ // 处理发票.
    return getRequest({url:'/api/services/web/financialInvoice/CancelInvoice',
    data
  })  
}