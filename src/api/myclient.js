import { getRequest } from '@/utils/cofig/ajax.js';

export function Clients(data){   // 获取客户列表
    return getRequest({
        url:'/api/services/web/client/GetClients',
        data
    })       
}

 // url:'/api/services/web/client/GetClients',


export function PersonAnnualCounts(){   // 
    return getRequest({
        url:'/api/services/web/analyzeStatistics/GetPersonAnnualCounts'
    })       
}

export function Region(data){   // 获取地区列表（递归或非递归）
    return getRequest({
        url:'/api/services/web/Common/GetRegion',
        data
    })       
}

export function SearchForClients(){   //获取列表页检索条件信息）
    return getRequest({
        url:'/api/services/web/client/GetSearchForClients'
    })       
}

export function GCases(data){   //获取列表页检索条件信息）
    return getRequest({
        url:'/api/services/web/Case/GetCases',
        data
    })       
}

export function GClientForEdit(data){   //获取被修改的客户信息
    return getRequest({
        url:'/api/services/web/client/GetClientForEdit',
        data
    })       
}

export function COrUpdateClientBasic(data){   //获取被修改的客户信息
    return getRequest({
        url:'/api/services/web/client/CreateOrUpdateClientBasic',
        data
    })       
}

export function GVisitRecords(data){   //获取拜访记录列表
    return getRequest({
        url:'/api/services/web/clientVisitServiceRecords/GetVisitRecords',
        data
    })       
}