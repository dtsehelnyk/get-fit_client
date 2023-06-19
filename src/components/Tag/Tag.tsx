import React from 'react'
import styles from './Tag.module.scss';
import { Typography } from '@mui/material'

type TagType = {
  content: string,
}

const Tag: React.FC<TagType> = ({ content }) => {
  return (
    <Typography variant='caption' className={styles.tag}>
      {content}
    </Typography>
  )
}

export default Tag;
