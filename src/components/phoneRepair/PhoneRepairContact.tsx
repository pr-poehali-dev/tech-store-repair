import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const PhoneRepairContact = () => {
  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Записаться на ремонт</h2>
        <p className="text-green-100 mb-8 text-lg">
          Свяжитесь с нами удобным способом для консультации и записи
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Phone" size={24} />
            <span className="text-xl font-semibold">8 (924) 161-76-99</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={20} />
            <span>Пн-Вс: 9:00-20:00</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://wa.me/79241617699" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-green-500 hover:bg-green-400 px-4 py-2 rounded-lg transition-colors">
              <Icon name="MessageCircle" size={20} />
              <span>WhatsApp</span>
            </a>
            <a href="https://t.me/+79241617699" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-lg transition-colors">
              <Icon name="Send" size={20} />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneRepairContact;