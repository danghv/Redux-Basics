import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
    render() {
        const { book } = this.props;
        if (!book) {
            return <div>Select a book to get started.</div>
        }
        return (
            <div>
                <h1>Deatail for</h1>
                <p>{book.title}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);