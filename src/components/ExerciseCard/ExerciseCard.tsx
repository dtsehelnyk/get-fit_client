import React from 'react'
import { Box, Typography } from '@mui/material';

import { ExerciseTemplate } from '../../types/requestParams';
import Tag from '../Tag';

type ExerciseCardProps = Omit<ExerciseTemplate, '_id' | 'type'>

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  name,
  description,
  tags = [],
  previewImg = ''
}) => {
  return (
    <Box padding={'5px'} border={'solid'}>
      <Typography variant='h3'>{name}</Typography>
      {tags.map((tag) => <Tag key={tag} content={tag} />)}
      <Typography variant='body1'>{description}</Typography>
    </Box>
  );
}

export default ExerciseCard;