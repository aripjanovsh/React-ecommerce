import React from 'react';
import {Link} from 'react-router-dom';
import {getTotalItemsCount} from "../../modules/shopping-cart/store/selectors";
import {connect} from "react-redux";
import Badge from "@material-ui/core/Badge";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import {createStyles, makeStyles} from '@material-ui/core/styles';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            paddingBottom: '10px'
        },
        title: {
            flexGrow: 1
        },
        titleLink: {
            color: '#fff',
            textDecoration: 'none'
        }
    })
);

const Header = ( {ordersCount} ) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
               <Container>
                   <Toolbar>
                       <Typography variant="h6" className={classes.title}>
                           <Link to="/" className={classes.titleLink}>Book Store</Link>
                       </Typography>
                       <div>
                           <IconButton
                               color="inherit"
                               component={Link}
                               to="/cart">
                               <Badge badgeContent={ordersCount} color="secondary">
                                   <ShoppingBasketIcon />
                               </Badge>
                           </IconButton>
                       </div>
                   </Toolbar>
               </Container>
            </AppBar>
        </div>
    );
};

const mapStateToProps = (state) => {

    return {
        ordersCount: getTotalItemsCount(state)
    };
};

export default connect(mapStateToProps)(Header);