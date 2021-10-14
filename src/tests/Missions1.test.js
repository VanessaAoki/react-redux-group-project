import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import { loadMissions } from '../redux/missions/missions';
import Missions from '../components/Missions';

const reduxRender = (component) => ({
  ...render(
    <Provider store={store}>
      {component}
    </Provider>,
  ),
});

const MissionsMock = [
  {
    mission_name: 'Thaicom',
    mission_id: '9D1B7E0',
    manufacturers: [
      'Orbital ATK',
    ],
    payload_ids: [
      'Thaicom 6',
      'Thaicom 8',
    ],
    wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
    website: 'http://www.thaicom.net/en/satellites/overview',
    twitter: 'https://twitter.com/thaicomplc',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  },
  {
    mission_name: 'Telstar',
    mission_id: 'F4F83DE',
    manufacturers: [
      'SSL',
    ],
    payload_ids: [
      'Telstar 19V',
      'Telstar 18V',
    ],
    wikipedia: 'https://en.wikipedia.org/wiki/Telesat',
    website: 'https://www.telesat.com/',
    twitter: null,
    description: 'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.',
  },
];

describe('Test Missions', () => {
  beforeEach(() => {
    store.dispatch(loadMissions(MissionsMock));
  });

  test('Store must have the missions loaded', () => {
    const storeState = store.getState().missions;
    expect(storeState.length).toBe(2);
  });

  test('Each book will display a title and a description', () => {
    const data = store.getState().missions[0];
    reduxRender(<Missions data={data} />);
    const missionName = document.getElementById('missionName');
    expect(missionName.innerHTML).toBe(data.mission_name);
    const description = document.getElementById('missionDescription');
    expect(description.innerHTML).toBe(data.description);
  });
});
