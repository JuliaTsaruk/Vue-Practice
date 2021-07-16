module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "~@/assets/styles/variables.sass"`
        },
        scss: {
          additionalData: `@import "~@/assets/styles/variables.scss";`
        },
      }
    }
  }