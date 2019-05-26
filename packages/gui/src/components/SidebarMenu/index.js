// @flow

import React from "react"
import { makeStyles } from "@material-ui/styles"
import classnames from "classnames"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { grey } from "@material-ui/core/colors"
import { environment } from "react-router-component"

const useStyles = makeStyles({
  item: {
    marginTop: 5,
    marginBottom: 5
  },
  selectedItem: {
    backgroundColor: grey[100],
    "&& span": {
      fontWeight: "bold"
    }
  }
})

const items = [
  { label: "Pipelines", href: "/" },
  { label: "Stages", href: "/stages" },
  { label: "Types", href: "/types" },
  "sep",
  { label: "Create Stage", href: "/create-stage" },
  { label: "Create Type", href: "/create-type" },
  "sep",
  { label: "Environment", href: "/environment" },
  { label: "Settings", href: "/settings" }
]

export const SidebarMenu = ({ currentPageTitle }: any) => {
  const c = useStyles()
  return (
    <div className={c.root}>
      <List>
        {items.map(
          item =>
            item === "sep" ? (
              <Divider />
            ) : (
              <ListItem
                button
                onClick={() => {
                  environment.defaultEnvironment.navigate(item.href)
                }}
                key={item.label}
                disabled={currentPageTitle === item.label}
                className={classnames(
                  c.item,
                  currentPageTitle === item.label && c.selectedItem
                )}
              >
                <ListItemText>{item.label}</ListItemText>
              </ListItem>
            )
        )}
      </List>
    </div>
  )
}

export default SidebarMenu
