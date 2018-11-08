import authReducer from '../../reducers/auth';

test('should return correct uid to state when LOGIN action is fired', () => {
    const uid ='fake_id';
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({}, action);
    expect(state).toEqual({
        uid
    })
})

test('should return correct empty state on LOG_OUT action', () => {
    const stateData ={
        uid: 'fake_id'
    };
    const action = {
        type: 'LOG_OUT',
    }
    const state = authReducer(stateData, action);
    expect(state).toEqual({})
})
