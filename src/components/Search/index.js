import React, { Component } from "react"
import { Link } from "gatsby";
import { Index } from "elasticlunr"

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    const { results } = this.state
    return (
      <div className="Search">
        <input type="text" value={this.state.query} onChange={this.search} />
        <ul>
          {results.map(page => (
            <li key={page.id}>
              <Link to={"/Article/" + page.title}>{page.title}</Link>
              {": " + page.tag}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
      Index.load(this.props.searchIndex);

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex();
    //console.log(this.index.search(query, { expand: true }))
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index.search(query, { expand: true }).map(({ ref }) => {
        return this.index.documentStore.getDoc(ref)
      }
      ),
    })
  }
}