import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            nikeName: '',
            email: '',
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            nikeName: nextProps.nikeName,
            email: nextProps.email,
        });
    }

    titleHandler(e) {
        this.setState({ nikeName: e.target.value });
    }

    msgHandler(e) {
        this.setState({ email: e.target.value });
    }

    handleSave() {
        const item = this.state;
        this.props.saveModalDetails(item)
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Membership</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className="text-field-cointainer"> 
                            <TextField style={{width: '100%'}}
                                id="searchInput"
                                label="Nickname"   
                                margin="normal"
                                value={this.state.nikeName}
                                onChange={(e) => this.titleHandler(e)}
                                />
                        </div>
                        <div className="text-field-cointainer"> 
                            <TextField style={{width: '100%'}}
                                id="searchInput"
                                label="Email"   
                                margin="normal"
                                value={this.state.email}
                                onChange={(e) => this.msgHandler(e)}
                                />
                        </div>
                    </div>                        
                    <div className="modal-footer">
                        <button type="button" className="col-sm-6 btn btn-warning" data-dismiss="modal" onClick={() => { this.handleSave() }}>Update</button>

                        <button type="button" className="col-sm-6 btn btn-default btn-lg cancel" data-dismiss="modal">Cancel</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;