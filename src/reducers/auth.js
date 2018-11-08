export default (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
             uid: action.uid
            };
        case "LOG_OUT":
            return {};
        default:
            return state;
    }
}
