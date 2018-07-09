import validator from './validator.js'
import * as http from './http.js'
import * as api from '@/api/'

// let Utils = {
// 校验被保人
export const validateInsure = (vm, key) => {
    let self = this
    let refs = vm.$refs
    let value = ''
    value = refs[key]
    return value
}
// 格式化证件号码
export const formatIdCard = function(value) {
    let idCard = this.validateTrim(value)
    let len = idCard.length
    if (len >= 3) {
      let part1 = idCard.substring(0, 3)
      let part2 = idCard.substring(3, 6)
      let part3 = idCard.substring(6, 14)
      let part4 = idCard.substring(14)
      return part1 + ' ' + part2 + ' ' + part3 + ' ' + part4
    }
    return value
}
// 根据身份证获取出生年月
export const getBirthdayFromIdCard = function(idCard) {
    let birthday = ''

    if (idCard != null && idCard !== '') {
      if (idCard.length === 15) {
        birthday = '19' + idCard.substr(6, 6)
      } else if (idCard.length === 18) {
        birthday = idCard.substr(6, 8)
      }
      birthday = birthday.replace(/(.{4})(.{2})/, '$1-$2-')
    }

    return birthday
}
// 根据身份证获取性别
export const getSex = function(idCard) {
  let sex = '' // 女：F，男：M
  if (!idCard) {
    return sex
  }
  if (parseInt(idCard.substr(16, 1)) % 2 === 1) {
    sex = 'M'
  } else {
    sex = 'F'
  }
  return sex
}
// 去除空格
export const validateTrim = function(value) {
  if (value && value !== '') {
      return value.replace(/\s/g, '')
  }
  return value
}
// 校验必填
export const validRequired = (value) => {
  let valid = validator.isRequired(value)
  return valid
}
// 校验姓名
export const validName = (value) => {
  let valid = validator.isRequired(value)
  return valid
}
// 校验证件
export const validCertiType = (value) => {
  let valid = validator.isRequired(value)
  return valid
}
// 校验证件号
export const validCertiNo = (value, cardType) => {
  let valid = validator.isRequired(value)
  return valid
}
// 校验身份证证件号
export const validCertiNoIsIdCard = (value) => {
  let valid = validator.isIdCard(value)
  return valid
}
// 校验出生年月
export const validBirth = (value) => {
  let valid = validator.isRequired(value)
  return valid
}
// 校验出生年月
export const validSex = (value) => {
  let valid = validator.isRequired(value)
  return valid
}
// 校验手机号
export const validPhone = (value) => {
  let valid = validator.isRequired(value) && validator.isMobile(value)
  return valid
}
// 校验社保
export const validMedicare = (value) => {
  let valid = validator.isRequired(value)
  return valid
}
// 校验mail
export const validMail = (value) => {
  let valid = validator.isEmail(value)
  return valid
}
// 核保接口
export const insuredAction = (submitObj, cb, flag = 1) => {
  let obj = Object.assign({
    insuredFlag: flag.toString()
  }, submitObj)
  http.post({
      url: api.API_DATA_insuredMobileAction,
      data: obj
  }).then(res => {
      if (cb) {
        cb(res)
      }
  })
}

// module.exports = Utils
export default {
  validateInsure,
  formatIdCard,
  getBirthdayFromIdCard,
  getSex,
  validateTrim,
  validName,
  validCertiType,
  validCertiNo,
  validCertiNoIsIdCard,
  validBirth,
  validSex,
  validPhone,
  validMedicare
}
