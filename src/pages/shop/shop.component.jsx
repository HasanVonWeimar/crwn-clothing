import { render } from '@testing-library/react';
import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/preview-collection/collection-preview.component.jsx';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) =>(
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    )) //this displays each collection and then allows each collection
                    //component to display its products
                }
            </div>
        )
    }
    
}


export default ShopPage;