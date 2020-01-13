import React, { Component } from 'react';
import Header from './layout/Header1';
import Footer from './layout/Footer';
import { Button, Grid, Typography, IconButton } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import '../App.css';
import moment from 'moment'
import axios from 'axios'
// import { connect } from 'react-redux'
// import { getEventDetail } from "../_actions/EventDetailActions";
import { Link } from 'react-router-dom';
class EventDetail extends Component {
    constructor() {
        super()
        this.state = {
            number: 1,
            totalPrice: '',
            list: [],
            user: [],
            category: [],
        }
    }
    // componentDidMount() {
    //     // const idEvent = this.props.match.params.id
    //     // this.props.dispatch(getEventDetail(idEvent))
    // }
    componentDidMount() {
        const idEvent = this.props.match.params.id

        axios.get(`http://localhost:5000/api/v1/event/${idEvent}/events`)
            .then(res => {
                this.setState({
                    list: res.data,
                    user: res.data.createBy,
                    category: res.data.categoryId
                })
            })
            .catch(err => console.log(err))
    }

    handleOrder = () => {
        const idUser = localStorage.getItem("id")
        const qty = this.state.number
        const event_order = this.state.list.id
        const totalPrice = this.state.number * this.state.list.price
        // alert(totalPrice)
        axios.post('http://localhost:5000/api/v1/post/order', {
            event_order: event_order,
            quantity: qty,
            total_price: totalPrice,
            status: "pending",
            users_id: localStorage.getItem("id")
        }, {
            headers: { authorization: "Bearer " + localStorage.getItem("token") }
        }).then((response) => {
            alert("sukses")
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }
    render() {

        const EventDetail = this.state.list
        console.log(EventDetail.id)
        const User = this.state.user
        const Category = this.state.category
        console.log(Category)
        return (
            <div>
                <Header />
                <div>
                    <div className="wrapper-event">
                        <div className="img-content">
                            <img className="gbr-content"
                                src={
                                    EventDetail.img
                                } alt="content-img"
                            />
                        </div>
                        <div className="wrapper-title">
                            <div className="left-title-event">
                                <span>{EventDetail.title}</span>
                            </div>

                            <div className="right-title-event">
                                <span>{`Rp. ${EventDetail.price * this.state.number}`}</span>
                            </div>
                        </div>

                        <div className="category-buy">
                            <div className="left-category-buy">
                                <span>{Category.name}</span>
                            </div>
                            {localStorage.getItem("isLogin") ? <div className="right-category-buy">
                                <div>
                                    <Button variant="outlined" onClick={() => this.setState({ number: this.state.number - 1 })} color="secondary" size="small">-</Button>
                                </div>
                                <div className="total-buy">
                                    <span>{this.state.number}</span>
                                </div>
                                <div>
                                    <Button variant="outlined" onClick={() => this.setState({ number: this.state.number + 1 })} color="secondary" size="small">+</Button>
                                </div>
                                <div>
                                    <Button variant="contained" type="submit"
                                        color="secondary" onClick={this.handleOrder} size="small">Buy</Button>
                                </div>
                            </div> : null}
                            <hr style={{ width: '98%' }}>
                            </hr>
                            <div style={styles.footer}>
                                <ul style={styles.parentlist}>
                                    <li style={styles.childlist}>
                                        <span style={styles.spanlist}>Hosted<hr></hr></span>
                                        <div >
                                            {/* <div style={{ background: 'black', width: '100px', height: '100px', textAlign: 'center' }}>
                                                <span style={{ color: 'white', }}>Juni Concert</span>
                                            </div> */}
                                            <div><p styl={{ lineHeight: '100px' }}>Juni Concert</p></div>

                                        </div>
                                    </li>
                                    <li style={styles.childlist}>
                                        <span style={styles.spanlist}>Date & Times
                                        <hr></hr>
                                        </span>

                                        <span>
                                            {moment(EventDetail.start_time).format("DD MMM YYYY")}
                                            <br></br>
                                            {moment(EventDetail.end_time).format("DD MMM YYYY")}

                                        </span>
                                    </li>
                                    <li style={styles.childlist}>
                                        <span style={styles.spanlist}>Contact Person<hr></hr></span>
                                        <span>
                                            {User.name}<br></br>
                                            {User.phone_number}<br></br>
                                            {User.email}

                                        </span>
                                    </li>
                                </ul>
                            </div>
                            {/* div> */}
                        </div>

                    </div>
                    <div>
                        <div className="description-info" style={{ marginBottom: '50px' }}>
                            <table>
                                <tr>
                                    <td style={{ width: '50%' }}><h3 >Event Description</h3>
                                        <p >{EventDetail.title}</p>
                                        <p style={{ textAlign: 'justify' }}>{EventDetail.description}</p>
                                    </td>
                                    <td style={{ width: '30%' }}></td>
                                    <td style={{ width: '50%' }}>
                                        <h3>Location</h3><LocationOnOutlinedIcon />
                                        {EventDetail.address}
                                        <iframe src={EventDetail.url_map} width="380" height="200"></iframe>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         category: state.category,
//         EventDetail: state.EventDetail
//     };
// }

export default EventDetail

const styles = {
    footer: {

        backgroundColor: '#eb4d55',
    },
    parentlist: {
        margin: '0',
        padding: '0',
        display: 'grid',
        listStyleType: 'none',
        gridTemplateColumns: 'repeat(3, auto)',
        gridTemplateRows: 'repeat(2, auto)',
    },
    childlist: {
        padding: '10px 40px',
        // color: 'white',
        textAlign: 'justify',
    },
    spanlist: {
        display: 'block',
        fontSize: '1em',
        marginBottom: '1em',
        fontWeight: 'bold'
    },
    footerp: {
        marginTop: '-20px'
    },
    copyrightFooter: {
        textAlign: 'center',
        color: 'white',
        paddingBottom: '50px'
    }
}