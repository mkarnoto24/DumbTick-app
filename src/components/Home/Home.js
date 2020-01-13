import React, { Component } from 'react';
import Header from '../layout/Header1';
import Footer from '../layout/Footer';
import Card from './CardToday';
import Category from './Category';
import Search from './Search';
import { IconButton, Typography } from '@material-ui/core/';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';

class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <Search />
                {/* <p>
                    <div style={{
                        width: '300px',
                        margin: '0 auto',
                        boxShadow: '0 1px 30px rgba(0,0,0,.4)',
                        display: 'block',
                        backgroundColor: '#fff',
                        borderRadius: '4px',
                        transition: '400ms ease'
                    }}>
                        <div style={{ height: '225px' }}>
                            <img src="https://s25.postimg.org/s96wbzazj/yosemite_500.jpg" />
                        </div>
                        <div style={{
                            position: 'relative',
                            background: '#ffffff',
                            padding: ' 15px 25px 5px 25px',
                            borderRadius: '0px 0px 4px 4px'
                        }}>
                            <IconButton>
                                <FavoriteBorderRoundedIcon style={{
                                    fontSize: '18px'
                                    // background: #446CB3;
                                    // color: #fff;
                                    // padding: 13px 15px;
                                    // border-radius: 50em;
                                    // position: absolute;
                                    // right: 20px;
                                    // top: -22px;
                                    // box-shadow: 0 2px 1px rgba(0,0,0,.2);
                                    // transition: 400ms ease;
                                }} />
                            </IconButton>
                            <span style={{
                                fontSize: '12px',
                            }}>Thursday, July 16, 2015</span>
                            <h1 style={{
                                fontSize: '22px',
                            }}>The standard chunk of Lorem Ipsum</h1>
                            <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.</p>
                        </div>
                        <div style={{
                            padding: '10px 25px 10px 25px',
                            borderRadius: '0px 0px 4px 4px',
                            borderTop: '1px solid #e0e0e0',
                            background: ' #efefef',
                            color: '#222',
                            display: 'inline-table',
                            width: '100 %',
                            boxSizing: 'border-box',
                            transition: '400ms ease',
                        }}>
                            <h5>Read more</h5>
                        </div>
                    </div>
                </p> */}
                <Category />
                <Card />
                <Footer />
            </div >
        );
    }
}
export default Home;
