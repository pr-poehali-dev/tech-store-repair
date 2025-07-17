import React from 'react';
import Icon from '@/components/ui/icon';

const PhoneRepairHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-blue-600">Enter14</a>
            <a href="/catalog" className="text-gray-700 hover:text-blue-600 font-medium">Компьютеры</a>
            <a href="/components" className="text-gray-700 hover:text-blue-600 font-medium">Комплектующие</a>
            <a href="/recycling" className="text-gray-700 hover:text-blue-600 font-medium">Выкуп техники</a>
            <a href="/3d-printing" className="text-gray-700 hover:text-blue-600 font-medium">3D печать</a>
            <a href="/repair" className="text-gray-700 hover:text-blue-600 font-medium">Ремонт</a>
            <a href="/phone-repair" className="text-blue-600 hover:text-blue-800 font-medium">Ремонт телефонов</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={18} className="text-blue-600" />
              <span className="text-gray-700 whitespace-nowrap">8 (924) 161-76-99</span>
            </div>
            <a href="https://wa.me/79241617699" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-green-600 hover:text-green-800">
              <Icon name="MessageCircle" size={16} />
              <span className="text-sm">WhatsApp</span>
            </a>
            <a href="https://t.me/+79241617699" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-blue-600 hover:text-blue-800">
              <Icon name="Send" size={16} />
              <span className="text-sm">Telegram</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default PhoneRepairHeader;