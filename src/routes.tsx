import {Route, Routes as Switch} from "react-router-dom";
import HomePage from "./ui/home/HomePage";
import ForumPage from "./ui/forum/ForumPage";
import ProfilePage from "./ui/profile/ProfilePage";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" element={<HomePage/>}/>
            <Route path={"/forum"} element={<ForumPage/>}/>
            <Route path={"/profile"} element={<ProfilePage/>}/>
        </Switch>
    );
};

export default Routes;