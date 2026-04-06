import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Mock DB Storage
const preShipmentProof = new Map();
const returnScans = new Map();

// --- API ROUTES ---

// 1. Seller uploads pre-shipment proof (Pre-Shipment Video)
app.post('/api/shipment-proof', (req, res) => {
  const { orderId, sellerId, videoHash, metadata } = req.body;
  if (!orderId || !videoHash) {
    return res.status(400).json({ error: 'orderId and videoHash are required' });
  }

  // Store proof acting as our DB/Blockchain mock
  preShipmentProof.set(orderId, {
    sellerId,
    videoHash,
    metadata,
    status: 'RECORDED',
    timestamp: new Date()
  });

  res.json({ success: true, message: 'Shipment proof recorded on blockchain', hash: videoHash });
});

// 2. Delivery Agent scans product on return pickup (Buyer Location)
app.post('/api/return-pickup-scan', (req, res) => {
  const { orderId, capturedFeatures } = req.body;
  const shipmentData = preShipmentProof.get(orderId);

  if (!shipmentData) {
    return res.status(404).json({ error: 'Original shipment proof not found' });
  }

  // Simulate AI matching extracted features against pre-shipment data
  // Using simplified logic for demonstration: match score logic based on captured mock features
  const matchScore = (capturedFeatures.anomalyScore || 0); // lower is better
  
  if (matchScore > 50) {
    // High anomaly means Buyer Fraud
    return res.json({
      fraudSource: 'BUYER',
      action: 'BLOCK_REFUND',
      matchScore: 100 - matchScore,
      message: 'Product does not match shipment. Buyer fraud detected.'
    });
  }

  // If match is good, store pickup verification
  returnScans.set(orderId, {
    pickupFeatures: capturedFeatures,
    pickupTimestamp: new Date()
  });

  res.json({
    fraudSource: 'NONE',
    action: 'PROCEED_RETURN',
    matchScore: 100 - matchScore,
    message: 'Pickup verified. Package accepted.'
  });
});

// 3. Warehouse Verification (Final Check)
app.post('/api/warehouse-scan', (req, res) => {
  const { orderId, warehouseFeatures } = req.body;
  const pickupData = returnScans.get(orderId);
  const shipmentData = preShipmentProof.get(orderId);

  if (!shipmentData || !pickupData) {
    return res.status(400).json({ error: 'Missing shipment or pickup scan data' });
  }

  // Rule engine logic inside warehouse
  const isMatchWithPickup = (warehouseFeatures.anomalyScore || 0) < 50; 
  
  if (!isMatchWithPickup) {
    // If it doesn't match the pickup scan, something happened in transit
    return res.json({
      fraudSource: 'TRANSIT_OR_WAREHOUSE',
      action: 'PLATFORM_COMPENSATES',
      message: 'Mismatch between pickup and warehouse. Transit tampered.'
    });
  }

  return res.json({
    fraudSource: 'NONE',
    action: 'REFUND_APPROVED',
    message: 'Valid Return Verified.'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`ReturnShield API Server running on port ${PORT}`);
});
