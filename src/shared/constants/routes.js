export default Object.freeze({
    LOGIN: {
        name: 'Login',
        route: '/'
    },
    DASHBOARD: {
        name: 'Dashboard',
        route: '/home'
    },
    LISTING: {
        name: 'Listing',
        route: '/list'
    },
    PROFILE: {
        name: 'Profile',
        route: '/me',
        subroutes: {
            SETTINGS: {
                name: 'Settings',
                route: '/me/settings'
            }
        }
    },
    ABOUT: {
        name: 'About',
        route: '/about'
    }
});