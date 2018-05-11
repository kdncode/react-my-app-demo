import React, { Component } from 'react';

class Product extends Component {
  // for Buy Now button (long method)
  constructor(props){
      super(props)
      this.onBuyNow = this.onBuyNow.bind(this)
  }

  onBuyNow() {
      alert(this.props.name);
  }

  // for View now button (short & fast method)
  onViewNow = () => {
      alert(this.props.price);
  }

  onAddProduct = () => {
    console.log(this.refs.name.value)
  }

  render() {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="">Product</label>
                <input type="text" ref="name" className="form-control" /> <br/>
                <button className="btn btn-primary" onClick={this.onAddProduct}>Save</button>
            </div>
            <div className="col-sm">
                <div className="card container" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={this.props.image} alt="Card img cap" />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.price}</p>
                            <button className="btn btn-success" 
                                onClick={ this.onBuyNow }
                                >Buy Now</button> &nbsp;

                            <button className="btn btn-primary" 
                                onClick={ this.onViewNow }
                                >View Now</button>
                        </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Product;
