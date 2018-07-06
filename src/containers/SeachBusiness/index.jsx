import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggesions'
import NavBar from '../../components/NavBar/NavBar';


class SearchPage extends Component {
    state = {
        query: '',
        category: '',
        location: '',
        results: []
    }

    getInfo = () => {
        axios.get(`https://weconnect-v3.herokuapp.com/api/v1/businesses?q=${this.state.query}&&category=${this.state.category}&&location=${this.state.location}`)
            .then(({ data }) => {
                this.setState({
                    results: data.results
                })
            })

    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value,
            category: this.category.value,
            location: this.location.value
        }, () => {
            if (this.state.query && this.state.query.length > 0) {
                if (this.state.query.length) {
                    this.getInfo()
                }
            } else if (this.state.category && this.state.category.length > 0) {
                if (this.state.category.length) {
                    this.getInfo()
                }

            }
            else if (this.state.location && this.state.location.length > 0) {

                if (this.state.location.length) {
                    this.getInfo()
                }

            }
        })
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="row container">
                <div className="col-md-4">
                        <form class="form">
                            <div class="input">
                                <div class="">
                                    <input type="text" class="form-control" ref={input => this.category = input} onChange={this.handleInputChange} id="inlineFormInputGroup" placeholder="Category..." />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <form class="form">
                            <div class="input">
                                <div class="">
                                    <input type="text" class="form-control" ref={input => this.location = input} onChange={this.handleInputChange} id="inlineFormInputGroup" placeholder="Location..." />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <form class="form">
                            <div class="input">
                                <div class="">
                                    <input type="text" class="form-control" ref={input => this.search = input} onChange={this.handleInputChange} id="inlineFormInputGroup" placeholder="Search..." />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="">
                    <Suggestions className="row" results={this.state.results} />
                </div>
            </div>
        )
    }
}

export default SearchPage;
