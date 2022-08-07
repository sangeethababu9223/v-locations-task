import { Component } from "react";
class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }
  handleHover = () => {
    this.setState((state) => ({
      hovered: !state.hovered,
    }));
  };
  render() {
    const { metaTitle, title, description, image, link } = this.props.place;
    return (
      <article
        className={`valtech-locations__item valtech-locations__item--${this.props.index}`}
        style={{ backgroundImage: `url(${image})` }}
        onMouseOver={this.handleHover}
        onMouseOut={this.handleHover}
      >
        {this.state.hovered ? (
          <div
            className='valtech-locations__details'
            data-testid='valtechDetails'
          >
            <h5 className='valtech-locations__meta-title'>{metaTitle}</h5>
            <h3 className='valtech-locations__title'>{title}</h3>
            <div className='valtech-locations__description valtech-locations__description--hover'>
              {description}
            </div>
            <a
              className='valtech-locations__link'
              href={link}
              rel='noreferrer'
              target='_blank'
            >
              Explore More
            </a>
          </div>
        ) : (
          <div>
            <h5 className='valtech-locations__meta-title'>{metaTitle}</h5>
            <h3 className='valtech-locations__title'>{title}</h3>
            {this.props.index === 1 && (
              <div className='valtech-locations__description'>
                {description}
              </div>
            )}
          </div>
        )}
      </article>
    );
  }
}
export default Location;
