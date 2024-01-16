import Head, { HeadProps } from 'components/Head'
import Project, { ProjectProps } from 'components/Project'
import * as S from './styles'

import Base from 'templates/Base'
import About from 'components/About'

export type HomeProps = {
  repoHighlights: Omit<ProjectProps, 'size' | 'isHighlighted'>
  repos: Omit<ProjectProps, 'size' | 'isHighlighted'>[]
  user: HeadProps
}

const portfolio = [
  {
    description:
      'CRM Dashboard é um dashboard para gestão de vendas de assinaturas. Neste projeto, foi utilizado o Docker para simular ambientes de produção e desenvolvimento. Além disso, o Redis e o BullMQ estão sendo empregados para o processamento de dados de maneira assíncrona e paralela.',
    id: '23245433434frefdfd',
    link: 'https://github.com/geniilsonfernandes/crm-dashboard',
    name: 'CRM Dashboard',
    photo: './img/crm_app.png',
    repo: 'https://github.com/geniilsonfernandes/crm-dashboard',
  },
  {
    description:
      'Money Guard é um aplicativo de controle financeiro focado na gestão mensal, estabelecendo metas e tendo como ponto central o salário do usuário. Com ele, podemos acompanhar de forma mais eficiente o que recebemos, estabelecer objetivos e economizar nossa graninha.',
    id: '23245433434f',
    link: 'https://github.com/geniilsonfernandes/moneyguard',
    name: 'Money Guard',
    photo: './img/money_app.png',
    repo: 'https://github.com/geniilsonfernandes/moneyguard',
  },
  {
    description:
      'O Habbit App é um gerenciador de hábitos desenvolvido em Next.js. Esta aplicação foi criada para permitir aos usuários organizarem e acompanharem seus hábitos diários de forma eficiente, ajudando na construção de rotinas mais produtivas e saudáveis.',
    id: '2324543',
    link: 'https://github.com/geniilsonfernandes/habbit-app',
    name: 'Habbit App',
    photo: './img/habit_app.png',
    repo: 'https://github.com/geniilsonfernandes/habbit-app',
  },
  {
    description:
      ' Dashschool é um gerenciador de cursos construído com Next.js e Prisma, utilizando o framework Chakra UI para estilização. Este projeto tem como objetivo fornecer uma plataforma para organizar e acessar cursos de maneira intuitiva e eficaz.',
    id: '5435rf',
    link: 'https://dashschool.vercel.app/',
    name: 'Dashschool',
    photo: './img/dashschool_app.png',
    repo: 'https://github.com/geniilsonfernandes/dashschool',
  },
  {
    description:
      'Uma aplicação desenvolvida para praticar conceitos avançados do React, aplicar Test-Driven Development (TDD) e melhorar a qualidade do código. Além disso, explora o uso de ferramentas como Storybook para visualização otimizada dos componentes.',
    id: '5435rf',
    link: 'https://weather-app-react-s.vercel.app/',
    name: 'Weather App react',
    photo: './img/weather_app.png',
    repo: 'https://github.com/geniilsonfernandes/weather-app-react-s',
  },
  {
    description:
      'Colorise Palette é um repositório de paletas de cores, permitindo aos usuários salvar e remover suas paletas favoritas. Esta aplicação oferece uma maneira simples e intuitiva de explorar e gerenciar diversas combinações de cores.',
    id: '5435rfswreewr',
    link: 'https://colorise-palette.vercel.app/',
    name: 'Colorise Palette',
    photo: './img/colorise_banne.png',
    repo: 'https://github.com/geniilsonfernandes/colorise-palette',
  },
] as Omit<ProjectProps, 'size' | 'isHighlighted'>[]

const Home = ({ user }: HomeProps) => {
  return (
    <Base>
      <Head {...user} />

      <S.Wrapper id="projetos">
        <S.Projects>
          {portfolio.map((item, i) => (
            <Project key={item.id} {...item} order={i} size="small" />
          ))}
        </S.Projects>
      </S.Wrapper>
      <About />
    </Base>
  )
}

export default Home
