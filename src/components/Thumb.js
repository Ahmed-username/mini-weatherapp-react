import React from "react";

class Thumb extends React.Component {
  constructor(props) {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    const url = this.props.image.urls.full;
    const color = this.props.image.color;
    this.props.onClick(url, color);
  }

  render() {
    return (
      <img
        src={this.props.image.urls.thumb}
        className="thumbs__link"
        onClick={this.clickHandler}
      />
    );
  }
}

export default Thumb;

// { this.props.images.map(item=>
//     <img src={item.urls.regular} key={item.id}
//     className="thumbs__link"
//     data-full={item.urls.full} data-color={item.color} />) }
