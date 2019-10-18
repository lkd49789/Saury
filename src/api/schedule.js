import { getRequest } from '../utils/cofig/ajax.js';

export function ScheduleCenterForCalendar(data){   // 获取日程
    return getRequest({
        url:'/api/services/web/schedule/GetScheduleCenterForCalendar',
        data
    } )   
}

