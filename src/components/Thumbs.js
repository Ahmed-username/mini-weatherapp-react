import React from "react";
import Thumb from "./Thumb";

class Thumbs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { full: "", bgc: "" };
    this.imageReceiver=this.imageReceiver.bind(this);
  }

  imageReceiver(img, bg) {
    this.setState({
      full: img,
      bgc: bg
    });
    this.props.fullImage(img,bg);
  }

  render() {
    return (
      <div className="thumbs">
        {this.props.images.map(image => {
          return (
            <Thumb key={image.id} image={image} onClick={this.imageReceiver} />
          );
        })}
      </div>
    );
  }
}

export default Thumbs;

/* {this.props.images.map(item =>
              <a className="thumbs__link" data-color={item.color}>
              <img src={item.urls.regular} key={item.urls.full} className="thumbs__link__img">
              jj</img></a>
            )} */
