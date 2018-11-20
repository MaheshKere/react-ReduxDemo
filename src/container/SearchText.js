import { connect } from 'react-redux'
import SearchBox from '../components/SearchBox';
import { searchText } from '../actions/action'

const mapDispatchToProps = dispatch => ({
  searchText: (text) => dispatch(searchText(text))
})

export default connect(
  null,
  mapDispatchToProps
)(SearchBox)
