import '@testing-library/jest-dom/extend-expect';
import { authorizeActionCreators, authorizeSlice, initialState } from './authorizeSlice';

describe('test authorizeSlice reducer', () => {
  it('should return correct searchedCourts when trigger doLogin given action is pending', () => {
    const action = authorizeActionCreators.doLogin.pending('fakeRequestId', { username: 'user', password: 'pass' });

    const expectResult = {
      loading: true,
      error: undefined,
      isLogin: false,
    };
    expect(authorizeSlice.reducer(initialState, action)).toStrictEqual(expectResult);
  });

  it('should return correct searchedCourts when trigger doLogin given action is fulfilled', () => {
    const action = authorizeActionCreators.doLogin.fulfilled(true, 'fakeRequestId', { username: 'user', password: 'pass' });

    const expectResult = {
      loading: false,
      error: undefined,
      isLogin: true,
    };
    expect(authorizeSlice.reducer(initialState, action)).toStrictEqual(expectResult);
  });

  it('should return correct searchedCourts when trigger doLogin given action is rejected', () => {
    const action = authorizeActionCreators.doLogin.rejected(new Error('error'), 'fakeRequestId', { username: 'user', password: 'pass' });

    const expectResult = {
      loading: false,
      error: 'error',
      isLogin: false,
    };
    expect(authorizeSlice.reducer(initialState, action)).toStrictEqual(expectResult);
  });
});
