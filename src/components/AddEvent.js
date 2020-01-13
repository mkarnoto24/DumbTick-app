import React, { Component } from 'react';
import Header from './layout/Header1';
import Footer from './layout/Footer';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import { Button, Typography, Grid, Container, Paper } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

class AddEvent extends Component {

    constructor() {
        super()
        this.state = {
            events: {
                title: "",
                img: "",
                tanggal: "",
                end_time: "",
                price: 0,
                address: "",
                url: "",
                // telp: "",
                // email: "",
                // desc: "",
            },
            list: [],
            category: null
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/v1/categories')
            .then(res => {
                this.setState({
                    list: res.data
                })
            })
            .catch(err => console.log(err))
    }


    handlePublish = () => {
        localStorage.getItem("token")
        alert(localStorage.getItem("token"))
        const {
            title,
            img,
            tanggal,
            end_time,
            price,
            address,
            url,
            description
            // telp,
            // email,
        } = this.state.events;
        console.log(this.state.events)

        axios.post('http://localhost:5000/api/v1/post/event', {
            title: title, //1
            img: img,//10
            start_time: tanggal,//3
            end_time: end_time,//4
            price: price,//5
            address: address,//6
            url_map: url,//7
            description: description,//8
            category_event: this.state.category,//2
            create_by: localStorage.getItem("id")//9
        }, {
            headers: { authorization: "Bearer " + localStorage.getItem("token") }
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    handleChange = event => {
        let eventsnew = { ...this.state.events };
        eventsnew[event.target.name] = event.target.value;

        this.setState({
            events: eventsnew
        });
    }
    handleChangeCategory = event => {
        this.setState({ category: event.target.value });
        // alert(this.state.category)
    };
    render() {
        // console.log(this.state.list)
        // console.log(this.state.categories)
        return (
            <div>
                <Header />
                <Typography variant="h5"
                    style={{
                        color: '#fa163f', fontWeight: 'bold',
                        margin: '0 auto', width: '90%', marginTop: '50px'
                    }}>Add Event</Typography>
                <Container maxWidth="lg" style={{ marginBottom: 40 }}>
                    <div style={{ marginBottom: 30, marginTop: 40 }}>

                    </div>
                    <Paper>
                        <Grid container style={{ padding: 100 }}>
                            <Grid item xs={12} md={12}>
                                <TextField
                                    color="secondary"
                                    name="title"
                                    label="Title Event"
                                    style={{ width: "100%" }}
                                    onChange={this.handleChange}
                                />
                                <FormControl style={{ width: "100%" }}>
                                    <InputLabel>Category</InputLabel>
                                    <Select
                                        native
                                        value={this.state.category}
                                        onChange={this.handleChangeCategory}
                                    >
                                        <option value="" ></option>
                                        {this.state.list.map(item => (
                                            <option value={item.id}>{item.name}</option>
                                        ))}
                                    </Select>
                                </FormControl>

                                <TextField
                                    color="secondary"
                                    name="tanggal"
                                    type="datetime-local"
                                    //defaultValue="2019-01-01T00:00"
                                    label="Start Date"
                                    style={{ width: "100%", marginTop: 10 }}
                                    onChange={this.handleChange}
                                />

                                <TextField
                                    color="secondary"
                                    name="end_time"
                                    type="datetime-local"
                                    // defaultValue="2019-01-01T00:00"
                                    label="End Date"
                                    style={{ width: "100%", marginTop: 10 }}
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    color="secondary"
                                    name="price"
                                    label="Price"
                                    style={{ width: "100%" }}
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    color="secondary"
                                    name="description"
                                    label="Description"
                                    multiline
                                    style={{ width: "100%" }}
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    color="secondary"
                                    name="address"
                                    label="address"
                                    style={{ width: "100%" }}
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    color="secondary"
                                    name="url"
                                    label="urlMaps"
                                    style={{ width: "100%" }}
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    color="secondary"
                                    name="img"
                                    label="image"
                                    style={{ width: "100%" }}
                                    onChange={this.handleChange}
                                />

                                <Grid
                                    item
                                    xs={12}
                                    md={12}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: 30
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={this.handlePublish}
                                    >
                                        Publish
                  </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
                <Footer />
            </div>
        )
    }

}



export default AddEvent;