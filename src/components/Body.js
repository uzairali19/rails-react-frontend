import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
} from '@mui/material';
import { useSelector } from 'react-redux';

const Body = () => {
  const comicData = useSelector((state) => state.comicReducer);
  return (
    <div className="body">
      {comicData.map((comic) => {
        return (
          <Card key={comic.id} sx={{ maxWidth: 345, maxHeight: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={comic.image_url}
                alt={comic.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {comic.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {comic.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
};

export default Body;
