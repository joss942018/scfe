import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
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
        this.changePrecioHandler = this.changePrecioHandler.bind(this);
        this.changeSkuHandler = this.changeSkuHandler.bind(this);
        this.changeCantidadDisponibleHandler = this.changeCantidadDisponibleHandler.bind(this);
        this.changeDescripcionHandler = this.changeDescripcionHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
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

    updateEmployee = (e) => {
        e.preventDefault();
        let product = {titulo: this.state.titulo, precio: this.state.precio, sku: this.state.sku, cantidadDisponible: this.state.cantidadDisponible, descripcion: this.state.descripcion};
        console.log('product => ' + JSON.stringify(product));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(product, this.state.id).then( res => {
            this.props.history.push('/products');
        });
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

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Titulo: </label>
                                            <input placeholder="Titulo" name="titulo" className="form-control" 
                                                value={this.state.titulo} onChange={this.changeTituloHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Precio: </label>
                                            <input placeholder="Precio" name="precio" className="form-control" 
                                                value={this.state.precio} onChange={this.changePrecioHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> SKU: </label>
                                            <input placeholder="SKU" name="sku" className="form-control" 
                                                value={this.state.sku} onChange={this.changeSkuHandler}/>
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

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Guardar</button>
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

export default UpdateEmployeeComponent
