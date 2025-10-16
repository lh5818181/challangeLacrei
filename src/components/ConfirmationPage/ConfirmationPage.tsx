import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Checkmark, ConfirmationContainer, Container, List, ListItem } from './ConfirmationPageStyles'


export default function ConfirmationPage() {
  const router = useRouter()
  const [data, setData] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!router.isReady) return
    setData(router.query as Record<string, string>)
  }, [router.isReady, router.query])

  return (
    <Container>
      <ConfirmationContainer>
        <h1>Seu cadastro foi concluído!</h1>
        <List>
          <ListItem>
            <Checkmark>✔</Checkmark> Nome social: {data.socialName || '-'}
          </ListItem>
          <ListItem>
            <Checkmark>✔</Checkmark> Identidade de gênero: {data.genderIdentity || '-'}
          </ListItem>
          <ListItem>
            <Checkmark>✔</Checkmark> Orientação sexual: {data.sexualOrientation || '-'}
          </ListItem>
          <ListItem>
            <Checkmark>✔</Checkmark> Cor/raça: {data.race || '-'}
          </ListItem>
          <ListItem>
            <Checkmark>✔</Checkmark> PcD: {data.pcd || '-'}
          </ListItem>
        </List>
      </ConfirmationContainer>
    </Container>
  )
}