import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    card: {
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
        marginBottom: '20px'
    },
    media: {
        paddingTop: "100%"
    },
    content: {
        textAlign: "left",
        padding: theme.spacing(3)
    },
    divider: {
        margin: `${theme.spacing(3)}px 0`
    }
}));

const ProductCard = ({item, onAddedToCart, onRemoveFromCart}) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={item.get('image')}
            />
            <CardContent className={classes.content}>
                <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                >
                    {item.get('title')}
                </Typography>
                <Typography
                    className={"MuiTypography--subheading"}
                    variant={"caption"}
                >
                    <b>Price: ${item.get('price')}</b><br/>
                    <b>First published: {item.get('first_published')} </b>
                </Typography>
                <Divider className={classes.divider} light/>

                <CardActions disableSpacing>
                    {item.get('inCart')
                        ?
                        <Button color="secondary" onClick={onRemoveFromCart}>
                            Remove From Cart
                        </Button>
                        :
                        <Button color="primary" onClick={onAddedToCart}>
                            Add To Cart
                        </Button>
                    }
                </CardActions>

            </CardContent>
        </Card>
    );
}

export default ProductCard