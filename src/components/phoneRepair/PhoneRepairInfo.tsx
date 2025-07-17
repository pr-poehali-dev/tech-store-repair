import React from 'react';
import Icon from '@/components/ui/icon';

const PhoneRepairInfo = () => {
  return (
    <section className="py-12 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Icon name="AlertTriangle" size={20} className="text-yellow-600 mr-2" />
              Важная информация
            </h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Диагностика входит в стоимость ремонта</li>
              <li>• Цены указаны без учета стоимости запчастей</li>
              <li>• Сроки ремонта зависят от наличия деталей</li>
              <li>• При отказе от ремонта диагностика 300₽</li>
              <li>• Гарантия не покрывает механические повреждения</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
              <Icon name="CheckCircle" size={20} className="text-green-600 mr-2" />
              Наши преимущества
            </h3>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>• Работаем с 2018 года</li>
              <li>• Более 3000 отремонтированных телефонов</li>
              <li>• Используем только качественные запчасти</li>
              <li>• Бесплатная предварительная диагностика</li>
              <li>• Работаем без выходных</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneRepairInfo;