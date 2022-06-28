import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessIcon from '@material-ui/icons/Business';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work';
import DataIcon from '@material-ui/icons/DataUsage';

const username = localStorage.getItem('admin-username')

export const tabs = [
    {
        path: `/admin-console/${username}/dashboard`,
        title: 'Dashboard',
        icon: <>
            <DashboardIcon />
        </>
    },
    {
        path: `/admin-console/${username}/students`,
        title: 'Students',
        icon: <>
            <SupervisorAccountIcon />
        </>
    },
    {
        path : `/admin-console/${username}/DataCollect`,
        title : 'Student Data',
        icon : <>
            <DataIcon />
        </>

    },
    {
        path: `/admin-console/${username}/companies`,
        title: 'Companies',
        icon: <>
            <BusinessIcon />
        </>
    },
    {
        path: `/admin-console/${username}/training`,
        title: 'Trainings',
        icon: <>
            <WorkIcon />
        </>
    },
    {
        path: `/admin-console/${username}/settings`,
        title: 'Settings',
        icon: <>
            <SettingsIcon />
        </>
    },
    {
        path: '/',
        title: 'Home Page',
        icon: <>
            <HomeIcon />
        </>
    },
    {
        path: '/admin-console/logout',
        title: 'Log Out',
        icon: <>
            <ExitToAppIcon />
        </>
    }
]