import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const materials = [
  {
    id: 1,
    name: "Инженерный пластик (FDM)",
    priceSmall: "20",
    priceLarge: "15",
    unit: "руб/гр",
    description: "Этот тип пластика подходит в основном для технических целей, когда необходима прочность и стойкость к агрессивным средам. Например корпуса, шестерёнки.",
    category: "FDM",
    technology: "FDM"
  },
  {
    id: 2,
    name: "Обычный пластик (FDM)",
    priceSmall: "15",
    priceLarge: "10",
    unit: "руб/гр",
    description: "",
    category: "FDM",
    technology: "FDM"
  },
  {
    id: 3,
    name: "Фотополимерный пластик (SLA)",
    priceSmall: "25",
    priceLarge: "20",
    unit: "руб/мл",
    description: "Этот тип пластика подходит для художественных и детализированных моделей. Например, фигура человека, дома и пр.",
    category: "SLA",
    technology: "SLA"
  }
];

const additionalServices = [
  {
    id: 1,
    name: "3D-моделирование",
    price: "от 500",
    unit: "руб",
    description: "Создание 3D модели по чертежам с размерами. Редактирование сканированной модели"
  },
  {
    id: 2,
    name: "Обработка детали",
    price: "от 100",
    unit: "руб",
    description: "Зависит от объёма работы. Обработка включает в себя склеивание, шлифовка и установка деталей"
  },
  {
    id: 3,
    name: "Выезд на замер",
    price: "от 500",
    unit: "руб",
    description: "Зависит от отдалённости и сложности замеров"
  },
  {
    id: 4,
    name: "Сканирование",
    price: "от 1000",
    unit: "руб",
    description: "Сканирование объекта без обработки"
  }
];

const categories = [
  "Все материалы",
  "FDM",
  "SLA"
];

export default function Printing3D() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все материалы');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Все материалы' || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Прайс на 3D печать</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsSearchVisible(!isSearchVisible)}
              >
                <Icon name="Search" size={16} className="mr-2" />
                Поиск
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Calculator" size={16} className="mr-2" />
                Калькулятор
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="FileText" size={16} className="mr-2" />
                Скачать прайс
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchVisible && (
        <div className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Icon name="Search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Поиск материалов..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                {searchTerm && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                  >
                    <Icon name="X" size={12} />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Info Banner */}
      <div className="bg-blue-50 border-b border-blue-200">
        <div className="container mx-auto px-4 py-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Icon name="Printer" className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-blue-800">Профессиональное оборудование</h3>
                <p className="text-sm text-blue-600">Принтеры Prusa, Ultimaker, Bambu Lab</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-full">
                <Icon name="Zap" className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-green-800">Быстрое изготовление</h3>
                <p className="text-sm text-green-600">От 30 минут до 24 часов</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 p-3 rounded-full">
                <Icon name="Palette" className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-purple-800">Широкий выбор материалов</h3>
                <p className="text-sm text-purple-600">Более 20 видов пластика</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Materials Categories */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className="whitespace-nowrap"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Materials List */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Материалы для 3D печати</h2>
        <div className="space-y-4 mb-12">
          {filteredMaterials.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Icon name="Search" size={48} className="mx-auto mb-4 text-gray-300" />
              <p>Материалы не найдены</p>
              <p className="text-sm">Попробуйте изменить поисковый запрос или категорию</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredMaterials.map((material) => (
                <Card key={material.id} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{material.name}</h3>
                      <Badge className="mt-2 bg-blue-100 text-blue-800">{material.technology}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">
                        {material.technology === 'SLA' ? 'Цена до 99 мл' : 'Цена до 99 гр'}
                      </div>
                      <div className="text-lg font-bold">{material.priceSmall} {material.unit}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {material.technology === 'SLA' ? 'Цена от 100 мл' : 'Цена от 100 гр'}
                      </div>
                      <div className="text-lg font-bold">{material.priceLarge} {material.unit}</div>
                    </div>
                  </div>
                  {material.description && (
                    <p className="text-gray-700">{material.description}</p>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Additional Services */}
        <h2 className="text-2xl font-bold mb-6">Дополнительные услуги</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {additionalServices.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-blue-600">{service.price} {service.unit}</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Pricing Info */}
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-800">Важная информация о ценах</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-2">
              <Icon name="Info" size={16} className="text-amber-600 mt-0.5" />
              <p className="text-sm text-amber-800">
                Цены указаны за грамм материала. Итоговая стоимость рассчитывается по весу готового изделия.
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <Icon name="Clock" size={16} className="text-amber-600 mt-0.5" />
              <p className="text-sm text-amber-800">
                Время печати зависит от сложности модели, размера и качества печати.
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <Icon name="AlertCircle" size={16} className="text-amber-600 mt-0.5" />
              <p className="text-sm text-amber-800">
                Минимальный заказ - 800 рублей.
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <Icon name="Calculator" size={16} className="text-amber-600 mt-0.5" />
              <p className="text-sm text-amber-800">
                Если хотите узнать примерную стоимость детали, то можете взвешать вашу деталь на весах и умножить на стоимость услуги + проектировка 500 руб.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Examples Gallery */}
        <h2 className="text-2xl font-bold mb-6 mt-12">Примеры готовых работ</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="overflow-hidden">
            <img 
              src="/img/2994435b-e428-4033-a3ec-86da8deabc34.jpg" 
              alt="Инженерные детали FDM печать"
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Технические детали (FDM)</h3>
              <p className="text-sm text-gray-600">Корпуса, шестерни, функциональные компоненты из инженерного пластика</p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <img 
              src="/img/6aa6eab8-3ac7-4605-bc41-e3e01438b6a3.jpg" 
              alt="Детализированные модели SLA печать"
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Художественные модели (SLA)</h3>
              <p className="text-sm text-gray-600">Миниатюры, архитектурные макеты, высокодетализированные изделия</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <img 
              src="/img/a4f507ee-0eae-47fa-8b68-8b184b7c4cfa.jpg" 
              alt="Фигурки SLA печать"
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Фигурки (SLA)</h3>
              <p className="text-sm text-gray-600">Коллекционные фигурки, игровые миниатюры с высокой детализацией</p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <img 
              src="/img/afa97ecc-5e20-44b9-9a39-e75f46514fff.jpg" 
              alt="Прототипы и обработка"
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Прототипы и обработка</h3>
              <p className="text-sm text-gray-600">Примеры до и после постобработки, готовые изделия</p>
            </CardContent>
          </Card>
        </div>

        {/* Materials Description */}
        <h2 className="text-2xl font-bold mb-6 mt-12">Описание пластиков для 3D печати</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">PLA</h3>
            <p className="text-gray-700 text-sm mb-3">
              Биоразлагаемый пластик на основе кукурузного крахмала. Самый популярный материал для начинающих.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Низкая температура печати (190-220°C)</li>
              <li>• Экологичный и безопасный</li>
              <li>• Легко печатается, минимум деформаций</li>
              <li>• Широкая палитра цветов</li>
              <li>• Хрупкий при низких температурах</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-red-600">ABS</h3>
            <p className="text-gray-700 text-sm mb-3">
              Прочный термопластик, используемый в автомобильной промышленности и производстве игрушек (LEGO).
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Высокая прочность и гибкость</li>
              <li>• Термостойкость до 80°C</li>
              <li>• Химическая стойкость</li>
              <li>• Можно сваривать ацетоном</li>
              <li>• Требует подогрев стола и закрытую камеру</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-green-600">PETG</h3>
            <p className="text-gray-700 text-sm mb-3">
              Модифицированный PET с добавлением гликоля. Сочетает простоту печати PLA с прочностью ABS.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Прозрачность и блеск</li>
              <li>• Химическая стойкость</li>
              <li>• Пищевая безопасность</li>
              <li>• Легко печатается без деформаций</li>
              <li>• Хорошая ударопрочность</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-600">TPU</h3>
            <p className="text-gray-700 text-sm mb-3">
              Термопластичный полиуретан. Гибкий материал для печати эластичных изделий.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Высокая эластичность и гибкость</li>
              <li>• Износостойкость</li>
              <li>• Химическая стойкость</li>
              <li>• Разные степени жесткости (Shore A)</li>
              <li>• Медленная печать, требует настройки</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">PA6-CF</h3>
            <p className="text-gray-700 text-sm mb-3">
              Нейлон 6 с углеволокном. Композитный материал для высоконагруженных деталей.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Исключительная прочность</li>
              <li>• Легкий вес</li>
              <li>• Высокая жесткость</li>
              <li>• Термостойкость до 150°C</li>
              <li>• Требует специальное сопло</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-amber-600">NYLON</h3>
            <p className="text-gray-700 text-sm mb-3">
              Полиамид. Инженерный пластик с отличными механическими свойствами.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Высокая прочность на разрыв</li>
              <li>• Отличная износостойкость</li>
              <li>• Химическая стойкость</li>
              <li>• Низкий коэффициент трения</li>
              <li>• Требует сушку перед печатью</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center text-gray-600">
              <Icon name="Clock" size={20} className="mr-2 text-blue-600" />
              <span>Пн-Сб: 10:00-19:00</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Icon name="MapPin" size={20} className="mr-2 text-blue-600" />
              <span>П. Алексеева, 17, ТЦ "Золотые ворота"</span>
            </div>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center text-gray-600">
                <Icon name="Phone" size={20} className="mr-2 text-blue-600" />
                <span className="whitespace-nowrap">+7 (924) 863-88-08</span>
              </div>
              <a 
                href="https://wa.me/79248638808" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-green-600 hover:text-green-700 transition-colors"
              >
                <Icon name="MessageCircle" size={20} className="mr-1" />
                WhatsApp
              </a>
              <a 
                href="https://t.me/stl3d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 hover:text-blue-600 transition-colors"
              >
                <Icon name="Send" size={20} className="mr-1" />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}