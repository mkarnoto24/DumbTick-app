import React, { Component } from 'react';
import { Typography, Grid, Container } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import Ticket from './Ticket'
import Header from './layout/Header1';
import moment from 'moment'
import Footer from './layout/Footer';
import axios from 'axios';


class MyTickets extends Component {
    constructor() {
        super()
        this.state = {
            order: [],
            user: [],
            // event: [],
            status: false
        }
    }

    componentDidMount() {
        // const idEvent = this.props.match.params.id
        const idUser = localStorage.getItem("id")
        console.log(idUser)
        console.log(this.state.idUser)
        axios.get(`http://localhost:5000/api/v1/orders/${idUser}`)
            .then(res => {
                this.setState({
                    order: res.data,
                })
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    render() {
        const orders = this.state.order
        const events = this.state.event
        const users = this.state.user
        console.log(orders)
        return (
            <div>
                <Header ></Header>
                <Typography variant="h5" style={{
                    color: '#fa163f', fontWeight: 'bold',
                    margin: '0 auto', width: '90%', marginTop: '50px'
                }}>My Tickets</Typography>
                <Container maxWidth="lg" style={{ marginBottom: 40 }}>
                    <div style={{ marginBottom: 30, marginTop: 40 }}>

                    </div>
                    <Paper elevation={3}>
                        <Grid container style={{ paddingBottom: 30, padding: 100 }}>
                            {orders.map(item => (
                                <div>
                                    {
                                        item.status === "approved" ? <Ticket
                                            url={item.eventOrder.img}
                                            judul={item.eventOrder.title}
                                            user={item.eventOrder.createBy.name}
                                            quantity={item.quantity}
                                            address={item.eventOrder.address}
                                            time={item.eventOrder.start_time}
                                            id={item.id}
                                        /> : null
                                    }
                                </div>

                            ))}
                        </Grid>
                    </Paper>
                </Container>
                <Footer />
            </div >
        )
    }
}

export default MyTickets;

const styles = {
    container: {
        width: '80%',
        margin: '0 auto',
        // marginLeft: '5%',
        marginTop: '50px',
        marginBottom: '40px'
    },
    title: {
        color: '#fa163f',
    },
    boxTitle: {
        backgroundColor: '#fa163f',
        width: '100%',
        height: '5px',
        borderRadius: '2px',

        // padding: '10px'
    },
    boxcontent: {
        backgroundColor: '#fff',
        width: '100%',
        height: '90vh',
        padding: '40px 0'
    },
    boxatas: {
        width: '100%',
        height: '90vh',
        padding: '40px 0',
    }
}