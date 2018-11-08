import { login, logout } from '../../actions/auth';

test('should return login object with id', () => {
    const uid = 'id_fake';

    expect(login(uid)).toEqual({
        type: "LOGIN",
        uid
    })
})

test('should return logout object empty', () => {

    expect(logout()).toEqual({
        type: "LOG_OUT"
    })
})
