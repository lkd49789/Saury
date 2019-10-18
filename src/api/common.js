import { getRequest,getAavatar  } from '@/utils/cofig/ajax.js';

export function EmployeePhoto(id){   // 获取图片 头像等
    return getAavatar(`/api/services/web/personal/GetEmployeePhoto?id=${id}`)     
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