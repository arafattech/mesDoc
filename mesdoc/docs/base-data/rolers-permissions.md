---
sidebar_position: 16
slug: /base-data/roles-permissions
---

# Roles Permissions

The `Roles Permissions` page is used to create roles, rename existing roles, and assign module-level permissions for each role.

## Roles Permissions Page

![Roles Permissions Page](/img/basedata/role-permission/role-permission-list.png)

Go to `Base Data Management > Roles Permissions` to open this page.

### Main Areas on This Page

- **Roles List**: Shows all available roles in the system.
- **Search**: Helps find a role quickly from the list.
- **New**: Opens the popup to create a new role.
- **Edit**: Opens the selected role for update.
- **Delete**: Removes a role if it is no longer needed.
- **Modules Name**: Displays all modules and permission items available for the selected role.
- **Checkboxes**: Used to allow or remove access for a module or permission item.
- **Submit**: Saves the permission changes made for the selected role.
- **Cancel**: Discards unsaved permission changes.

## Create a New Role

![Create New Role](/img/basedata/role-permission/role-permission-create-new.png)

Follow these steps to add a new role:

1. Go to `Base Data Management > Roles Permissions`.
2. Click the **New** button at the top of the roles list.
3. Enter the role name in the **Role Name** field.
4. Click **Submit** to save the new role.
5. Click **Cancel** if you do not want to create the role.

### Field Description

- **Role Name**: The name of the new role. This field is required.

## Edit a Role Name

![Edit Role](/img/basedata/role-permission/role-permission-edit.png)

Follow these steps to update a role name:

1. Find the role you want to update from the roles list.
2. Click the **Edit** icon in the **Actions** column.
3. Update the value in the **Role Name** field.
4. Click **Submit** to save the change.
5. Click **Cancel** to leave the role unchanged.

## Assign Permissions to a Role

![Assign Role Permissions](/img/basedata/role-permission/role-permission-expand.png)

Follow these steps to assign permissions:

1. Open `Base Data Management > Roles Permissions`.
2. Select a role from the left-side list.
3. On the right side, expand a module such as `HR` or `BASE_DATA`.
4. Mark the checkboxes for the permission items the role should have.
5. Clear any checkbox that should not be available for that role.
6. Click **Submit** to save the permission setup.
7. Click **Cancel** to ignore the current changes.

### Permission Notes

- Selecting a module-level checkbox can provide access to the whole module.
- Expanding a module lets you control more specific permission items.
- Permission changes affect what users with that role can access in the application.

:::warning
Update role permissions carefully. Removing a required permission can block users from important screens or actions.
:::
