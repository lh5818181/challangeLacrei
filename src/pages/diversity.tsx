import React from 'react'
import { useRouter } from 'next/router'
import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'
import DiversityForm from '@components/diversityForm/DiversityFormComponent'

export default function Diversity() {
  const router = useRouter()

  const handleSubmit = (data: {
    socialName: string
    genderIdentity: string
    sexualOrientation: string
    race: string
    pcd: string
  }) => {
    // Aqui você pode salvar os dados no estado global, contexto, ou enviar para API
    // Por simplicidade, vamos passar os dados via query string (não recomendado para dados sensíveis)
    const query = new URLSearchParams(data as Record<string, string>).toString()
    router.push(`/confirmation?${query}`)
  }

  return (
    <>
      <Header />
      <DiversityForm onSubmit={handleSubmit} />
      <Footer />
    </>
  )
}