import { Flex } from 'components/styles'
import * as S from './styles'

export type JobProps = {
  company: string
  companyLogo: string
  job: string
  period: string
  Description: string
  cases: {
    name: string
    photo: string
  }[]
}

const Job = ({ company, job, Description, cases, period }: JobProps) => {
  return (
    <S.Wrapper>
      <S.RightSide>
        <S.JobWrapper>
          <div>
            <div>
              <S.Info>
                <S.Name>{company}</S.Name>
                <S.Job>{job}</S.Job>
              </S.Info>
              <S.Period>{period}</S.Period>
            </div>
            <S.JobDetails>{Description}</S.JobDetails>
          </div>
          <Flex gap="16px">
            {cases &&
              cases.map((caseItem) => (
                <S.Cases key={caseItem.name}>
                  <S.CaseItemPhoto
                    src={caseItem.photo}
                    alt={caseItem.name}
                    title={caseItem.name}
                  />
                  {caseItem.name}
                </S.Cases>
              ))}
          </Flex>
        </S.JobWrapper>
      </S.RightSide>
    </S.Wrapper>
  )
}

export default Job
