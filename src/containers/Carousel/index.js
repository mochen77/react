import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import { carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7} from '../../img'

export default class index extends Component {
    state = {
        data: [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7],
          });
        }, 200);
      }
  render() {
    return (
      <WingBlank >
        <Carousel
          autoplay={true}
          infinite
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://localhost:3000/find"
              style={{ display: 'block', width: '100%', height: 0, paddingTop: '50%', position: "relative" }}
            >
              <img
                src={`${val}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top', position: "absolute", top: 0, left: 0}}
                onLoad={() => {
                  // fire window resize event to change height
                  // window.dispatchEvent(new Event('resize'));
                  // this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    )
  }
}
