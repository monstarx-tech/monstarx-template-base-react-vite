import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import languages from './i18n/languages'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const lang = languages.find((l) => l.code === i18n.language)
    document.documentElement.dir = lang?.dir ?? 'ltr'
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <img
        src="https://monstarx.com/assets/monstarx-logo-white-DNrMw5cV.svg"
        alt="MonstarX"
        className="w-64"
      />
    </div>
  )
}

export default App
