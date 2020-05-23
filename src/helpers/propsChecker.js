import React, { Component } from 'react';

export default function withPropsChecker(WrappedComponent) {
  return class PropsChecker extends Component {
    componentWillReceiveProps(nextProps) {
      console.log('%c%s', 'color: green', 'Props Check Begin');
      Object.keys(nextProps)
        .filter(key => nextProps[key] !== this.props[key])
        .map(key => {
          console.log('changed property:', key, 'from', this.props[key], 'to', nextProps[key]);
        });
      console.log('%c%s', 'color: green', 'Props Check End');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
