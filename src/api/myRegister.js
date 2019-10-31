import { getRequest,uploadFile  } from '@/utils/cofig/ajax.js';

export function UserCaseActions(data){   // 获取用户案件操作列表
    return getRequest({
        url:'/api/services/web/Case/GetUserCaseActions',
        data
    })       
}

export function DeleteCase(data){   //  删除案件
    return getRequest({
        url:'/api/services/web/Case/DeleteCase',
        data
    })       
}

export function UserCases(data){   //  获取用户案件分页列表.(我的立案)
    return getRequest({
        url:'/api/services/web/Case/GetUserCases',
        data
    })       
}

export function OrUpdateCaseGeneralInfo(data){   //  创建或修改案件基本信息
    return getRequest({
        url:'/api/services/web/case/CreateOrUpdateCaseGeneralInfo',
        data
    })       
}

export function Client(data){   //  获取客户信息
    return getRequest({
        url:'/api/services/web/client/GetClient',
        data
    })       
}

export function CaseInfo(data){   // 获取案件详细信息
    return getRequest({
        url:'/api/services/web/case/GetCaseInfo',
        data
    })       
}

export function CaseChargeList(data){   // 获取案件收费信息（正常收费、风险收费、小时收费）
    return getRequest({
        url:'/api/services/web/case/GetCaseChargeList',
        data
    })       
}

export function CaseChargeForEdit(data){   // 获获取待编辑的案件收费信息
    return getRequest({
        url:'/api/services/web/case/GetCaseChargeForEdit',
        data
    })       
}

export function DCaseCharge(data){   // 删除收费明细数据
    return getRequest({
        url:'/api/services/web/casePayDetail/DeleteCaseCharge',
        data
    })       
}

export function UCaseLawyerCharg(data){   // 修改案件律师费率和分配比例
    return getRequest({
        url:'/api/services/web/caseLawyer/UpdateCaseLawyerCharg',
        data
    })       
}

export function COrUpdateCaseNormalCharge(data){   // 创建或修改正常收费明细数据
    return getRequest({
        url:'/api/services/web/casePayDetail/CreateOrUpdateCaseNormalCharge',
        data
    })       
}

export function COrUpdateCaseRiskCharge(data){   // 创建或修改风险收费明细数据
    return getRequest({
        url:'/api/services/web/casePayDetail/CreateOrUpdateCaseRiskCharge',
        data
    })       
}

export function uCaseContract(filePath,formData,name){   // 上传案件合同文档
    return uploadFile('/api/services/web/document/uploadCaseContract',filePath,formData,name)       
}

export function COrUpdateCaseCharge(data){   // 添加或修改案件费用信息
    return getRequest({
        url:'/api/services/web/case/CreateOrUpdateCaseCharge',
        data
    })       
}

export function GCaseContractList(data){   // 
    return getRequest({
        url:'/api/services/web/document/GetCaseContractList',
        data
    })       
}

export function GCaseChargeForEdit(data){   // 获取待编辑的案件收费信息
    return getRequest({
        url:'/api/services/web/Case/GetCaseChargeForEdit',
        data
    })       
}

export function UCaseContract(data){   // 上传案件合同文档
    return getRequest({
        url:'/api/services/web/document/uploadCaseContract',
        data
    })       
}

export function GCaseGeneralInfoForEdit(data){   // 获取待编辑的案件基本信息
    return getRequest({
        url:'/api/services/web/case/GetCaseGeneralInfoForEdit',
        data
    })       
}

export function COrUpdateCaseLawyer(data){   // 获取待编辑的案件基本信息
    return getRequest({
        url:'/api/services/web/caseLawyer/CreateOrUpdateCaseLawyer',
        data
    })       
}

export function GMyCommonlyUsedEmployees(data){   // 根据案件参与人获取我及我经常合作的同事
    return getRequest({
        url:'/api/services/web/common/GetMyCommonlyUsedEmployees',
        data
    })       
}

export function GCaseClientContacts(data){   // 获取案件客户方联系人信息
    return getRequest({
        url:'/api/services/web/case/GetCaseClientContacts',
        data
    })       
}

export function GClientContactsForEdit(data){   // 获取编辑或修改联系人的信息
    return getRequest({
        url:'/api/services/web/clientContacts/GetClientContactsForEdit',
        data
    })       
}

export function COrUpdateClientContactsBasic(data){   // 获取编辑或修改联系人的信息
    return getRequest({
        url:'/api/services/web/clientContacts/CreateOrUpdateClientContactsBasic',
        data
    })       
}