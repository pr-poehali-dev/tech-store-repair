import React from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PhoneRepair = () => {
  const repairServices = [
    {
      name: "Диагностика",
      price: "300₽",
      description: "Полная диагностика неисправностей телефона"
    },
    {
      name: "Замена батареи",
      price: "от 1500₽",
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

  const screenPrices = [
    {
      brand: "iPhone",
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
      color: "bg-orange-500",
      models: [
        { name: "Xiaomi 13 Pro", glass: "2800₽", display: "4900₽", availability: "В наличии" },
        { name: "Xiaomi 13", glass: "2500₽", display: "4300₽", availability: "В наличии" },
        { name: "Xiaomi 12", glass: "2400₽", display: "4200₽", availability: "В наличии" },
        { name: "Redmi Note 12 Pro", glass: "1800₽", display: "3200₽", availability: "В наличии" },
        { name: "Redmi Note 12", glass: "1600₽", display: "2900₽", availability: "В наличии" },
        { name: "Redmi Note 11", glass: "1500₽", display: "2600₽", availability: "В наличии" },
        { name: "Redmi 12C", glass: "1200₽", display: "2100₽", availability: "В наличии" },
        { name: "POCO X5 Pro", glass: "1600₽", display: "2900₽", availability: "Под заказ" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      {/* Hero Section */}
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
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              <Icon name="Phone" size={20} className="mr-2" />
              Записаться на ремонт
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Быстрый ремонт</h3>
              <p className="text-gray-600">30-60 минут на замену экрана</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Гарантия 6 месяцев</h3>
              <p className="text-gray-600">На все виды ремонтных работ</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Оригинальные детали</h3>
              <p className="text-gray-600">Качественные запчасти и экраны</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Опытные мастера</h3>
              <p className="text-gray-600">Более 5 лет опыта ремонта</p>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Цены на ремонтные работы
            </h2>
            <p className="text-lg text-gray-600">
              Стоимость работ по ремонту телефонов (без учета запчастей)
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
        </div>
      </section>

      {/* Screen Prices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Цены на экраны телефонов
            </h2>
            <p className="text-lg text-gray-600">
              Стоимость замены стекла и дисплея для популярных моделей
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {screenPrices.map((brand, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`${brand.color} p-3 rounded-lg`}>
                      <Icon name="Smartphone" className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
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
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Стекло:</span>
                            <span className="font-bold text-green-600">{model.glass}</span>
                          </div>
                          <div className="flex justify-between text-sm">
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
        </div>
      </section>

      {/* Important Info */}
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

      {/* Contact */}
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

      {/* Footer */}
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
    </div>
  );
};

export default PhoneRepair;