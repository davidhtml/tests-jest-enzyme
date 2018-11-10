import React from 'react';
import {connect} from 'react-redux'
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

class EditExpensePage extends React.Component {

    onEditExpense = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemove = () => {
        this.props.startRemoveExpense({id: this.props.expense.id});
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        stateObjToParent={this.onEditExpense}
                        existingExpense={this.props.expense}
                     />
                     <button
                         onClick={this.onRemove}
                         className="button-grey"
                    >
                         Remove expense
                     </button>
                 </div>
            </div>
        );
    }

}



const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    };
};

export {EditExpensePage};
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
