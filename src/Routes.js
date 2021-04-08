import React from 'react';
import { Switch , Route} from 'react-router-dom';


//Components
import Home from './components/MainView/Home/Home';
import MyApplications from './components/MainView/MyApplications/MyApplications';
import SparkUI from './components/MainView/SparkUI/SparkUI';
import Search from './components/MainView/Search/Search'; 

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path='/my-applications' component={MyApplications} />
            <Route path='/spark-ui' component={SparkUI} />
            <Route path='/search' component={Search} />
        </Switch>


    )


}


export default Routes;