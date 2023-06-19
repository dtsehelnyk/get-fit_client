import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import Intro from "../../components/Intro";
import { getCommonEx } from "../../utils/axios";
import { Container, Grid } from "@mui/material";
import { ExerciseTemplate } from "../../types/requestParams";
import ExerciseCard from "../../components/ExerciseCard";

export const Exercises = () => {
  const [exerciseTemplates, setExerciseTemplates] = useState<ExerciseTemplate[] | null>(null);
  useEffect(() => {
    const handleRequestCommonEx = async () => {
      const data = await getCommonEx();

      console.log('__res', data);
      
      if (data) {
        setExerciseTemplates(data);
      }
    }

    handleRequestCommonEx();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Intro title={'Exercise templates'} />

        <Grid container spacing={2}>
          {exerciseTemplates?.map((ex) => {
            return (
              <Grid item xs={12} md={6} key={ex._id}>
                <ExerciseCard
                  name={ex.name}
                  description={ex.description}
                  tags={ex.tags}
                  previewImg={ex.previewImg}
                />  
              </Grid>          
            );
          })}
        </Grid>
        
      </Container>
    </>
  );
};
