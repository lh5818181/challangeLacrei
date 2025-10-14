import { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.lacreiGreen};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    outline: none;
  }
`

interface DiversityFormProps {
  onSubmit: (data: {
    socialName: string
    genderIdentity: string
    sexualOrientation: string
    race: string
    pcd: string
  }) => void
}

export default function DiversityForm({ onSubmit }: DiversityFormProps) {
  const [socialName, setSocialName] = useState('')
  const [genderIdentity, setGenderIdentity] = useState('')
  const [sexualOrientation, setSexualOrientation] = useState('')
  const [race, setRace] = useState('')
  const [pcd, setPcd] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ socialName, genderIdentity, sexualOrientation, race, pcd })
  }

  return (
    <Form onSubmit={handleSubmit} aria-label="Formulário de diversidade">
      <Label htmlFor="socialName">Nome social</Label>
      <Input
        id="socialName"
        type="text"
        value={socialName}
        onChange={(e) => setSocialName(e.target.value)}
        required
      />

      <Label htmlFor="genderIdentity">Identidade de gênero</Label>
      <Select
        id="genderIdentity"
        value={genderIdentity}
        onChange={(e) => setGenderIdentity(e.target.value)}
        required
      >
        <option value="" disabled>
          -- Selecione --
        </option>
        <option value="mulher">Mulher</option>
        <option value="homem">Homem</option>
        <option value="nao-binario">Não binário</option>
        <option value="outro">Outro</option>
        <option value="prefiro-nao-responder">Prefiro não responder</option>
      </Select>

      <Label htmlFor="sexualOrientation">Orientação sexual</Label>
      <Select
        id="sexualOrientation"
        value={sexualOrientation}
        onChange={(e) => setSexualOrientation(e.target.value)}
        required
      >
        <option value="" disabled>
          -- Selecione --
        </option>
        <option value="heterossexual">Heterossexual</option>
        <option value="gay">Gay</option>
        <option value="bissexual">Bissexual</option>
        <option value="lesbica">Lésbica</option>
        <option value="pansexual">Pansexual</option>
        <option value="assexual">Assexual</option>
        <option value="queer">Queer</option>
        <option value="prefiro-nao-responder">Prefiro não responder</option>
      </Select>

      <Label htmlFor="race">Cor/raça</Label>
      <Select
        id="race"
        value={race}
        onChange={(e) => setRace(e.target.value)}
        required
      >
        <option value="" disabled>
          -- Selecione --
        </option>
        <option value="branca">Branca</option>
        <option value="preta">Preta</option>
        <option value="parda">Parda</option>
        <option value="amarela">Amarela</option>
        <option value="indigena">Indígena</option>
        <option value="prefiro-nao-responder">Prefiro não responder</option>
      </Select>

      <Label htmlFor="pcd">Pessoa com deficiência (PcD)</Label>
      <Select
        id="pcd"
        value={pcd}
        onChange={(e) => setPcd(e.target.value)}
        required
      >
        <option value="" disabled>
          -- Selecione --
        </option>
        <option value="sim">Sim</option>
        <option value="nao">Não</option>
        <option value="prefiro-nao-responder">Prefiro não responder</option>
      </Select>

      <Button type="submit" aria-label="Enviar formulário">
        Enviar
      </Button>
    </Form>
  )
}
