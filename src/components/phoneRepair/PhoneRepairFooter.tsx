import React from 'react';
import Icon from '@/components/ui/icon';

const PhoneRepairFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-8 mb-4">
          <a href="/" className="hover:text-gray-300">Главная</a>
          <a href="/repair" className="hover:text-gray-300">Общий ремонт</a>
          <a href="/catalog" className="hover:text-gray-300">Каталог</a>
          <a href="/3d-printing" className="hover:text-gray-300">3D печать</a>
        </div>
        <div className="text-gray-400">
          <p>© 2024 Enter14. Ремонт телефонов в Якутске</p>
          <a 
            href="https://2gis.ru/yakutsk/firm/70000001048030975" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm mt-2 inline-flex items-center space-x-2 hover:text-white transition-colors"
          >
            <Icon name="MapPin" size={16} />
            <span>г. Якутск, ул. П. Алексеева, 17</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PhoneRepairFooter;