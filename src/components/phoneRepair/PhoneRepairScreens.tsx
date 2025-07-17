import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const PhoneRepairScreens = () => {
  const screenPrices = [
    {
      brand: "iPhone",
      icon: "Smartphone",
      color: "bg-gray-800",
      models: [
        { name: "iPhone 14 Pro Max", glass: "4500₽", display: "8500₽", availability: "В наличии" },
        { name: "iPhone 14 Pro", glass: "4200₽", display: "7800₽", availability: "В наличии" },
        { name: "iPhone 14", glass: "3800₽", display: "6500₽", availability: "В наличии" },
        { name: "iPhone 13 Pro", glass: "3800₽", display: "6900₽", availability: "В наличии" },
        { name: "iPhone 13", glass: "3400₽", display: "5800₽", availability: "В наличии" },
        { name: "iPhone 12", glass: "3200₽", display: "5500₽", availability: "В наличии" },
        { name: "iPhone 11", glass: "2800₽", display: "4800₽", availability: "В наличии" },
        { name: "iPhone XR", glass: "2400₽", display: "4200₽", availability: "Под заказ" },
        { name: "iPhone X", glass: "2200₽", display: "3900₽", availability: "Под заказ" }
      ]
    },
    {
      brand: "Samsung",
      icon: "Smartphone",
      color: "bg-blue-600",
      models: [
        { name: "Galaxy S23 Ultra", glass: "3800₽", display: "7200₽", availability: "В наличии" },
        { name: "Galaxy S23+", glass: "3400₽", display: "6500₽", availability: "В наличии" },
        { name: "Galaxy S23", glass: "3200₽", display: "6100₽", availability: "В наличии" },
        { name: "Galaxy S22", glass: "2900₽", display: "5400₽", availability: "В наличии" },
        { name: "Galaxy A54", glass: "2200₽", display: "3800₽", availability: "В наличии" },
        { name: "Galaxy A34", glass: "1900₽", display: "3200₽", availability: "В наличии" },
        { name: "Galaxy A24", glass: "1600₽", display: "2800₽", availability: "Под заказ" },
        { name: "Galaxy A14", glass: "1400₽", display: "2500₽", availability: "В наличии" }
      ]
    },
    {
      brand: "Xiaomi",
      icon: "Smartphone", 
      color: "bg-orange-500",
      models: [
        { name: "Xiaomi 13 Pro", glass: "2800₽", display: "4900₽", availability: "В наличии" },
        { name: "Xiaomi 12", glass: "2400₽", display: "4200₽", availability: "В наличии" },
        { name: "Redmi Note 12 Pro", glass: "1800₽", display: "3200₽", availability: "В наличии" },
        { name: "Redmi Note 11", glass: "1500₽", display: "2600₽", availability: "В наличии" },
        { name: "Redmi 12C", glass: "1200₽", display: "2100₽", availability: "В наличии" },
        { name: "POCO X5 Pro", glass: "1600₽", display: "2900₽", availability: "Под заказ" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Цены на <span className="text-blue-600">экраны</span> телефонов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Оригинальные и качественные экраны для всех популярных моделей телефонов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenPrices.map((brand, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`${brand.color} p-3 rounded-lg`}>
                    <Icon name={brand.icon as any} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {brand.brand}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {brand.models.map((model, modelIndex) => (
                    <div key={modelIndex} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sm font-medium text-gray-900">
                          {model.name}
                        </h4>
                        <Badge 
                          variant={model.availability === "В наличии" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {model.availability}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Стекло:</span>
                          <span className="font-bold text-green-600">{model.glass}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Дисплей:</span>
                          <span className="font-bold text-blue-600">{model.display}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Icon name="Shield" className="text-blue-600 mr-3" size={24} />
                <h3 className="text-lg font-bold text-blue-800">Гарантия качества</h3>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Гарантия на экраны - 6 месяцев</li>
                <li>• Только оригинальные запчасти</li>
                <li>• Бесплатная диагностика при замене</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Icon name="Clock" className="text-green-600 mr-3" size={24} />
                <h3 className="text-lg font-bold text-green-800">Быстрый ремонт</h3>
              </div>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Замена экрана за 30-60 минут</li>
                <li>• Работаем без выходных</li>
                <li>• Доставка экранов под заказ 1-3 дня</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneRepairScreens;