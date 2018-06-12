import React from 'react';
import { connect } from 'react-redux'
import { dispatch } from '@rematch/core'

class PkmnContainer extends React.Component {
  componentDidMount(props){
    return this.props.startPkmn()
  }

  render(props){
    return(
      <div>
        {console.log(this.props.pkmns)}
        {console.log(this.props.pkmns.pkmns)}
        {this.props.pkmns.pkmns.map((pkmns)=>{
          return <p>{pkmns.name}</p>
        })}
        <p>hello</p>
      </div>
    )

  }
}

const mapStateToProps = state => {
  return {
    'pkmns': state.pkmns
  }
}

const mapDispatchToProps = dispatch => ({
  startPkmn: () => {
    return dispatch.pkmns.start()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PkmnContainer);
