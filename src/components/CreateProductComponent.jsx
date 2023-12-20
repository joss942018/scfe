import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            titulo: '',
            precio: '',
            sku: '',
            cantidadDisponible: '',
            descripcion: ''
        }
        this.changeTituloHandler = this.changeTituloHandler.bind(this);
        this.changePrecioHandler = this.changePrecioHandler.bind(this);
        this.changeSkuHandler = this.changeSkuHandler.bind(this);
        this.changeCantidadDisponibleHandler = this.changeCantidadDisponibleHandler.bind(this);
        this.changeDescripcionHandler = this.changeDescripcionHandler.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);

    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ProductService.getProductById(this.state.id).then( (res) =>{
                let product = res.data;
                this.setState({
                    titulo: product.titulo,
                    precio: product.precio,
                    sku : product.sku,
                    cantidadDisponible : product.cantidadDisponible,
                    descripcion : product.descripcion
                });
            });
        }        
    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {titulo: this.state.titulo, precio: this.state.precio, sku: this.state.sku, cantidadDisponible: this.state.cantidadDisponible, descripcion: this.state.descripcion};
        console.log('product => ' + JSON.stringify(product));

        if(this.state.id === '_add'){
            ProductService.createProduct(product).then(res =>{
                this.props.history.push('/products');
            });
        }else{
            ProductService.updateProduct(product, this.state.id).then( res => {
                this.props.history.push('/products');
            });
        }
    }
    
    changeTituloHandler= (event) => {
        this.setState({titulo: event.target.value});
    }

    changePrecioHandler= (event) => {
        this.setState({precio: event.target.value});
    }

    changeSkuHandler= (event) => {
        this.setState({sku: event.target.value});
    }

    changeCantidadDisponibleHandler= (event) => {
        this.setState({cantidadDisponible: event.target.value});
    }

    changeDescripcionHandler= (event) => {
        this.setState({descripcion: event.target.value});
    }

    cancel(){
        this.props.history.push('/products');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Añadir Producto</h3>
        }else{
            return <h3 className="text-center">Actualizar Producto</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Titulo: </label>
                                            <input placeholder="Titulo" name="titulo" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeTituloHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Precio: </label>
                                            <input placeholder="Precio" name="precio" className="form-control" 
                                                value={this.state.precio} onChange={this.changePrecioHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> SKU: </label>
                                            <input placeholder="SKU" name="sku" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeSkuHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Cantidad Disponible: </label>
                                            <input placeholder="Cantidad Disponible" name="cantidadDisponible" className="form-control" 
                                                value={this.state.cantidadDisponible} onChange={this.changeCantidadDisponibleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Descripcion: </label>
                                            <input placeholder="Descripcion" name="descripcion" className="form-control" 
                                                value={this.state.descripcion} onChange={this.changeDescripcionHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Guardar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateProductComponent
