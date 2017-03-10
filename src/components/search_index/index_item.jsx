import React from 'react';
import { withRouter } from 'react-router';

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
  const { description, title, channelTitle, publishedAt } = this.props.vid.snippet;
  const { url } = this.props.vid.snippet.thumbnails.medium;

  return (
    <div className="index-item">
      <div className="index-item-left">
        <img src={url} />
      </div>
      <div className="index-item-right">
          <h1>{title}</h1>
          <p>{channelTitle}</p>
          <p>{description}</p>
      </div>
    </div>
  );

  }
}

export default withRouter(SearchIndexItem);