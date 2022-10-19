import React, {
    Component
} from 'react';

export default class AgeInput extends Component {
    constructor(props) {
      super(props)

      this.state={
        age: props.values.age
      }
    }

    render() {
      const{
        submitAndContinue,
        errors
      } = this.props

      return ( 
        <form>
          <input 
            type="text"
            placeholder="Enter your age" 
            value={this.state.age} 
            onChange={e => this.setState({ age:e.target.value})}
          />

          <span className="error">{errors.age}</span>

          <button 
            className="submit-button" 
            value="submit" 
            onClick={e => {
              e.preventDefault()
              submitAndContinue(this.state)
            }}
          >
            send
          </button>
        </form>
      );
    }
}