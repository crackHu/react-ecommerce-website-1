// Vercel Serverless Function: /api/payment

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const paymentDetails = req.body;
      // 模拟支付处理
      const paymentResult = {
        success: true,
        message: 'Payment processed successfully',
        details: paymentDetails,
      };
      res.status(200).json(paymentResult);
    } catch (error) {
      res.status(500).json({ success: false, message: 'Payment processing failed', error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
