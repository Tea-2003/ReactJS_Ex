import React, { Component } from 'react';


class Sanpham extends Component {
    render() {
        return (
            <div class="item col-md-3">
                <div className="card" style={{width: '16rem'}}>
                    <img src={this.props.linkanh} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">{this.props.tieude}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">{this.props.gia}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sanpham;