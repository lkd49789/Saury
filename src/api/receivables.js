import { getData  } from '@/utils/cofig/ajax.js';

export function Cases(data){   // 获取通用代码列表(递归或非递归)
    return getData({
        url:'/api/services/web/common/GetCases',
        data
    })       
}