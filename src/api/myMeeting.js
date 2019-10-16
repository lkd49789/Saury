import { getData,preView } from '@/utils/cofig/ajax.js';

export function Meetings(data){   // 获取会议列表
    return getData({
        url:'/api/services/web/Meeting/GetMeetings',
        data
    })       
}

export function MeetingForEdit(data){   // 获取待编辑的会议信息
    return getData({
        url:'/api/services/web/Meeting/GetMeetingForEdit',
        data
    })       
}

export function GeneralComboboxList(data){   // 获取客户、案件、人员、客户联系人下拉列表
    return getData({
        url:'/api/services/web/Common/GetGeneralComboboxList',
        data
    })       
}

export function OrUpdateMeeting(data){   // 创建或编辑会议信息
    return getData({
        url:'/api/services/web/Meeting/CreateOrUpdateMeeting',
        data
    })       
}

export function MeetingRoom(data){   // 获取会议室详细信息
    return getData({
        url:'/api/services/web/MeetingRoom/GetMeetingRoom',
        data
    })       
}

export function DocumentFile(id,fileClass){   // 下载文档
    return preView(`/api/services/web/meetingAttachment/GetDocumentFile?id=${id}`,fileClass)      
}

export function MeetingMinutesFile(id,fileClass){   // 生成并下载会议纪要
    return preView(`/api/services/web/meeting/GetMeetingMinutesFile?id=${id}`,fileClass)      
}

export function Meeting(data){   // 获取会议详情
    return getData({
        url:'/api/services/web/Meeting/GetMeeting',
        data
    })       
}

export function OrUpdateMeetingMinutes(data){   // 创建或修改会议纪要
    return getData({
        url:'/api/services/web/Meeting/CreateOrUpdateMeetingMinutes',
        data
    })       
}

export function MeetingParticipant(data){   // 确认是否到会
    return getData({
        url:'/api/services/web/meetingParticipant/ConfirmMeetingParticipant',
        data
    })       
}

export function GeneralCodeComboboxItems(data){   // 获取通用代码列表
    return getData({
        url:'/api/services/web/common/GetGeneralCodeComboboxItems',
        data
    })       
}

export function MeetingRoomCombobox(){   // 
    return getData({
        url:'/api/services/web/meetingRoom/GetMeetingRoomCombobox'
    })       
}
