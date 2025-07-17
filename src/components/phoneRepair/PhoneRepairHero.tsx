import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface PhoneRepairHeroProps {
  onCalculatorOpen: () => void;
}

const PhoneRepairHero: React.FC<PhoneRepairHeroProps> = ({ onCalculatorOpen }) => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Ремонт <span className="text-yellow-400">телефонов</span> в Якутске
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Профессиональный ремонт iPhone, Samsung, Xiaomi и других марок. 
          Замена экранов, батарей, разъемов. Гарантия на все виды работ.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold" onClick={() => window.open('tel:89241617699')}>
            <Icon name="Phone" size={20} className="mr-2" />
            Записаться на ремонт
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" onClick={onCalculatorOpen}>
            <Icon name="Calculator" size={20} className="mr-2" />
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PhoneRepairHero;