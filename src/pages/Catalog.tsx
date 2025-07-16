import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 13 Pro",
      category: "Телефоны",
      price: 65000,
      oldPrice: 75000,
      image: "/img/9ca558a4-ccc4-4564-a64f-f0ef3edf3c33.jpg",
      condition: "Отличное",
      badge: "ХИТ"
    },
    {
      id: 2,
      name: "Gaming PC RTX 3070",
      category: "Компьютеры",
      price: 85000,
      oldPrice: 95000,
      image: "/img/59365b21-cde8-4320-a182-81b959f8c8ad.jpg",
      condition: "Хорошее",
      badge: "СКИДКА"
    },
    {
      id: 3,
      name: "MacBook Pro M1",
      category: "Ноутбуки",
      price: 120000,
      oldPrice: 140000,
      image: "/img/82a2f8b5-e1f9-4201-8aa2-d1faebdd2302.jpg",
      condition: "Отличное",
      badge: "ТОП"
    },
    {
      id: 4,
      name: "Samsung Galaxy S22",
      category: "Телефоны",
      price: 45000,
      oldPrice: 55000,
      image: "/img/9ca558a4-ccc4-4564-a64f-f0ef3edf3c33.jpg",
      condition: "Хорошее",
      badge: "НОВИНКА"
    },
    {
      id: 5,
      name: "Office PC i5",
      category: "Компьютеры",
      price: 35000,
      oldPrice: 42000,
      image: "/img/59365b21-cde8-4320-a182-81b959f8c8ad.jpg",
      condition: "Отличное",
      badge: null
    },
    {
      id: 6,
      name: "iPad Pro 11",
      category: "Планшеты",
      price: 55000,
      oldPrice: 65000,
      image: "/img/82a2f8b5-e1f9-4201-8aa2-d1faebdd2302.jpg",
      condition: "Хорошее",
      badge: "СКИДКА"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center space-x-2">
                <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                  ENTER<span className="text-yellow-400">14</span>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-medium">Сервисный центр</div>
                  <div className="text-xs">и комиссионный магазин</div>
                </div>
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Главная</a>
              <a href="/catalog" className="text-blue-600 font-medium">Каталог</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Ремонт</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Search" size={16} className="mr-2" />
                Поиск
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-blue-600 hover:text-blue-800">Главная</a>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">Каталог</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Каталог товаров</h1>
            <p className="text-xl">Комиссионные товары с гарантией качества</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-4 items-center">
            <h3 className="font-medium text-gray-700">Категории:</h3>
            <Button variant="outline" size="sm" className="bg-blue-50 border-blue-200 text-blue-600">
              Все товары
            </Button>
            <Button variant="outline" size="sm">
              Телефоны
            </Button>
            <Button variant="outline" size="sm">
              Компьютеры
            </Button>
            <Button variant="outline" size="sm">
              Ноутбуки
            </Button>
            <Button variant="outline" size="sm">
              Планшеты
            </Button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-square bg-white flex items-center justify-center p-8">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  {product.badge && (
                    <Badge className={`text-white ${
                      product.badge === 'ХИТ' ? 'bg-red-500' :
                      product.badge === 'СКИДКА' ? 'bg-green-500' :
                      product.badge === 'ТОП' ? 'bg-purple-500' :
                      'bg-blue-500'
                    }`}>
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>
                  Состояние: <span className="font-medium text-green-600">{product.condition}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">{product.price.toLocaleString()}₽</span>
                    <div className="text-sm text-gray-500 line-through">{product.oldPrice.toLocaleString()}₽</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                    <Button size="sm" variant="outline">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold">
                  ENTER<span className="text-yellow-400">14</span>
                </div>
              </div>
              <p className="text-gray-400">Сервисный центр и комиссионный магазин в Якутске</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Телефоны</a></li>
                <li><a href="#" className="hover:text-white">Компьютеры</a></li>
                <li><a href="#" className="hover:text-white">Ноутбуки</a></li>
                <li><a href="#" className="hover:text-white">Планшеты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Ремонт телефонов</a></li>
                <li><a href="#" className="hover:text-white">Ремонт компьютеров</a></li>
                <li><a href="#" className="hover:text-white">Выкуп техники</a></li>
                <li><a href="#" className="hover:text-white">Диагностика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>+7 (4112) 50-14-14</div>
                <div>г. Якутск, ул. Лермонтова, 124</div>
                <div>enter14@mail.ru</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ENTER14. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;