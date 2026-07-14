---
sidebar_position: 3
description: RFQ
---

# Request For Quotation (RFQ)

The **Request for Quotation (RFQ)** module allows procurement teams to invite suppliers to bid on specific items or services. By creating an RFQ linked to an approved Store Purchase Requisition (SPR), the system streamlines vendor coordination and ensures accurate price comparisons.

---

## 1. RFQ List Page
The main RFQ page displays all active and historic requests for quotation.

The RFQ table includes the following columns:
*   **RFQ Code**: The unique code generated for the RFQ (e.g., `RFQ-000014`).
*   **Indent Code**: The originating Store Purchase Requisition (SPR) code.
*   **Title/Name**: A descriptive name given to the RFQ.
*   **Status**: Current status of the RFQ (e.g., *Draft*, *Sent*, *Comparison Ready*, *Closed*).
*   **Actions**: Management buttons to view details, edit draft RFQs, or send them to suppliers.

![RFQ List](/img/purchase/rfq/rfq-list.png)

---

## 2. Creating a New RFQ
To create a new RFQ:
1. Click the **New** or **Add New** button at the top right of the RFQ list page.
2. In the creation form/modal, configure the following fields:
   *   **Indent Requisition**: Select from the list of approved SPRs. Choosing an indent requisition will auto-populate the items to be quoted.
   *   **RFQ Title**: Enter a clear name for the request.
   *   **Suppliers**: Select one or more vendors/suppliers from the dropdown who should receive the quotation request.
3. Click **Save** to create the RFQ as a draft or **Submit** to finalize it.

![Add RFQ](/img/purchase/rfq/rfq-add.png)

---

## 3. Viewing RFQ Details
To view details of a specific RFQ:
1. Click the **View** button (eye icon) on the RFQ list table.
2. The details modal displays:
   *   **Header Information**: RFQ Code, linked Indent Code, date created, and author.
   *   **Associated Items**: A table showing item names, codes, requested quantities, and units of measure.
   *   **Supplier Invites**: A list of suppliers invited to submit quotes for this RFQ.

![RFQ List View](/img/purchase/rfq/rfq-list-view.png)
