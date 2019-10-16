import { getData } from '@/utils/cofig/ajax.js';

export function Clients(data){   // 获取客户列表
    return getData({
        url:'/api/services/web/client/GetClients',
        data
    })       
}

export function PersonAnnualCounts(){   // 
    return getData({
        url:'/api/services/web/analyzeStatistics/GetPersonAnnualCounts'
    })       
}

export function Region(data){   // 获取地区列表（递归或非递归）
    return getData({
        url:'/api/services/web/Common/GetRegion',
        data
    })       
}
export function SearchForClients(data){   //获取列表页检索条件信息）
    return getData({
        url:'/api/services/web/client/GetSearchForClients'
    })       
}