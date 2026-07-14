---
sidebar_position: 6
description: Supplier List
---

# Supplier List

The **Supplier List** (or Vendor List) module is used to maintain a registry of all external suppliers, manufacturers, and service providers. This directory stores essential communication, cash transaction details, and bank account information required for purchase orders and invoicing.

---

## 1. Supplier List Interface
To view your suppliers, navigate to **Purchase Management** > **Supplier List** (or **Vendor List**).

The supplier registry is presented as a data grid with the following columns:
*   **Supplier Code**: The unique code identifying the vendor (e.g., `SUPP-000001`).
*   **Supplier Name**: The registered legal name of the vendor.
*   **Email**: The primary contact email address.
*   **Phone**: The primary phone number.
*   **Contact Person**: The designated representative or point of contact at the supplier.
*   **Actions**:
    *   **Edit (Pencil Icon)**: Opens the supplier form with pre-populated fields to modify details.
    *   **Delete (Trash Icon)**: Removes the vendor from the registry.

![Supplier List](/img/purchase/supplier-list/supplier-list.png)

---

## 2. Registering a New Supplier
To register a new supplier, click the **New** button at the top right of the page. This opens the **Add Supplier** modal which is divided into three key tabs:

### A. Core Data Tab
This tab contains the primary identity and contact details of the supplier:
*   **Supplier Name**: (Required) Enter the company name.
*   **Code**: Optional or auto-generated vendor identification code.
*   **Contact Person**: Name of the supplier's contact person.
*   **Designation**: Job title of the contact person.
*   **Email**: Email address for purchase orders and correspondence.
*   **Phone / Mobile**: Active contact numbers.
*   **Address**: Billing/postal address of the supplier.

### B. Cash Info Tab
This section manages credit limits, transaction limits, payment terms, and currency settings:
*   Add currency options, credit ceilings, and credit periods.
*   Configure allowed billing terms for the supplier.

### C. Bank Info Tab
This section records the bank account details of the supplier to process electronic fund transfers (EFT) and wire payments:
*   **Account Name**: The name registered on the bank account.
*   **Account Number / IBAN**: The bank account number.
*   **Bank Name**: The name of the bank (e.g., Prime Bank, City Bank).
*   **Branch Name**: The specific bank branch location.
*   **Swift Code / Routing Number**: Needed for international or local clearing networks.

Click **Save** or **Confirm** inside the form to save the supplier entry.
