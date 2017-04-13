import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'; // ES6

import TryoutFormFirst from './TryoutFormFirst';
import TryoutFormSecond from './TryoutFormSecond';
import TryoutFormThird from './TryoutFormThird';
import TryoutFormFourth from './TryoutFormFourth';

import { registerPlayer } from '../Actions/index';

class TryoutFormWizard extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      page: 1,
    };
  }

  /* eslint-disable */
  onSubmit(values) {
    this.setState({ page: this.state.page + 1 });

    const player= {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      nickname: values.nickname,
    };

    this.props.registerPlayer(player);
    // console.log(values);
  }
  /* eslint-enable */

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { page } = this.state;
    return (
      <div>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          { page === 1 &&
            <TryoutFormFirst onSubmit={this.nextPage} />
          }
          { page === 2 &&
            <TryoutFormSecond previousPage={this.previousPage} onSubmit={this.nextPage} />
          }
          { page === 3 &&
            <TryoutFormThird previousPage={this.previousPage} onSubmit={this.onSubmit} />
          }
          { page === 4 &&
            <TryoutFormFourth previousPage={this.previousPage} onSubmit={this.onSubmit} />
          }
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default connect(null, { registerPlayer })(TryoutFormWizard);
