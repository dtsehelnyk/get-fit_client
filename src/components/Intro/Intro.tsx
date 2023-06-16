import React, { ReactElement, ReactNode } from 'react'

interface IntroProps {
  title: ReactNode | ReactElement | String,
  children?: ReactNode | ReactElement | String,
}

const Intro: React.FC<IntroProps> = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  )
}

export default Intro;
