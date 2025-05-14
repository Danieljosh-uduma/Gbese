import React, { useRef, useState } from 'react';
import {
  VectorIcon,
  CloseCircle,
  ScreenShotIcon,
  ReceiptIcon,
  MaximizeIcon
} from '../../../components/icons/Icon';
import './TransactionDetails.css';

interface Transaction {
  type: string;
  amount: string;
  date: string;
  recipient: string;
  status: string;
  purpose?: string;
  transferId?: string;
  debtSource?: string;
  incentive?: string;
  note?: string;
}

interface TransferDetailsModalProps {
  onClose: () => void;
  transaction: Transaction;
}

function TransferDetailsModal({ onClose, transaction }: TransferDetailsModalProps) {
  const [uploadedScreenshot, setUploadedScreenshot] = useState<string | null>(null);
  const [uploadedReceipt, setUploadedReceipt] = useState<string | null>(null);
  const [previewFile, setPreviewFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const currentUploadType = useRef<'screenshot' | 'receipt' | null>(null);

  const handleUploadClick = (type: 'screenshot' | 'receipt') => {
    currentUploadType.current = type;
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (currentUploadType.current === 'screenshot') {
        setUploadedScreenshot(reader.result as string);
      } else if (currentUploadType.current === 'receipt') {
        setUploadedReceipt(reader.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handlePreview = (type: 'screenshot' | 'receipt') => {
    const file = type === 'screenshot' ? uploadedScreenshot : uploadedReceipt;
    if (file) {
      setPreviewFile(file);
    }
  };

  const closePreview = () => setPreviewFile(null);

  return (
    <div className="modal-overlay">
      <div className="transfer-modal">
        <div className="modal-header">
          <div onClick={onClose} className="icon-button">
            <VectorIcon className="back-icons" />
          </div>
          <h2 className="modal-title">Transfer Details</h2>
          <div onClick={onClose} className="icon-button">
            <CloseCircle className="close-icon" />
          </div>
        </div>

        <p className="modal-date">{transaction.date}</p>

        <div className="info-grid">
          {[
            ['Recipient', transaction.recipient],
            ['Amount', transaction.amount],
            ['Purpose', transaction.purpose || '—'],
            ['Transfer ID', transaction.transferId || 'TR-XXXXX'],
            ['Debt Source', transaction.debtSource || '—'],
            ['Status', (
              <span className={`value status ${transaction.status.toLowerCase()}`}>
                {transaction.status}
              </span>
            )],
            ['Incentive', transaction.incentive || '—']
          ].map(([label, value], i) => (
            <div className="info-row" key={i}>
              <span className="labels">{label}:</span>
              <span className="value">{value}</span>
            </div>
          ))}
        </div>

        <div className="note-section">
          <strong>Note:</strong>
          <p>{transaction.note || "No additional notes."}</p>
        </div>

        <div className="uploads-section">
          <strong>Uploads</strong>

          <div className="upload-item" onClick={() => handleUploadClick('screenshot')}>
            <div className="upload-left">
              <ScreenShotIcon className="file-icon" />
              <span>{uploadedScreenshot ? 'Screenshot Uploaded' : 'Upload Screenshot'}</span>
            </div>
            <div className="upload-actions">
             <div className="action-icon" onClick={(e) => {
             e.stopPropagation();
              handlePreview('screenshot');
            }}>
  <MaximizeIcon />
</div>
 <span className="dots">⋮</span>
            </div>
          </div>

          <div className="upload-item" onClick={() => handleUploadClick('receipt')}>
            <div className="upload-left">
              <ReceiptIcon className="file-icon" />
              <span>{uploadedReceipt ? 'Receipt Uploaded' : 'Upload Receipt'}</span>
            </div>
            <div className="upload-actions">
            <div className="action-icon" onClick={(e) => {
             e.stopPropagation();
             handlePreview('screenshot');
           }}>
  <MaximizeIcon />
</div>
  <span className="dots">⋮</span>
            </div>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,application/pdf"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

        <div className="modal-buttons">
          <button className="legal-button">Legal Agreement</button>
          <div className="action-buttons">
            <button className="delete-button">Delete</button>
            <button className="reschedule-button">Reschedule</button>
          </div>
        </div>
      </div>

      {previewFile && (
        <div className="modal-overlay" onClick={closePreview}>
          <div className="transfer-modal">
            <span onClick={closePreview} style={{ cursor: 'pointer', textAlign: 'right' }}>Close</span>
            {previewFile.endsWith('.pdf') ? (
              <embed src={previewFile} width="100%" height="400px" />
            ) : (
              <img src={previewFile} alt="Preview" style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TransferDetailsModal;
