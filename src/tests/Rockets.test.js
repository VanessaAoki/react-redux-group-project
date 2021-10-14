/* eslint-disable max-len */
import rocketsReducer from '../redux/Rockets/Rockets-Reducer';

describe('Unit tests for rockets', () => {
  const GET_ROCKETS = 'SPACE_TRAVELERS/ROCKETS/GET_ROCKETS';
  const RESERVE_ROCKETS = 'SPACE_TRAVELERS/ROCKETS/RESERVE_ROCKETS';

  const state = [
    {
      id: 1,
      rocket_name: '1',
    },
    {
      id: 2,
      rocket_name: '2',
    },
  ];

  const reserveRockets = (payload) => ({
    type: RESERVE_ROCKETS,
    payload,
  });
  const getRockets = (payload) => ({
    type: GET_ROCKETS,
    payload,
  });

  describe('Reducers', () => {
    it('returns the correct state for GET_ROCKETS action', () => {
      expect(rocketsReducer(state, {
        type: GET_ROCKETS,
        state: {
          id: 3,
          rocket1: '3',
          rocket_name: '3',
        },
      })).toEqual([{ id: 1, rocket_name: '1' }, { id: 2, rocket_name: '2' }]);
    });
    it('returns the correct state for RESERVE_ROCKETS action', () => {
      const payload = { id: 1 };
      expect(rocketsReducer(state, { type: RESERVE_ROCKETS, payload })).toEqual(
        [{ id: 1, reserved: true, rocket_name: '1' }, { id: 2, rocket_name: '2' }],
      );
    });
  });

  describe('Actions', () => {
    it("returns the correct action for 'getRockets' function", () => {
      expect(getRockets('rocket1').type).toEqual(GET_ROCKETS);
    });
    it("returns the correct action for 'reserveRockets' function", () => {
      expect(reserveRockets('rocket1').type).toEqual(RESERVE_ROCKETS);
    });
  });
});
