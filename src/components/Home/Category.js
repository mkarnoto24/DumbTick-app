import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getCategory } from "../../_actions/CategoryActions";

class Category extends Component {
    componentDidMount() {
        this.props.dispatch(getCategory());
    }
    render() {
        const { Category } = this.props.category

        console.log(Category)
        return (
            <div>
                <div className="container-category">
                    <div>
                        <div style={{ marginBottom: '50px' }}>
                            <h2>Category</h2>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div>
                        {Category.map((item, i) =>
                            <div className="button-category" style={{ backgroundColor: '#fa163f' }} key={i}>
                                <p><Link to={"/page-category/?id=" + item.id} style={{ textDecoration: 'none', color: 'white' }}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}

                                </Link></p>
                            </div>
                        )}
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    category: state.category
})
export default connect(mapStateToProps)(Category)