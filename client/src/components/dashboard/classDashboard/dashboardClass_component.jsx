import React from 'react';
// Components
import Header from '../../headers/authorized_header.jsx';
import DashboardSummary from './C_dashboardSummary.jsx';
import DashboardLeftCol from './C_dashboardLeftCol.jsx';
import DashboardRightCol from './C_dashboardRightCol.jsx';
class DashboardClass extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isAuthenticated: this.props.isAuthenticated,
      students: [],
      details: {},
      currentstudent: '',
      assignments: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.setCurrentStudent = this.setCurrentStudent.bind(this)
  }

  setCurrentStudent (student) {
    console.log(student)
    this.setState({
      currentstudent: student
    })
  }

  componentDidMount () {
    const classid = localStorage.getItem('classId')
    const url = `/api/report/classes/${classid}`
    this.serverRequest = $.get(url, function (classData) {
      this.setState({
        isAuthenticated: this.props.isAuthenticated,
        students: classData.students,
        details: classData.details,
        assignments: classData.assignments
      })
    }.bind(this))
  }

  componentWillUnmount () {
    this.serverRequest.abort()
  }
  render () {
    return (
      <div>
        <Header />
        <main>
          <div className='dashboardWrapper'>
            <DashboardSummary data={this.state} />
            <div className='dashboardCols'>
              <div>
                <h3>Students <a href='/studentForm'><i className='fa fa-plus' aria-hidden='true' /></a></h3>
                <DashboardLeftCol data={this.state} func={this.setCurrentStudent} />
              </div>
              <div>
                <DashboardRightCol data={this.state} />
              </div>
            </div>
          </div>
        </main>
      </div>
   )
  }
};

export default DashboardClass
