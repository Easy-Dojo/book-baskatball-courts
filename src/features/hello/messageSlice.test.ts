import '@testing-library/jest-dom/extend-expect';
import { initialState, messageActionCreators, messageSlice } from './messageSlice';

describe('test message reducer', () => {
  it('should return correct searchedCourts when trigger fetchMessage given action is pending', () => {
    const action = messageActionCreators.fetchMessage.pending('fakeRequestId');

    const expectResult = {
      loading: true,
      error: undefined,
      data: undefined,
    };
    expect(messageSlice.reducer(initialState, action)).toStrictEqual(expectResult);
  });

  it('should return correct searchedCourts when trigger fetchMessage given action is fulfilled', () => {
    const action = messageActionCreators.fetchMessage.fulfilled('message', 'fakeRequestId');

    const expectResult = {
      loading: false,
      error: undefined,
      data: 'message',
    };
    expect(messageSlice.reducer(initialState, action)).toStrictEqual(expectResult);
  });

  it('should return correct searchedCourts when trigger fetchMessage given action is rejected', () => {
    const action = messageActionCreators.fetchMessage.rejected(new Error('error'), 'fakeRequestId');

    const expectResult = {
      loading: false,
      error: 'error',
      data: undefined,
    };
    expect(messageSlice.reducer(initialState, action)).toStrictEqual(expectResult);
  });
});
