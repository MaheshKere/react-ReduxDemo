

import { connect } from 'react-redux'
import EmpInfo from '../components/EmpInfo';



  function mapStateToProps(state) {
    return {
        emp: state.selectedEmp

    }
  }
  



export default connect(
  mapStateToProps)(EmpInfo)
