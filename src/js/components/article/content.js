import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import hljs from 'highlight.js';
import '../../../css/article/article.css';

export default class ArticleContent extends React.Component {
  componentWillMount() {
    marked.setOptions({
      highlight: code => hljs.highlightAuto(code).value,
    });
  }

  render() {
    return (
      <div className="article-content">
        <div className="article-title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="article-time">
          {this.props.time}
        </div>
        <div className="article-detail" dangerouslySetInnerHTML={{ __html: marked(this.props.content) }} />
      </div>
    );
  }
}

ArticleContent.defaultProps = {
  title: 'title',
  time: 'time',
  content: 'content',
};

ArticleContent.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
  content: PropTypes.string,
};