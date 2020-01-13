import React, { Component } from 'react';
import Header from './layout/Header1';
import Footer from './layout/Footer';
import { IconButton, Typography, TextField, Button } from '@material-ui/core/';
import '../App.css';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import { getPageCategory } from "../_actions/PageCategoryActions";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios'

class PageCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: new URLSearchParams(window.location.search).get('id'),
            filter: '',
            favorite: [],
        };
    }
    componentDidMount() {
        const idCategory = this.state.url;
        this.props.dispatch(getPageCategory(idCategory));

        axios.get('http://localhost:5000/api/v1/favorite/1/event').then((res) => {
            this.setState({
                favorite: res.data,
                favorite: res.data.favorites
                // event: res.data.favorite
            })

        }).catch((error) => {
            console.log(error)
        })
    }

    handleChange = (e) => {
        this.setState({
            filter: e.target.value
        })
    }
    handleFavorite = (id) => () => {

        // alert(id)
        const idUser = localStorage.getItem("id");
        axios.post(`http://localhost:5000/api/v1/favorites`, {
            id_events: id,
            users_id: idUser

        }).then(res => {
            // this.setState({
            //     // user: res.data.eventOrder.createBy,
            //     // event: res.data.eventOrder               
            // })
            window.location.reload()
        })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        const favorite = this.state.favorite
        const { PageCategory } = this.props.pageCategory;
        const dataFilter = PageCategory.filter((data) => { return data.start_time.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1 })
        console.log(favorite.length)
        return (
            <div>
                <Header />
                <Typography variant="h5" style={{
                    color: '#fa163f', fontWeight: 'bold',
                    margin: '0 auto', width: '90%', marginTop: '50px'
                }}>Event By Category</Typography>
                <div className="wrapper-category-page">

                    <div className="sorting-by-date">
                        <span>Sort</span>
                        <span style={{ lineHeight: '65px' }}>
                            <TextField
                                color="secondary"
                                name="filter"
                                type="date"
                                // value={this.state.filter}
                                // defaultValue="2019-01-01T00:00"
                                // label="End Date"
                                style={{ width: "100%", marginTop: 10 }}
                                onChange={this.handleChange}
                            />
                        </span>

                    </div>
                </div>
                <div className="wrapper-category-image">
                    <div style={{ padding: '2% 5%' }}>
                        {
                            dataFilter.map((item, i) =>
                                <div>
                                    {this.state.filter == "" ? "" :
                                        <div key={i}
                                            style={{
                                                display: 'inline-block', padding: '2% 4%', width: '300px',
                                                height: '360px'
                                            }}>
                                            <div style={{ border: '1px solid #eee', backgroundColor: 'white' }}>
                                                <div className="price-tag" onClick="#">
                                                    <p>{`Rp. ${item.price}`}</p>
                                                </div>
                                                <div>
                                                    <Link to={`/event/${item.id}/events`}><img className="card-image-category-page"
                                                        src={item.img} alt="img-content" /></Link>
                                                </div>
                                                <div className="card-title">
                                                    <div style={{ width: '80%' }}>
                                                        <p className="text-card-title">
                                                            <Link to={`/event/${item.id}/events`} style={{ color: '#000', textDecoration: 'none' }}>{item.title}</Link></p>
                                                    </div>
                                                    <div className="card-icon-favorite">
                                                        <IconButton>
                                                            <FavoriteBorderRoundedIcon onClick={this.handleFavorite} />
                                                        </IconButton>
                                                    </div>
                                                    <div className="date-card">
                                                        <p>
                                                            {moment(item.start_time).format("MMMM Do YYYY")}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="card-description">
                                                            {`${item.description.substring(0, 135)}...`}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>

                            )
                        }
                        {
                            PageCategory.map((item, i) =>
                                <div key={i}
                                    style={{
                                        display: 'inline-block', padding: '2% 4%', width: '300px',
                                        height: '360px'
                                    }}>
                                    <div style={{ border: '1px solid #eee', backgroundColor: 'white' }}>
                                        <div className="price-tag" onClick="#">
                                            <p>{`Rp. ${item.price}`}</p>
                                        </div>
                                        <div>
                                            <Link to={`/event/${item.id}/events`}><img className="card-image-category-page"
                                                src={item.img} alt="img-content" /></Link>
                                        </div>
                                        <div className="card-title">
                                            <div style={{ width: '80%' }}>
                                                <p className="text-card-title">
                                                    <Link to={`/event/${item.id}/events`} style={{ color: '#000', textDecoration: 'none' }}>{item.title}</Link></p>
                                            </div>
                                            <div className="card-icon-favorite">
                                                <IconButton>
                                                    <FavoriteBorderRoundedIcon onClick={this.handleFavorite(`${item.id}`)} />
                                                </IconButton>
                                            </div>
                                            <div className="date-card">
                                                <p>
                                                    {moment(item.start_time).format("MMMM Do YYYY")}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="card-description">
                                                    {`${item.description.substring(0, 135)}...`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    pageCategory: state.PageCategory,
    categoryId: state.PageCategory
})

export default connect(mapStateToProps)(PageCategory)