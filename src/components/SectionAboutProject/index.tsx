import React from 'react'

import { SectionAboutProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'

const SectionAboutProject = ({
  image,
  title,
  description
}: SectionAboutProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(image.url)}
          loading="lazy"
          alt={image.alternativeText}
        />
        <div>
          <Heading>{title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{
              __html: description
            }}
          />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
