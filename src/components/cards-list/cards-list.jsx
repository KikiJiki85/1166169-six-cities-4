import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";


export default class CardsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null
    };

    this._onCardMouseOver = this._onCardMouseOver.bind(this);
  }

  _onCardMouseOver(id) {
    this.setState({
      activeOffer: id
    });
  }

  render() {
    const {offers, onHeaderClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => {
          return (
            <Card
              offer = {offer}
              key = {offer.id}
              onHeaderClick={onHeaderClick}
              onCardMouseOver={this._onCardMouseOver}
            />
          );
        })}
      </div>
    );
  }
}

CardsList.propTypes = {
  onHeaderClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        premium: PropTypes.bool.isRequired
      })
  )
};
