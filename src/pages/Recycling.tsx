import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const recyclingItems = [
  {
    id: 1,
    name: "Компьютеры и системные блоки",
    price: "500-3000",
    image: "/api/placeholder/300/250",
    specs: ["Любые модели", "Рабочие и нерабочие", "Оценка по состоянию", "Выезд на дом"],
    badge: "Популярно",
    category: "Компьютеры"
  },
  {
    id: 2,
    name: "Ноутбуки",
    price: "800-5000",
    image: "/api/placeholder/300/250",
    specs: ["Любые бренды", "Разбитые экраны", "Не включающиеся", "Быстрая оценка"],
    badge: null,
    category: "Ноутбуки"
  },
  {
    id: 3,
    name: "Мониторы",
    price: "200-1500",
    image: "/api/placeholder/300/250",
    specs: ["ЖК и LED", "Любые диагонали", "Рабочие и битые", "Самовывоз"],
    badge: null,
    category: "Мониторы"
  },
  {
    id: 4,
    name: "Принтеры и МФУ",
    price: "300-2000",
    image: "/api/placeholder/300/250",
    specs: ["Лазерные и струйные", "Любое состояние", "Офисные и домашние", "Документы не нужны"],
    badge: null,
    category: "Принтеры"
  },
  {
    id: 5,
    name: "Телефоны и смартфоны",
    price: "1000-15000",
    image: "/api/placeholder/300/250",
    specs: ["iPhone и Android", "Разбитые и рабочие", "Любые модели", "Моментальная оценка"],
    badge: "Выгодно",
    category: "Телефоны"
  },
  {
    id: 6,
    name: "Комплектующие",
    price: "100-8000",
    image: "/api/placeholder/300/250",
    specs: ["Процессоры", "Видеокарты", "Оперативная память", "Материнские платы"],
    badge: null,
    category: "Комплектующие"
  },
  {
    id: 7,
    name: "Серверное оборудование",
    price: "2000-20000",
    image: "/api/placeholder/300/250",
    specs: ["Серверы", "Сетевое оборудование", "Системы хранения", "Промышленные ПК"],
    badge: "Дорого",
    category: "Серверы"
  },
  {
    id: 8,
    name: "Планшеты и электронные книги",
    price: "500-4000",
    image: "/api/placeholder/300/250",
    specs: ["iPad и Android", "Любое состояние", "Разбитые экраны", "Быстрый расчет"],
    badge: null,
    category: "Планшеты"
  }
];

const categories = [
  "Все категории",
  "Компьютеры",
  "Ноутбуки", 
  "Мониторы",
  "Принтеры",
  "Телефоны",
  "Комплектующие",
  "Серверы",
  "Планшеты"
];

export default function Recycling() {
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
              <h1 className="text-2xl font-bold text-gray-900">Выкуп техники под утилизацию</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Calculator" size={16} className="mr-2" />
                Калькулятор
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Phone" size={16} className="mr-2" />
                Вызвать оценщика
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-green-50 border-b border-green-200">
        <div className="container mx-auto px-4 py-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-full">
                <Icon name="Recycle" className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-green-800">Экологичная утилизация</h3>
                <p className="text-sm text-green-600">Соблюдаем все экологические стандарты</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Icon name="Banknote" className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-blue-800">Выгодные цены</h3>
                <p className="text-sm text-blue-600">Честная оценка и моментальный расчет</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 p-3 rounded-full">
                <Icon name="Truck" className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-purple-800">Бесплатный вывоз</h3>
                <p className="text-sm text-purple-600">Приедем и заберем технику сами</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recyclingItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.badge && (
                  <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                    {item.badge}
                  </Badge>
                )}
                <Badge className="absolute top-3 right-3 bg-blue-500 text-white">
                  {item.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-2">{item.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  {item.specs.map((spec, index) => (
                    <div key={index} className="text-sm text-gray-600 flex items-center">
                      <Icon name="CheckCircle" size={12} className="mr-2 text-green-500" />
                      {spec}
                    </div>
                  ))}
                </div>
                
                <div className="space-y-1">
                  <div className="text-sm text-gray-500">Цена выкупа:</div>
                  <div className="text-2xl font-bold text-green-600">
                    {item.price} ₽
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Звонок</h3>
              <p className="text-gray-600">Позвоните нам или оставьте заявку</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="User" className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Оценка</h3>
              <p className="text-gray-600">Специалист приедет и оценит технику</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Banknote" className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Оплата</h3>
              <p className="text-gray-600">Получите деньги сразу на месте</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Recycle" className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Утилизация</h3>
              <p className="text-gray-600">Техника отправляется на переработку</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center text-gray-600">
              <Icon name="Phone" size={20} className="mr-2 text-blue-600" />
              <span>+7 (924) 161-76-99</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Icon name="Clock" size={20} className="mr-2 text-blue-600" />
              <span>Пн-Сб: 10:00-19:00</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Icon name="MapPin" size={20} className="mr-2 text-blue-600" />
              <span>П. Алексеева, 17, ТЦ "Золотые ворота"</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}