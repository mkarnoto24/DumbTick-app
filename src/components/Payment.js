import React, { Component } from 'react';

import Header from './layout/Header1';
import Footer from './layout/Footer';
import axios from 'axios';
import moment from 'moment'
import Button from '@material-ui/core/Button';

import { Typography } from '@material-ui/core'
class Payment extends Component {
    constructor() {
        super()
        this.state = {
            order: [],
            user: [],
            event: [],
            status: false,
            idOrder: 0,
            idTest: '',
            msg: ''
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
                    // user: res.data.eventOrder.createBy,
                    // event: res.data.eventOrder
                    //  console.log(res.data)
                })

            })
            .catch(err => console.log(err))
    }
    handelConfirm = (id) => () => {
        const idUser = localStorage.getItem("id")
        axios.put(`http://localhost:5000/api/v1/order/${id}/${idUser}`, {
            status: "confirmed",

        }).then(res => {
            this.setState({
                msg: res.data.message,
                // user: res.data.eventOrder.createBy,
                // event: res.data.eventOrder               
            })
            alert(this.state.msg)
            window.location.reload()
        })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        const orders = this.state.order
        // const events = this.state.event
        // const users = this.state.user
        // const jml = this.state.order.filter(order => order.display)
        // const jumlah = jml.length
        // console.log(jumlah)
        // console.log(events)
        console.log(orders)
        return (
            <div>
                <Header></Header>
                <Typography style={{
                    color: '#fa163f', fontWeight: 'bold',
                    margin: '0 auto', width: '90%', marginTop: '50px'
                }} variant="h5">Payment</Typography>


                <div style={styles.container}>

                    <div style={styles.boxTitle}>
                        <p style={{ lineHeight: '35px', textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: '22px' }}>Payment</p>
                    </div>
                    {
                        orders.map((item, i) =>
                            <div>
                                {
                                    <div>
                                        {
                                            item.status === "pending" || item.status === "confirmed" ?
                                                <div style={styles.boxcontent}>
                                                    {/* <input type="hidden" value={this.order.id}></input> */}
                                                    <div style={{ backgroundColor: '#fa163f', width: '80%', margin: '0 auto', height: '170px', padding: '20px 0' }}>
                                                        <div style={{ backgroundColor: 'grey', width: '80%', height: '50px', margin: '0 auto' }}>
                                                            <table>
                                                                <tr>
                                                                    <td style={{ width: '70%' }}><span style={{ fontSize: '15px', fontWeight: 'bold' }}>{item.eventOrder.createBy.name}</span><br></br>
                                                                        <span style={{ fontSize: '12px' }}>Id.User</span>
                                                                    </td>
                                                                    <td style={{ width: '20%' }}><span style={{ fontSize: '13px' }}>face Value. Rp. {item.total_price / item.quantity}</span></td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div style={{ backgroundColor: '#fff', width: '80%', height: '100px', margin: '0 auto' }}>
                                                            <div style={{ float: "left" }}>
                                                                <span style={{ fontSize: '17px', fontWeight: 'bold' }}>
                                                                    {item.eventOrder.title}
                                                                </span><br></br>
                                                                <span>{moment(item.start_time).format("Do MM YYYY")}</span><br></br>
                                                                <span>
                                                                    {item.eventOrder.address}
                                                                </span>

                                                            </div>
                                                            <div style={{ float: "right" }}>
                                                                <img style={{ width: '80px', height: '80px' }}
                                                                    src="https://assets-a1.kompasiana.com/items/album/2015/12/02/sample-565eae544623bdb112ba5472.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={styles.boxatas}>

                                                        <div style={{ backgroundColor: '#fff', width: '80%', height: '100px', margin: '0 auto' }}>

                                                            <div style={{ float: "left" }}>
                                                                <span style={{ fontSize: '17px', fontWeight: 'bold' }}>Shoping Sumary</span><br></br>
                                                                <span>Total Price ({item.quantity} item)</span><br></br>


                                                            </div>
                                                            <div style={{ float: "right" }}>
                                                                <span style={{ lineHeight: '50px' }}>Rp. {item.total_price}</span>
                                                            </div>

                                                        </div>
                                                        <div style={{ width: '80%', margin: '0 auto', marginTop: '-50px' }}>
                                                            <hr />
                                                        </div>
                                                        <div style={{ width: '100%', marginBottom: '100px' }}>
                                                            <div style={{ margin: '0 auto', width: '80%', }}>
                                                                <div style={{ float: 'left' }}>
                                                                    <span style={{ fontSize: '17px', fontWeight: 'bold' }}>Proof Of Payment</span><br></br>
                                                                    <img src="https://3.bp.blogspot.com/-AL-d2i1TeFs/WRf5_AQHkLI/AAAAAAAAAnw/bXTLtzjorlw89370jybhOL6kjlLdqlfXgCEw/s1600/3.jpeg" alt="gmbr-struk" style={{ width: '100px', height: '100px' }} /><br></br>
                                                                    <span>Upload Payment Proof</span>
                                                                </div>
                                                            </div>
                                                            <div style={{ margin: '0 auto', width: '80%', }}>
                                                                <div style={{ float: 'right' }}>

                                                                    {
                                                                        item.status === "pending" ?
                                                                            <Button onClick={this.handelConfirm(`${item.id}`)}
                                                                                variant="outlined" color="secondary">Confirm</Button>
                                                                            :

                                                                            <Button onClick={this.handelConfirm(`${item.id}`)}
                                                                                variant="outlined" disabled>pending</Button>
                                                                    }

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>



                                                :
                                                ""
                                        }
                                    </div>
                                }
                            </div>
                        )
                    }

                </div >

                <Footer></Footer>
            </div >
        )
    }
}
export default Payment

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
        width: '40%',
        height: '40px',
    },
    boxcontent: {
        backgroundColor: '#fff',
        width: '100%',
        padding: '40px 0',
    },
    boxatas: {
        width: '100%',
        padding: '40px 0',
    }
}