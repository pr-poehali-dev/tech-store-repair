import React from 'react';

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
          <p className="text-sm mt-2">г. Якутск, ул. П. Алексеева, 17</p>
        </div>
      </div>
    </footer>
  );
};

export default PhoneRepairFooter;