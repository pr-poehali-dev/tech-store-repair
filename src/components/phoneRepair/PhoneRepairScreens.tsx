import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const PhoneRepairScreens = () => {
  const screenPrices = [
    {
      brand: "iPhone (новые)",
      icon: "Smartphone",
      color: "bg-gray-800",
      models: [
        { name: "iPhone 16 Pro Max", original: "33000₽", copy: "", battery: "3500₽", rear_glass: "2800₽", availability: "В наличии" },
        { name: "iPhone 16 Pro", original: "29000₽", copy: "15000₽", battery: "3500₽", rear_glass: "2800₽", availability: "В наличии" },
        { name: "iPhone 16", original: "28000₽", copy: "", battery: "2500₽", rear_glass: "2400₽", availability: "В наличии" },
        { name: "iPhone 15+", original: "14000₽", copy: "", battery: "2500₽", rear_glass: "1500₽", availability: "В наличии" },
        { name: "iPhone 15 Pro Max", original: "30000₽", copy: "15000₽", battery: "4500₽", rear_glass: "1800₽", availability: "В наличии" },
        { name: "iPhone 15 Pro", original: "29000₽", copy: "12000₽", battery: "4500₽", rear_glass: "1800₽", availability: "В наличии" },
        { name: "iPhone 15", original: "", copy: "8000₽", battery: "3200₽", rear_glass: "1400₽", availability: "В наличии" },
        { name: "iPhone 14 Plus", original: "14000₽", copy: "8500₽", battery: "2500₽", rear_glass: "900₽", availability: "В наличии" },
        { name: "iPhone 14 Pro Max", original: "", copy: "12000₽", battery: "5500₽", rear_glass: "900₽", availability: "В наличии" }
      ]
    },
    {
      brand: "iPhone (средние)",
      icon: "Smartphone",
      color: "bg-gray-700",
      models: [
        { name: "iPhone 14 Pro", original: "20000₽", copy: "10000₽", battery: "5000₽", rear_glass: "900₽", availability: "В наличии" },
        { name: "iPhone 14", original: "12000₽", copy: "3000₽", battery: "2500₽", rear_glass: "900₽", availability: "В наличии" },
        { name: "iPhone 13 Pro Max", original: "13500₽", copy: "6500₽", battery: "5000₽", rear_glass: "900₽", availability: "В наличии" },
        { name: "iPhone 13 Pro", original: "18000₽", copy: "5500₽", battery: "5000₽", rear_glass: "800₽", availability: "В наличии" },
        { name: "iPhone 13 mini", original: "10500₽", copy: "3600₽", battery: "4000₽", rear_glass: "600₽", availability: "В наличии" },
        { name: "iPhone 13", original: "10000₽", copy: "2500₽", battery: "4500₽", rear_glass: "600₽", availability: "В наличии" },
        { name: "iPhone 12 Pro Max", original: "12000₽", copy: "2500₽", battery: "4500₽", rear_glass: "700₽", availability: "В наличии" },
        { name: "iPhone 12/12 Pro", original: "", copy: "2200₽", battery: "3000₽/4000₽", rear_glass: "600₽", availability: "В наличии" },
        { name: "iPhone 12 mini", original: "10000₽", copy: "3000₽", battery: "4000₽", rear_glass: "500₽", availability: "В наличии" }
      ]
    },
    {
      brand: "iPhone (старые)",
      icon: "Smartphone",
      color: "bg-gray-600",
      models: [
        { name: "iPhone 11 Pro Max", original: "6500₽", copy: "2500₽", battery: "4500₽", rear_glass: "500₽", availability: "В наличии" },
        { name: "iPhone 11 Pro", original: "5500₽", copy: "2000₽", battery: "4000₽", rear_glass: "400₽", availability: "В наличии" },
        { name: "iPhone 11", original: "2300-2500₽", copy: "1600₽", battery: "2500₽", rear_glass: "400₽", availability: "В наличии" },
        { name: "iPhone XS Max", original: "8000₽", copy: "2000₽", battery: "2800₽", rear_glass: "400₽", availability: "В наличии" },
        { name: "iPhone XS", original: "5000₽", copy: "1800₽", battery: "2500₽", rear_glass: "300₽", availability: "В наличии" },
        { name: "iPhone X", original: "2600-4300₽", copy: "1800₽", battery: "2500₽", rear_glass: "300₽", availability: "В наличии" },
        { name: "iPhone XR", original: "2300₽", copy: "1500₽", battery: "2500₽", rear_glass: "400₽", availability: "В наличии" },
        { name: "iPhone 8+", original: "1800₽", copy: "1500₽", battery: "1000₽", rear_glass: "300₽", availability: "В наличии" },
        { name: "iPhone 8/SE 2020", original: "1500₽", copy: "1100₽", battery: "800₽", rear_glass: "300₽", availability: "В наличии" }
      ]
    },
    {
      brand: "iPhone (классика)",
      icon: "Smartphone",
      color: "bg-gray-500",
      models: [
        { name: "iPhone 7+", original: "1500₽", copy: "1300₽", battery: "1000₽", rear_glass: "", availability: "В наличии" },
        { name: "iPhone 7", original: "1500₽", copy: "1100₽", battery: "800₽", rear_glass: "", availability: "В наличии" },
        { name: "iPhone 6s+", original: "1500₽", copy: "1100₽", battery: "800₽", rear_glass: "", availability: "В наличии" },
        { name: "iPhone 6s", original: "1200₽", copy: "1100₽", battery: "800₽", rear_glass: "", availability: "В наличии" },
        { name: "iPhone 6+", original: "1500₽", copy: "1300₽", battery: "800₽", rear_glass: "", availability: "В наличии" },
        { name: "iPhone 6", original: "1200₽", copy: "1000₽", battery: "800₽", rear_glass: "", availability: "В наличии" },
        { name: "iPhone 5s", original: "", copy: "", battery: "500₽", rear_glass: "", availability: "Под заказ" }
      ]
    },
    {
      brand: "Samsung Galaxy S",
      icon: "Smartphone",
      color: "bg-blue-600",
      models: [
        { name: "S23 Ultra", code: "", price: "21000 ₽", copy: "", availability: "В наличии" },
        { name: "S23+", code: "S916B", price: "14000 ₽", copy: "", availability: "В наличии" },
        { name: "S23", code: "S911B", price: "17000 ₽", copy: "", availability: "В наличии" },
        { name: "S22 Ultra", code: "S908B", price: "20000 ₽", copy: "", availability: "В наличии" },
        { name: "S22+", code: "S906B", price: "18000 ₽", copy: "", availability: "В наличии" },
        { name: "S22", code: "S906B", price: "17000 ₽", copy: "", availability: "В наличии" },
        { name: "S21 FE", code: "G990B", price: "11000 ₽", copy: "8000 ₽", availability: "В наличии" },
        { name: "S21 Ultra", code: "G998B", price: "17000 ₽", copy: "", availability: "В наличии" },
        { name: "S21+", code: "G996B", price: "12000 ₽", copy: "", availability: "В наличии" }
      ]
    },
    {
      brand: "Samsung Galaxy S (старые)",
      icon: "Smartphone",
      color: "bg-blue-700",
      models: [
        { name: "S21", code: "G991B", price: "15000 ₽", copy: "", availability: "В наличии" },
        { name: "S20 FE/S20 FE 5G", code: "G780F/G781B", price: "10000 ₽", copy: "5200 ₽", availability: "В наличии" },
        { name: "S20 Ultra", code: "G988B", price: "19000 ₽", copy: "", availability: "В наличии" },
        { name: "S20+", code: "G985F", price: "17000 ₽", copy: "", availability: "В наличии" },
        { name: "S10 Lite", code: "G770F", price: "14000 ₽", copy: "", availability: "В наличии" },
        { name: "S10+", code: "G075F", price: "19000 ₽", copy: "", availability: "В наличии" },
        { name: "S10", code: "G973F", price: "19500 ₽", copy: "", availability: "В наличии" },
        { name: "S10e", code: "G970F", price: "10000 ₽", copy: "", availability: "В наличии" },
        { name: "S9+", code: "G965F", price: "10000 ₽", copy: "", availability: "В наличии" }
      ]
    },
    {
      brand: "Samsung Galaxy A (топ)",
      icon: "Smartphone",
      color: "bg-green-600", 
      models: [
        { name: "A73", code: "А736 5G", price: "9500 ₽", copy: "", availability: "В наличии" },
        { name: "A72", code: "A72", price: "9000 ₽", copy: "", availability: "В наличии" },
        { name: "A71", code: "A715F", price: "8500 ₽", copy: "5500 ₽", availability: "В наличии" },
        { name: "A70", code: "A705F", price: "8300 ₽", copy: "5500 ₽", availability: "В наличии" },
        { name: "A54 5G", code: "A546E", price: "9000 ₽", copy: "5000 ₽", availability: "В наличии" },
        { name: "A53 5G", code: "A536B", price: "8500 ₽", copy: "5000 ₽", availability: "В наличии" },
        { name: "A52/A52 5G/A52s 5G", code: "A525F/A526B/A528B", price: "8000 ₽", copy: "5000 ₽", availability: "В наличии" },
        { name: "A51", code: "A515F", price: "7000 ₽", copy: "4600 ₽", availability: "В наличии" },
        { name: "A50", code: "A505F", price: "6800 ₽", copy: "", availability: "В наличии" }
      ]
    },
    {
      brand: "Samsung Galaxy A (средний)",
      icon: "Smartphone",
      color: "bg-green-700",
      models: [
        { name: "A41", code: "A415F", price: "6800 ₽", copy: "", availability: "В наличии" },
        { name: "A40", code: "A405F", price: "6800 ₽", copy: "", availability: "В наличии" },
        { name: "A34 5G", code: "A346B", price: "9000 ₽", copy: "", availability: "В наличии" },
        { name: "A33 5G", code: "A336B", price: "8500 ₽", copy: "4800 ₽", availability: "В наличии" },
        { name: "A32", code: "A325F", price: "6800 ₽", copy: "5000 ₽", availability: "В наличии" },
        { name: "A31", code: "A315F", price: "8500 ₽", copy: "5000 ₽", availability: "В наличии" },
        { name: "A30s", code: "A307F", price: "6800 ₽", copy: "", availability: "В наличии" },
        { name: "A30", code: "A305F", price: "6800 ₽", copy: "", availability: "В наличии" },
        { name: "A24", code: "A245F", price: "7800 ₽", copy: "", availability: "В наличии" }
      ]
    },
    {
      brand: "Samsung Galaxy A (младшие)",
      icon: "Smartphone",
      color: "bg-green-800",
      models: [
        { name: "A23", code: "A235F", price: "3400 ₽", copy: "", availability: "В наличии" },
        { name: "A22s 5G", code: "A226B", price: "3700 ₽", copy: "", availability: "В наличии" },
        { name: "A22", code: "A225F", price: "5800 ₽", copy: "", availability: "В наличии" },
        { name: "A21s", code: "A217F", price: "3700 ₽", copy: "", availability: "В наличии" },
        { name: "A20", code: "A205F", price: "6800 ₽", copy: "", availability: "В наличии" },
        { name: "A14", code: "A145F", price: "3700 ₽", copy: "", availability: "В наличии" },
        { name: "A13", code: "A135F/A137F", price: "3800 ₽", copy: "", availability: "В наличии" },
        { name: "A12", code: "A127F", price: "3500 ₽", copy: "", availability: "В наличии" },
        { name: "A11", code: "A115F", price: "3700 ₽", copy: "", availability: "В наличии" }
      ]
    },
    {
      brand: "Samsung Galaxy A (бюджет)",
      icon: "Smartphone",
      color: "bg-teal-700",
      models: [
        { name: "A10s", code: "A107F", price: "3600 ₽", copy: "", availability: "В наличии" },
        { name: "A10", code: "A105F", price: "3600 ₽", copy: "", availability: "В наличии" },
        { name: "A04s", code: "A047F", price: "4000 ₽", copy: "", availability: "В наличии" },
        { name: "A04", code: "A045F", price: "4000 ₽", copy: "", availability: "В наличии" },
        { name: "A03s", code: "A037F", price: "3700 ₽", copy: "", availability: "В наличии" },
        { name: "A03", code: "A035F", price: "3500 ₽", copy: "", availability: "В наличии" },
        { name: "A02s", code: "A025F", price: "3600 ₽", copy: "", availability: "В наличии" },
        { name: "A02", code: "A022G", price: "3600 ₽", copy: "", availability: "В наличии" },
        { name: "A01", code: "A015F", price: "3500 ₽", copy: "", availability: "В наличии" }
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
    },
    {
      brand: "iPhone замена экрана",
      icon: "Wrench",
      color: "bg-indigo-600",
      models: [
        { name: "iPhone 16 Pro Max", replacement: "7500₽", availability: "В наличии" },
        { name: "iPhone 16 Pro", replacement: "7000₽", availability: "В наличии" },
        { name: "iPhone 16", replacement: "7000₽", availability: "В наличии" },
        { name: "iPhone 15 Pro Max", replacement: "7000₽", availability: "В наличии" },
        { name: "iPhone 15 Pro", replacement: "6500₽", availability: "В наличии" },
        { name: "iPhone 15", replacement: "6000₽", availability: "В наличии" },
        { name: "iPhone 14 Pro Max", replacement: "6500₽", availability: "В наличии" },
        { name: "iPhone 14 Pro", replacement: "6000₽", availability: "В наличии" },
        { name: "iPhone 14 Plus", replacement: "6000₽", availability: "В наличии" }
      ]
    },
    {
      brand: "iPhone замена (средние)",
      icon: "Wrench",
      color: "bg-indigo-700",
      models: [
        { name: "iPhone 14", replacement: "5500₽", availability: "В наличии" },
        { name: "iPhone 13 Pro Max", replacement: "5000₽", availability: "В наличии" },
        { name: "iPhone 13 Pro", replacement: "4800₽", availability: "В наличии" },
        { name: "iPhone 13 mini", replacement: "4000₽", availability: "В наличии" },
        { name: "iPhone 13", replacement: "4000₽", availability: "В наличии" },
        { name: "iPhone 12 Pro Max", replacement: "4500₽", availability: "В наличии" },
        { name: "iPhone 12 Pro", replacement: "4000₽", availability: "В наличии" },
        { name: "iPhone 12", replacement: "3800₽", availability: "В наличии" },
        { name: "iPhone 12 mini", replacement: "3500₽", availability: "В наличии" }
      ]
    },
    {
      brand: "iPhone замена (старые)",
      icon: "Wrench",
      color: "bg-indigo-800",
      models: [
        { name: "iPhone 11 Pro Max", replacement: "4000₽", availability: "В наличии" },
        { name: "iPhone 11 Pro", replacement: "3500₽", availability: "В наличии" },
        { name: "iPhone 11", replacement: "3000₽", availability: "В наличии" },
        { name: "iPhone XS Max", replacement: "2800₽", availability: "В наличии" },
        { name: "iPhone XR", replacement: "2500₽", availability: "В наличии" },
        { name: "iPhone XS", replacement: "2500₽", availability: "В наличии" },
        { name: "iPhone X", replacement: "2500₽", availability: "В наличии" },
        { name: "iPhone 8 Plus", replacement: "2200₽", availability: "В наличии" },
        { name: "iPhone 8", replacement: "2000₽", availability: "В наличии" }
      ]
    },
    {
      brand: "Бюджетные экраны 2000₽",
      icon: "DollarSign",
      color: "bg-emerald-600",
      models: [
        { name: "Samsung A10/A10s", glass: "", display: "2000₽", availability: "В наличии" },
        { name: "Samsung A20/A30", glass: "", display: "2000₽", availability: "В наличии" },
        { name: "Samsung A21s/A22", glass: "", display: "2000₽", availability: "В наличии" },
        { name: "Samsung A12/A13", glass: "", display: "2000₽", availability: "В наличии" },
        { name: "Xiaomi Redmi 9/9A", glass: "", display: "2000₽", availability: "В наличии" },
        { name: "Xiaomi Redmi Note 8", glass: "", display: "2000₽", availability: "В наличии" },
        { name: "Huawei Y6/Y7", glass: "", display: "2000₽", availability: "В наличии" },
        { name: "Honor 8S/9S", glass: "", display: "2000₽", availability: "В наличии" },
        { name: "Realme C11/C15", glass: "", display: "2000₽", availability: "В наличии" }
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
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            {model.name}
                          </h4>
                          {(model as any).code && (
                            <p className="text-xs text-gray-500">{(model as any).code}</p>
                          )}
                        </div>
                        <Badge 
                          variant={model.availability === "В наличии" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {model.availability}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        {(model as any).original && (
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Оригинал:</span>
                            <span className="font-bold text-blue-600">{(model as any).original}</span>
                          </div>
                        )}
                        {(model as any).copy && (
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Копия:</span>
                            <span className="font-bold text-green-600">{(model as any).copy}</span>
                          </div>
                        )}
                        {(model as any).battery && (
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">АКБ:</span>
                            <span className="font-bold text-orange-600">{(model as any).battery}</span>
                          </div>
                        )}
                        {(model as any).rear_glass && (
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Стекло заднее:</span>
                            <span className="font-bold text-purple-600">{(model as any).rear_glass}</span>
                          </div>
                        )}
                        {(model as any).replacement && (
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Замена:</span>
                            <span className="font-bold text-indigo-600">{(model as any).replacement}</span>
                          </div>
                        )}
                        {(model as any).price && (
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Цена:</span>
                            <span className="font-bold text-blue-600">{(model as any).price}</span>
                          </div>
                        )}
                        {(model as any).glass && (
                          <>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-600">Стекло:</span>
                              <span className="font-bold text-green-600">{(model as any).glass}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-600">Дисплей:</span>
                              <span className="font-bold text-blue-600">{(model as any).display}</span>
                            </div>
                          </>
                        )}
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
                <li>• Гарантия на экраны - 1 месяц</li>
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
                <li>• Замена экрана за 2-3 часа</li>
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