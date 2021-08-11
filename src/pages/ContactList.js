import React from 'react';
import "../styles/ContactList.css"
import { Prompt } from "react-router-dom"

class ContactList extends React.Component {
    state = {
        value: "",
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: ""
        })
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }
    render() {

        return (

            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz do nas </h3>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="wpisz wiadomosc"></textarea>
                    <button>Wyslij</button>
                </form>
                <Prompt when={this.state.value ? true : false} message="Masz niewypelniony formularz. Czy na pewno chcesz opuscic tą strone?" />
            </div>
        );
    }
}

export default ContactList;