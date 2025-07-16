import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const computers = [
  {
    id: 1,
    name: "Игровой ПК GeForce RTX 4060",
    price: "89,990",
    oldPrice: "99,990",
    image: "/api/placeholder/300/250",
    specs: ["Intel Core i5-12400F", "16GB DDR4", "RTX 4060 8GB", "1TB NVMe SSD"],
    badge: "Хит продаж"
  },
  {
    id: 2,
    name: "Офисный ПК Intel Core i3",
    price: "34,990",
    oldPrice: null,
    image: "/api/placeholder/300/250",
    specs: ["Intel Core i3-10100", "8GB DDR4", "Intel UHD 630", "500GB SSD"],
    badge: null
  },
  {
    id: 3,
    name: "Рабочая станция AMD Ryzen 7",
    price: "124,990",
    oldPrice: "134,990",
    image: "/api/placeholder/300/250",
    specs: ["AMD Ryzen 7 5700X", "32GB DDR4", "RTX 4070 12GB", "2TB NVMe SSD"],
    badge: "Новинка"
  },
  {
    id: 4,
    name: "Бюджетный ПК для дома",
    price: "24,990",
    oldPrice: null,
    image: "/api/placeholder/300/250",
    specs: ["AMD Ryzen 3 4100", "8GB DDR4", "Radeon Vega 8", "256GB SSD"],
    badge: null
  },
  {
    id: 5,
    name: "Мощный игровой ПК RTX 4070",
    price: "149,990",
    oldPrice: "164,990",
    image: "/api/placeholder/300/250",
    specs: ["Intel Core i7-12700F", "32GB DDR4", "RTX 4070 12GB", "1TB NVMe SSD"],
    badge: "Топ выбор"
  },
  {
    id: 6,
    name: "Компактный Mini-ITX",
    price: "67,990",
    oldPrice: null,
    image: "/api/placeholder/300/250",
    specs: ["AMD Ryzen 5 5600G", "16GB DDR4", "Radeon Vega 7", "512GB SSD"],
    badge: null
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
                
                <div className="flex items-center justify-between">
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
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Заказать
                  </Button>
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