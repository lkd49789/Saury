import { getRequest, getAavatar, uploadFile, preView } from '@/utils/cofig/request.js';

export function ProjectCover(id){   // 获取项目的封面图片
    return getAavatar(`/api/services/web/TaskProject/GetProjectCover?id=${id}`)     
}

export function TaskProjects(data){   // 获取项目列表
    return getRequest({
        url:'/api/services/web/TaskProject/GetTaskProjects',
        data
    })       
}

export function TemplatesWithGroup(data){   // 获取模板分组列表
    return getRequest({
        url:'/api/services/web/TaskTemplate/GetTemplatesWithGroup',
        data
    })       
}

export function ApplicationTemplatesWithGroup(data){   // 获取系统模板分组列表
    return getRequest({
        url:'/api/services/web/TaskTemplate/GetApplicationTemplatesWithGroup',
        data
    })       
}

export function Stages(data){   // 获取阶段列表
    return getRequest({
        url:'/api/services/web/TaskTemplate/GetStages',
        data
    })       
}

export function ApplicationStages(data){   // 获取系统阶段列表
    return getRequest({
        url:'/api/services/web/TaskTemplate/GetApplicationStages',
        data
    })       
}

export function OrUpdateTaskProject(data){   // 新增或编辑项目
    return getRequest({
        url:'/api/services/web/TaskProject/CreateOrUpdateTaskProject',
        data
    })       
}

export function upProjectCover(image,data){   // 上传项目封面
    return uploadFile(
        '/api/services/web/TaskProject/UploadProjectCover',
        image,
        data
    )       
}

export function TaskStages(data){   // 获取项目下的任务阶段列表
    return getRequest({
        url:'/api/services/web/TaskPlanning/GetTaskStages',
        data
    })       
}

export function Tasks(data){   // 获取项目下符合条件的所有任务
    return getRequest({
        url:'/api/services/web/TaskPlanning/GetTasks',
        data
    })       
}

export function TaskParticipant(data){   // 完成任务接口
    return getRequest({
        url:'/api/services/web/TaskParticipant/CompletedTaskParticipant',
        data
    })       
}

export function DeleteTasks(data){   //
    return getRequest({
        url:'/api/services/web/TaskPlanning/DeleteTask',
        data
    })       
}

export function DeleteTaskStages(data){   //
    return getRequest({
        url:'/api/services/web/TaskPlanning/DeleteTaskStage',
        data
    })       
}

export function DocumentFile(id,fileClass){   // 获取附件文件
    return preView(`/api/services/web/taskAttachment/GetDocumentFile?id=${id}`,fileClass)     
}

export function OrUpdateSubTask(data){   //创建或修改子任务
    return getRequest({
        url:'/api/services/web/TaskPlanning/CreateOrUpdateSubTask',
        data
    })       
}

export function Comments(data){   // 获取评论消息分页列表
    return getRequest({
        url:'/api/services/web/TaskComment/GetComments',
        data
    })       
}

export function CfTaskParticipant(data){   // 确认是否接受任务接口
    return getRequest({
        url:'/api/services/web/TaskParticipant/ConfirmTaskParticipant',
        data
    })       
}

export function Task(data){   // 确认是否接受任务接口
    return getRequest({
        url:'/api/services/web/TaskPlanning/GetTask',
        data
    })       
}

export function Comment(data){   // 发送评论消息
    return getRequest({
        url:'/api/services/web/TaskComment/CreateComment',
        data
    })       
}

export function Attachment(tempFilePaths,data){   // 评论消息附件上传
    return uploadFile('/api/services/web/TaskComment/UploadAttachment',
    tempFilePaths,data
    )       
}

export function DSubTask(data){   // 删除子任务（物理删除）
    return getRequest({
        url:'/api/services/web/taskPlanning/DeleteSubTask',
        data
    })       
}

export function OrUpdateTaskStage(data){   // 
    return getRequest({
        url:'/api/services/web/taskPlanning/CreateOrUpdateTaskStage',
        data
    })       
}

export function CaseLawyers(data){   // 
    return getRequest({
        url:'/api/services/web/caseLawyer/GetCaseLawyers',
        data
    })       
}

export function OrUpdateTask(data){   // 
    return getRequest({
        url:'/api/services/web/taskPlanning/CreateOrUpdateTask',
        data
    })       
}

export function ComTaskParticipant(data){   // 完成任务接口
    return getRequest({
        url:'/api/services/web/taskParticipant/CompletedTaskParticipant',
        data
    })       
}
