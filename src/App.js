import React, { Component } from 'react';
import Header from './components/Header';

/* STATE */
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : [
                { 
                    id: 1,
                    name: 'iPhone X',
                    price: '$1000',
                    image: 'https://ss7.vzw.com/is/image/VerizonWireless/iphone-x-kf-device-tab-d-3-retina?$pngalpha$&scl=1',
                    status: true
                },
                {
                    id: 2,
                    name: 'Samsung S9',
                    price: '$900',
                    image: 'https://ss7.vzw.com/is/image/VerizonWireless/pdp-samsung-star2-feature1-d-0218?$pngalpha$&scl=1',
                    status: false
                },
                {
                    id: 3,
                    name: 'Pixel 2',
                    price: '$700',
                    image: 'https://boygeniusreport.files.wordpress.com/2017/10/google-pixel-2-xl.png?w=782',
                    status: false
                }
            ],

            isActive : true
        };
    }
  
  onSetState = () => {
    // if( this.state.isActive === true ) {
    //     this.setState( { isActive : false })
    // } else {
    //     this.setState( { isActive : true })
    // }

    // Or
    this.setState( { isActive : !this.state.isActive })
  }

  render() {

    let elements = this.state.products.map( (product, index) => {
        let results = '';
        if (product.status) {
            return  <tr key = {index} >
                        <td>{index}</td>
                        <td>{product.name}</td>
                        <td>
                            <span className="label label-success">{product.price}</span>
                        </td>
                    </tr>
        }
        return results;
    });

    return (
      <div>
        <Header />
        <div className="container">
            <div className="row">
                <div className="row">
                    <table className="table table-stripe table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            { elements }
                        </tbody>
                    </table>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button onClick={this.onSetState} type="button" className="btn btn-warning">
                            Active : {this.state.isActive === true ? 'true' : 'false'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}


// class App extends Component {

//   OnClickMe() {
//       alert('hello')
//   }

//   render() {
//     var products = [
//         { 
//             id: 1,
//             name: 'iPhone X',
//             price: '$1000',
//             image: 'https://ss7.vzw.com/is/image/VerizonWireless/iphone-x-kf-device-tab-d-3-retina?$pngalpha$&scl=1',
//             status: true
//         },
//         {
//             id: 2,
//             name: 'Samsung S9',
//             price: '$900',
//             image: 'https://ss7.vzw.com/is/image/VerizonWireless/pdp-samsung-star2-feature1-d-0218?$pngalpha$&scl=1',
//             status: false
//         },
//         {
//             id: 3,
//             name: 'Pixel 2',
//             price: '$700',
//             image: 'https://boygeniusreport.files.wordpress.com/2017/10/google-pixel-2-xl.png?w=782',
//             status: false
//         }
//     ];

//     let elements = products.map( (product, index) => {
//         let results = '';
//         if (product.status) {
//             return <Product 
//                         key = {product.id}
//                         name={product.name}
//                         price={product.price} 
//                         image={product.image}
//                     />
//         }
//         return results;
//     })

//     return (
//       <div>
//         <Header />
//         <div className="container">
//             <div className="row">
//                 <div className="row">
//                     <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//                         { elements }
//                     </div>
//                     <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//                         <button onClick={this.OnClickMe} type="button" className="btn btn-warning">
//                             Click me
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
