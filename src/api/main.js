import { getData } from '../utils/cofig/ajax.js';

export function AllPermissions(){   // 获取权限
    return getData({
        url:'/api/services/app/Permission/GetAllPermissions',
        method:'get'
    })       
}

export function UserNotifications(){   // 获取通知
    return getData({
        url:'/api/services/app/Notification/GetUserNotifications',
        method:'get'
    })       
}

export function PersonAnnualCounts(){   //获取swiper数据
    return getData({
        url:'/api/services/web/analyzeStatistics/GetPersonAnnualCounts',
    })       
}

export function CurrentLoginInformations(){   // 当前用户登录信息
    return getData({
        url:'/api/services/app/Session/GetCurrentLoginInformations',
        method:'get'
    })       
}
