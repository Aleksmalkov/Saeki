import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_ORDER } from '../graphql/orderMutations';
import ConfirmationModal from '../components/ConfirmationModal';
import CustomSelect from '../components/CustomSelect';

const cardTypes = [
  { id: 'visa', name: 'Visa', iconUrl: require('../assets/images/visa.png') },
  { id: 'mastercard', name: 'MasterCard', iconUrl: require('../assets/images/mastercard.png') },
  { id: 'amex', name: 'American Express', iconUrl: require('../assets/images/amex.png') }
];

const OrderFormPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [purchaseOrder, setPurchaseOrder] = useState<File | null>(null);
  const [selectedCardType, setSelectedCardType] = useState(cardTypes[0].id);
  const [showModal, setShowModal] = useState(false);
  const [fileUrl, setFileUrl] = useState(localStorage.getItem('uploadedFile') || ''); // Ensure file is required for ordering
  const [material, setMaterial] = useState('pylon');
  const [isFormValid, setIsFormValid] = useState(false); // State for button enabled status
  const [createOrder, { loading, error }] = useMutation(CREATE_ORDER, {
    context: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,  // Attach token
      },
    },
  });
  const navigate = useNavigate();

  // useEffect to validate form fields and enable/disable the submit button
  useEffect(() => {
    const isCardValid = paymentMethod === 'card' ? cardNumber.length === 16 : true;
    const isPurchaseOrderValid = paymentMethod === 'purchaseOrder' ? !!purchaseOrder : true;
    const isFileUploaded = !!fileUrl;

    setIsFormValid(!!name && !!email && isCardValid && isPurchaseOrderValid && isFileUploaded);
  }, [name, email, cardNumber, paymentMethod, purchaseOrder, fileUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (paymentMethod === 'card' && (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber))) {
      alert("Please enter a valid 16-digit card number.");
      return;
    }

    if (paymentMethod === 'purchaseOrder' && !purchaseOrder) {
      alert("Please upload a purchase order file.");
      return;
    }

    setShowModal(true);
  };

  const handlePurchaseOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    setPurchaseOrder(selectedFile || null);
  };

  const handleConfirm = async () => {
    console.log({ name, email, company });
    try {
      const response = await createOrder({
        variables: {
          input: {
            name,
            email,
            company,
            cardNumber,
            cardType: selectedCardType,
            purchaseOrder: purchaseOrder ? purchaseOrder.name : null,
            fileUrl,
            material
          },
        },
      });
      console.log(response);
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
    navigate('/order-confirmation');
  };

  return (
    <div className="flex justify-center container max-w-screen-xl mx-auto pt-24 text-white" style={{ height: 'calc(100vh - 57px)' }}>
      <div className='max-w-screen-sm'>
        <h2 className="text-3xl font-bold mb-6">Complete Your Order</h2>
        <p className="text-gray-400 mb-4">Review and confirm your details below to place the order.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full p-3 mb-4 border border-gray-600 rounded-lg bg-transparent"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="w-full p-3 mb-4 border border-gray-600 rounded-lg bg-transparent"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            className="w-full p-3 mb-4 border border-gray-600 rounded-lg bg-transparent"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />

          {/* Uploaded File Information */}
          {fileUrl ? (
            <div className="bg-gray-800 p-3 rounded-lg mb-4">
              <p className="text-lg">Uploaded File: {fileUrl}</p>
            </div>
          ) : (
            <p className="text-red-500">No file uploaded</p>
          )}

          {/* Payment Method Selection */}
          <div className="mb-4">
            <label className="block text-lg font-bold mb-2">Select Payment Method:</label>
            <div className="flex gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                />
                <span>Pay via Card</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="purchaseOrder"
                  checked={paymentMethod === 'purchaseOrder'}
                  onChange={() => setPaymentMethod('purchaseOrder')}
                />
                <span>Upload Purchase Order</span>
              </label>
            </div>
          </div>

          {/* Card Type and Card Number Input */}
          {paymentMethod === 'card' && (
            <div className="mb-4">
              <CustomSelect
                options={cardTypes}
                label="Card Type"
                defaultSelect="Select Card Type"
                onSelectOption={setSelectedCardType}
              />

              <label className="block text-lg font-bold mb-2">Card Number:</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-600 rounded-lg bg-transparent"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => {
                  const onlyDigits = e.target.value.replace(/\D/g, ''); // Only digits
                  setCardNumber(onlyDigits);
                }}
                maxLength={16}
                required={paymentMethod === 'card'}
              />
            </div>
          )}

          {/* Upload Purchase Order Option */}
          {paymentMethod === 'purchaseOrder' && (
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2">Upload Purchase Order:</label>
              <input
                type="file"
                accept=".pdf,.docx"
                onChange={handlePurchaseOrderChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 mt-4 font-semibold rounded-full text-white ${isFormValid ? 'bg-green-600' : 'bg-gray-500 cursor-not-allowed'}`}
            disabled={!isFormValid}
          >
            Place Order
          </button>
        </form>

        {/* Confirmation Modal */}
        <ConfirmationModal
          showModal={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirm}
        />
      </div>
    </div>
  );
};

export default OrderFormPage;
