import React from 'react';
import Icon from '@/components/ui/icon';

const Repair: React.FC = () => {
  const repairServices = [
    {
      category: "Ремонт телефонов",
      items: [
        { name: "Диагностика", price: "от 300₽" },
        { name: "Замена экрана (iPhone)", price: "от 3000₽" },
        { name: "Замена экрана (Android)", price: "от 2000₽" },
        { name: "Замена аккумулятора", price: "от 1500₽" },
        { name: "Ремонт разъема зарядки", price: "от 1800₽" },
        { name: "Замена камеры", price: "от 2500₽" },
        { name: "Ремонт после попадания воды", price: "от 2000₽" },
        { name: "Замена кнопок", price: "от 1200₽" },
        { name: "Ремонт динамика/микрофона", price: "от 1000₽" },
        { name: "Перепрошивка", price: "1500₽" }
      ]
    },
    {
      category: "Ремонт компьютеров",
      items: [
        { name: "Диагностика неисправностей", price: "от 500₽" },
        { name: "Чистка от пыли", price: "800₽" },
        { name: "Замена термопасты", price: "600₽" },
        { name: "Установка Windows", price: "1200₽" },
        { name: "Восстановление данных", price: "от 2000₽" },
        { name: "Ремонт материнской платы", price: "от 3000₽" },
        { name: "Замена блока питания", price: "от 1500₽" },
        { name: "Замена жесткого диска/SSD", price: "от 800₽" }
      ]
    },
    {
      category: "Ремонт мониторов",
      items: [
        { name: "Диагностика", price: "от 300₽" },
        { name: "Замена матрицы", price: "от 4000₽" },
        { name: "Ремонт блока питания", price: "от 2000₽" },
        { name: "Замена подсветки", price: "от 3000₽" },
        { name: "Ремонт разъемов", price: "от 800₽" },
        { name: "Настройка изображения", price: "500₽" }
      ]
    },
    {
      category: "Ремонт игровых приставок",
      items: [
        { name: "Диагностика PlayStation/Xbox", price: "от 500₽" },
        { name: "Замена жесткого диска", price: "от 1500₽" },
        { name: "Чистка от пыли", price: "1200₽" },
        { name: "Ремонт джойстиков", price: "от 1000₽" },
        { name: "Замена HDMI разъема", price: "от 2500₽" },
        { name: "Ремонт блока питания", price: "от 3000₽" },
        { name: "Прошивка приставки", price: "2000₽" },
        { name: "Замена привода дисков", price: "от 4000₽" }
      ]
    },
    {
      category: "Дополнительные услуги",
      items: [
        { name: "Настройка BIOS/UEFI", price: "800₽" },
        { name: "Установка драйверов", price: "500₽" },
        { name: "Настройка сети", price: "600₽" },
        { name: "Удаление вирусов", price: "1000₽" },
        { name: "Настройка офисных программ", price: "800₽" },
        { name: "Консультация", price: "300₽/час" },
        { name: "Выездная диагностика", price: "1500₽" },
        { name: "Срочный ремонт (в день обращения)", price: "+50% к стоимости" }
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ремонт компьютерной техники
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональный ремонт компьютеров и мониторов. 
            Быстро, качественно, с гарантией.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Быстрый ремонт</h3>
            <p className="text-gray-600">Большинство ремонтов выполняем в день обращения</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={24} className="text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Гарантия качества</h3>
            <p className="text-gray-600">Даем гарантию на все виды ремонта до 6 месяцев</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Wrench" size={24} className="text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Оригинальные запчасти</h3>
            <p className="text-gray-600">Используем только качественные комплектующие</p>
          </div>
        </div>

        {/* Price List */}
        <div className="grid lg:grid-cols-2 gap-8">
          {repairServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Icon name="Settings" size={24} className="text-blue-600 mr-3" />
                {service.category}
              </h2>
              <div className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700">{item.name}</span>
                    <span className="font-semibold text-blue-600">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mt-12">
          <h3 className="text-lg font-semibold text-amber-800 mb-3 flex items-center">
            <Icon name="AlertTriangle" size={20} className="mr-2" />
            Важная информация
          </h3>
          <ul className="text-amber-700 space-y-2">
            <li>• Диагностика входит в стоимость ремонта при его выполнении</li>
            <li>• Цены на запчасти рассчитываются индивидуально</li>
            <li>• Сроки ремонта зависят от сложности и наличия запчастей</li>
            <li>• При отказе от ремонта диагностика оплачивается отдельно</li>
            <li>• Гарантия не распространяется на механические повреждения</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Нужна помощь?</h2>
          <p className="text-blue-100 mb-6">
            Свяжитесь с нами для консультации или записи на ремонт
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={20} />
              <span className="text-lg font-semibold whitespace-nowrap">8 (924) 161-76-99</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} />
              <span>Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://wa.me/79241617699" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-green-400 hover:text-green-300">
                <Icon name="MessageCircle" size={18} />
                <span>WhatsApp</span>
              </a>
              <a href="https://t.me/+79241617699" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-blue-400 hover:text-blue-300">
                <Icon name="Send" size={18} />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Enter14</h3>
              <p className="text-gray-300">Компьютеры, комплектующие, 3D печать и ремонт техники</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="text-gray-300 space-y-2">
                <li><a href="/catalog" className="hover:text-white transition-colors">Компьютеры</a></li>
                <li><a href="/components" className="hover:text-white transition-colors">Комплектующие</a></li>
                <li><a href="/recycling" className="hover:text-white transition-colors">Выкуп техники</a></li>
                <li><a href="/3d-printing" className="hover:text-white transition-colors">3D печать</a></li>
                <li><a href="/repair" className="hover:text-white transition-colors">Ремонт</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="text-gray-300 space-y-2">
                <p className="whitespace-nowrap">8 (924) 161-76-99</p>
                <p>info@enter14.ru</p>
                <p>г. Якутск, ул. П. Алексеева, 17</p>
                <div className="flex gap-2 mt-2">
                  <a href="https://wa.me/79241617699" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                    <Icon name="MessageCircle" size={16} className="inline mr-1" />
                    WA
                  </a>
                  <a href="https://t.me/+79241617699" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    <Icon name="Send" size={16} className="inline mr-1" />
                    TG
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="text-gray-300 space-y-2">
                <p>Пн-Пт: 9:00-18:00</p>
                <p>Сб: 10:00-16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Repair;