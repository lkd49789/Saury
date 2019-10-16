import { getData,getAavatar } from '@/utils/cofig/ajax.js';

export function ProjectCover(id){   // 获取项目的封面图片
    return getAavatar(`/api/services/web/taskProject/GetProjectCover?id=${id}`)     
}

export function TaskProjects(data){   // 获取项目列表
    return getData({
        url:'/api/services/web/taskProject/GetTaskProjects',
        data
    })       
}
