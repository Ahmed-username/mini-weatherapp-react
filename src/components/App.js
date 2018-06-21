import React from "react";
import Header from "./Header";
import Photo from "./Photo";
import Info from "./Info";
import Thumbs from "./Thumbs";
import Search from "./Search";

class App extends React.Component {
  constructor(props) {
    super();
    this.state={images:[],full:"",bgc:""};
    this.receiver=this.receiver.bind(this);
    this.fullImage=this.fullImage.bind(this);

    // Use the props passed to App here (hint: look at ../index.js)
  }

  receiver(data){
    this.setState(
      {images: data}
    );
  }

  fullImage(url,color){
    this.setState(
      {full:url,
      bgc:color
      }
    );
    console.log(this.state.bgc);
  }

  render() {

    
    return(
      <main className="content">
      <Header/>
      <Photo full={this.state.full} bgc={this.state.bgc}/>
      <Info/>
      <Thumbs images={this.state.images} fullImage={this.fullImage}/>
      <Search config={this.props.config} receiver={this.receiver}/>
      </main>
    ) ;
  }
}

App.defaultProps = {};

export default App;
