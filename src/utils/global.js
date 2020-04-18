/**
 * 全局常量、方法封装模块
 * 通过原型挂载到Vue属性
 * 通过 this.Global 调用
 */

 // 后台管理系统服务器地址
export const baseUrl = 'http://127.0.0.1:9000/'
// 文件服务器  （文件+图片）
export const imgUrl = 'http://192.168.91.128:8888/'
// export const baseUrl = 'https://hyl-graduation1.utools.club/'

export default {
  baseUrl,
  imgUrl,
}
