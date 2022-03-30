import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LangCell from './LangCell';
import { Stars, Calendar, CalendarWeek } from 'react-bootstrap-icons';

/**
 * Component for rendering a result repo item
 * @param {*} props 
 */
function RepoRow(props) {
    return <Row className="repoRow" key={props.keyProp}>
        <Col className="repoColName" md={3} sm={4} xs={4}>
            <div className="repoNameTop">
                <div title={props.repo.name}>{props.repo.name}</div>
                <div>
                    <a href={props.repo.html_url} target="blank">
                        <div title={props.repo.full_name} className="repoFullName">{props.repo.full_name}</div>
                    </a>
                </div>
            </div>
            <div className="smallSizeOnly repoNameMeta">
                <span className="wsNoWrap" title="stars"><Stars size={16}></Stars> {props.repo.stars}</span>
                &nbsp;
                <span className="wsNoWrap" title="forks">
                    <img alt="" src={process.env.PUBLIC_URL +'/iconfinder_github-fork_83308.png'}></img> {props.repo.forks}
                </span>    
            </div>
            
        </Col>

        <Col className="repoColMeta bigSizeOnly" md={1} sm={0} xs={0}>
            <div title="stars"><Stars size={16}></Stars> {props.repo.stars}</div>
            <div title="forks"><img alt="" src={process.env.PUBLIC_URL +'/iconfinder_github-fork_83308.png'}></img> {props.repo.forks}</div>
        </Col>


        <Col className="repoColDesc" md={3} sm={5} xs={5}>
            <p title={props.repo.description}>{props.repo.description}</p>
        </Col>

        <Col className="repoColLangs bigSizeOnly" xs={1}>
            <LangCell language={props.repo.language} langUrl={props.repo.languages_url} clickShouldLoad={true}></LangCell>
        </Col>

        <Col className="repoColLangs smallSizeOnly" xs={1}>
            <LangCell language={props.repo.language} langUrl={props.repo.languages_url} clickShouldLoad={false}></LangCell>
            <div className="ownerLink">
                <a href={props.repo.owner_html_url} target="blank">
                    <img alt={props.repo.owner} src={props.repo.owner_avatar_url} width="30px"></img>
                </a>
            </div>
        </Col>

        <Col className="repoColDates" md={2} sm={2} xs={2}>
            <div title="created at"><Calendar size={16}></Calendar> {props.repo.created_at.substring(0, 10)}</div>
            <div title="updated at"><CalendarWeek size={16}></CalendarWeek> {props.repo.updated_at.substring(0, 10)}</div>
        </Col>

        <Col className="repoCol bigSizeOnly" md={1} sm={0} xs={0}>
            By: {props.repo.owner}
        </Col>

        <Col className="repoColImg bigSizeOnly" md={1} sm={0} xs={0}>
            <a href={props.repo.owner_html_url} target="blank"><img alt={props.repo.owner} src={props.repo.owner_avatar_url} width="30px"></img></a>
        </Col>

    </Row>
}

export default RepoRow;