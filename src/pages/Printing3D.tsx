import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const materials = [
  {
    id: 1,
    name: "PLA пластик",
    price: "15",
    unit: "₽/г",
    image: "/api/placeholder/300/250",
    specs: ["Экологичный", "Легко печатается", "Разные цвета", "Низкая температура"],
    badge: "Популярно",
    category: "Стандарт"
  },
  {
    id: 2,
    name: "ABS пластик",
    price: "18",
    unit: "₽/г",
    image: "/api/placeholder/300/250",
    specs: ["Прочный", "Термостойкий", "Гибкий", "Для функциональных деталей"],
    badge: null,
    category: "Стандарт"
  },
  {
    id: 3,
    name: "PETG пластик",
    price: "22",
    unit: "₽/г",
    image: "/api/placeholder/300/250",
    specs: ["Прозрачный", "Химически стойкий", "Пищевой", "Легко обрабатывается"],
    badge: null,
    category: "Стандарт"
  },
  {
    id: 4,
    name: "TPU (гибкий)",
    price: "35",
    unit: "₽/г",
    image: "/api/placeholder/300/250",
    specs: ["Эластичный", "Износостойкий", "Для чехлов", "Разные твердости"],
    badge: "Специальный",
    category: "Гибкий"
  },
  {
    id: 5,
    name: "Wood Fill",
    price: "28",
    unit: "₽/г",
    image: "/api/placeholder/300/250",
    specs: ["Имитация дерева", "Можно шлифовать", "Натуральный запах", "Под покраску"],
    badge: null,
    category: "Декоративный"
  },
  {
    id: 6,
    name: "Carbon Fiber",
    price: "45",
    unit: "₽/г",
    image: "/api/placeholder/300/250",
    specs: ["Углеволокно", "Сверхпрочный", "Легкий", "Для нагруженных деталей"],
    badge: "Премиум",
    category: "Композит"
  },
  {
    id: 7,
    name: "Metal Fill",
    price: "38",
    unit: "₽/г",
    image: "/api/placeholder/300/250",
    specs: ["Имитация металла", "Тяжелый", "Можно полировать", "Бронза/Медь/Сталь"],
    badge: null,
    category: "Декоративный"
  },
  {
    id: 8,
    name: "Прозрачный PETG",
    price: "25",
    unit: "₽/г",
    image: "/api/placeholder/300/250",
    specs: ["Кристально чистый", "Для оптики", "Высокая прозрачность", "Не желтеет"],
    badge: null,
    category: "Специальный"
  }
];

const services = [
  {
    id: 1,
    name: "Стандартная печать",
    price: "100",
    unit: "₽/час",
    description: "Качество 0.2мм, обычная скорость",
    features: ["PLA/ABS/PETG", "Размер до 220x220x250мм", "Стандартные настройки"]
  },
  {
    id: 2,
    name: "Высокое качество",
    price: "150",
    unit: "₽/час",
    description: "Качество 0.1мм, медленная печать",
    features: ["Мелкие детали", "Гладкая поверхность", "Точность ±0.1мм"]
  },
  {
    id: 3,
    name: "Быстрая печать",
    price: "80",
    unit: "₽/час",
    description: "Качество 0.3мм, высокая скорость",
    features: ["Прототипы", "Черновики", "Быстрый результат"]
  },
  {
    id: 4,
    name: "Постобработка",
    price: "200",
    unit: "₽/час",
    description: "Шлифовка, покраска, сборка",
    features: ["Удаление поддержек", "Шлифовка", "Покраска", "Склейка деталей"]
  }
];

const categories = [
  "Все материалы",
  "Стандарт",
  "Гибкий",
  "Декоративный",
  "Композит",
  "Специальный"
];

export default function Printing3D() {
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

      {/* Materials Grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Материалы для 3D печати</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {materials.map((material) => (
            <Card key={material.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img 
                  src={material.image} 
                  alt={material.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {material.badge && (
                  <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs">
                    {material.badge}
                  </Badge>
                )}
                <Badge className="absolute top-2 right-2 bg-blue-500 text-white text-xs">
                  {material.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{material.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  {material.specs.map((spec, index) => (
                    <div key={index} className="text-xs text-gray-600 flex items-center">
                      <Icon name="CheckCircle" size={10} className="mr-1 text-green-500" />
                      {spec}
                    </div>
                  ))}
                </div>
                
                <div className="text-center pt-2 border-t">
                  <div className="text-lg font-bold text-gray-900">
                    {material.price} {material.unit}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services */}
        <h2 className="text-2xl font-bold mb-6">Услуги печати</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
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
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="text-sm text-gray-600 flex items-center">
                      <Icon name="CheckCircle" size={12} className="mr-2 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
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
                Минимальный заказ - 200 рублей. Скидки при заказе от 2000 рублей.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold mb-4">Связаться с нами</h3>
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center text-gray-600">
              <Icon name="Phone" size={20} className="mr-2 text-blue-600" />
              <span className="whitespace-nowrap">+7 (924) 863-88-08</span>
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