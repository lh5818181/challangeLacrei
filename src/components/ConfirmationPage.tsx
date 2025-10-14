import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
`

const ConfirmationContainer = styled.main`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`

const Checkmark = styled.span`
  color: green;
  font-weight: bold;
  margin-right: 0.5rem;
`

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