import React, { Component } from 'react';
import '../../App.css';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Typography } from '@material-ui/core/';
import { connect } from 'react-redux';
import { getsearchEvent } from "../../_actions/SearchActions";

class Search extends Component {

    constructor() {
        super()
        this.state = {
            // isSearch: false,
            inputSearch: ''
        }
    }

    handleSearch = () => {
        const keyword = this.state.inputSearch
        const test = this.state.isSearch
        // this.setState({
        //     isSearch: true
        // })
        // alert(this.state.isSearch)
        if (keyword == '' || keyword == null) {
            alert("anda belum mengetikan keywordnya")
        }
        else {
            this.props.dispatch(getsearchEvent(keyword));
        }

    }

    handleCangeSearch = (event) => {
        const inputSearch = event.target.value;
        console.log(inputSearch)
        this.setState({ inputSearch });


    }


    render() {
        const { EventSearch } = this.props.EventSearch
        const sumEventSearch = this.props.EventSearch.length
        return (

            < div >
                <div className="sb-example-1">
                    <div className="search">
                        <input type="text" onChange={this.handleCangeSearch}
                            value={this.state.inputSearch}
                            className="searchTerm" placeholder="What are you looking for?" />

                        <button type="submit" className="searchButton">
                            <SearchIcon onClick={this.handleSearch}></SearchIcon>
                        </button>
                    </div>
                </div>


                <div className="wrapper-category-image">
                    {/* <Typography variant="h5" style={{
                        color: '#fa163f', fontWeight: 'bold',
                        margin: '0 auto', width: '85%', marginTop: '50px'
                    }}>Today</Typography> */}
                    <div style={{ padding: '2% 5%' }}>
                        {
                            EventSearch.map((item, i) =>
                                <div key={i}
                                    style={{ display: 'inline-block', padding: '2% 4%', width: '300px', }}>
                                    <div style={{ border: '1px solid #eee', backgroundColor: 'white' }}>
                                        <div className="price-tag" onClick="#">
                                            <p>{`Rp. ${item.price}`}</p>
                                        </div>
                                        <div>
                                            <img className="card-image-category-page"
                                                src={item.img} alt="img-content" />
                                        </div>
                                        <div className="card-title">
                                            <div>
                                                <p className="text-card-title">{item.title}</p>
                                            </div>
                                            <div className="card-icon-favorite">
                                                <IconButton>
                                                    <FavoriteBorderRoundedIcon />
                                                </IconButton>
                                            </div>
                                            <div className="date-card">
                                                <p>24 November 2019</p>
                                            </div>
                                            <div>
                                                <p className="card-description">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    EventSearch: state.EventSearch
})

export default connect(mapStateToProps)(Search);
