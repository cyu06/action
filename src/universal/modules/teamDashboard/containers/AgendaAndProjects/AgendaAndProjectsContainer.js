import PropTypes from 'prop-types';
import React from 'react';
import {cashay} from 'cashay';
import {connect} from 'react-redux';
import AgendaAndProjects from 'universal/modules/teamDashboard/components/AgendaAndProjects/AgendaAndProjects';

const agendaAndProjectsQuery = `
query {
  myTeamMember @cached(type: "TeamMember") {
    id
    hideAgenda
  }
}`;

const mapStateToProps = (state, props) => {
  const {match: {params: {teamId}}} = props;
  const userId = state.auth.obj.sub;
  const {myTeamMember} = cashay.query(agendaAndProjectsQuery, {
    variables: {teamId},
    op: 'agendaAndProjectsContainer',
    key: teamId,
    resolveCached: {
      myTeamMember: () => `${userId}::${teamId}`
    }
  }).data;
  return {
    hideAgenda: myTeamMember.hideAgenda,
    teamId
  };
};

const AgendaAndProjectsContainer = (props) => {
  const {
    teamId,
    teamName,
    hideAgenda
  } = props;
  return (
    <AgendaAndProjects
      hideAgenda={hideAgenda}
      teamId={teamId}
      teamName={teamName}
    />
  );
};

AgendaAndProjectsContainer.propTypes = {
  hideAgenda: PropTypes.bool,
  teamId: PropTypes.string,
  teamName: PropTypes.string
};

export default connect(mapStateToProps)(AgendaAndProjectsContainer);
