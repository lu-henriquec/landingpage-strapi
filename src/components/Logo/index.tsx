import React from 'react'
import * as S from './styles'

import { Image } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const Logo = ({ alternativeText, url }: Image) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
