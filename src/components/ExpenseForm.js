import React from 'react';
import moment from "moment";
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize'

class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description: '',
            note: '',
            amount: '',
            createdAt: moment(),
            calendarFocused: null,
            errorMessage: null
        }
    }

    componentDidMount() {
        const {existingExpense} = this.props;
        if (existingExpense) {
            this.setState(() => {
                return {
                    description: existingExpense.description,
                    amount: (existingExpense.amount / 100).toString(),
                    note: existingExpense.note,
                    createdAt: moment(existingExpense.createdAt)
                }
            })
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;

        this.setState(() => ({ description: description}))
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note: note}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount: amount }))
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt: createdAt}))
        }

    }

    onFocusChange = (brazauskas) => {
        this.setState(() => ({ calendarFocused: brazauskas.focused }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            let msg = 'Please provide the description and the amount';
            this.setState(() => ({errorMessage: msg}))
        } else {
            this.setState(() => ({errorMessage: null}))
            this.props.stateObjToParent({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note

            });
        }
    }

    render() {
        return (

            <div>
                {this.state.errorMessage && <h4>{this.state.errorMessage}</h4>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        id={this.state.description}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />


                    <textarea
                        placeholder="add a note for your expense"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        >
                    </textarea>
                    <button>Add expense</button>
                </form>
            </div>

        );
    }
}

export default ExpenseForm;
