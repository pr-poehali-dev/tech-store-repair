import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PhoneRepairServices = () => {
  const repairServices = [
    {
      name: "Диагностика",
      price: "Бесплатно",
      description: "Полная диагностика неисправностей телефона"
    },
    {
      name: "Замена батареи",
      price: "от 3500₽",
      description: "Замена аккумулятора на оригинальный или качественный аналог"
    },
    {
      name: "Ремонт разъема зарядки",
      price: "от 1800₽",
      description: "Замена разъема micro-USB, USB-C или Lightning"
    },
    {
      name: "Замена динамика/микрофона",
      price: "от 1000₽",
      description: "Восстановление звука и качества связи"
    },
    {
      name: "Замена кнопок",
      price: "от 1200₽",
      description: "Ремонт кнопок включения, громкости, Home"
    },
    {
      name: "Замена камеры",
      price: "от 2500₽",
      description: "Замена основной или фронтальной камеры"
    },
    {
      name: "Ремонт после воды",
      price: "от 2000₽",
      description: "Восстановление после попадания жидкости"
    },
    {
      name: "Перепрошивка",
      price: "1500₽",
      description: "Восстановление программного обеспечения"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Цены на ремонтные работы
          </h2>
          <p className="text-lg text-gray-600">
            Стоимость работ по ремонту телефонов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {repairServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-gray-900">{service.name}</CardTitle>
                <div className="text-2xl font-bold text-green-600">{service.price}</div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Важная информация</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-lg p-4">
              <div className="text-blue-600 font-semibold mb-2">Диагностика бесплатно</div>
              <p className="text-sm text-gray-600">Диагностика входит в стоимость ремонта</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-green-600 font-semibold mb-2">Цены с запчастями</div>
              <p className="text-sm text-gray-600">Цены указаны с учетом запчастей</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-orange-600 font-semibold mb-2">Сроки ремонта</div>
              <p className="text-sm text-gray-600">Сроки зависят от наличия деталей</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneRepairServices;