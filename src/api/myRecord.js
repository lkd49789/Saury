import { getRequest  } from '@/utils/cofig/ajax.js';

export function MyWorklogs(data){   // 获取我的工作日志信息列表
    return getRequest({
        url:'/api/services/web/Worklog/GetMyWorklogs',
        data
    })       
}

export function MyParticipantWorklogs(){   // 获取我参与尚未转化的工作日志
    return getRequest({
        url:'/api/services/web/Worklog/GetMyParticipantWorklogs'
    })       
}

export function WorklogForEdit(data){   // 获取待修改的工作日志信息
    return getRequest({
        url:'/api/services/web/worklog/GetWorklogForEdit',
        data
    })       
}

export function OrUpdateWorklog(data){   //创建或修改工作日志信息
    return getRequest({
        url:'/api/services/web/worklog/CreateOrUpdateWorklog',
        data
    })       
}

export function Worklog(data){   //获取工作日志详细信息
    return getRequest({
        url:'/api/services/web/worklog/GetWorklog',
        data
    })       
}

export function WorklogStatistics(data){   //工作日志数量、自报小时、业务小时、账单小时统计
    return getRequest({
        url:'/api/services/web/worklogAnalysis/GetWorklogStatistics',
        data
    })       
}

export function ClientBasicTotal(data){   //获取案件客户基础数据统计
    return getRequest({
        url:'/api/services/web/clientStatistics/GetClientBasicTotal',
        data
    })       
}

export function ClientYearTotal(data){   //获取案件客户基础数据统计
    return getRequest({
        url:'/api/services/web/clientStatistics/GetClientYearTotal',
        data
    })       
}

export function GetLogs(data){   //获取操作日志列表.
    return getRequest({
        url:'/api/services/web/Workflow/GetLogs',
        data
    })       
}

