import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const recyclingItems = [
  {
    id: 1,
    name: "Материнские платы",
    price: "150-1200",
    image: "/api/placeholder/300/250",
    specs: ["Socket 1151/1200/AM4", "Любое состояние", "Рабочие и нерабочие", "Оценка по чипсету"],
    badge: "Популярно",
    category: "Платы"
  },
  {
    id: 2,
    name: "Процессоры Intel",
    price: "800-8000",
    image: "/api/placeholder/300/250",
    specs: ["Core i3/i5/i7/i9", "Любые поколения", "Рабочие и нерабочие", "Высокая цена за золото"],
    badge: "Выгодно",
    category: "Процессоры"
  },
  {
    id: 3,
    name: "Процессоры AMD",
    price: "500-6000",
    image: "/api/placeholder/300/250",
    specs: ["Ryzen/FX/Athlon", "Любые серии", "Керамические корпуса", "Содержат драгметаллы"],
    badge: null,
    category: "Процессоры"
  },
  {
    id: 4,
    name: "Оперативная память",
    price: "50-300",
    image: "/api/placeholder/300/250",
    specs: ["DDR2/DDR3/DDR4", "Любые объемы", "Серверная и обычная", "Цена за планку"],
    badge: null,
    category: "Память"
  },
  {
    id: 5,
    name: "Видеокарты",
    price: "200-5000",
    image: "/api/placeholder/300/250",
    specs: ["NVIDIA/AMD", "Игровые и профессиональные", "Рабочие и нерабочие", "Высокое содержание золота"],
    badge: "Дорого",
    category: "Видеокарты"
  },
  {
    id: 6,
    name: "Телекоммуникационные платы",
    price: "300-2000",
    image: "/api/placeholder/300/250",
    specs: ["Сетевые карты", "Модемы", "Роутеры", "Промышленное оборудование"],
    badge: null,
    category: "Телеком"
  },
  {
    id: 7,
    name: "Серверные платы",
    price: "1000-8000",
    image: "/api/placeholder/300/250",
    specs: ["Системные платы серверов", "Контроллеры RAID", "Сетевые карты", "Высокая концентрация металлов"],
    badge: "Дорого",
    category: "Серверы"
  },
  {
    id: 8,
    name: "Жесткие диски",
    price: "80-500",
    image: "/api/placeholder/300/250",
    specs: ["HDD любых объемов", "Рабочие и нерабочие", "Содержат редкоземельные металлы", "Конфиденциальность гарантируем"],
    badge: null,
    category: "Накопители"
  },
  {
    id: 9,
    name: "Блоки питания",
    price: "100-800",
    image: "/api/placeholder/300/250",
    specs: ["Любые мощности", "Серверные и обычные", "Трансформаторы", "Содержат медь"],
    badge: null,
    category: "Блоки питания"
  },
  {
    id: 10,
    name: "Мобильные телефоны",
    price: "200-12000",
    image: "/api/placeholder/300/250",
    specs: ["iPhone/Android", "Разбитые и рабочие", "Высокая концентрация золота", "Быстрая оценка"],
    badge: "Выгодно",
    category: "Телефоны"
  },
  {
    id: 11,
    name: "Планшеты",
    price: "300-4000",
    image: "/api/placeholder/300/250",
    specs: ["iPad/Android планшеты", "Любое состояние", "Разбитые экраны", "Содержат драгметаллы"],
    badge: null,
    category: "Планшеты"
  },
  {
    id: 12,
    name: "Серверы целиком",
    price: "5000-50000",
    image: "/api/placeholder/300/250",
    specs: ["Стоечные серверы", "Blade-серверы", "Промышленные компьютеры", "Максимальная цена"],
    badge: "Дорого",
    category: "Серверы"
  }
];

const categories = [
  "Все категории",
  "Платы",
  "Процессоры", 
  "Видеокарты",
  "Память",
  "Накопители",
  "Блоки питания",
  "Телефоны",
  "Серверы",
  "Телеком"
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
                <Icon name="ShieldCheck" className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-purple-800">Надежность</h3>
                <p className="text-sm text-purple-600">Работаем официально и безопасно</p>
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