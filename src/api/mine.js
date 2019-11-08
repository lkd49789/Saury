import { getRequest,preView } from '@/utils/cofig/request.js';

export function GetUsers(){   // 获取个人信息
    return getRequest({
        url:'/api/services/web/Personal/GetMe'
    })       
}

export function PersonAnnualCount(){   // 获取'案件''客户''时间''金额'数据
    return getRequest({
        url:'/api/services/web/AnalyzeStatistics/GetPersonAnnualCounts'
    })   
}

export function Resume(data){   // 简历信息
    return getRequest({
        url:'/api/services/web/EmployeeResume/GetResume',
        data
    })   
}

export function  Employee(data){   //获取员工信息
    return getRequest({
        url:'/api/services/web/Personal/GetEmployee',
        data
    })
}

export function  LaborRelationAttachment(id,fileClass){   //下载合同附件
    return preView(`/api/services/web/Personal/DownloadLaborRelationAttachment?id=${id}`,fileClass)
}

export function  LaborRelationAgreement(id,fileClass){   //下载合同保密协议
    return preView(`/api/services/web/Personal/DownloadLaborRelationAgreement?id=${id}`,fileClass)
}

export function  LaborRelation(){   //获取员工信息
    return getRequest({
        url:'/api/services/web/Personal/GetLaborRelation'
    })
}