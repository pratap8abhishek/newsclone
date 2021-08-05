import React from 'react';
import { BrowserRouter,Redirect,Route,Switch } from 'react-router-dom';
import Header from '../components/Header';
//import Homepage from '../components/Homepage';
import PageNotFound from '../components/PageNotFound';
import ShowStories from '../components/ShowStories';

const AppRouter = () =>{
    return(
        <BrowserRouter>
            <div className="container">
            <Header />
            <Switch>
                {/* <Route path="/" component={Homepage} exact={true} />
                <Route path="/:type" component={ShowStories} /> */}
                <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
                <Route
                path="/:type"
                render={({ match }) => {
                const { type } = match.params;
                if (!['top', 'new', 'best'].includes(type)) {
                return <Redirect to="/" />;
                }
                 return <ShowStories type={type} />;
                 }}
                />
                <Route component={PageNotFound} />
               </Switch>
             </div>
        </BrowserRouter>
    );
};
export default AppRouter;









