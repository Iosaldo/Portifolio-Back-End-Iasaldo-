import React from "react";
import "./projectos.css";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function ProjectoAderitoCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/aderito-projecto.jpg"
          alt="Adérito Projecto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Adérito Projecto
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            O Learn English Aderito é uma plataforma digital de ensino de
            inglês, voltada para falantes de português, com foco em aprendizagem
            prática, personalizada e acessível.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Saber Mais
        </Button>
      </CardActions>
    </Card>
  );
}

export default function ProjectosPage() {
  return (
    <main className="projectos-page">
      <Typography variant="h4" component="h1" gutterBottom>
        Projectos
      </Typography>
      <Box className="projectos-grid">
        <ProjectoAderitoCard />
        {/* Adicione outros project cards aqui */}
      </Box>
    </main>
  );
}
