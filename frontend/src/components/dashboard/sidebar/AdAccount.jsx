import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../../context/AuthContext';
import { ConnectionStatus } from '../../adaccount/ConnectionStatus';
import { ConnectForm } from '../../adaccount/ConnectForm';
import { UnlockFeatures } from '../../adaccount/UnlockFeatures';
import { MetaApprovalBanner } from '../../adaccount/MetaApprovalBanner';

function AdAccount() {
  const { user, refetchUser } = useAuth();
  const [adAccountId, setAdAccountId] = useState(user?.adAccountId || '');

  const handleSaved = async (newId) => {
    setAdAccountId(newId);
    await refetchUser();
  };

  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide mb-1">
          Ad Account
        </h1>
        <p className="text-xs text-gray-500 tracking-widest uppercase font-bold">
          Connect your Meta Ad Account to unlock full automation.
        </p>
      </motion.div>

      <div className="flex flex-col gap-4 max-w-2xl">

        {/* Meta Approval Banner — always visible */}
        <MetaApprovalBanner />

        {/* Connection Status */}
        <ConnectionStatus adAccountId={adAccountId} />

        {/* Connect / Update Form */}
        <ConnectForm
          currentId={adAccountId}
          onSaved={handleSaved}
        />

        {/* Unlock Features — show only if not connected */}
        {!adAccountId && <UnlockFeatures />}

      </div>
    </>
  );
}

export default AdAccount;