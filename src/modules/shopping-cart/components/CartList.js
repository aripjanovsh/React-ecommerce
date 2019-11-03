import React from 'react';
import {connect} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {bindActionCreators} from "redux";
import * as cartActions from "../store/actions";
import {getItemSubtotal, getItemsWithTotals} from "../store/selectors";

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});

const CartList = ({items, subTotal, changeQuantity, remoteItemFromCart}) => {

    const classes = useStyles();

    if (!items.size) return <p>Cart is empty</p>;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Count</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item, index) => (
                        <TableRow key={item.get('id')}>
                            <TableCell component="th" scope="row">
                                {item.get('title')}
                            </TableCell>
                            <TableCell align="right">{item.get('quantity')}</TableCell>
                            <TableCell align="right">${item.get('price')}</TableCell>
                            <TableCell align="right">${item.get('total')}</TableCell>
                            <TableCell align="right">
                                <ButtonGroup size="small" aria-label="small outlined button group">
                                    <Button onClick={() => changeQuantity(index, -1)}>-</Button>
                                    <Button onClick={() => changeQuantity(index, 1)}>+</Button>
                                    <Button onClick={() => remoteItemFromCart(item.get('id'))}>Remove All</Button>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell colSpan={3} align="right">Total:</TableCell>
                        <TableCell align="right">${subTotal}</TableCell>
                        <TableCell/>
                    </TableRow>

                </TableBody>
            </Table>
        </Paper>
    )
}

const mapStateToProps = (state) => {
    return {
        items: getItemsWithTotals(state),
        subTotal: getItemSubtotal(state)
    };
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return bindActionCreators({
        ...cartActions
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList)
