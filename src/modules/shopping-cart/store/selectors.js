import { createSelector } from 'reselect';

export const getItems = (state) => state.cart.get('items');

export const getTotalItemsCount = createSelector(
    getItems,
    (items) => items.reduce( (prev, curr) => prev + curr.get('quantity'), 0 )
)

export const getItemsWithTotals = createSelector(
    [ getItems ],
    (items) => {
        return items.map(i => {
            return i.set('total', i.get('price', 0) * i.get('quantity'));
        });
    }
);

export const getItemSubtotal = createSelector(
    [ getItemsWithTotals ],
    (items) => {
        return items.reduce((acc, i) => {
            return acc + i.get('total');
        }, 0);
    },
);

export const getCartItemsId = createSelector(
    getItems,
    items => items.map( item => item.get('id'))
);