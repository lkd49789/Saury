import { getRequest } from '../utils/cofig/request.js';

export function ScheduleCenterForCalendar(data){   // 获取日程
    return getRequest({
        url:'/api/services/web/schedule/GetScheduleCenterForCalendar',
        data
    } )   
}

export function GetScheduleForEdit(data){   // 获取待修改的日程信息
    return getRequest({
        url:'/api/services/web/schedule/GetScheduleForEdit',
        data
    } )   
}

export function CreateOrUpdateSchedule(data){   // 创建或修改日程信息
    return getRequest({
        url:'/api/services/web/schedule/CreateOrUpdateSchedule',
        data
    } )   
}

export function GetSchedule(data){   // 获取日程详细信息
    return getRequest({
        url:'/api/services/web/schedule/GetSchedule',
        data
    } )   
}