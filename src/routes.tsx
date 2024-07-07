import {Route, Routes as Switch} from "react-router-dom";
import HomePage from "@ui/home/HomePage";
import ForumPage from "@ui/forum/ForumPage";
import ProfilePage from "@ui/profile/ProfilePage";
import SignInPage from "@ui/signin/SignInPage";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" element={<HomePage/>}/>
            <Route path={"/forum"} element={<ForumPage/>}/>
            <Route path={"/profile"} element={<ProfilePage/>}/>
            <Route path={"/sign-in"} element={<SignInPage/>}/>
            <Route path={'*'} element={<div>404</div>}/>
        </Switch>
    );
};

export default Routes;