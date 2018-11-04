import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';
import 'react-dates/initialize';

class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null,
    }

    onDatesChange = (obj) => {
        this.props.setStartDate(obj.startDate);
        this.props.setEndDate(obj.endDate);
    }

    onFocusChange = (calendarFocused) => {
        console.log(calendarFocused)
        this.setState(() => ({ calendarFocused }))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    onSortChange = (e) => {
        const option = e.target.value;
        if (option === 'date') {
            this.props.sortByDate();
        } else if (option === 'amount') {
            this.props.sortByAmount();
        }
    }

    render() {
        // console.log(this.props.filters.endDate)
        const {dispatch} = this.props;
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}/>
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId={"start"}
                    endDate={this.props.filters.endDate}
                    endDateId={"end"}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                 />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
    }
}

export { ExpenseListFilters };
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
