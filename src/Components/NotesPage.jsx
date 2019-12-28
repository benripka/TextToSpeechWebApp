import React, { useState, useEffect } from "react";
import { Grid, Paper, Button, Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles } from "@material-ui/core";
import Markdown from "markdown-to-jsx";
import axios from "axios";

const useStyles = makeStyles({
    card: {
      maxWidth: 1000,
    },
    media: {
      height: 300,
    },
  });

const MenuItem = (props) => {

    const handleSelection = (event, value) => {
        console.log(value);
    }

    const classes = useStyles();

    const name = props.name;
    const image =  props.image;

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={handleSelection}>
                <CardMedia 
                    className={classes.media}
                    image={image}
                    title="photo"
                />
                <CardContent>
                    <Typography variant="h4">
                        {name}
                    </Typography>
                    <Typography variant="body1">
                        ASdf;qikernjf as;djnv q;ojnadav a;ka; as;knasfd;kjnasfrkj,ergnl sdfksdb lj,dum jhdslkfuh ajdk.fmuhjaldg,kmuj 
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export const NotesPage= (props) => {
    
    const [article, setArticle] = useState("loading article ...");

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "http://localhost:5000/article"
            );

            setArticle(result.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Grid container spacing={4} justify="center" direction="row">
                <Grid xs={4} item>
                    <Grid spacing={4} container justify="center" direction="column">
                            <Grid item>
                                <MenuItem name="Reinforcement Learning" image="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15663/deep-dive-into-reinforcement-learning-2393e08aa800a4247f6066eee9ba0e8d.png"/>
                            </Grid>
                            <Grid item>
                                <MenuItem name="Digital Logic" image="https://www.educationoncloud.in/wp-content/uploads/2017/11/Digital-Electronics-DE.jpg" />
                            </Grid>             
                    </Grid>
                </Grid>
                <Grid xs={4} item>
                    <Grid container spacing={4} justify="center" direction="column">
                            <Grid item>
                                <MenuItem name="Digital Electronics" image="https://compote.slate.com/images/f32a2c4b-3933-4feb-93cb-20750278d07c.jpg"/>
                            </Grid>
                            <Grid item>
                                <MenuItem name="Operating Systems" image="https://media.geeksforgeeks.org/wp-content/uploads/os.png"/> 
                            </Grid>          
                    </Grid>
                </Grid>
                <Grid xs={4} item>
                    <Grid container spacing={4} justify="center" direction="column">
                            <Grid item>
                            <MenuItem name="Computer Interfacing" image="https://www.gdconf.com/sites/default/files/elctrobrain.jpeg" />
                            </Grid>
                            <Grid item>
                            <MenuItem name="Software Design" image="https://miro.medium.com/max/820/1*W26o1ajbW7oc2BxLZm7_Aw.png"/>                 
                            </Grid>              
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center" direction="row">
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={8}>
                    <Markdown>{article}</Markdown>
                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>
        </div>
    );
}