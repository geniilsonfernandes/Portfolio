import { Button, Flex, Subtitle, Title } from 'components/styles'
import * as S from './styles'
import { IoBagHandleOutline, IoCodeWorking } from 'react-icons/io5'
import { AiOutlinePaperClip } from 'react-icons/ai'
import Job, { JobProps } from 'components/Job'
import { skills } from './data'
import { useState } from 'react'

const jobs = [
  {
    company: 'TeamSoft Tecnologia e Sistemas',
    companyLogo:
      'https://media.licdn.com/dms/image/C4D0BAQHoAx03FptWnA/company-logo_100_100/0/1679589124581?e=1690416000&v=beta&t=PlimCEysGUKhczseDyR9_pQyyoDV_TiQ6aTZ3jmLWj0',
    job: 'Front-end Developer',
    period: '2022 - atual',
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
    companyLogo:
      'data:image/jpeg;base64,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',
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
    companyLogo:
      'https://media.licdn.com/dms/image/C4D0BAQE-5htsPrZNEg/company-logo_100_100/0/1557434014711?e=1690416000&v=beta&t=yZjw_9GCYL1J7QN8rQRen2Z1Bf2yTLi0tEtGhmtRyk4',
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
          <Title>O lado pessoa</Title>
          <Subtitle>
            Desde que comecei a trabalhar com desenvolvimento Front-end e
            Full-stack, venho me dedicando a aprender e aplicar as melhores
            práticas para entregar projetos robustos e eficientes.
            <br />
            <br />
            Quando não estou codificando, você pode me encontrar jogando ou
            lendo livros de ficcao científica. E é assim que equilibro minha
            vida profissional com minha paixão por outras atividades.
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
