import React from 'react';

const Home = () => (
  <div>
    <h2>Homepage Title</h2>
  </div>
);

export default Home;

/* Use this below if you need this component to maintain its' own state (i.e. retreiving data from an external library)
export default class Home  extends React.Component {
  constructor() {
    this.state = {
      data: null;
    }
  }

  componentWillMount() {
    //retreive data from library for component then set it in state
    this.setState({
      data: result.data
    });
  }

  render() {
    return (
      <div>
        <h2>Homepage Data: {this.state.data || 'No Data'}</h2>
      </div>
    );
  }
}
*/
