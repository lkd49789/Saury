import { getRequest  } from '@/utils/cofig/ajax.js';

export function GAuditVacations(data){   // 获取请假审核分页列表
    return getRequest({
        url:'/api/services/web/EmployeeVacation/GetAuditVacations',
        data
    })       
}

export function ProcessVacation(data){   // 操作请假.
    return getRequest({
        url:'/api/services/web/EmployeeVacation/ProcessVacation',
        data
    })       
}

export function GAuditVacationActions(data){   // 获取审核请假操作列表.
    return getRequest({
        url:'/api/services/web/EmployeeVacation/GetAuditVacationActions',
        data
    })       
}

export function GetAuditCases(data){   // 获取案件审核分页列表..
    return getRequest({
        url:'/api/services/web/Case/GetAuditCases',
        data
    })       
}

export function GAuditCaseActions(data){   // 获取审核案件操作列表..
    return getRequest({
        url:'/api/services/web/Case/GetAuditCaseActions',
        data
    })       
}

export function GConflictCheckList(data){   // 获取冲突检索条件..
    return getRequest({
        url:'/api/services/web/Case/GetConflictCheckList',
        data
    })       
}

export function GAuditWorklogs(data){   // 获取待审核工作日志信息列表..
    return getRequest({
        url:'/api/services/web/Worklog/GetAuditWorklogs',
        data
    })       
}

export function ProcessWorklog(data){   // 日志操作接口..
    return getRequest({
        url:'/api/services/web/Worklog/ProcessWorklog',
        data
    })       
}

export function GAuditWorklogActions(data){   // 获取审核日志操作列表...
    return getRequest({
        url:'/api/services/web/Worklog/GetAuditWorklogActions',
        data
    })       
}

export function GAuditCaseFileStamps(data){   // 获取文书报审审核分页列表...
    return getRequest({
        url:'/api/services/web/CaseFileStamp/GetAuditCaseFileStamps',
        data
    })       
}

export function GCaseFileStampOutput(data){   // 获取文书报审信息...
    return getRequest({
        url:'/api/services/web/caseFileStamp/GetCaseFileStampOutput',
        data
    })       
}

export function GAuditCaseFileStampActions(data){   // 获取审核文书报审操作列表....
    return getRequest({
        url:'/api/services/web/CaseFileStamp/GetAuditCaseFileStampActions',
        data
    })       
}

export function ProcessCaseFile(data){   // 获取审核文书报审操作列表....
    return getRequest({
        url:'/api/services/web/CaseFileStamp/ProcessCaseFile',
        data
    })       
}