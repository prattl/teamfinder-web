import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { requestTeam } from 'actions/teams'

import { Label } from 'react-bootstrap'
import { Link } from 'react-router'
import { FixtureDisplay, Loading } from 'utils'
import { CaptainIcon, RegionIcon, PlayersIcon, PositionIcon, SkillBracketIcon } from 'utils/components/icons'
import { playerSelector, teamsSelector } from 'utils/selectors'
import { withAllFixtures } from 'components/connectors/WithFixtures'
import { withTeam } from 'components/connectors/WithTeam'

const playerIsCaptain = (player, team) => (
    player.id == team.captain
)

class TeamSnippet extends Component {

    render() {
        const { fixtures: { regions, positions, skillBrackets } } = this.props
        const { team: { team, isLoading, lastUpdated }, player } = this.props
        return (
            <div style={{ padding: '1rem', margin: '2rem 0', border: '1px solid #DDD' }}>
                {isLoading ? <Loading /> : (
                    lastUpdated ? (
                        <div>
                            <div>
                                <h4 className='pull-left'>
                                    <Link to={`/teams/${team.id}`}>{team.name}</Link>
                                    {playerIsCaptain(player, team) && (
                                        <small>&nbsp;(<Link to={`/teams/manage/${team.id}/`}>manage</Link>)</small>
                                    )}

                                </h4>
                                <span className='pull-right'>
                                    <i className={`fa fa-${team.available_positions.length > 0 ? 'check-square-o' : 'square-o'}`}/>
                                    &nbsp;Recruiting
                                </span>
                                <div style={{ clear: 'both' }}/>
                            </div>

                            <div>
                                <RegionIcon fixedWidth={true}/>&nbsp;
                                <FixtureDisplay value={team.regions} fixture={regions}/>
                            </div>
                            <div>
                                <SkillBracketIcon fixedWidth={true}/>&nbsp;
                                <FixtureDisplay value={team.skill_bracket} fixture={skillBrackets}/>
                            </div>
                            {team.available_positions.length > 0 &&
                                <div>
                                    <PositionIcon fixedWidth={true}/>&nbsp;Recruiting:&nbsp;
                                    <FixtureDisplay value={team.available_positions} fixture={positions}/>
                                </div>
                            }
                            <div>
                                <PlayersIcon fixedWidth={true}/>&nbsp;
                                {team.team_members.map(teamMember => (
                                    <div style={{ display: 'inline-block', marginRight: '0.5rem' }}
                                         key={`team-member-${teamMember.id}`}>
                                        <Link to={`/players/${teamMember.player.id}/`} style={{ color: '#FFF' }}>
                                            <Label>
                                                {team.captain === teamMember.player.id && (
                                                    <span><CaptainIcon />&nbsp;</span>
                                                )}
                                                {teamMember.player.username}{teamMember.position && (
                                                    ` - ${positions.items[teamMember.position].name}`
                                                )}
                                            </Label>
                                        </Link>
                                    </div>

                                ))}
                            </div>
                        </div>
                    ) : null
                )}
            </div>
        )
    }

}

TeamSnippet = connect(playerSelector, null)(TeamSnippet)

TeamSnippet = withTeam(props => props.teamId)(TeamSnippet)
TeamSnippet = withAllFixtures(TeamSnippet)

export default TeamSnippet
