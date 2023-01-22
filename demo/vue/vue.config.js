const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: [
    '@dfinity/agent', '@dfinity/candid', '@dfinity/principal', '@dfinity/identity',
  ]
})
