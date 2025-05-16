const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // 실제 Vue 앱 주소로 수정 가능
    supportFile: false
  },
});
