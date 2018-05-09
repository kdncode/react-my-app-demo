import React, { Component } from 'react';

class Product extends Component {
  // for Buy Now button (long method)
  constructor(props){
      super(props)
      this.onBuyNow = this.onBuyNow.bind(this)
  }

  onBuyNow() {
      alert(this.props.name)
  }

  // for View now button (short & fast method)
  onViewNow = () => {
      alert(this.props.price)
  }

  render() {
    return (
        <div className="col-sm">
            <div className="card container" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={this.props.image} alt="Card img cap" />
                    <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.price}</p>
                    <a className="btn btn-success" 
                        onClick={ this.onBuyNow }
                        >Buy Now</a> &nbsp;
                    <a className="btn btn-primary" 
                        onClick={ this.onViewNow }
                        >View Now</a>
                    </div>
            </div>
        </div>
    );
  }
}

export default Product;
