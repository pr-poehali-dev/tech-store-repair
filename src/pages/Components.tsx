import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const components = [
  {
    id: 1,
    name: "AMD Ryzen 5 5600X",
    price: "18,500",
    oldPrice: "21,000",
    image: "/api/placeholder/300/250",
    specs: ["6 ядер / 12 потоков", "3.7 - 4.6 ГГц", "Socket AM4", "65W TDP"],
    badge: "Хит продаж",
    category: "Процессоры"
  },
  {
    id: 2,
    name: "NVIDIA GeForce RTX 4060",
    price: "32,000",
    oldPrice: null,
    image: "/api/placeholder/300/250",
    specs: ["8GB GDDR6", "DLSS 3.0", "Ray Tracing", "115W TGP"],
    badge: null,
    category: "Видеокарты"
  },
  {
    id: 3,
    name: "Kingston Fury Beast 16GB",
    price: "4,200",
    oldPrice: "4,800",
    image: "/api/placeholder/300/250",
    specs: ["DDR4-3200", "16GB (2x8GB)", "CL16", "1.35V"],
    badge: null,
    category: "Оперативная память"
  },
  {
    id: 4,
    name: "Samsung 980 PRO 1TB",
    price: "8,900",
    oldPrice: null,
    image: "/api/placeholder/300/250",
    specs: ["NVMe M.2", "7000 МБ/с чтение", "5000 МБ/с запись", "TLC V-NAND"],
    badge: "Рекомендуем",
    category: "Накопители"
  },
  {
    id: 5,
    name: "MSI B550M PRO-B",
    price: "6,500",
    oldPrice: "7,200",
    image: "/api/placeholder/300/250",
    specs: ["Socket AM4", "mATX", "DDR4-4400", "PCIe 4.0"],
    badge: null,
    category: "Материнские платы"
  },
  {
    id: 6,
    name: "Corsair CV650",
    price: "5,800",
    oldPrice: null,
    image: "/api/placeholder/300/250",
    specs: ["650W", "80+ Bronze", "ATX", "120mm вентилятор"],
    badge: null,
    category: "Блоки питания"
  },
  {
    id: 7,
    name: "Intel Core i5-12400F",
    price: "16,900",
    oldPrice: "18,500",
    image: "/api/placeholder/300/250",
    specs: ["6 ядер / 12 потоков", "2.5 - 4.4 ГГц", "Socket LGA1700", "65W TDP"],
    badge: "Новинка",
    category: "Процессоры"
  },
  {
    id: 8,
    name: "Noctua NH-U12S",
    price: "4,900",
    oldPrice: null,
    image: "/api/placeholder/300/250",
    specs: ["Tower", "120mm вентилятор", "Multi-Socket", "До 165W TDP"],
    badge: null,
    category: "Охлаждение"
  },
  {
    id: 9,
    name: "Fractal Design Core 1000",
    price: "3,200",
    oldPrice: null,
    image: "/api/placeholder/300/250",
    specs: ["Micro-ATX", "2 x USB 3.0", "Сталь", "Чёрный"],
    badge: null,
    category: "Корпуса"
  }
];

const categories = [
  "Все категории",
  "Процессоры", 
  "Видеокарты",
  "Материнские платы",
  "Оперативная память",
  "Накопители",
  "Блоки питания",
  "Охлаждение",
  "Корпуса"
];

export default function Components() {
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
              <h1 className="text-2xl font-bold text-gray-900">Каталог комплектующих</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Filter" size={16} className="mr-2" />
                Фильтры
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ArrowUpDown" size={16} className="mr-2" />
                Сортировка
              </Button>
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

      {/* Components Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component) => (
            <Card key={component.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img 
                  src={component.image} 
                  alt={component.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {component.badge && (
                  <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                    {component.badge}
                  </Badge>
                )}
                <Badge className="absolute top-3 right-3 bg-blue-500 text-white">
                  {component.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-2">{component.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  {component.specs.map((spec, index) => (
                    <div key={index} className="text-sm text-gray-600 flex items-center">
                      <Icon name="CheckCircle" size={12} className="mr-2 text-green-500" />
                      {spec}
                    </div>
                  ))}
                </div>
                
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-gray-900">
                    {component.price} ₽
                  </div>
                  {component.oldPrice && (
                    <div className="text-sm text-gray-500 line-through">
                      {component.oldPrice} ₽
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
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