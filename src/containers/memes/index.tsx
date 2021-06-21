import React, { FC } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import routes from '../../routes';

const Memes: FC<RouteComponentProps> = ({ match }) => {
    return (
        <div>
            {
                routes.map((route, index) => (<Route exact path={`${match.url}${route.path}`} component={route.component} key={index} />)
                )
            }
        </div>
    )
}

export default Memes;
