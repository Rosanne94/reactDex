import { dispatch } from '@rematch/core'

export const pkmns = {
  'state': {
    'pkmns': [],
  },

  reducers: {
    add: (state, payload) =>{
      state.pkmns = state.pkmns.concat(payload)
      return state;
    },
  },

  effects:{
    async start(payload, pkmns) {
      return fetch('http://pokeapi.salestock.net/api/v2/pokemon-species/?limit=3')
      .then(response => response.json())
      .then(data => {
         dispatch.pkmns.add(data.results)
      })
    }
  }
};

//https://pokeapi.co/api/v2/pokemon-species/?limit=3
//https://reactcheatsheet.com/
