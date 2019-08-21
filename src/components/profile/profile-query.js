import React from "react"
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro';
import { Dimmer, Loader } from "semantic-ui-react";
import ProfileContainer from "./profile-container";

const USER_QUERY =  loader('../graphql/user-profile-query.graphql');

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
                return <ProfileContainer user={data.me} languages={data.languages}/>
            }}
        </Query> 
    )
}

export default DashboardQuery