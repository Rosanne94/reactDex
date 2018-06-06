export const pkmns = {
  state:{
    pkmns: [],
    //id, naam, type, img, flavourtext, mogelijke evoluties
  },

  reducers: {
    add: (state, payload) => state + payload,
  },

  effects:{
    async loadData(payload, rootState) {
      const response = await fetch('http://pokeapi.co/api/v2/pokemon-species/?limit=3')
      const data = await response.json()
      dispatch.add.update(data)
    }
  }
};
