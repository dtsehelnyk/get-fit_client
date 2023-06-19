export type LoginParams = {
  email: string,
  password: string,
}

export type ExerciseTemplate = {
  _id: string,
  name: string,
  description: string,
  type: 'time' | 'reps',
  tags?: string[],
  previewImg?:  string,
}
