import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';


class AddExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Add expense</h1>
                <ExpenseForm
                    stateObjToParent={this.onSubmit}
                 />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    };
};

export {AddExpensePage};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
