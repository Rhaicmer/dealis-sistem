import { useState } from 'react'

import Login from './Pages/Login/Login.jsx'
function App() {

  return (
     <div style={{
      backgroundImage: 'url("https://img.freepik.com/fotos-premium/imagem-minima-de-fundo-de-documentos-na-mesa-do-escritorio-em-casa-em-um-espaco-preto-de-copia_236854-34864.jpg  ")',
      backgroundSize: 'cover',       // cobre todo o espaço
      backgroundPosition: 'center',  // centraliza a imagem
      backgroundRepeat: 'no-repeat', // evita repetição
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // ocupa 100% da altura da viewport
      width: '100%',   // ocupa 100% da largura
      margin: 0,       // remove margens padrão
    }}>
      <div>
        {/* Seu conteúdo aqui */}
        <h1 style={{ textAlign: 'center', color: '#FFF' }}>Dealis</h1>
        <p style={{color: '#FFF' }}>Sistema de gestão de documentos.</p>
      </div>
    </div>
  )
}

export default App
