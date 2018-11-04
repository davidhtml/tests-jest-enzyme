import React from 'react';
import {connect} from 'react-redux'
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

//refactor to class bsaed compoennt
// create mapDispatchToProps

//should render addExpense page
// should handle editExpense using spies
//should handle removeExpense using spies


class EditExpensePage extends React.Component {

    onEditExpense = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemove = () => {
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <ExpenseForm
                    stateObjToParent={this.onEditExpense}
                    existingExpense={this.props.expense}
                 />
                 <button
                     onClick={this.onRemove}
                >
                     Remove expense
                 </button>
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
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (id) => dispatch(removeExpense(id))
    };
};

export {EditExpensePage};
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
