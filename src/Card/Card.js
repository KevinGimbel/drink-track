import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Card extends Component {

  render() {
    let icon = this.props.icon;
    let increaseBy = parseInt(this.props.increaseBy, 10) || 0;
    let name = this.props.name;
    return (
      <div className="card-wrap">
        <div className="card hoverable" onClick={() => this.props.clickHandler(increaseBy)}>
          <div className="card__icon">
            <FontAwesomeIcon icon={icon} /><br />
            <small>{increaseBy}ml</small>
          </div>
          <div className="card__body">
            <p>{name}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
