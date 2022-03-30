import React, { useEffect, useState } from 'react';
import { Field, reduxForm, change, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Search, Share, StarFill, ArrowDownUp, ArrowCounterclockwise,Hourglass } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from "react-redux";
import { validateAdvancedForm } from '../formValidators';
import { RenderField } from './formElements/RenderField';
import { RenderCheckBoxes } from './formElements/RenderCheckBoxes';
import { RenderRadio } from './formElements/RenderRadio';

/**
 * Component holding the advanced search form
 * @param {*} props 
 */
let AdvancedSearch = (props) => {
    const { handleSubmit, reset, submitting, pristine, valid, onReset, onTypeToggle, starsCheckedVal, sizeCheckedVal, manualSearchFn, onStarsToggle, onSizeToggle } = props;
    const isLoading = useSelector(state => state.search.isLoading);
    const starsOpen = useSelector(state => state.search.starsOpen);
    const sizeOpen = useSelector(state => state.search.sizeOpen);
    const searchFormData = useSelector(state => state.form.simpleSearch);
    const history = useSelector(state => state.search.searchHistory);
    const dispatch = useDispatch();
    const [isFetchStarted, setFetchStarted] = useState(false);

    useEffect(() => {
        // console.log('Simple form: ', searchFormData, manualSearchFn );

        if (!isFetchStarted && history.length < 1) {
            const urlParams = new URLSearchParams(window.location.search);
            const query = urlParams.get('query');
            setFetchStarted(true);

            //console.log('query', query);
            if (query) {
                console.log('Start fetching form: ', searchFormData );
                console.log('Forms should have been parsed by a query!! ' + query);
                // change('searchValue', paramSearchKey);
                manualSearchFn({...searchFormData.values});
            }
        }
    }, [ dispatch, history, isFetchStarted, searchFormData, manualSearchFn ]);

    const onCombinedReset = (...args) => {
        // console.log('reset args', args);
        reset(...args);
        onReset(...args);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Container fluid>
                <Row className="simpleSearchRow">
                    <Col md={4} sm={4} className="searchCell searchByCell">
                        <label htmlFor="searchValue">Search by: </label> 
                        <Field name="searchValue" component={RenderField}
                            type="text" label="search by" className='searchby'/>
                    </Col>
                    <Col md={6} sm={5}>
                        <Field name="filter" id="filter" component={RenderCheckBoxes} type="checkbox" />
                    </Col>
                    <Col md={2} sm={3} className="modToggleOuter">
                        <Button className="queryButton" variant="primary" size="sm" type="submit" disabled={submitting || !valid || isLoading}>
                            {isLoading ? (<Hourglass color="white" size={18}></Hourglass>) : (<Search color="white" size={18}></Search>)}
                        </Button>
                        <Button className="queryButton" variant="primary" size="sm" type="button" disabled={submitting || isLoading || pristine}
                            onClick={onCombinedReset}>
                                <ArrowCounterclockwise size={18}></ArrowCounterclockwise>
                        </Button>
                        <Button className="queryButton" variant="primary" size="sm" 
                            disabled={submitting || !valid || isLoading} onClick={onTypeToggle}>
                            <Share size={18}></Share>
                        </Button>
                    </Col>
                </Row>
                <Row className="simpleSearchRow">
                    <Col md={3} xs={6} className="searchCell">
                        <label htmlFor="user">User: </label>
                        <Field name="user" component={RenderField}
                            type="text" label="user name" />
                    </Col>
                    <Col md={3} xs={6} className="searchCell">
                        <label htmlFor="org">Org.: </label>
                        <Field name="org" component={RenderField}
                            type="text" label="organization" />
                    </Col>
                    <Col md={3} xs={6} className="searchCell">
                            <label htmlFor="lang">Lang.: </label>
                            <Field name="lang" component={RenderField}
                                type="text" label="language" />
                     </Col>
                    <Col md={3} xs={6} className="searchCell">
                           <label htmlFor="topic">Topic: </label>
                            <Field name="topic" component={RenderField}
                                type="text" label="topic" />
                    </Col>

                </Row>
                <Row>
                    <Col xs lg={6} className="starsFilterOuter">
                    {starsOpen ? (
                        <span className="starsFilter">
                            <StarFill color="yellow" size={12}
                                title="close stars filter"
                                onClick={onStarsToggle}>
                            </StarFill>
                            <span className="starsMainLabel">&nbsp;</span>
                            <Field
                                name="starCheck"
                                component={RenderRadio}
                                value="equal"
                                id="starCheckEqual"
                                type="radio"
                                label="equal"
                            >
                            </Field>
                            <Field
                                name="starCheck"
                                component={RenderRadio}
                                value="greater"
                                id="starCheckgreat"
                                type="radio"
                                label="greater than"
                            >
                            </Field>
                            <Field
                                name="starCheck"
                                component={RenderRadio}
                                value="less"
                                id="starCheckLess"
                                type="radio"
                                label="less than"
                            >
                            </Field>
                            <Field
                                name="starCheck"
                                component={RenderRadio}
                                value="between"
                                id="starCheckBetween"
                                type="radio"
                                label="between"
                            >
                            </Field>
                            <span className="starsFilterNumberRow">
                                <span className="wpNoWrap">
                                    <label htmlFor="starsNumber">{starsCheckedVal === 'between' ? 'Min: ' : 'Stars: '} </label>
                                    <Field name="starsNumber" component={RenderField}
                                        type="text" label="number" />
                                </span>
                                <span className="wpNoWrap">
                                    <label className={starsCheckedVal === 'between' ? '' : 'hiddenContent'}
                                        htmlFor="starsMax">
                                        Max:
                                    </label>
                                    <Field className={starsCheckedVal === 'between' ? '' : 'hiddenContent'}
                                        name="starsMax" component={RenderField}
                                        type="text" label="number" />
                                </span>
                            </span>
                        </span>
                    ) :
                    (   <span className="filterToggler" onClick={onStarsToggle}
                            title="show stars filter">
                            <StarFill color="yellow" size={12}></StarFill>
                            <span className="starsMainLabel"> filter</span>    
                        </span>
                    )}
                    </Col>
                    <Col xs lg={6} className="sizeFilterOuter">
                    {sizeOpen ? (
                        <span className="sizeFilter">
                            <ArrowDownUp color="lightblue" size={12}
                                title="close size filter"
                                onClick={onSizeToggle}>
                            </ArrowDownUp>
                            <span className="sizeMainLabel">&nbsp;</span>
                            <Field
                                name="sizeCheck"
                                component={RenderRadio}
                                value="equal"
                                id="sizeCheckEqual"
                                type="radio"
                                label="equal"
                            >
                            </Field>
                            <Field
                                name="sizeCheck"
                                component={RenderRadio}
                                value="greater"
                                id="sizeCheckgreat"
                                type="radio"
                                label="greater than"
                            >
                            </Field>
                            <Field
                                name="sizeCheck"
                                component={RenderRadio}
                                value="less"
                                id="sizeCheckLess"
                                type="radio"
                                label="less than"
                            >
                            </Field>
                            <Field
                                name="sizeCheck"
                                component={RenderRadio}
                                value="between"
                                id="sizeCheckBetween"
                                type="radio"
                                label="between"
                            >
                            </Field>
                            <span className="sizeFilterNumberRow">
                                <span className="wpNoWrap">
                                    <label htmlFor="sizeNumber">{sizeCheckedVal === 'between' ? 'Min: ' : 'Size: '} </label>
                                    <Field name="sizeNumber" component={RenderField}
                                        type="text" label="number" />
                                </span>
                                <span className="wpNoWrap">
                                    <label className={sizeCheckedVal === 'between' ? '' : 'hiddenContent'}
                                        htmlFor="sizeMax">
                                        Max:
                                    </label>
                                    <Field className={sizeCheckedVal === 'between' ? '' : 'hiddenContent'}
                                        name="sizeMax" component={RenderField}
                                        type="text" label="number" />
                                </span>        
                            </span>
                        </span>
                     ) :
                     (   <span className="filterToggler" onClick={onSizeToggle}
                             title="show size filter">
                             <ArrowDownUp color="lightblue" size={12}></ArrowDownUp>
                             <span className="sizeMainLabel"> size filter</span>    
                         </span>
                     )}
                    </Col>
                    </Row>
            </Container>
        </form>
    )

}

// Decorate the form component
AdvancedSearch = reduxForm({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    // enableReinitialize: true, // enable if want to kill your PC !!!
    form: 'simpleSearch', // a unique name for this form
    validate: validateAdvancedForm
})(AdvancedSearch);

const selector = formValueSelector('simpleSearch') // <-- same as form name
AdvancedSearch = connect(
    state => {
        const starCheckValFromState = selector(state, 'starCheck');
        const sizeCheckValFromState = selector(state, 'sizeCheck');
        return {
            initialValues: state.form.simpleSearch,
            starsCheckedVal: starCheckValFromState,
            sizeCheckedVal: sizeCheckValFromState,
        }
    }, (dispatch) => {
        return { change: change }
    }
)(AdvancedSearch)

export default AdvancedSearch;
