import dynamic from 'next/dynamic'

const DiversityForm = dynamic(() => import('./DiversityFormComponent'), {
  loading: () => <p>Carregando formulário...</p>,
  ssr: false,
})

export default DiversityForm
