const CodeSample1 = ` // imports
// ...

class TemplateWrapper extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Contemporarium" />
        <Header headerImage={this.props.data.headerImage} />
        {this.props.children()}
        <Footer />
      </div>
    );
  }
}
export default TemplateWrapper;
export const pageQuery = graphql\`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/header/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
	}
\`;
`;

export default CodeSample1;
