import React from "react"
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro';
import { Dimmer, Loader } from "semantic-ui-react";
import NavBarAuthView from "./nav-bar-auth-view";

const USER_QUERY =  loader('../graphql/queries/basic-user-query.graphql');


function NavBarAuthQuery(props){
    let { handleAuth } = props

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
                return <NavBarAuthView user={data.me} handleAuth={handleAuth} />
            }}
        </Query> 
    )
}

export default NavBarAuthQuery