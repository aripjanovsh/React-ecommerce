import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import ProductCard from "./ProductCard";
import Grid from "@material-ui/core/Grid";
import Spinner from "../../../shared/components/Spinner";
import {fetchProduct} from "../store/actions";
import {getAllProductWithInCart} from "../store/selectors";
import * as cartActions from "../../shopping-cart/store/actions";
import withApiService from "../../../shared/hocs/withApiService";


class ProductList extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {items = [], isLoading = false, errors = null, addItemToCart, remoteItemFromCart} = this.props;

        if (isLoading) return <Spinner/>;
        if (errors) return <span>errors</span>;

        return (
            <Grid container spacing={3}>
                {items.map((item, idx) => {
                    return (
                        <Grid key={item.get('id')} item xs={6} md={4}>
                            <ProductCard
                                item={item}
                                onAddedToCart={() => {
                                    addItemToCart(item.get('id'))
                                }}
                                onRemoveFromCart={() => {
                                    remoteItemFromCart(item.get('id'))
                                }}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: getAllProductWithInCart(state),
        isLoading: state.product.get('isLoading'),
        errors: state.product.get('errors')
    };
};

const mapDispatchToProps = (dispatch, {apiService}) => {
    return bindActionCreators({
        fetchBooks: fetchProduct(apiService),
        ...cartActions
    }, dispatch);
};

export default compose(
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ProductList);