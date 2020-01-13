import React, { Component } from 'react';
import { IconButton, Typography } from '@material-ui/core/';
import '../../App.css';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import { connect } from 'react-redux';
import { getCategoryToday } from "../../_actions/CategoryTodayActions";
import { Link } from 'react-router-dom';
// import Moment from 'react-moment';
import moment from 'moment'

class CardToday extends Component {
    componentDidMount() {
        this.props.dispatch(getCategoryToday());
    }

    render() {
        // console.log(this.props.CardToday)
        const { CategoryToday } = this.props.CardToday;

        const events = CategoryToday

        //TODAY EVENT
        const todayEvents = events.filter(events => {
            const date = new Date(events.start_time);
            return (date.toISOString().substring(0, 10) == new Date().toISOString().substring(0, 10));
        });

        // UPCOMING EVENT
        const upcomingEvents = events.filter(events => {
            const date = new Date(events.start_time);
            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            return (date.toISOString().substring(0, 10) == tomorrow.toISOString().substring(0, 10));
        });

        console.log(todayEvents)
        return (
            <div>

                <div className="wrapper-category-image">
                    <Typography variant="h5" style={{
                        color: '#fa163f', fontWeight: 'bold',
                        margin: '0 auto', width: '90%', marginTop: '50px'
                    }}>Today</Typography>
                    <div style={{ padding: '2% 5%' }}>
                        {
                            todayEvents.map((item, i) =>
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
                                                    <FavoriteBorderRoundedIcon />
                                                </IconButton>
                                            </div>
                                            <div className="date-card">
                                                <p>
                                                    {moment(item.start_time).format("MMMM Do YYYY")}
                                                    {/* <Moment format="DD MM YYYY">{item.start_time}</Moment> */}
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
                    <Typography variant="h5" style={{
                        color: '#fa163f', fontWeight: 'bold',
                        margin: '0 auto', width: '90%', marginTop: '20px'
                    }}>Upcomming Events</Typography>
                    <div style={{ padding: '2% 5%' }}>
                        {
                            upcomingEvents.map((item, i) =>

                                <div key={i} style={{
                                    display: 'inline-block', padding: '2% 4%',
                                    width: '300px', height: '360px'
                                }}>
                                    <div style={{ border: '1px solid #eee', backgroundColor: 'white' }}>
                                        <div className="price-tag" onClick="#">
                                            <p>{item.price}</p>
                                        </div>
                                        <div>
                                            <Link to={`/event/${item.id}/events`}>
                                                <img className="card-image-category-page" src={item.img} alt="image-content" /></Link>
                                        </div>
                                        <div className="card-title">
                                            <div style={{ width: '80%' }}>
                                                <p className="text-card-title">
                                                    <Link to={`/event/${item.id}/events`} style={{ color: '#000', textDecoration: 'none' }}>
                                                        {item.title}</Link></p>
                                            </div>
                                            <div className="card-icon-favorite">
                                                <IconButton>
                                                    <FavoriteBorderRoundedIcon />
                                                </IconButton>
                                            </div>
                                            <div className="date-card">
                                                <p>
                                                    {moment(item.start_time).format("MMMM Do YYYY")}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="card-description">
                                                    {`${item.description.substring(0, 135)}...`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    CardToday: state.CategoryToday
})
export default connect(mapStateToProps)(CardToday)