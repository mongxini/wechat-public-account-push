/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '{{keyword1.DATA}}',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b4d8502ef943fe2236cd41a466f30355',

  PROVINCE: '安徽',
  CITY: '合肥',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oFfYy51tXJB7Pdz8_K2hHTw91aso',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '8g0kGCqWaHmwcnkOAkNlF2iuzGWGKf1MrdUewPHtk_k',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        {
          type: '生日', name: '汪名扬', year: '2000', date: '11-04',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
     },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oFfYy51tXJB7Pdz8_K2hHTw91aso',
    }
  ],

}

module.exports = USER_CONFIG

