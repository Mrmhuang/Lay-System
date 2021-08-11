import request from '@/utils/request'

export function getList(limit,offset) {
  return request({
    url: '/admin/getList',
    method: 'get',
    params:{
      limit,offset
    }
  })
}

export function getListCount() {
  return request({
    url: '/admin/getListCount',
    method: 'get'
  })
}
