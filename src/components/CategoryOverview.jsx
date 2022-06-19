import React, { Component } from 'react';


class CategoryOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
      return (
          <div>
          <p>{console.log(this.props.categories)}</p>
      </div>
    )
  }
}

export default CategoryOverview;