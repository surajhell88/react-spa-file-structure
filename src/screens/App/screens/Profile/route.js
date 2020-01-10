import { routeConstants } from 'shared/constants';
import Profile from "./";
import detailsRoute from "./screens/Details/route";
import settingsRoute from "./screens/Settings/route";

export default {
    path: routeConstants.PROFILE.route,
    component: Profile,
    routes: [
        detailsRoute,
        settingsRoute
    ]
};