import { Component } from 'react';
import Child from '../Child/Child';

export default class Parent extends Component {
    state = {
        products: [{ id: 1, category: 'mobile', name: 'Samsung', count: 105, price: 1700, onSale: false },
        { id: 2, category: 'mobile', name: 'Samsung', count: 315, price: 4000, onSale: true },
        { id: 3, category: 'mobile', name: 'lenovo', count: 155, price: 6000, onSale: false },
        { id: 4, category: 'mobile', name: 'apple', count: 105, price: 12000, onSale: true },
        { id: 5, category: 'mobile', name: 'toshiba', count: 115, price: 11000, onSale: true },
        { id: 6, category: 'mobile', name: 'asus', count: 105, price: 3500, onSale: false },
        { id: 7, category: 'mobile', name: 'asus', count: 105, price: 1000, onSale: true },
        { id: 8, category: 'mobile', name: 'asus', count: 105, price: 2000, onSale: false }]
    };

    deleteProduct = (productIndex) => {
        let products = [...this.state.products];
        products.splice(productIndex, 1);
        this.setState({ products });
    };

    updateCount = (productIndex) => {
        let myProducts = [...this.state.products]; // take a deep copy
        myProducts[productIndex].count++;
        this.setState({ products: myProducts });
    };

    decreaseCount = (productIndex) => {
        let myProducts = [...this.state.products]; // take a deep copy
        myProducts[productIndex].count--;
        this.setState({ products: myProducts });
    };

    render() {
        return (
            <>
                <div className="container bg-dark py-2">
                    <div className="row gy-2 gx-2">
                        {this.state.products.map((product, index) => <Child key={index} decrease={this.decreaseCount} update={this.updateCount} productIndex={index} delete={this.deleteProduct} productInfo={product} />)}
                    </div>
                </div>
            </>
        );
    }
}