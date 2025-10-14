import React from 'react'
import { useState } from 'react'
import { Form, Label, Input, Select, Button } from './diversityFormStyles'


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
