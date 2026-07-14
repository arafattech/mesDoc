---
sidebar_position: 2
description: SPR Requests
---

# Store Purchase Requisition (SPR) Requests

The **Store Purchase Requisition (SPR)** (also referred to as Indent Requests) module enables departments to request goods, parts, or services from the central warehouse or store. It tracks the entire lifecycle of a requisition from draft/pending status through manager approval or rejection.

---

## 1. Overview of Requisitions List
The main page organizes all indent and purchase requests under status tabs, allowing managers and store officers to view, evaluate, and action them.

The requisitions list features a data grid with the following columns:
*   **Requisition Code / Indent Code**: Unique alphanumeric identifier (e.g., `BTL-Indent-000019`).
*   **Department Name**: The department requesting the materials (e.g., Store, HR, Production).
*   **Date**: The date when the requisition was raised.
*   **Status**: Indicates whether the requisition is *Approved*, *Rejected*, *Pending*, or *In Progress*.
*   **Actions**: Operations available on each record, such as viewing specific item breakdowns.

---

## 2. Approved SPR Requests
Approved requests are requisitions that have successfully passed the verification and approval stages by department heads and inventory managers. Once approved, these requisitions are ready for RFQ (Request For Quotation) creation or stock allocation.

### Viewing Approved Requests
1. Navigate to **Purchase Management** > **Indent Requests** (or **SPR Requests**).
2. Select the **Approved** tab.
3. A list of all approved requisitions will be shown.

![Approved SPR Requests](/img/purchase/spr-requests/spr-requests-approved.png)

### Viewing Approved Item Details
To inspect the specific quantities and items inside an approved requisition:
1. Click the view action button (eye icon) next to any approved requisition.
2. A slide-out/modal drawer will appear showing:
   *   **Item Name / Description**: The name of the item.
   *   **Item Code**: The unique code of the item.
   *   **Quantity**: The number of units requested and approved.
   *   **Status**: Approved.

![Approved Item Details](/img/purchase/spr-requests/spr-requests-approved-item.png)

---

## 3. Rejected SPR Requests
Rejected requests are requisitions that were denied during the review process (e.g., due to budget constraints, wrong specifications, or existing warehouse stock availability).

### Reviewing Rejected Requests
1. Select the **Rejected** tab on the SPR Requests dashboard.
2. The list will display all requisitions that were denied.

![Rejected SPR Requests](/img/purchase/spr-requests/spr-requests-rejected.png)

### Viewing Rejection Details
To view details and remarks for a rejected requisition:
1. Click the view icon next to a rejected record.
2. Review the list of items requested and the reasons for rejection (if any).

![Rejected Item View](/img/purchase/spr-requests/spr-requests-rejected-view.png)
