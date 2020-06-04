import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, createStyles } from '@material-ui/core/styles'
// import { SvgIconProps } from '@material-ui/core/SvgIcon'

import List from '@material-ui/core/List'

import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'

import AppMenuItemComponent from './AppMenuItemComponent'

// React runtime PropTypes
export const AppMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  layout: PropTypes.string,
  path: PropTypes.string,
  Icon: PropTypes.elementType,
  views: PropTypes.array,
  invisible: PropTypes.bool
}

type AppMenuItemPropTypes = PropTypes.InferProps<typeof AppMenuItemPropTypes>
type AppMenuItemPropsWithoutItems = Omit<AppMenuItemPropTypes, 'views'>

export type AppMenuItemProps = AppMenuItemPropsWithoutItems & {
  views?: AppMenuItemProps[]
}

const AppMenuItem: React.FC<AppMenuItemProps> = props => {
  const { name, layout, path, Icon, invisible, views = [] } = props
  const classes = useStyles()
  const isExpandable = views && views.length > 0
  const [open, setOpen] = React.useState(true)

  function handleClick() {
    setOpen(!open)
  }

  const MenuItemRoot = (
    <AppMenuItemComponent className={classes.menuItem} invisible={invisible} layout={layout} path={path} onClick={handleClick}>
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />

    </AppMenuItemComponent>
  )

  const MenuItemChildren = isExpandable ? (
    <div>
      <List component="div">
        {
          views.map((view, index) => (
            <AppMenuItem {...view} key={index} />
          ))
        }
      </List>
    </div>
  ) : null

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  )
}

const useStyles = makeStyles(theme =>
  createStyles({
    menuItem: {
      '&.active': {
        background: 'rgba(0, 0, 0, 0.08)',
        '& .MuiListItemIcon-root': {
          color: '#fff',
        },
      },
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default AppMenuItem
