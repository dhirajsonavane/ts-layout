import React, { forwardRef } from 'react'
import ListItem from '@material-ui/core/ListItem'
import { NavLink, NavLinkProps } from 'react-router-dom'

export interface AppMenuItemComponentProps {
  className?: string
  layout?: string | null
  path?: string | null,
  invisible?:boolean|null,
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const AppMenuItemComponent: React.FC<AppMenuItemComponentProps> = props => {
  const { className, onClick, layout, path, invisible, children } = props

  if(invisible) {
    return null;
  }

  // If link is not set return the orinary ListItem
  if (!path || typeof path !== 'string') {
    return (
      <ListItem
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    )
  }

  // Return a LitItem with a link component
  return (
    <ListItem
      button
      className={className}
      children={children}
      component={forwardRef((props: NavLinkProps, ref: any) => <NavLink exact {...props} innerRef={ref} />)}
      to={layout + path}
    />
  )
}

export default AppMenuItemComponent
