import React, { Component } from 'react';
// import List from './listReact'
import Modal from "react-responsive-modal";
import Header from './layout/Header1';
import TextField from '@material-ui/core/TextField';
import Footer from './layout/Footer';
import { getProfile } from "../_actions/ProfileActions";
import { Typography, Grid, Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core/';
import '../App.css';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
// import Moment from 'react-moment';
import moment from 'moment'

class Profile extends Component {

    constructor() {
        super()
        this.state = {
            idUser: localStorage.getItem("id"),
            // name: Profile.name,
            favorite: [],
            // event: [],
            idEvents: [],
            edit: false,
            user: {
                name: "",
                email: "",
                username: "",
                phone_number: 0
            }
        }
    }

    handleUpdate = event => {
        this.setState({
            edit: true,
        })
        this.setState({
            // name: this.state.name
        })
        // alert(this.state.name)
    }

    handleChangeUpdate = event => {
        let usernew = { ...this.state.user };
        usernew[event.target.name] = event.target.value;
        this.setState({
            user: usernew
        });

        console.log(this.state.user)

    }

    handleSubmit = () => {
        this.setState({
            edit: false
        })
    }
    componentDidMount() {
        // this.props.dispatch(getProfile(localStorage.getItem("id")));
        const id = localStorage.getItem("id")
        axios.get(`http://localhost:5000/api/v1/profile/${id}`).then(res => {
            this.setState({
                name: res.data.name,
                email: res.data.email,
                username: res.data.username,
                phone_number: res.data.phone_number
            })
            console.log(res.data.name)
        })

        axios.get('http://localhost:5000/api/v1/favorite/1/event').then((res) => {
            this.setState({
                favorite: res.data,
                favorite: res.data.favorites


            })

        }).catch((error) => {
            console.log(error)
        })
    }
    onCloseModalRegister = () => {
        this.setState({ openRegister: false });
    };
    render() {
        const { openRegister } = this.state;
        const { Profile } = this.props.Profile
        const favorite = this.state.favorite

        console.log(favorite.length)
        console.log(favorite)
        return (
            <div>
                <Header />
                <Typography variant="h5" style={{
                    color: '#fa163f', fontWeight: 'bold',
                    margin: '0 auto', width: '90%', marginTop: '50px', marginBottom: '50px'
                }}>Profile</Typography>
                <div>
                    <div style={styles.container}>
                        <hr style={{ marginBottom: '30px' }}></hr>
                        <Grid container={1} spacing={5}>
                            {
                                this.state.edit ?
                                    <div>
                                        <h2>Update Profile</h2>
                                        <form
                                            onSubmit={this.handleSubmit}
                                        >
                                            <div className="form-input">
                                                <TextField
                                                    label="Name"
                                                    name="name"
                                                    onChange={this.handleChangeUpdate}
                                                    value={this.state.name}
                                                // value={Profile.name}
                                                />
                                            </div>
                                            <div className="form-input">
                                                <TextField
                                                    label="Username"
                                                    name="username"
                                                    onChange={this.handleChangeUpdate}
                                                    value={this.state.username}
                                                    type="text"
                                                />
                                            </div>
                                            <div className="form-input">
                                                <TextField
                                                    label="Email"
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={this.handleChangeUpdate}
                                                />
                                            </div>
                                            <div className="form-input">

                                                <TextField
                                                    id="filled-password-input"
                                                    label="Phone Number"
                                                    type="text"
                                                    name="phone_number"
                                                    onChange={this.handleChangeUpdate}
                                                    value={this.state.phone_number}
                                                />
                                            </div>
                                            <div className="button-login">
                                                <Button variant="contained" type="submit"
                                                    color="secondary"
                                                >
                                                    Update
                            </Button>
                                            </div>

                                        </form>
                                    </div>
                                    :
                                    <Grid item md={4} style={styles.infoProfile}>
                                        {/* <p style={styles.infop}>{Profile.name}</p> */}
                                        {/* <p style={styles.infop}>{Profile.phone_number}</p> */}
                                        {/* <p style={styles.infop}>{Profile.email}</p> */}
                                    </Grid>
                            }
                            <Grid item md={1}></Grid>
                            <Grid item md={3}>
                                {
                                    this.state.edit ? "" : <Button onClick={this.handleUpdate}>Edit</Button>
                                }
                            </Grid>
                            <Grid item md={1} style={styles.updtebtn}>

                            </Grid>
                            <Grid item md={3}>
                                {/* <img src={Profile.img} style={styles.photoProfile} alt="foto-profil" /> */}

                            </Grid>
                        </Grid>
                        <hr style={{ marginTop: '30px' }}></hr>
                    </div>
                </div>


                <Typography variant="h5" style={{
                    color: '#fa163f', fontWeight: 'bold',
                    margin: '0 auto', width: '90%', marginTop: '50px', marginBottom: '50px'
                }}>Favorite</Typography>

                <div className="wrapper-category-image">
                    <div style={{ padding: '2% 5%' }}>

                        {
                            favorite.map((item, i) =>
                                <div key={i}
                                    style={{
                                        display: 'inline-block', padding: '2% 4%', width: '300px',
                                        height: '360px'
                                    }}>
                                    <div style={{ border: '1px solid #eee', backgroundColor: 'white' }}>
                                        <div className="price-tag" onClick="#">
                                            <p>{`Rp. ${item.idEvents.price}`}</p>
                                        </div>
                                        <div>
                                            <Link to={`/event/${item.id}/events`}><img className="card-image-category-page"
                                                src={item.idEvents.img} alt="img-content" /></Link>
                                        </div>
                                        <div className="card-title">
                                            <div style={{ width: '80%' }}>
                                                <p className="text-card-title">
                                                    <Link to={`/event/${item.id}/events`} style={{ color: '#000', textDecoration: 'none' }}>{item.idEvents.title}</Link></p>
                                            </div>
                                            <div className="card-icon-favorite">
                                                <IconButton>
                                                    <FavoriteBorderRoundedIcon color="secondary" />
                                                </IconButton>
                                            </div>
                                            <div className="date-card">
                                                <p>
                                                    {moment(item.idEvents.start_time).format("MMMM Do YYYY")}
                                                    {/* <Moment format="DD MM YYYY">{item.start_time}</Moment> */}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="card-description">
                                                    {`${item.idEvents.description.substring(0, 135)}...`}
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
    Profile: state.Profile
})

export default connect(mapStateToProps)(Profile)


const styles = {
    profile: {
        color: '#eb4d55',
        margin: '0 auto',
        width: '85%',
        marginTop: '50px',
        marginBottom: '50px',
    },
    container: {
        width: '70%',
        margin: '0 auto',
        borderRadius: '5px'
        // backgroundColor: '#fff'
    },
    photoProfile: {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        backgroundColor: '#eee',
        float: 'right',
        marginRight: '100px'
    },
    updtebtn: {
        textAlign: 'center'
    },
    infoProfile: {
        paddingLeft: '100px'
    },
    infop: {
        fontSize: '20px'
    }
}   