module.exports = {
  presets: [
    // Converte código JS moderno para JS um pouco mais antigo. 
    // Baseado no ambiente da aplicação.
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}