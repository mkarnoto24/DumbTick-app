import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Modal from "react-responsive-modal";
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import '../../App.css';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom: '20px',
    },
    child: {
        padding: '0 110px'
    },
    title: {
        display: 'flex',
        flexGrow: 1,
        textDecoration: 'none', '&:visited': { color: 'black' },
        float: 'left',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    textSignUp: {
        fontSize: '12px'
    },
    textMenuItem: {
        fontSize: '20px'
    },

    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },

}))

const classes = {
    grow: {
        flexGrow: 1,
        width: '100%'
    },
}

const initialState = {
    nameError: "",
    usernameError: "",
    emailError: "",
    passwordError: ""
};
class Header1 extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',

        }
    }

    state = {
        open: false,
        openRegister: false,
        initialState
    };

    validate = () => {
        let usernameError = "";
        let nameError = "";
        let emailError = "";
        let passwordError = "";

        if (!this.state.name) {
            nameError = "the field is required";
        }
        if (!this.state.username) {
            usernameError = "the field is required";
        }

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        if (!this.state.password) {
            passwordError = "the field is required";
        }

        if (emailError || usernameError || passwordError || nameError) {
            this.setState({ emailError, usernameError, passwordError, nameError });
            return false;
        }

        return true;
    };

    handleUsername = (event) => {
        const username = event.target.value;

        this.setState({ username });

    }

    handleSubmit = (e) => {
        e.preventDefault()
        const isValid = this.validate();
        console.log(isValid)
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(initialState);
        }
        axios.post('http://localhost:5000/api/v1/login', {
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                const data = res.data;
                localStorage.setItem("data", data.users)
                localStorage.setItem("username", data.users.username);
                localStorage.setItem("token", data.token);
                localStorage.setItem("img", data.users.img);
                localStorage.setItem("id", data.users.id);
                localStorage.setItem("isLogin", true);
                window.location.reload();
                //this.props.history.push("/");
                // this.props.dispatch(login())
            })
            .catch(err => {
                console.log(err)
            })
    }
    handlePassword = (event) => {
        const password = event.target.value;
        this.setState({ password });
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
    onOpenModalRegister = () => {
        this.setState({ openRegister: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    onCloseModalRegister = () => {
        this.setState({ openRegister: false });
    };


    // ===FOR HANDLE REGISTER====//
    handleRegister = action => (e) => {


        if (action === "name") {
            const name = e.target.value;
            this.setState({ name });
        }
        else if (action === "users") {
            const username = e.target.value;
            this.setState({ username });


        }
        else if (action === "email") {
            const email = e.target.value;
            this.setState({ email })
        }
        else if (action === "password") {
            const password = e.target.value;
            this.setState({ password })
        }
    }

    handleSubmitRegister = (e) => {
        e.preventDefault()
        const isValid = this.validate();
        console.log(isValid)
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(initialState);
        }
        axios.post('http://localhost:5000/api/v1/register', {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                const data = res.data;
                // localStorage.setItem("data", data.users)
                localStorage.setItem("username", data.users.username);
                localStorage.setItem("img", data.users.img);
                localStorage.setItem("isLogin", true);
                localStorage.setItem("token", data.token);
                localStorage.setItem("id", data.id);

                window.location.reload()
                console.log(this.props)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { open } = this.state;
        const { openRegister } = this.state;
        return (
            <div className={classes.grow}>
                <div style={{
                    backgroundColor: '#eb4d55',
                    margin: '0 auto', color: 'white', height: '80px', width: '100%'
                }}>
                    <div style={{ width: '90%', margin: '0 auto' }}>
                        <div style={{ float: 'left' }}>
                            <Link to="/" style={{ textDecoration: 'none', color: "white" }}><Typography style={{ lineHeight: '70px' }}
                                variant="h5">Dumb-Tick</Typography></Link>
                        </div>

                        <div style={{ float: 'right' }}>
                            {localStorage.getItem("isLogin") ?
                                <div>
                                    <div style={{ display: 'inline-block', lineHeight: '70px' }}>
                                        <ProfilButton />
                                        <img />
                                    </div>
                                </div>
                                :
                                <div>
                                    <div style={{ display: 'inline-block', lineHeight: '70px' }}>
                                        <Button color="inherit" size="small" >
                                            <PersonAddOutlinedIcon />
                                            <p className="text-register" onClick={this.onOpenModalRegister}>Register</p>
                                        </Button>
                                    </div>
                                    <div style={{ display: 'inline-block' }}>
                                        <Button color="inherit" size="small" onClick={this.onOpenModal}>
                                            <VpnKeyRoundedIcon />
                                            <p className="text-register">Login</p>
                                        </Button>
                                    </div>
                                </div>
                            }



                        </div>
                    </div>
                </div>
                <Modal open={open} effect="fadeInUp"
                    onClose={this.onCloseModal} center={true}
                    className="modal-login"
                >
                    <div className="modal-login">
                        <h2>LOGIN</h2>
                        <form
                            onSubmit={this.handleSubmit}
                        >
                            <div className="form-input">
                                <TextField
                                    label="Username"
                                    onChange={this.handleUsername}
                                    value={this.state.username}
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.usernameError}
                                </div>
                            </div>
                            <div className="form-input">

                                <TextField
                                    id="filled-password-input"
                                    label="Password"
                                    type="password"
                                    onChange={this.handlePassword}
                                    value={this.state.password}
                                    autoComplete="current-password"
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.passwordError}
                                </div>
                            </div>
                            <div className="button-login">
                                <Button variant="contained"
                                    onClick={this.handleSubmit}
                                    color="secondary"
                                >
                                    Login
                            </Button>
                            </div>

                        </form>
                    </div>

                </Modal>

                <Modal open={openRegister} effect="fadeInUp"
                    onClose={this.onCloseModalRegister} center={true}
                >
                    <div className="modal-register">
                        <h2>Register</h2>
                        <form
                            onSubmit={this.handleSubmitRegister}
                        >
                            <div className="form-input">
                                <TextField
                                    label="Name"
                                    onChange={this.handleRegister("name")}
                                    value={this.state.name}
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.nameError}
                                </div>
                            </div>
                            <div className="form-input">
                                <TextField
                                    label="Username"
                                    onChange={this.handleRegister("users")}
                                    value={this.state.username}
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.usernameError}
                                </div>
                            </div>
                            <div className="form-input">
                                <TextField
                                    label="Email"
                                    onChange={this.handleRegister("email")}
                                    value={this.state.email}
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.emailError}
                                </div>
                            </div>
                            <div className="form-input">

                                <TextField
                                    id="filled-password-input"
                                    label="Password"
                                    type="password"
                                    onChange={this.handleRegister("password")}
                                    value={this.state.password}
                                    autoComplete="current-password"
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.passwordError}
                                </div>
                            </div>
                            <div className="button-login">
                                <Button variant="contained" type="submit"
                                    color="secondary"
                                >
                                    Register
                            </Button>
                            </div>

                        </form>
                    </div>

                </Modal>

            </div >
        );
    }
}
export default Header1

export function ProfilButton() {

    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        //this.props.dispatch(logout())
        localStorage.clear();
        window.location.reload()
        setAnchorEl(null);

    }
    const classes = useStyles();
    return (
        <div>

            <IconButton color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>

                <Avatar src={localStorage.getItem("img")} aria-label="recipe">

                </Avatar>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{ marginTop: 40 }}
            >

                <MenuItem className={classes.textMenuItem}>
                    <Link to={`/profile/${localStorage.getItem("id")}`} style={{ textDecoration: 'none', color: '#000' }}>My Profile</Link>
                </MenuItem>
                <MenuItem className={classes.textMenuItem}>
                    <Link to="/my-tickets" style={{ textDecoration: 'none', color: '#000' }}>My Tickets</Link>
                </MenuItem>
                <MenuItem className={classes.textMenuItem}>
                    <Link to="/payments" style={{ textDecoration: 'none', color: '#000' }}>Payment</Link>
                </MenuItem>
                <MenuItem className={classes.textMenuItem}>
                    <Link to="/add-event" style={{ textDecoration: 'none', color: '#000' }}>Add Event</Link>
                </MenuItem>
                <hr />
                <MenuItem className={classes.textMenuItem} onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}


