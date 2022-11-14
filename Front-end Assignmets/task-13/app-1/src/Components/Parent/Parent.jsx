import Child from '../Child/Child';

export default function Parent() {

    return (
        <>
            <div className="container bg-dark py-2">
                <div className="row gy-2 gx-2">
                    {this.state.products.map((product, index) => <Child key={index} decrease={this.decreaseCount} update={this.updateCount} productIndex={index} delete={this.deleteProduct} productInfo={product} />)}
                </div>
            </div>
        </>
    )
}