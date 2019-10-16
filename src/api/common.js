import { getData,getAavatar  } from '@/utils/cofig/ajax.js';

export function EmployeePhoto(id){   // 获取图片 头像等
    return getAavatar(`/api/services/web/personal/GetEmployeePhoto?id=${id}`)     
}

export function GeneralCodeComboOutput(data){   // 获取通用代码列表(递归或非递归)
    return getData({
        url:'/api/services/web/Common/GetGeneralCodeComboOutput',
        data
    })       
}

export function GeneralComboboxList(data){   // 获取客户、案件、人员、客户联系人下拉列表
    return getData({
        url:'/api/services/web/Common/GetGeneralComboboxList',
        data
    })       
}

export function Organizations(data){   // 获取组织机构（数据权限过滤）
    return getData({
        url:'/api/services/web/common/GetOrganizations',
        data
    })       
}

export function CaseCategoryComboboxItems(data){   // 获取案件类别下拉列表
    return getData({
        url:'/api/services/web/common/GetCaseCategoryComboboxItems',
        data
    })       
}
