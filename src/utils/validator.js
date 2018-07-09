module.exports = {
  isRequired: value => {
    if (!value) {
      return false
    }
    return !/^\s*$/.test(value)
  },
  isMobile: value => {
    return value ? /^1[3|4|5|8|7|9][0-9]\d{8}$/.test(value) : true
  },
  isLength: (value, length) => {
    return value.length ? value.length === length : true
  },
  isPwd: value => {
    if (!value.length) return true
    // \.\'\;
    let reg = new RegExp(/(?=.*[a-zA-Z])(?=.*\d)^[\w\-~!@,#$%^&amp;*/()+{}[ \]:]{6,20}$/)
    return reg.test(value)
  },
  isIdCard: value => {
    if (!value.length) return true
    let num = value.toUpperCase()
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
    if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num)) {
      return false
    }
    // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
    // 下面分别分析出生日期和校验位
    let len, re
    len = num.length
    if (len === 15) {
      re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/)
      let arrSplit = num.match(re)

      // 检查生日日期是否正确
      let dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4])
      let bGoodDay
      bGoodDay =
        dtmBirth.getYear() === Number(arrSplit[2]) && dtmBirth.getMonth() + 1 === Number(arrSplit[3]) && dtmBirth.getDate() === Number(arrSplit[4])
      if (!bGoodDay) {
        return false
      } else {
        // 将15位身份证转成18位
        // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
        let arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        let arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
        let nTemp = 0
        let num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6)
        for (let i = 0; i < 17; i++) {
          nTemp += num.substr(i, 1) * arrInt[i]
        }
        num += arrCh[nTemp % 11]
        return true
      }
    }
    if (len === 18) {
      re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/)
      let arrSplit = num.match(re)

      // 检查生日日期是否正确
      let dtmBirth = new Date(arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4])
      let bGoodDay
      bGoodDay =
        dtmBirth.getFullYear() === Number(arrSplit[2]) && dtmBirth.getMonth() + 1 === Number(arrSplit[3]) && dtmBirth.getDate() === Number(arrSplit[4])
      if (!bGoodDay) {
        return false
      } else {
        // 检验18位身份证的校验码是否正确。
        // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
        let valnum
        let arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        let arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
        let nTemp = 0
        for (let i = 0; i < 17; i++) {
          nTemp += num.substr(i, 1) * arrInt[i]
        }
        valnum = arrCh[nTemp % 11]
        if (valnum !== num.substr(17, 1)) {
          return false
        }
        return true
      }
    }
    return false
  },
  isBankCard: value => {
    if (!value.length) return true
    return /^\d{10,}$/.test(value)
  },
  isEmail: value => {
    if (!value.length) return true
    return /\b(^['_A-Za-z0-9-]+(\.['_A-Za-z0-9-]+)*@([A-Za-z0-9-])+(\.[A-Za-z0-9-)+)*(([A-Za-z0-9]+)*((\.[A-Za-z0-9]{2,})|(\.[A-Za-z0-9]{2,}\.[A-Za-z0-9]{2,}))$)\b/.test(
      value
    )
  },
  dateAdd(interval, number, date) {
    switch (interval) {
      case 'y':
        date.setFullYear(date.getFullYear() + number)
        return date
      case 'q':
        date.setMonth(date.getMonth() + number * 3)
        return date
      case 'm':
        date.setMonth(date.getMonth() + number)
        return date
      case 'w':
        date.setDate(date.getDate() + number * 7)
        return date
      case 'd':
        date.setDate(date.getDate() + number)
        return date
      case 'h':
        date.setHours(date.getHours() + number)
        return date
      case 'mi':
        date.setMinutes(date.getMinutes() + number)
        return date
      case 's':
        date.setSeconds(date.getSeconds() + number)
        return date
      default:
        date.setDate(date.getDate() + number)
        return date
    }
  }
}
