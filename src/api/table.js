import request from '@/utils/request'
// 获取草稿列表
export function getList(data) {
  return request({
    url: '/draft/list',
    method: 'post',
    data: data
  })
}
// 更新草稿创建新草稿
export function updateList(data) {
  return request({
    url: '/draft/save',
    method: 'post',
    data: data
  })
}
// 获取草稿内容
export function getdraftList(data) {
  return request({
    url: '/draft/get ',
    method: 'post',
    data: data
  })
}
// 删除草稿 /draft/delete
export function deletedraftList(data) {
  return request({
    url: '/draft/delete',
    method: 'post',
    data: data
  })
}
// 定稿 先要创建在定稿 后端设计如此
export function finalize(data) {
  return request({
    url: '/draft/finalize',
    method: 'post',
    data: data
  })
}
// 获取素材 /media/list
export function getMediaList(data) {
  return request({
    url: '/media/list',
    method: 'post',
    data: data
  })
}
