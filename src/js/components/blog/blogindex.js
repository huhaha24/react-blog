import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../../actions/index';
import ArticleArea from './articlearea';
import RightSider from './rightsider';

class BlogIndex extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIssuesIfNeeded());
  }
  render() {
    if (this.props.isFetching) {
      return null;
    }
    return (
      <div className="blog">
        <div className="blog-container">
          <Row>
            <Col span={18}><ArticleArea issues={this.props.items} /></Col>
            <Col span={6}><RightSider issues={this.props.items} /></Col>
          </Row>
        </div>
      </div>
    );
  }
}

BlogIndex.defaultProps = {
  dispatch: null,
  isFetching: true,
  items: [],
};

BlogIndex.propTypes = {
  dispatch: PropTypes.func,
  isFetching: PropTypes.boolean,
  items: PropTypes.array,
};

function mapStateToProps(state) {
  const { isFetching, items } = state || { isFetching: true, items: [] };
  return { isFetching, items };
}

export default connect(mapStateToProps)(BlogIndex);