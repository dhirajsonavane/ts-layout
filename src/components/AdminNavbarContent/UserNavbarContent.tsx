import React from 'react';
import { withStyles, makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import SettingsIcon from "@material-ui/icons/Settings";

import IconButton from '@material-ui/core/IconButton';

import Help from '@material-ui/icons/HelpRounded';
import LanguageRounded from '@material-ui/icons/Language';

interface UserNavProps {
    userName: string
}

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        minWidth: 'unset',
        '& .MuiListItemIcon-root': {
            minWidth: 40,
        }
    },
}))(MenuItem);

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            right: 0,
            position: 'absolute',
        },
    }),
)

const UserNavbarContent: React.FC<UserNavProps> = userNavProps => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const classes = useStyles();
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className = {classes.root}>
            <Button
                className="userNameMenuBtn toolbarMenuContent"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                endIcon={<KeyboardArrowDown />}
            >
                <span className="userNameMenu">{userNavProps.userName}</span>
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon> <AccountTreeIcon /> </ListItemIcon>
                    <ListItemText primary="Walkthrough" />
                </StyledMenuItem>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon> <SettingsIcon /> </ListItemIcon>
                    <ListItemText primary="Settings" />
                </StyledMenuItem>
            </StyledMenu>

            <IconButton aria-label="help" className="toolbarMenuContent">
                <Help fontSize="inherit" />
            </IconButton>

            <IconButton  aria-label="language" className="toolbarMenuContent">
                <LanguageRounded fontSize="inherit" />
                <KeyboardArrowDown />
            </IconButton>
                
        </div>
    );
};

export default UserNavbarContent;
