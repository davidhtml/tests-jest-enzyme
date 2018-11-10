import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral'

class ExpenseSummary extends React.Component {

    renderExpenses = () => {
        const { expenses } = this.props;
        const word = expenses.length === 1 ? "expense" : "expenses";
        const total = expensesTotal(this.props.expenses);

        return (
            <h2 className="page-header__title">total of
                <span> {expenses.length} </span> {word} to pay
                <span> {numeral(total/100).format('$0,0.00')} </span>
            </h2>
        )
    }

    render() {
        return (
            <div className="page-header">
                <div className="content-container">
                    {this.renderExpenses()}
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add expense</Link>
                    </div>
                </div>
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
