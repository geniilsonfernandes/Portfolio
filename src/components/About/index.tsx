import { Button, Flex, Subtitle, Title } from 'components/styles'
import * as S from './styles'
import { IoBagHandleOutline, IoCodeWorking } from 'react-icons/io5'
import { AiOutlinePaperClip } from 'react-icons/ai'
import Job, { JobProps } from 'components/Job'
import { skills } from './data'
import { useState } from 'react'

const jobs = [
  {
    company: 'Beuni tecnologia',
    companyLogo: '/img/frecompany.jpeg',
    job: 'FullStack Developer',
    period: '2023 - atual',
    Description: `
      O Beuni é uma empresa de tecnologia e inovação a de compra, armazenamento e envio de brindes e produtos. Atuo no time como responsável pelo front end implementando novas features e melhorado a experiência dos usuários.
    `,
  },
  {
    company: 'TeamSoft Tecnologia e Sistemas',
    companyLogo: '/img/tscompany.jpeg',
    job: 'Front-end Developer',
    period: '2022 - 2023',
    Description: `
      Como Desenvolvedor Frontend, melhoro a experiência do usuário através da
      criação de Front end e da implementação de novas funcionalidades,
      garantindo integrações eficientes com o backend e serviços externos.
      `,
    cases: [
      {
        name: 'MRO',
        photo:
          'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/znd8e47r2diue2pdscq5',
      },
      {
        name: 'Domino"s',
        photo:
          'data:image/png;base64,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',
      },
    ],
  },
  {
    company: 'Freelancer',
    companyLogo: '/img/frecompany.jpeg',
    job: 'Front-end Developer',
    period: '2020 - 2021',
    Description: `
      Criei Landing pages e Websites usando ReactJS, HTML e CSS.
      Com experiência em integrar com backend e serviços externos,
      garantindo a performance e usabilidade dos projetos.
    `,
  },
  {
    company: 'Sib - Sistema Impulse de Educação Bilíngue',
    companyLogo: '/img/sibcompany.jpeg',
    job: 'Designer gráfico',
    period: '2018 - 2020',
    Description: `Responsável por desenvolver peças e gerenciar projetos em
    diversas áreas de comunicação offline e online, criação de animações
    e edição de vídeos, material didático para uso da metodologia de
    ensino aplicada e eventos.`,
  },
] as JobProps[]

const About = () => {
  const [showJobs, setShowJobs] = useState(2)

  const handleSeeMore = () => {
    if (showJobs === jobs.length) {
      setShowJobs(2)
    } else {
      setShowJobs(jobs.length)
    }
  }

  return (
    <S.Wrapper id="about">
      <S.LeftSide>
        <S.Description>
          <Title>Quem sou eu</Title>
          <Subtitle>
            Olá! Sou um profissional apaixonado por tecnologia, meu contato com
            tecnologia começou com designer gráfico. Tive a oportunidade de
            mergulhar no universo do desenvolvimento web, onde pude participar e
            desenvolver minhas habilidades em UX/UI. Hoje posso aproveita todo
            esse conhecimento para ser desenvolvedor Full Stack.
          </Subtitle>
          <Subtitle>
            Minha jornada no desenvolvimento full stack me proporcionou uma
            valiosa experiência na compreensão de processos e na resolução de
            problemas complexos. Ao longo desse tempo, busquei constantemente
            entregar soluções de alta qualidade, Sempre estou em busca de
            aprimorar minhas habilidades técnicas e também minhas soft skills.
          </Subtitle>
          <Subtitle>
            Estou sempre empenhado em aprender e crescer profissionalmente!
          </Subtitle>
        </S.Description>
      </S.LeftSide>
      <S.RightSide>
        <S.Box id="skills">
          <S.BoxHead>
            <S.BoxTitle>
              <IoCodeWorking /> Skills
            </S.BoxTitle>
          </S.BoxHead>
          <S.BoxBody>
            <S.IconsGrid>
              {skills.map((skill) => (
                <div key={skill.name} title={skill.name}>
                  {skill.icon}
                </div>
              ))}
            </S.IconsGrid>
          </S.BoxBody>
        </S.Box>
        <S.Box>
          <S.BoxHead>
            <S.BoxTitle>
              <IoBagHandleOutline /> Works
            </S.BoxTitle>
          </S.BoxHead>
          <S.BoxBody>
            <Flex direction="column" gap="16px" padding="16px 0">
              {jobs.slice(0, showJobs).map((job) => (
                <Job key={job.company} {...job} />
              ))}
            </Flex>
            <Button onClick={handleSeeMore}>
              {showJobs === jobs.length ? 'Ver menos' : 'Ver mais'}
            </Button>
          </S.BoxBody>
        </S.Box>
        <S.Box>
          <S.BoxHead>
            <S.BoxTitle>
              <IoBagHandleOutline /> Works
            </S.BoxTitle>
          </S.BoxHead>
          <S.BoxBody>
            <Button
              as="a"
              href="file/genilson_cv_2023_A_full.pdf"
              download="genilson_cv_2023_A_full.pdf"
            >
              <AiOutlinePaperClip /> Baixar currículo
            </Button>
          </S.BoxBody>
        </S.Box>
      </S.RightSide>
    </S.Wrapper>
  )
}

export default About
