import { getRequest,getAavatar  } from '@/utils/cofig/ajax.js';

export function EmployeePhoto(id){   // 获取图片 头像等
    return getAavatar(`/api/services/web/personal/GetEmployeePhoto?id=${id}`)     
}

export function GClientContactAvatar(id){   // 获取客户联系人头像
    return getAavatar(`/api/services/web/clientContacts/GetClientContactAvatar?id=${id}`)     
}

export function GeneralCodeComboOutput(data){   // 获取通用代码列表(递归或非递归)
    return getRequest({
        url:'/api/services/web/Common/GetGeneralCodeComboOutput',
        data
    })       
}

export function GeneralComboboxList(data){   // 获取客户、案件、人员、客户联系人下拉列表
    return getRequest({
        url:'/api/services/web/Common/GetGeneralComboboxList',
        data
    })       
}

export function Organizations(data){   // 获取组织机构（数据权限过滤）
    return getRequest({
        url:'/api/services/web/Common/GetOrganizations',
        data
    })       
}

export function CaseCategoryComboboxItems(data){   // 获取案件类别下拉列表
    return getRequest({
        url:'/api/services/web/Common/GetCaseCategoryComboboxItems',
        data
    })       
}

export function MyParticipantWorklog(data){   // 取消我参与的日志转换提醒
    return getRequest({
        url:'/api/services/web/worklog/CancelMyParticipantWorklog',
        data
    })       
}

export function MyParticipantWorklogs(){   // 获取我参与尚未转化的工作日志
    return getRequest({
        url:'/api/services/web/worklog/GetMyParticipantWorklogs'
    })       
}

export function GeneralCodeComboboxItems(data){   // 获取通用代码列表
    return getRequest({
        url:'/api/services/web/common/GetGeneralCodeComboboxItems',
        data
    })       
}

export function COrUpdateCaseCharge(data){   // 添加或修改案件费用信息
    return getRequest({
        url:'/api/services/web/case/CreateOrUpdateCaseCharge',
        data
    })       
}

export function UCaseLawyerCharge(data){   // 修改案件律师费率和分配比例
    return getRequest({
        url:'/api/services/web/caseLawyer/UpdateCaseLawyerCharge',
        data
    })       
}

export function GEmployees(data){   // 获取人员分页列表
    return getRequest({
        url:'/api/services/web/common/GetEmployees',
        data
    })       
}

export function GClientContacts(data){   // 获取客户联系人列表
    return getRequest({
        url:'/api/services/web/common/GetClientContacts',
        data
    })       
}

export function GCaseInfo(data){   // 获取案件详细信息
    return getRequest({
        url:'/api/services/web/case/GetCaseInfo',
        data
    })       
}

export function GClient(data){   // 获取客户信息
    return getRequest({
        url:'/api/services/web/client/GetClient',
        data
    })       
}

export function TaskStages(data){   // 获取项目下的任务阶段列表  1111
    return getRequest({
        url:'/api/services/web/TaskPlanning/GetTaskStages',
        data
    })       
}

export function SProcessCase(data){   // 处理案件
    return getRequest({
        url:'/api/services/web/Case/ProcessCase',
        data
    })       
}

export function GetLogs(data){   //获取操作日志列表.
    return getRequest({
        url:'/api/services/web/Workflow/GetLogs',
        data
    })       
}