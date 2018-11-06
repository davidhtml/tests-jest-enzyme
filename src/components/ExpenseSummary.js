import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral'

class ExpenseSummary extends React.Component {

    renderExpenses = () => {
        const total = expensesTotal(this.props.expenses);
        return (
            <p>total of {this.props.expenses.length} expenses to pay {numeral(total/100).format('$0,0.00')}</p>
        )
    }

    render() {
        return (
            <div>
                <h4>Here will be how many visible expenses we do have and what is total amount</h4>
                {this.props.expenses.length > 0 && this.renderExpenses()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export {ExpenseSummary}
export default connect(mapStateToProps)(ExpenseSummary);
