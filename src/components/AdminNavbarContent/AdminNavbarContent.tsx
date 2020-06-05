import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import UserNavbarContent from "./UserNavbarContent";

interface AdminNavbarContentProps {
    userName: string
}

const AdminNavbarContent: React.FC<AdminNavbarContentProps> = adminNavbarContentProps => {
    return (
        <React.Fragment>
            <UserNavbarContent userName={adminNavbarContentProps.userName}/>
        </React.Fragment>
    );
};

export default AdminNavbarContent;
