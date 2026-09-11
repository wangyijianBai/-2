import request from '@/utils/request'

// 查询护理项目列表
export function listProject(query) {
  return request({
    url: '/system/project/list',
    method: 'get',
    params: query
  })
}

// 查询护理项目详细
export function getProject(id) {
  return request({
    url: '/system/project/' + id,
    method: 'get'
  })
}

// 新增护理项目
export function addProject(data) {
  return request({
    url: '/system/project',
    method: 'post',
    data: data
  })
}

// 修改护理项目
export function updateProject(data) {
  return request({
    url: '/system/project',
    method: 'put',
    data: data
  })
}

// 删除护理项目
export function delProject(id) {
  return request({
    url: '/system/project/' + id,
    method: 'delete'
  })
}
