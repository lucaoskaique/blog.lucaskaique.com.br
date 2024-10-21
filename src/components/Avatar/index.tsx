import Image from "next/image"

import * as S from "./styled"

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <Image
        src="https://avatars.githubusercontent.com/u/20323741?v=4"
        alt="Uma foto minha vestido com fantasia de padre para o halloween e codando no notebook."
        width={64}
        height={64}
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
