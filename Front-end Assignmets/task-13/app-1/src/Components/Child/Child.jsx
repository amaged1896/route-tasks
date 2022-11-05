import React, { Component } from 'react';

export default class Child extends Component {
    state = {};
    render() {
        let { name, price, count, onSale, category, id } = this.props.productInfo;

        return (
            <>
                <div className="col-md-3">
                    <div className="product bg-white p-2 border position-relative">
                        <h5>{this.props.productIndex}</h5>
                        <h5>Name:{name}</h5>
                        <h5 className={price > 6000 ? 'text-danger' : ''}>Price:{price}</h5>
                        <h5>Category:{category}</h5>
                        <h5>Count:{count}</h5>
                        <h5>ID:{id}</h5>
                        {onSale ? (
                            <div className="sale bg-danger p-1 text-white position-absolute top-0 end-0">
                                Sale
                            </div>
                        ) : (
                            ''
                        )}
                        <button onClick={() => this.props.delete(this.props.productIndex)} className='btn btn-outline-danger btn-sm w-100'>Delete</button>
                        <button onClick={() => this.props.update(this.props.productIndex)} className='btn btn-outline-primary my-2 btn-sm w-100'>+</button>
                        <button onClick={() => this.props.decrease(this.props.productIndex)} className='btn btn-outline-info my-2 btn-sm w-100'>-</button>
                    </div>
                </div>
            </>
        );
    }
}
