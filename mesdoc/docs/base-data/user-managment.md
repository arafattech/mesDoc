---
sidebar_position: 17
slug: /base-data/user-management
---

# User Management

The `User Management` page is used to create users, maintain user details, and assign one or more roles to each user.

## User List Page

![User List Page](/img/basedata/user-management/user-list.png)

Go to `Base Data Management > User Management` to open this page.

### Information Shown on This Page

- **Active**: Shows whether the user is active.
- **ID**: Displays the system-generated user ID.
- **Name**: Shows the user's full name.
- **Email**: Shows the login email address.
- **Roles**: Displays how many roles are assigned to the user.
- **Created On**: Shows the user creation date.
- **Actions**: Provides options to edit or delete a user.

### Top Controls

- **Search**: Finds a user by name, ID, or email.
- **New**: Opens the form to create a new user.
- **All**: Shows all users.
- **Active**: Shows only active users.
- **Inactive**: Shows only inactive users.

## Create a New User

![Create New User](/img/basedata/user-management/user-create-new.png)

Follow these steps to add a new user:

1. Go to `Base Data Management > User Management`.
2. Click the **New** button.
3. In the **Core Data** tab, keep the **Active** toggle on if the user should be active.
4. Enter the user's name in the **Name** field.
5. Enter the user's email address in the **Email** field.
6. Enter a password in the **Password** field.
7. Open the **Roles** tab to assign one or more roles.
8. Click **Submit** to save the user.
9. Click **Cancel** if you do not want to continue.

### Core Data Fields

- **Active**: Saves the user as active or inactive.
- **Name**: The display name of the user. This field is required.
- **Email**: The login email for the user. This field is required.
- **Password**: The password used for first-time login or reset. This field is required when creating a user.

## Assign Roles While Creating a User

![Assign Role to New User](/img/basedata/user-management/user-create-role.png)

Use the **Roles** tab to assign roles to a new user:

1. Open the **Roles** tab inside the user form.
2. Click **Associate**.
3. Search for the required role if needed.
4. Select one or more roles from the list.
5. Click **Submit** in the associate popup.
6. Click **Submit** again in the main user form to save the user with assigned roles.

### Role Assignment Options

- **Select All**: Selects every available role in the popup.
- **Deselect All**: Clears all selected roles.
- **Enter search**: Filters the role list to help find a specific role.

## Edit User Core Data

![Edit User Core Data](/img/basedata/user-management/user-edit-core-data.png)

Follow these steps to update user information:

1. Find the required user from the list.
2. Click the **Edit** icon in the **Actions** column.
3. Update **Active**, **Name**, **Email**, or **Password** in the **Core Data** tab.
4. Click **Submit** to save the changes.
5. Click **Cancel** to discard the changes.

## Edit Assigned Roles

![Edit User Role](/img/basedata/user-management/user-edit-role.png)

Follow these steps to change a user's assigned roles:

1. Open the user in edit mode.
2. Go to the **Roles** tab.
3. Click **Associate** to open the role selection popup.
4. Select or clear roles as needed.
5. Click **Submit** in the popup.
6. Click **Submit** in the main form to save the updated role assignment.

:::tip
Assign roles based on job responsibility so users only see the menus and actions they need.
:::
