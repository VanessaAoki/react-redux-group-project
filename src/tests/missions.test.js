/* eslint-disable max-len */
import missionReducer, {
  loadMissions,
  joinMissions,
  leaveMissions,
} from '../redux/missions/missions';

describe('Unit tests for missions', () => {
  const LOAD_MISSIONS = 'SPACE_TRAVELERS/MISSIONS/LOAD_MISSIONS';
  const JOIN_MISSION = 'SPACE_TRAVELERS/MISSIONS/JOIN_MISSION';
  const LEAVE_MISSION = 'SPACE_TRAVELERS/MISSIONS/LEAVE_MISSION';

  const actionLoadMock = {
    type: LOAD_MISSIONS,
    state: [
      {
        mission_id: 'mission1',
        mission_name: 'name',
      },
    ],
  };

  describe('Reducers', () => {
    it('returns the correct state for LOAD_MISSIONS action', () => {
      const expectedOutputState = [
        {
          mission_id: 'mission1',
          mission_name: 'name',
        },
      ];
      expect(missionReducer(actionLoadMock.state, { type: LOAD_MISSIONS, payload: 'mission1' })).toEqual(
        expectedOutputState,
      );
    });
    it('returns the correct state for JOIN_MISSION action', () => {
      const expectedOutputState = [
        {
          mission_id: 'mission1',
          mission_name: 'name',
          status: true,
        },
      ];
      expect(missionReducer(actionLoadMock.state, { type: JOIN_MISSION, payload: 'mission1' })).toEqual(
        expectedOutputState,
      );
    });
    it('returns the correct state for LEAVE action', () => {
      const expectedOutputState = [
        {
          mission_id: 'mission1',
          mission_name: 'name',
          status: false,
        },
      ];
      expect(missionReducer(actionLoadMock.state, { type: LEAVE_MISSION, payload: 'mission1' })).toEqual(
        expectedOutputState,
      );
    });
  });

  describe('Actions', () => {
    it("returns the correct action for 'loadMissions' function", () => {
      expect(loadMissions('mission1').type).toEqual(LOAD_MISSIONS);
    });
    it("returns the correct action for 'joinMissions' function", () => {
      expect(joinMissions('mission1').type).toEqual(JOIN_MISSION);
    });
    it("returns the correct action for 'leaveMissions' function", () => {
      expect(leaveMissions('mission1').type).toEqual(LEAVE_MISSION);
    });
  });
});
