import { connect } from 'react-redux'
import Tabs from '../components/Tabs'
import { changeTab } from '../actions/tabs'

const mapStateToProps = (state)  => {
  return {
    activeTab: state.activeTab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeTab: (tab) => {
      dispatch(changeTab(tab))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)