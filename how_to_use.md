# ReturnShield: Comprehensive User Guide

ReturnShield is an end-to-end Return Fraud Protection platform designed to protect small e-commerce sellers from fraudulent return claims (empty boxes, brick replacements, used items) on platforms like Amazon, Flipkart, Myntra, and Meesho.

Here is a step-by-step guide on how the system works across the three primary user roles.

---

## 1. The Seller Role
**Objective:** Secure proof of dispatch condition to dispute fraudulent returns easily.

### Step 1: Pre-Shipment Proof Recording
- **Navigate to:** `Pre-Shipment Proof` in the dashboard.
- **Action:** Before sealing the package, the seller clicks **Start 30s Recording**.
- **Process:** The camera opens and the seller scans the shipping label, then demonstrates the product is in pristine condition inside the box.
- **Result:** The video features are analyzed, hashed, and immediately stored on a tamper-proof Polygon blockchain ledger.

### Step 2: Monitoring the Dashboard
- **Navigate to:** `Dashboard`.
- **Action:** Keep track of "Total Returns", "Protection Score", and view "Recent Return Verifications" coming from the delivery network in real-time.

### Step 3: Managing Disputes
- **Navigate to:** `Dispute Dashboard`.
- **Action:** If an item is flagged as Fraud, the seller can click **Push Evidence to Platform** to automatically package the blockchain video and AI discrepancies directly to the marketplace's dispute center, eliminating manual email threads.

---

## 2. The Delivery Agent Role (Buyer Side)
**Objective:** Ensure the package physically handed over by the customer matches the product initially dispatched, *before* issuing a refund.

### Step 1: Package Lookup
- **Navigate to:** `Agent Scan (Delivery)`.
- **Action:** The delivery agent enters or scans the Order ID/Tracking Barcode presented by the buyer.

### Step 2: On-Site Photography
- **Action:** The agent clicks **Capture Camera** and takes images of the returned product and the outer packaging box right at the customer's doorstep.

### Step 3: Instant AI Verification
- **Process:** The AI matches the live camera feed attributes against the seller's Pre-Shipment Blockchain hash.
- **Result:**
  - **Match:** The agent sees `VALID_RETURN_PICKUP`. They accept the parcel and the refund process continues.
  - **Mismatch (e.g., Brick/Different Item):** The agent sees `BUYER_FRAUD_DETECTED`. The app instructs them: *Refund Blocked. Do not accept item.* The fraud is caught at the source.

---

## 3. The Warehouse / Platform Role
**Objective:** Identify if tampering occurred during transit or after the delivery network accepted proper goods.

### Step 1: Receiving the Return Box
- **Action:** Warehouse staff scan the inbound return box using the same AI verification engine.
- **Process:** The system compares the Warehouse scan data against the **Delivery Agent's scan data**.
- **Result:**
  - If the agent scanned a real product, but the warehouse receives an empty box, ReturnShield automatically assigns the fraud liability to **Transit / Logistics** (Carrier Fraud).
  - The seller is protected, and the marketplace compensates the seller directly without punishing the buyer.
  - **In the event of a Genuine Return (All Scans Match):** The platform's automated reverse-charge is blocked. The dashboard marks the item as 'Verified Genuine', and **only the Seller can click "Initiate Refund"**, giving MSMEs absolute financial control over their reverse logistics.

---

## Bonus: Community Blacklist Module
- **Navigate to:** `Community Blacklist`.
- **Action:** Sellers can browse a shared, anonymized ledger of repeat fraudulent buyers. 
- Sellers can click **Block Orders** to automatically reject future checkout carts from known offenders or trigger an **Alert On Shipment** to enforce stricter manual reviews before dispatch.
