import React from "react"
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro';
import { Dimmer, Loader } from "semantic-ui-react";
import DashboardContainer from './dashboard-container'
const USER_QUERY =  loader('../graphql/queries/detailed-user-query.graphql');

function DashboardQuery(props){
    const loader = (
            <Dimmer active inverted>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
    )

    return (
        <Query query={USER_QUERY}>
            {({ loading, error, data }) => {
                if (loading) return loader
                if (error) return (
                    <React.Fragment>
                        {console.log(error)}
                        {loader}
                    </React.Fragment>
                )
                return <DashboardContainer user={data.me} />
            }}
        </Query> 
    )
}

export default DashboardQuery