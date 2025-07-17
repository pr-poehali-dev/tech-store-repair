import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const laptops = [
  {
    id: 1,
    name: "MacBook Air M2",
    brand: "Apple",
    price: "89990",
    originalPrice: "99990",
    image: "/api/placeholder/300/250",
    specs: ["Apple M2", "8GB RAM", "256GB SSD", "13.6\" Retina"],
    badge: "Хит продаж",
    category: "Премиум",
    inStock: true
  },
  {
    id: 2,
    name: "ThinkPad X1 Carbon Gen 11",
    brand: "Lenovo",
    price: "134990",
    originalPrice: null,
    image: "/api/placeholder/300/250",
    specs: ["Intel i7-1365U", "16GB RAM", "512GB SSD", "14\" WUXGA"],
    badge: "Бизнес",
    category: "Премиум",
    inStock: true
  },
  {
    id: 3,
    name: "ASUS VivoBook 15",
    brand: "ASUS",
    price: "45990",
    originalPrice: "52990",
    image: "/api/placeholder/300/250",
    specs: ["AMD Ryzen 5", "8GB RAM", "512GB SSD", "15.6\" FHD"],
    badge: "Скидка",
    category: "Средний",
    inStock: true
  },
  {
    id: 4,
    name: "HP Pavilion Gaming",
    brand: "HP",
    price: "67990",
    originalPrice: null,
    image: "/api/placeholder/300/250",
    specs: ["Intel i5-12500H", "16GB RAM", "512GB SSD", "GeForce GTX 1650"],
    badge: "Игровой",
    category: "Игровой",
    inStock: false
  },
  {
    id: 5,
    name: "Dell Inspiron 3511",
    brand: "Dell",
    price: "38990",
    originalPrice: "44990",
    image: "/api/placeholder/300/250",
    specs: ["Intel i3-1115G4", "4GB RAM", "256GB SSD", "15.6\" HD"],
    badge: null,
    category: "Бюджетный",
    inStock: true
  },
  {
    id: 6,
    name: "MacBook Pro 14 M3",
    brand: "Apple",
    price: "189990",
    originalPrice: null,
    image: "/api/placeholder/300/250",
    specs: ["Apple M3 Pro", "18GB RAM", "512GB SSD", "14.2\" Liquid Retina XDR"],
    badge: "Новинка",
    category: "Премиум",
    inStock: true
  },
  {
    id: 7,
    name: "Acer Nitro 5",
    brand: "Acer",
    price: "72990",
    originalPrice: "79990",
    image: "/api/placeholder/300/250",
    specs: ["AMD Ryzen 7", "16GB RAM", "512GB SSD", "GeForce RTX 3060"],
    badge: "Игровой",
    category: "Игровой",
    inStock: true
  },
  {
    id: 8,
    name: "Surface Laptop 5",
    brand: "Microsoft",
    price: "89990",
    originalPrice: null,
    image: "/api/placeholder/300/250",
    specs: ["Intel i5-1235U", "8GB RAM", "256GB SSD", "13.5\" PixelSense"],
    badge: null,
    category: "Премиум",
    inStock: true
  }
];

const categories = [
  "Все ноутбуки",
  "Бюджетный",
  "Средний", 
  "Премиум",
  "Игровой"
];

const brands = [
  "Все бренды",
  "Apple",
  "Lenovo",
  "ASUS",
  "HP",
  "Dell",
  "Acer",
  "Microsoft"
];

export default function Laptops() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все ноутбуки');
  const [selectedBrand, setSelectedBrand] = useState('Все бренды');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const filteredLaptops = laptops.filter(laptop => {
    const matchesSearch = laptop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         laptop.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         laptop.specs.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'Все ноутбуки' || laptop.category === selectedCategory;
    const matchesBrand = selectedBrand === 'Все бренды' || laptop.brand === selectedBrand;
    return matchesSearch && matchesCategory && matchesBrand;
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
              <h1 className="text-2xl font-bold text-gray-900">Каталог ноутбуков</h1>
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
                <Icon name="Filter" size={16} className="mr-2" />
                Фильтры
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
                  placeholder="Поиск ноутбуков..."
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

      {/* Categories and Brands */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="space-y-3">
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
            <div className="flex gap-2 overflow-x-auto">
              {brands.map((brand) => (
                <Button
                  key={brand}
                  variant={selectedBrand === brand ? "default" : "outline"}
                  size="sm"
                  className="whitespace-nowrap"
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Laptops Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Найдено: {filteredLaptops.length} ноутбуков</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Сортировать:</span>
            <Button variant="outline" size="sm">
              По цене
              <Icon name="ChevronDown" size={14} className="ml-1" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLaptops.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-500">
              <Icon name="Laptop" size={48} className="mx-auto mb-4 text-gray-300" />
              <p className="text-lg mb-2">Ноутбуки не найдены</p>
              <p className="text-sm">Попробуйте изменить поисковый запрос или фильтры</p>
            </div>
          ) : (
            filteredLaptops.map((laptop) => (
              <Card key={laptop.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={laptop.image} 
                    alt={laptop.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {laptop.badge && (
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs">
                      {laptop.badge}
                    </Badge>
                  )}
                  {!laptop.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <Badge className="bg-gray-800 text-white">
                        Нет в наличии
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-1">
                    <Badge variant="outline" className="text-xs">
                      {laptop.brand}
                    </Badge>
                    <Badge 
                      className={`text-xs ${
                        laptop.category === 'Премиум' ? 'bg-purple-100 text-purple-800' :
                        laptop.category === 'Игровой' ? 'bg-orange-100 text-orange-800' :
                        laptop.category === 'Средний' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}
                    >
                      {laptop.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-base leading-tight">{laptop.name}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="space-y-1">
                    {laptop.specs.map((spec, index) => (
                      <div key={index} className="text-xs text-gray-600 flex items-center">
                        <Icon name="CheckCircle" size={10} className="mr-1 text-green-500 flex-shrink-0" />
                        {spec}
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 pt-2 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        {laptop.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {laptop.originalPrice} ₽
                          </span>
                        )}
                        <div className="text-lg font-bold text-gray-900">
                          {laptop.price} ₽
                        </div>
                      </div>
                      {laptop.originalPrice && (
                        <Badge className="bg-red-100 text-red-800 text-xs">
                          -{Math.round((1 - parseInt(laptop.price) / parseInt(laptop.originalPrice)) * 100)}%
                        </Badge>
                      )}
                    </div>
                    
                    <Button 
                      className="w-full" 
                      disabled={!laptop.inStock}
                      variant={laptop.inStock ? "default" : "outline"}
                    >
                      {laptop.inStock ? (
                        <>
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          В корзину
                        </>
                      ) : (
                        <>
                          <Icon name="Clock" size={16} className="mr-2" />
                          Уведомить о поступлении
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center text-gray-600">
              <Icon name="Clock" size={20} className="mr-2 text-blue-600" />
              <span>Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Icon name="MapPin" size={20} className="mr-2 text-blue-600" />
              <span>г. Якутск, ул. П. Алексеева, 17</span>
            </div>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center text-gray-600">
                <Icon name="Phone" size={20} className="mr-2 text-blue-600" />
                <span className="whitespace-nowrap">8 (924) 161-76-99</span>
              </div>
              <a 
                href="https://wa.me/79241617699" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-green-600 hover:text-green-700 transition-colors"
              >
                <Icon name="MessageCircle" size={20} className="mr-1" />
                WhatsApp
              </a>
              <a 
                href="https://t.me/+79241617699" 
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