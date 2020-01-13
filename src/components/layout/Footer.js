import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Typography, Button } from '@material-ui/core'
//import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../../App.css';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div style={styles.footer}>
                    <ul style={styles.parentlist}>
                        <li style={styles.childlist}>
                            <Link to="/" style={{ textDecoration: 'none', color: "white" }}><span style={styles.spanlist}>Dumb - Tick</span></Link>
                            dumb-tick is a web based platform that provider <br></br>tickets for various events around sports, <br></br>music, science and programming.
                             </li>
                        <li style={styles.childlist}>
                            <span style={styles.spanlist}>Links </span><p style={{ marginTop: '-20px' }}>About Us</p>
                            <span>Follow Us</span><br></br>
                            <Button color="inherit">
                                <InstagramIcon />
                                Instagram
                            </Button><br></br>
                            <Button color="inherit">
                                <TwitterIcon color="inherit" />
                                <span className="text-icon-follows">Twitter</span>
                            </Button>

                        </li>
                        <li style={styles.childlist}>
                            <span style={styles.spanlist}>Have A Question ?</span>
                            <p style={styles.footerp}>Dumb Tick</p>
                            <p style={styles.footerp}>Email: support@dumbtick.com</p>
                        </li>
                    </ul>
                    <div style={styles.copyrightFooter}> &copy; 2020 Dumb-Tick</div>
                </div>
            </div>
        );
    }
}


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
        padding: '50px 60px',
        color: 'white',
        textAlign: 'justify',
    },
    spanlist: {
        display: 'block',
        fontSize: '1.4em',
        marginBottom: '1em',
        color: 'white',
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