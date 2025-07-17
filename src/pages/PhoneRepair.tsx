import React, { useState } from 'react';
import PhoneRepairHeader from '@/components/phoneRepair/PhoneRepairHeader';
import PhoneRepairHero from '@/components/phoneRepair/PhoneRepairHero';
import PhoneRepairFeatures from '@/components/phoneRepair/PhoneRepairFeatures';
import PhoneRepairServices from '@/components/phoneRepair/PhoneRepairServices';
import PhoneRepairScreens from '@/components/phoneRepair/PhoneRepairScreens';
import PhoneRepairInfo from '@/components/phoneRepair/PhoneRepairInfo';
import PhoneRepairContact from '@/components/phoneRepair/PhoneRepairContact';
import PhoneRepairFooter from '@/components/phoneRepair/PhoneRepairFooter';
import RepairCalculator from '@/components/repair/RepairCalculator';

const PhoneRepair = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <PhoneRepairHeader />
      <PhoneRepairHero onCalculatorOpen={() => setIsCalculatorOpen(true)} />
      <PhoneRepairFeatures />
      <PhoneRepairServices />
      <PhoneRepairScreens />
      <PhoneRepairInfo />
      <PhoneRepairContact />
      <PhoneRepairFooter />

      {/* Calculator Modal */}
      <RepairCalculator 
        isOpen={isCalculatorOpen} 
        onClose={() => setIsCalculatorOpen(false)} 
      />
    </div>
  );
};

export default PhoneRepair;