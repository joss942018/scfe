import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ViewProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            product: {}
        }
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( res => {
            this.setState({product: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Ver detalle de producto</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Titulo: </label>
                            <div> { this.state.product.titulo }</div>
                        </div>
                        <div className = "row">
                            <label> Precio: </label>
                            <div> { this.state.product.precio }</div>
                        </div>
                        <div className = "row">
                            <label> SKU: </label>
                            <div> { this.state.product.sku }</div>
                        </div>
                        <div className = "row">
                            <label> Cantidad: </label>
                            <div> { this.state.product.cantidadDisponible }</div>
                        </div>
                        <div className = "row">
                            <label> Descripcion: </label>
                            <div> { this.state.product.descripcion }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProductComponent
