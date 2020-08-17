import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css';
import { connect } from 'react-redux';
import { createTeam } from '../actions/actions'

class NavBar extends React.Component {
  state = {
    collapsed: true,
    teamName: ''
  };

  toggleNavbar = () =>
    this.setState({
      collapsed: !this.state.collapsed,
    });
  onChangeName = (e) => {
    this.setState({
      teamName: e.target.value
    })
  }
  submitTeam = () => {
    this.props.createTeam(this.state.teamName);
    this.setState({ teamName: '' })
  }
  render() {
    let teams = [...this.props.teams]
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
      <>
        <div className="card text-left bg-secondary text-white" style={{ marginBottom: "10px" }}>
          <div className="card-body">
            <select name="type"><option value="Teams"> Teams</option></select>
            <input value={this.state.teamName} onChange={this.onChangeName} />
            <button onClick={this.submitTeam}>Create</button>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
          <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
            </span>
          </button>
          <div className={`${classOne}`} id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item nav-link js-scroll-trigger">TEAMS</li>

              {teams.map((team, index) => <li key={index} className="nav-item">
                <Link className="nav-link js-scroll-trigger" to={`/users/${team.name}`}> {team.name}</Link>
              </li>)}

            </ul>
          </div>
        </nav>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    teams: state.teams
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createTeam: (name) => dispatch(createTeam(name))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);