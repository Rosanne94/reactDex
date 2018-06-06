export const pkmns = {
  state:{
    pkmns: [],
    //id, naam, type, img, flavourtext, mogelijke evoluties
  }

  reducers: {
    add: (state, payload) => state + payload,
  }
}
