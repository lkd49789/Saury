import { getRequest } from '@/utils/cofig/ajax.js';

export function GUserVacations(data){   // 获取用户请假分页列表
    return getRequest({
        url:'/api/services/web/EmployeeVacation/GetUserVacations',
        data
    })       
}

export function COrUpdateVacationApply(data){   // 创建/编辑请假申请
    return getRequest({
        url:'/api/services/web/EmployeeVacation/CreateOrUpdateVacationApply',
        data
    })       
}

export function GVacationDays(data){   // 获取年假天数
    return getRequest({
        url:'/api/services/web/employeeVacation/GetVacationDays',
        data
    })       
}

export function GVacationApplyOutput(data){   // 获取请假详情
    return getRequest({
        url:'/api/services/web/employeeVacation/GetVacationApplyOutput',
        data
    })       
}

export function CVacationApprove(data){   // 获取请假详情
    return getRequest({
        url:'/api/services/web/employeeVacation/CreateVacationApprove',
        data
    })       
}