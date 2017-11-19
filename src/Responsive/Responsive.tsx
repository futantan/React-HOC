import { Component } from 'react';

export interface IResponsiveProps {
  query: string;
}

export class Responsive extends Component<IResponsiveProps, any> {
  state = {
    matches: false,
  };

  private mql: MediaQueryList;

  componentDidMount() {
    if (typeof window.matchMedia === 'function') {
      this.mql = window.matchMedia(this.props.query);
      this.mql.addListener(this.updateMatches);
      this.updateMatches(this.mql);
    }
  }

  componentWillUnmount() {
    this.mql.removeListener(this.updateMatches);
  }

  updateMatches = (mql: MediaQueryList) => {
    this.setState({ matches: mql.matches });
  }

  render() {
    if (typeof this.props.children === 'function') {
      return this.props.children(this.state.matches);
    }

    return null;
  }
}
