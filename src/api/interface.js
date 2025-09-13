import { request } from "@/utils/service.js";

export function getInterfaceList() {
  return request({
    url: "api/visitor-query",
    method: "get"
  })
}

export function getInterface(id) {
  return request({
    url: `api/get/${id}`,
    method: "get"
  })
}