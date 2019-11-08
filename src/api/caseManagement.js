import { getRequest } from '../utils/cofig/request.js';

export function GetCaseActions(data){   // 获取案件操作列表
    return getRequest({
        url:'/api/services/web/Case/GetCaseActions',
        data
    } )   
}

export function GCaseChangeStates(data){   // 获取案件操作列表
    return getRequest({
        url:'/api/services/web/Case/GetCaseChangeStates',
        data
    } )   
}

export function GCaseStates(){   // 获取案件状态列表
    return getRequest({
        url:'/api/services/web/Case/GetCaseStates'
    } )   
}