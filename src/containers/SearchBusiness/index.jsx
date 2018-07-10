import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { filterBusiness } from '../../redux/actions/business';
import Businesses from '../../components/Businesses';


class SearchPage extends Component {
    state = {
        query: '',
        category: '',
        location: '',
        results: [], 
        page: 1
    }

    getInfo = () => {
        axios.get(`https://weconnect-v3.herokuapp.com/api/v1/businesses?q=${this.state.query}&&category=${this.state.category}&&location=${this.state.location}&page=${this.state.page}`)
            .then(({ data }) => {
                this.setState({
                    results: data.results,
                
                })
                this.props.filterBusiness(this.state.results)
            })
            

    }

    nextPage = () => {
		const page = this.state.page
		this.setState({page: page + 1}, () => this.getInfo());
    }
    
    prevPage = () => {
		const page = this.state.page
		if(page > 1){
			return this.setState({page: page - 1}, () => this.getInfo());
		}
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
                <div className="row">
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
                </div><br />
                <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item" onClick={this.prevPage} ><a class="page-link" >Previous</a></li>
                    <li class="page-item" onClick={this.nextPage}><a class="page-link">Next</a></li>
                </ul>
                </nav>
            </div>
        )
    }
}



export default connect(null, { filterBusiness })(SearchPage);
