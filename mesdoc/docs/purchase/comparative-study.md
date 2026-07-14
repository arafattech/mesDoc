---
sidebar_position: 4
description: Comparative Study
---

# Comparative Study

The **Comparative Study** module is a decision-support tool that allows procurement officers to compare quotes received from multiple suppliers side-by-side. This helps ensure that the company selects the vendor with the best pricing, delivery times, and compliance terms before committing to a purchase.

---

## 1. Comparative Study Interface
When you open the **Comparative Study** module, the screen is split into two primary sections:
1.  **Requisition List (Left Panel)**: Displays a list of all active indent requisitions (e.g., `BTL-Indent-000019`) that have received quotations. Selecting a requisition updates the main panel with its corresponding supplier quotations.
2.  **Quotations Comparison (Main Panel)**: Displays a tabulated view of all quotations submitted by invited suppliers for the selected requisition.

### Comparative Study Table Columns
The main comparison grid includes:
*   **RFQ Code**: The Request for Quotation code associated with the bid.
*   **Supplier Name**: The name of the bidding supplier.
*   **Total Amount**: The total cost quoted by the supplier.
*   **Status**: Indicates whether the quotation is pending review, accepted, or rejected.
*   **Actions**:
    *   **View (Eye Icon)**: Opens the side-by-side item rate breakdown.
    *   **Create PO (Plus Icon)**: Converts the selected supplier quotation into a Purchase Order.

![Comparative List](/img/purchase/comparative-study/comparative-list.png)

---

## 2. Comparing Quotations Side-by-Side
To view the detailed cost comparison for items:
1. Select an indent requisition from the left panel.
2. Click the **View** icon on any supplier's row, or select multiple suppliers to view side-by-side.
3. The comparison grid displays each requested item, the required quantity, and the unit rate and total cost quoted by each supplier.
4. The system highlights the lowest quoted prices to assist in rapid decision-making.

---

## 3. Creating a Purchase Order (PO)
Once the optimal vendor quote is selected:
1. Click the **Create PO** (plus icon) next to the selected supplier quotation.
2. The system will open a modal populated with the items, quantities, prices, and vendor details from the chosen quotation.
3. Verify the details, set delivery conditions, and click **Confirm** or **Save** to officially generate the Purchase Order.

![Create PO](/img/purchase/comparative-study/comparative-create-po.png)
