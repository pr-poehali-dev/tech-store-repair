import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const computers = [
  {
    id: 1,
    name: "ПГМК Ryzen 5 3600",
    price: "75,000",
    oldPrice: "82,000",
    image: "/api/placeholder/300/250",
    specs: ["AMD Ryzen 5 3600", "16GB DDR4", "GTX 1660 Super", "500GB SSD"],
    badge: "Хит продаж"
  },
  {
    id: 2,
    name: "Офисный ПК Intel i3",
    price: "45,000",
    oldPrice: null,
    image: "/api/placeholder/300/250",
    specs: ["Intel Core i3-10100", "8GB DDR4", "Intel UHD 630", "256GB SSD"],
    badge: null
  },
  {
    id: 3,
    name: "Игровой ПК Ryzen 7",
    price: "95,000",
    oldPrice: "105,000",
    image: "/api/placeholder/300/250",
    specs: ["AMD Ryzen 7 3700X", "32GB DDR4", "RTX 3060 Ti", "1TB NVMe SSD"],
    badge: "Рекомендуем"
  },
  {
    id: 4,
    name: "Бюджетный ПК для дома",
    price: "35,000",
    oldPrice: null,
    image: "/api/placeholder/300/250",
    specs: ["AMD Ryzen 3 3200G", "8GB DDR4", "Radeon Vega 8", "250GB SSD"],
    badge: null
  },
  {
    id: 5,
    name: "Мощная рабочая станция",
    price: "125,000",
    oldPrice: "138,000",
    image: "/api/placeholder/300/250",
    specs: ["Intel Core i7-11700K", "32GB DDR4", "RTX 3070", "1TB NVMe SSD"],
    badge: "Топ выбор"
  },
  {
    id: 6,
    name: "Компактный Mini-ITX",
    price: "55,000",
    oldPrice: null,
    image: "/api/placeholder/300/250",
    specs: ["AMD Ryzen 5 5600G", "16GB DDR4", "Radeon Vega 7", "512GB SSD"],
    badge: null
  },
  {
    id: 7,
    name: "Сервер для малого бизнеса",
    price: "85,000",
    oldPrice: null,
    image: "/api/placeholder/300/250",
    specs: ["Intel Xeon E-2224", "32GB ECC DDR4", "Intel UHD P630", "2TB HDD"],
    badge: null
  },
  {
    id: 8,
    name: "Студийный ПК для монтажа",
    price: "110,000",
    oldPrice: "120,000",
    image: "/api/placeholder/300/250",
    specs: ["AMD Ryzen 9 5900X", "64GB DDR4", "RTX 4060", "2TB NVMe SSD"],
    badge: "Новинка"
  }
];

export default function Catalog() {
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
              <h1 className="text-2xl font-bold text-gray-900">Каталог компьютеров</h1>
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

      {/* Catalog Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {computers.map((computer) => (
            <Card key={computer.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img 
                  src={computer.image} 
                  alt={computer.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {computer.badge && (
                  <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                    {computer.badge}
                  </Badge>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-2">{computer.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  {computer.specs.map((spec, index) => (
                    <div key={index} className="text-sm text-gray-600 flex items-center">
                      <Icon name="CheckCircle" size={12} className="mr-2 text-green-500" />
                      {spec}
                    </div>
                  ))}
                </div>
                
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-gray-900">
                    {computer.price} ₽
                  </div>
                  {computer.oldPrice && (
                    <div className="text-sm text-gray-500 line-through">
                      {computer.oldPrice} ₽
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